import React from "react";
import UsersList from "@/modules/users";
import { GetUsers } from "@/lib/data";
import ProductList from "@/modules/products";

async function ExplorePage() {
  return (
    <>
      <ProductList />
    </>
  );
}

export default ExplorePage;
