import React from "react";
import UsersList from "@/modules/users";
import { GetUsers } from "@/lib/data";

async function ExplorePage() {
  return (
    <>
      <div>
        <UsersList />
      </div>
    </>
  );
}

export default ExplorePage;
