import { initQueryClient } from "@ts-rest/react-query";
import { contract } from "@intealegend/api-contract";

const client = initQueryClient(contract, {
  baseUrl: "",
  baseHeaders: {},
});

export default client;
