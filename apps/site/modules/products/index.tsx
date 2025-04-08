"use client";

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
import Link from "next/link";

type Props = {};

function ProductList({}: Props) {
  const { data, isLoading } = client.buyers.getProducts.useQuery(["products"]);

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
              <TableHead>Mark</TableHead>
              <TableHead>Invoice No.</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Production</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Weight/Unit</TableHead>
              <TableHead>Score</TableHead>
              <TableHead className="text-right">Price/Unit (₹)</TableHead>
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
                <TableCell>{product.mark}</TableCell>
                <TableCell>{product.invoiceNo}</TableCell>
                <TableCell>{product.grade}</TableCell>
                <TableCell>
                  {new Date(product.productionMonth).toLocaleDateString(
                    "en-US",
                    { month: "short", year: "numeric" }
                  )}
                </TableCell>
                <TableCell>{product.location}</TableCell>
                <TableCell>{product.weightPerUnit} kg</TableCell>
                <TableCell>{product.score}</TableCell>
                <TableCell className="text-right">
                  {product.pricePerUnit.toLocaleString("en-IN")}
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
