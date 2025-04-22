import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import client from "@/api-client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const Route = createFileRoute("/_app-layout/app/products/")({
  component: ProductsPage,
});

function ProductsPage() {
  const { data, isLoading } = client.sellers.getProducts.useQuery(["products"]);

  if (isLoading) return <div>Loading...</div>;
  if (!data || data.status !== 200) return <div>Something went wrong</div>;

  return (
    <div className="p-8">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link to={"/app/products/$productId"} params={{ productId: "new" }}>
          <Button>Add New Product</Button>
        </Link>
      </div>
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Mark</TableHead>
              <TableHead>Invoice No.</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Wt/Pkg</TableHead>
              <TableHead>Sample Wt.</TableHead>
              <TableHead>MBP</TableHead>
              <TableHead>Pkgs</TableHead>
              <TableHead>Total Wt.</TableHead>
              <TableHead className="text-right">Price/Kg (₹)</TableHead>
              <TableHead className="text-right">Status</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Origin</TableHead>
              <TableHead>Production</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.body.data.map((product) => (
              <TableRow
                key={product.id}
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => {
                  window.location.href = `/app/products/${product.id}`;
                }}
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
                <TableCell>{product.mbp}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>
                  {product.quantity * product.weightPerUnit} kg
                </TableCell>
                <TableCell className="text-right">
                  {product.pricePerUnit.toLocaleString("en-IN")}
                </TableCell>
                <TableCell>
                  {product.isLive ? "Live" : product.status}
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
