import { serverClient } from "../api-client";

export const GetUsers = async () => {
  return serverClient.users.findAll();
};
