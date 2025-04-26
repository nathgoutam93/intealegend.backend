import React from "react";
import ProductList from "@/modules/products";
import { Header } from "@/components/Header";

function ExplorePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 pt-4">
        <div className="mx-auto px-4">
          <div className="flex gap-4">
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExplorePage;
