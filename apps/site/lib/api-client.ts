import { initClient } from "@ts-rest/core";
import { initQueryClient } from "@ts-rest/react-query";
import { contract } from "@intealegend/api-contract";
import { useAuthStore } from "@/store/auth.store";

export const serverClient = initClient(contract, {
  baseUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000",
  baseHeaders: {},
});

export const client = initQueryClient(contract, {
  baseUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000",
  baseHeaders: {
    Authorization: () => `Bearer ${useAuthStore.getState().accessToken}`,
  },
});
