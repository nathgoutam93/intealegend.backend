import { initQueryClient } from "@ts-rest/react-query";
import { contract } from "@intealegend/api-contract";
import { useAuthStore } from "./stores/auth.store";

const client = initQueryClient(contract, {
  baseUrl: "",
  baseHeaders: {
    Authorization: () => `Bearer ${useAuthStore.getState().accessToken}`,
  },
});

export default client;
