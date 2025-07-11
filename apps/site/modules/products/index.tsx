"use client";

import React, { useCallback, useEffect, useState } from "react";
import { client } from "@/lib/api-client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";
import { ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipProvider } from "@/components/ui/tooltip";
import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import { CartSummary } from "@/components/CartSummary";
import { formatProductId } from "@/lib/utils";

type Props = {};

function ProductList({}: Props) {
  const [searchText, setSearchText] = useState("");
  const [gradeText, setGradeText] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState(searchText);
  const [debouncedGradeText, setDebouncedGradeText] = useState(gradeText);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | undefined>(
    undefined
  );
  const [offset, setOffset] = useState(0);
  const limit = 10;

  // Debounce the search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchText(searchText);
      // Update URL params only after debounce
      const params = new URLSearchParams(window.location.search);
      if (searchText) {
        params.set("search", searchText);
      } else {
        params.delete("search");
      }
      window.history.replaceState({}, "", `?${params.toString()}`);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchText]);

  // Debounce the grade input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedGradeText(gradeText);
      // Update URL params only after debounce
      const params = new URLSearchParams(window.location.search);
      if (gradeText) {
        params.set("grade", gradeText);
      } else {
        params.delete("grade");
      }
      window.history.replaceState({}, "", `?${params.toString()}`);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [gradeText]);

  // Handle sort and pagination URL updates
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (sortOrder) {
      params.set("sortOrder", sortOrder);
    } else {
      params.delete("sortOrder");
    }
    if (offset) {
      params.set("offset", offset.toString());
    } else {
      params.delete("offset");
    }
    window.history.replaceState({}, "", `?${params.toString()}`);
  }, [sortOrder, offset]);

  const { data, isLoading } = client.buyers.getProducts.useQuery(
    [
      "products",
      {
        search: debouncedSearchText,
        grade: debouncedGradeText,
        sortBy: sortOrder ? "price" : undefined,
        sortOrder,
        offset: offset.toString(),
        limit: limit.toString(),
      },
    ],
    {
      query: {
        search: debouncedSearchText,
        grade: debouncedGradeText,
        sortBy: sortOrder ? "price" : undefined,
        sortOrder,
        offset: offset.toString(),
        limit: limit.toString(),
      },
    }
  );

  const addToCart = useCartStore((state) => state.addItem);

  const handleAddToCart = (product: any) => {
    const mbp = product.mbp || 1;
    const maxAvailableWeight =
      product.quantity * product.weightPerUnit - Number(product.sampleWeight);

    const existingCartItem = useCartStore
      .getState()
      .items.find((item) => item.id === product.id.toString());
    const currentCartWeight = existingCartItem?.totalWeight || 0;

    if (currentCartWeight >= maxAvailableWeight) {
      alert("Cannot add more of this item - maximum available weight reached");
      return;
    }

    addToCart({
      id: product.id.toString(),
      mark: product.brandMark.name,
      productionMonth: product.productionMonth,
      grade: product.grade,
      pricePerKg: product.pricePerUnit,
      weightPerPkg: product.weightPerUnit,
      quantity: mbp,
      mbp: mbp,
      maxAvailableWeight: maxAvailableWeight,
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (!data || data.status !== 200) return <div>Something went wrong</div>;

  return (
    <>
      <div className="p-8">
        {/* Filters and Search */}
        <div className="flex gap-4 mb-6">
          <Input
            placeholder="Search Mark..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="max-w-sm"
          />
          <Input
            placeholder="Search Grade..."
            value={gradeText}
            onChange={(e) => setGradeText(e.target.value)}
            className="max-w-sm"
          />
        </div>

        <div className="h-[40vh] overflow-y-scroll shadow-sm">
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-left">ID</TableHead>
                  <TableHead className="text-center">Mark</TableHead>
                  <TableHead className="whitespace-nowrap text-center">
                    Invoice No.
                  </TableHead>
                  <TableHead className="text-center">Grade</TableHead>
                  <TableHead className="text-center">Pkgs</TableHead>
                  <TableHead className="text-center">Wt/Pkg</TableHead>
                  <TableHead className="text-center">Sample</TableHead>
                  <TableHead className="whitespace-nowrap text-center">
                    Total Wt.
                  </TableHead>
                  <TableHead className="text-center">Score</TableHead>
                  <TableHead className="text-center">
                    <Button
                      variant="ghost"
                      onClick={() => {
                        // cycle undefined → asc → desc → undefined
                        setSortOrder(
                          sortOrder === undefined
                            ? "asc"
                            : sortOrder === "asc"
                              ? "desc"
                              : undefined
                        );
                      }}
                      className="flex items-center gap-1"
                    >
                      Price/Kg (₹)
                      <ChevronDown
                        className="h-4 w-4"
                        // visually indicate state
                        style={{
                          opacity: sortOrder ? 1 : 0.5,
                          transform:
                            sortOrder === "asc"
                              ? "rotate(180deg)"
                              : sortOrder === "desc"
                                ? "rotate(0deg)"
                                : "none",
                        }}
                      />
                    </Button>
                  </TableHead>
                  <TableHead className="text-center">MBP</TableHead>
                  <TableHead className="text-center"></TableHead>
                  <TableHead className="text-center">Location</TableHead>
                  <TableHead className="text-center">Origin</TableHead>
                  <TableHead className="text-right">Production</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.body.data.map((product) => (
                  <TableRow
                    key={product.id}
                    className="cursor-pointer hover:bg-muted/50"
                  >
                    <TableCell className="font-medium text-left">
                      <span>
                        {formatProductId(
                          product.id.toString(),
                          product.productionMonth
                        )}
                      </span>
                    </TableCell>

                    <TableCell className="text-center">
                      {product.brandMark.name}
                    </TableCell>
                    <TableCell className="text-center">
                      {product.invoiceNo}
                    </TableCell>
                    <TableCell className="text-center">
                      {product.grade}
                    </TableCell>
                    <TableCell className="text-center">
                      {product.quantity}
                    </TableCell>
                    <TableCell className="text-center">
                      {product.weightPerUnit} kg
                    </TableCell>
                    <TableCell className="text-center">
                      {product.sampleWeight} kg
                    </TableCell>
                    <TableCell className="text-center">
                      {product.quantity * product.weightPerUnit -
                        Number(product.sampleWeight)}{" "}
                      kg
                    </TableCell>
                    <TableCell className="text-center">
                      <TooltipProvider delayDuration={200}>
                        <Tooltip>
                          <TooltipTrigger>
                            {product.tasteScore +
                              product.liquorScore +
                              product.infusionScore +
                              product.gradingScore +
                              product.volumeScore +
                              product.appearanceScore}
                          </TooltipTrigger>
                          <TooltipContent>
                            <div className="p-1 bg-black text-white text-xs">
                              <p>Taste: {product.tasteScore}</p>
                              <p>Liquor: {product.liquorScore}</p>
                              <p>Infusion: {product.infusionScore}</p>
                              <p>Grading: {product.gradingScore}</p>
                              <p>Volume: {product.volumeScore}</p>
                              <p>Appearance: {product.appearanceScore}</p>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </TableCell>
                    <TableCell className="text-center">
                      {product.pricePerUnit.toLocaleString("en-IN")}
                    </TableCell>
                    <TableCell className="text-center">{product.mbp}</TableCell>
                    <TableCell className="text-center">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(product);
                        }}
                      >
                        Add to Cart
                      </Button>
                    </TableCell>

                    <TableCell className="text-xs text-center">
                      {product.location}
                    </TableCell>
                    <TableCell className="text-xs text-center">
                      {product.origin}
                    </TableCell>
                    <TableCell className="text-xs text-right">
                      {new Date(product.productionMonth).toLocaleString(
                        "en-IN",
                        {
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-muted-foreground">
            Showing {offset + 1} to {Math.min(offset + limit, data.body.total)}{" "}
            of {data.body.total} products
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setOffset(Math.max(0, offset - limit))}
              disabled={offset === 0}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              onClick={() => setOffset(offset + limit)}
              disabled={offset + limit >= data.body.total}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="h-[40vh] overflow-y-scroll shadow-sm">
          <CartSummary />
        </div>
      </div>
    </>
  );
}

export default ProductList;
