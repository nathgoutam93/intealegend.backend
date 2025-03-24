"use client";

const queryClient = new QueryClient();

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

type Props = {};

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
