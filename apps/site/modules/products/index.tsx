"use client";

import React from "react";
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

type Props = {
  search: string;
  sortBy: string;
  sortOrder: string;
  minPrice: string;
  maxPrice: string;
  offset: string;
  limit: string;
};

function ProductList({
  search,
  sortBy,
  sortOrder,
  minPrice,
  maxPrice,
  offset,
  limit,
}: Props) {
  const { data, isLoading } = client.buyers.getProducts.useQuery([
    "products",
    {
      search,
      sortBy,
      sortOrder,
      minPrice,
      maxPrice,
      offset,
      limit,
    },
  ]);

  const addToCart = useCartStore((state) => state.addItem);

  const handleAddToCart = (product: any) => {
    const mbp = product.mbp || 1; // Default to 1 if MBP is not present
    addToCart({
      id: product.id.toString(),
      mark: product.brandMark.name,
      grade: product.grade,
      pricePerKg: product.pricePerUnit,
      weightPerPkg: product.weightPerUnit,
      sampleWeight: product.sampleWeight,
      quantity: mbp,
      mbp: mbp,
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (!data || data.status !== 200) return <div>Something went wrong</div>;

  return (
    <div className="">
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Mark</TableHead>
              <TableHead>Inv No.</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Wt/pkg</TableHead>
              <TableHead>Sample Wt</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>MBP</TableHead>
              <TableHead className="text-right">Price/kg (₹)</TableHead>
              <TableHead className="text-right"></TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Origin</TableHead>
              <TableHead>Production</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.body.map((product) => (
              <TableRow
                key={product.id}
                className="cursor-pointer hover:bg-muted/50"
              >
                <TableCell className="font-medium">
                  <span>
                    IIL{new Date(product.createdAt).getFullYear()}
                    {new Date(product.createdAt)
                      .getMonth()
                      .toString()
                      .padStart(2, "0")}
                    {product.id.toString().padStart(6, "0")}
                  </span>
                </TableCell>
                <TableCell>{product.brandMark.name}</TableCell>
                <TableCell>{product.invoiceNo}</TableCell>
                <TableCell>{product.grade}</TableCell>
                <TableCell>{product.weightPerUnit} kg</TableCell>
                <TableCell>{product.sampleWeight} kg</TableCell>
                <TableCell>{product.score.toFixed(1)}</TableCell>
                <TableCell>{product.mbp}</TableCell>
                <TableCell className="text-right">
                  {product.pricePerUnit.toLocaleString("en-IN")}
                </TableCell>
                <TableCell className="text-right">
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
                <TableCell>{product.location}</TableCell>
                <TableCell>{product.origin}</TableCell>
                <TableCell>
                  {new Date(product.productionMonth).toLocaleString("en-IN", {
                    month: "short",
                    year: "numeric",
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default ProductList;
