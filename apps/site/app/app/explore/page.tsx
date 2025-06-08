"use client";

import React from "react";
import ProductList from "@/modules/products";
import { Header } from "@/components/Header";
import { useAuthStore } from "@/store/auth.store";

function ExplorePage() {
  const { user } = useAuthStore();

  return (
    <div className="min-h-screen flex flex-col">
      <Header>
        <p className="">Welcome {user?.profile.businessName}</p>
      </Header>
      <div className="flex-1 pt-4">
        <div className="mx-auto">
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default ExplorePage;
