import React from "react";
import ProductList from "@/modules/products";
import { Header } from "@/components/Header";
import { CartSummary } from "@/components/CartSummary";

function ExplorePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 pt-4">
        <div className="mx-auto">
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default ExplorePage;
