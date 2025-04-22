"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import ProductList from "@/modules/products";
import { Input } from "@/components/ui/input";
import PriceRangeSelector from "@/components/PriceRangeSelector";
import { Header } from "@/components/Header";

type Filters = {
  search: string;
  sort: string;
};

function ExplorePage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize filters from URL query parameters.
  const initialFilters: Filters = {
    search: searchParams.get("search") || "",
    sort: searchParams.get("sort") || "",
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
      sort: "",
    });
    setPriceRange([defaultMin, defaultMax]);
  };

  // Map sort values to sortBy and sortOrder
  const getSortParams = (sort: string) => {
    switch (sort) {
      case "price_asc":
        return { sortBy: "price", sortOrder: "asc" };
      case "price_desc":
        return { sortBy: "price", sortOrder: "desc" };
      case "newest":
        return { sortBy: "productionMonth", sortOrder: "desc" };
      case "oldest":
        return { sortBy: "productionMonth", sortOrder: "asc" };
      case "popularity":
        return { sortBy: "score", sortOrder: "desc" };
      default:
        return { sortBy: "", sortOrder: "" };
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 pt-4">
        <div className="mx-auto px-4">
          {/* Filters Section */}
          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-2">
                <Input
                  type="text"
                  name="search"
                  value={filters.search}
                  onChange={handleChange}
                  placeholder="Search brand mark"
                  className="w-full"
                />
              </div>

              <div>
                <select
                  name="sort"
                  value={filters.sort}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Sort By</option>
                  <option value="price_asc">Price -- Low to High</option>
                  <option value="price_desc">Price -- High to Low</option>
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="popularity">Popularity</option>
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
                {...getSortParams(filters.sort)}
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
