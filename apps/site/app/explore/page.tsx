"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import ProductList from "@/modules/products";
import { Input } from "@/components/ui/input";
import PriceRangeSelector from "@/components/PriceRangeSelector";
import { Header } from "@/components/Header";
import { UserDropdown } from "@/components/UserDropdown";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

type Filters = {
  search: string;
  sortBy: string;
  sortOrder: string;
  grade: string;
  origin: string;
};

function ExplorePage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize filters from URL query parameters.
  const initialFilters: Filters = {
    search: searchParams.get("search") || "",
    sortBy: searchParams.get("sortBy") || "",
    sortOrder: searchParams.get("sortOrder") || "",
    grade: searchParams.get("grade") || "",
    origin: searchParams.get("origin") || "",
  };

  // Price range: slider internally uses numbers, but API expects strings.
  const defaultMin = 0;
  const defaultMax = 10000;

  const initialMinPrice = searchParams.get("minPrice")
    ? Number(searchParams.get("minPrice"))
    : defaultMin;
  const initialMaxPrice = searchParams.get("maxPrice")
    ? Number(searchParams.get("maxPrice"))
    : defaultMax;

  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [priceRange, setPriceRange] = useState<number[]>([
    initialMinPrice,
    initialMaxPrice,
  ]);

  // Update URL query parameters on filters change.
  useEffect(() => {
    const query = new URLSearchParams();

    // Set top bar filters and sidebar text filters.
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        query.set(key, value);
      }
    });

    // Set price filters even if they are default.
    if (priceRange[0] !== defaultMin) {
      query.set("minPrice", priceRange[0].toString());
    }
    if (priceRange[1] !== defaultMax) {
      query.set("maxPrice", priceRange[1].toString());
    }

    // Set pagination defaults.
    query.set("offset", "0");
    query.set("limit", "10");

    router.push("/explore?" + query.toString());
  }, [filters, priceRange, router]);

  // Handle change for top bar (search and sort) filters.
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Reset all filters to their default values.
  const resetFilters = () => {
    setFilters({
      search: "",
      sortBy: "",
      sortOrder: "",
      grade: "",
      origin: "",
    });
    setPriceRange([defaultMin, defaultMax]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 pt-4">
        <div className="mx-auto px-4">
          {/* Filters Section */}
          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <div className="grid grid-cols-8 gap-4">
              <div className="col-span-2">
                <Input
                  type="text"
                  name="search"
                  value={filters.search}
                  onChange={handleChange}
                  placeholder="Search products..."
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="grade"
                  value={filters.grade}
                  onChange={handleChange}
                  placeholder="Grade"
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="origin"
                  value={filters.origin}
                  onChange={handleChange}
                  placeholder="Origin"
                  className="w-full"
                />
              </div>

              <div>
                <select
                  name="sortBy"
                  value={filters.sortBy}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Sort By</option>
                  <option value="price">Price</option>
                  <option value="createdAt">Created Date</option>
                  <option value="name">Name</option>
                </select>
              </div>
              <div>
                <select
                  name="sortOrder"
                  value={filters.sortOrder}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Order</option>
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              </div>

              <PriceRangeSelector
                value={[
                  priceRange[0],
                  priceRange[1] === defaultMax ? null : priceRange[1],
                ]}
                onChange={(range) =>
                  setPriceRange([
                    range[0],
                    range[1] === null ? defaultMax : range[1],
                  ])
                }
              />
              <Button onClick={resetFilters} variant="outline">
                Reset Filters
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex gap-4">
            <div className="flex-1 min-w-0 overflow-hidden">
              <ProductList
                search={filters.search}
                grade={filters.grade}
                origin={filters.origin}
                sortBy={filters.sortBy}
                sortOrder={filters.sortOrder}
                minPrice={priceRange[0].toString()}
                maxPrice={priceRange[1].toString()}
                offset="0"
                limit="10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExplorePage;
