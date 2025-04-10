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

type Props = {
  search: string;
  grade: string;
  origin: string;
  sortBy: string;
  sortOrder: string;
  minPrice: string;
  maxPrice: string;
  offset: string;
  limit: string;
};

function ProductList({
  search,
  grade,
  origin,
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
      grade,
      origin,
      sortBy,
      sortOrder,
      minPrice,
      maxPrice,
      offset,
      limit,
    },
  ]);

  // Mutation hook for adding a product to the cart.
  const addToCartMutation = client.buyers.addToCart.useMutation();

  const handleAddToCart = (productId: number) => {
    // Convert productId to string as required by the CartItem schema
    addToCartMutation.mutate({
      body: {
        productId: productId.toString(),
        quantity: 1,
      },
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (!data || data.status !== 200) return <div>Something went wrong</div>;

  return (
    <div className="p-8">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Available Products</h1>
      </div>
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Invoice No.</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Production</TableHead>
              <TableHead>Origin</TableHead>
              <TableHead>Weight/Unit</TableHead>
              <TableHead>Score</TableHead>
              <TableHead className="text-right">Price/Unit (₹)</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.body.map((product) => (
              <TableRow
                key={product.id}
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => {
                  window.location.href = `/app/products/${product.id}`;
                }}
              >
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.invoiceNo}</TableCell>
                <TableCell>{product.grade}</TableCell>
                <TableCell>
                  {new Date(product.productionMonth).toLocaleDateString(
                    "en-US",
                    { month: "short", year: "numeric" }
                  )}
                </TableCell>
                <TableCell>{product.origin}</TableCell>
                <TableCell>{product.weightPerUnit} kg</TableCell>
                <TableCell>{product.score}</TableCell>
                <TableCell className="text-right">
                  {product.pricePerUnit.toLocaleString("en-IN")}
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    onClick={(e) => {
                      // Prevent row click event from firing.
                      e.stopPropagation();
                      handleAddToCart(product.id);
                    }}
                    size="sm"
                  >
                    Add to Cart
                  </Button>
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
