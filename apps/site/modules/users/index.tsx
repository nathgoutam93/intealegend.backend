"use client";

import { client } from "@/lib/api-client";

type Props = {};

function UsersList({}: Props) {
  const { data, isLoading } = client.users.findAll.useQuery(["users"]);

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>No Data</div>;

  return (
    <>
      {data.body.data.map((user) => (
        <div>{user.email}</div>
      ))}
    </>
  );
}

export default UsersList;
