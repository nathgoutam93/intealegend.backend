import { initQueryClient } from "@ts-rest/react-query";
import { contract } from "@intealegend/api-contract";
import { useAuthStore } from "./stores/auth.store";

const customFetch = async (input: RequestInfo, init?: RequestInit) => {
  const response = await fetch(input, init);

  if (response.status === 401) {
    const refreshToken = useAuthStore.getState().refreshToken;
    if (refreshToken) {
      const refreshResp = await fetch(`/auth/refresh`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken }),
      });

      if (refreshResp.ok) {
        const { accessToken, refreshToken } = await refreshResp.json();

        useAuthStore.setState({
          accessToken: accessToken,
          refreshToken: refreshToken,
        });

        return fetch(input, {
          ...init,
          headers: { ...init?.headers, Authorization: `Bearer ${accessToken}` },
        });
      }
    }

    useAuthStore.setState({
      accessToken: null,
      refreshToken: null,
      user: null,
    });
  }

  return response;
};

const client = initQueryClient(contract, {
  baseUrl: "",
  baseHeaders: {
    Authorization: () => `Bearer ${useAuthStore.getState().accessToken}`,
  },
  baseFetch: customFetch,
});

export default client;
