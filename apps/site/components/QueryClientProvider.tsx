"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { client } from "@/lib/api-client";
import { useAuthStore } from "@/store/auth.store";

type Props = {};

let refreshTokenPromise: Promise<void> | null = null;

async function refreshToken() {
  // If there's already a refresh in progress, wait for it
  if (refreshTokenPromise) {
    return refreshTokenPromise;
  }

  console.log("here we call refresh");

  // Create new refresh token promise
  refreshTokenPromise = (async () => {
    try {
      const res = await client.auth.refreshToken.mutation({
        body: {
          refresh: useAuthStore.getState().refreshToken ?? "",
        },
      });

      if (res.status === 200) {
        useAuthStore.setState({
          accessToken: res.body.accessToken,
          refreshToken: res.body.refreshToken,
        });
        window.location.reload();
      } else {
        throw new Error("token expired");
      }
    } catch (e) {
      useAuthStore.getState().clearAuth();
      window.location.reload();
      throw new Error("token expired");
    } finally {
      refreshTokenPromise = null;
    }
  })();

  return refreshTokenPromise;
}

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: async (error: any) => {
        console.error("Global query error:", error);
        if (["invalid token", "jwt expired"].includes(error?.message)) {
          await refreshToken();
        }
      },
    },
  },
});

queryClient.getQueryCache().subscribe(() => {
  // You can inspect all queries here
  const queries = queryClient
    .getQueryCache()
    .getAll()
    .filter((q) => q.state.status === "error");

  for (const query of queries) {
    const error = query.state.error;
    console.error("Global query error:", error);

    if (
      error &&
      (error as any).body &&
      ["invalid token", "jwt expired"].includes(error?.message)
    ) {
      refreshToken().catch((e) => console.error(e));
    }
  }
});

function TanstackQueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default TanstackQueryClientProvider;
