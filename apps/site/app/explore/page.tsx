"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import ProductList from "@/modules/products";
import { Input } from "@/components/ui/input";
import PriceRangeSelector from "@/components/PriceRangeSelector";

type Filters = {
  search: string;
  sortBy: string;
  sortOrder: string;
  grade: string;
  origin: string;
};

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="/assets/images/logo.png"
            alt="Logo"
            className="h-8 w-auto"
          />
        </div>
        {/* Search Bar */}
        <div className="flex-1 mx-4">
          <Input placeholder="Search products..." />
        </div>
        {/* Account and Cart */}
        <div className="flex items-center space-x-4">
          <button className="btn">Account</button>
          <button className="btn">Cart</button>
        </div>
      </div>
    </header>
  );
}

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
  const handleTopChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle change for sidebar text inputs (grade, origin).
  const handleSideChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
      {/* Main section including aside filters and product list */}
      <div className="flex flex-1 pt-4">
        {/* Sidebar for Additional Filters */}
        <aside className="w-64 p-4 border-r">
          <h2 className="text-lg font-bold mb-4">Filters</h2>

          {/* Grade Filter */}
          <div className="mb-4">
            <label htmlFor="grade" className="block text-sm font-medium">
              Grade
            </label>
            <input
              type="text"
              id="grade"
              name="grade"
              value={filters.grade}
              onChange={handleSideChange}
              className="input mt-1 block w-full"
              placeholder="Enter grade"
            />
          </div>

          {/* Origin Filter */}
          <div className="mb-4">
            <label htmlFor="origin" className="block text-sm font-medium">
              Origin
            </label>
            <input
              type="text"
              id="origin"
              name="origin"
              value={filters.origin}
              onChange={handleSideChange}
              className="input mt-1 block w-full"
              placeholder="Enter origin"
            />
          </div>

          {/* Price Range Filter with Slider and Inputs */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Price Range (₹)
            </label>
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
          </div>

          <Button onClick={resetFilters}>Reset Filters</Button>
        </aside>

        {/* Main Content with Product List */}
        <main className="flex-1 p-4">
          {/* Top Bar with Search and Sort Filters (for products) */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex-1">
              <input
                type="text"
                name="search"
                placeholder="Search products..."
                value={filters.search}
                onChange={handleTopChange}
                className="input w-full"
              />
            </div>
            <div className="flex space-x-4 ml-4">
              <div>
                <label htmlFor="sortBy" className="sr-only">
                  Sort By
                </label>
                <select
                  id="sortBy"
                  name="sortBy"
                  value={filters.sortBy}
                  onChange={handleTopChange}
                  className="input"
                >
                  <option value="">Sort By</option>
                  <option value="price">Price</option>
                  <option value="createdAt">Created Date</option>
                  <option value="name">Name</option>
                </select>
              </div>
              <div>
                <label htmlFor="sortOrder" className="sr-only">
                  Sort Order
                </label>
                <select
                  id="sortOrder"
                  name="sortOrder"
                  value={filters.sortOrder}
                  onChange={handleTopChange}
                  className="input"
                >
                  <option value="">Order</option>
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              </div>
            </div>
          </div>

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
        </main>
      </div>
    </div>
  );
}

export default ExplorePage;
