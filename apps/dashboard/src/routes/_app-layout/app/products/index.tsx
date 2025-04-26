import { createFileRoute, useNavigate } from "@tanstack/react-router";
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
import { Input } from "@/components/ui/input";
import { ChevronDown, Filter } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useAuthStore } from "@/stores/auth.store";

export const Route = createFileRoute("/_app-layout/app/products/")({
  component: ProductsPage,
});

function ProductsPage() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState(searchText);
  const [statusFilter, setStatusFilter] = useState<
    "all" | "published" | "draft"
  >("all");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | undefined>(
    undefined
  );
  const [offset, setOffset] = useState(0);
  const limit = 10;

  // Debounce the search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 500); // 500ms debounce

    return () => {
      clearTimeout(handler);
    };
  }, [searchText]);

  // when filters change, update URL
  const updateSearchParams = useCallback(() => {
    const params = new URLSearchParams();
    if (debouncedSearchText) params.set("search", debouncedSearchText);
    if (statusFilter !== "all") params.set("status", statusFilter);
    if (sortOrder) params.set("sortOrder", sortOrder);
    if (offset) params.set("offset", offset.toString());
    window.history.replaceState({}, "", `?${params.toString()}`);
  }, [debouncedSearchText, statusFilter, sortOrder, offset]);

  // on mount, read params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSearchText(params.get("search") || "");
    setStatusFilter(
      params.get("status") === "published"
        ? "published"
        : params.get("status") === "draft"
          ? "draft"
          : "all"
    );
    const so = params.get("sortOrder");
    setSortOrder(
      so === "asc" || so === "desc" ? (so as "asc" | "desc") : undefined
    );
    setOffset(Number(params.get("offset")) || 0);
  }, []);

  useEffect(() => {
    updateSearchParams();
  }, [debouncedSearchText, sortOrder, offset, updateSearchParams]);

  const queryParams = {
    search: debouncedSearchText,
    status: statusFilter !== "all" ? statusFilter : undefined,
    sortBy: sortOrder ? ("price" as "price" | "createdAt" | "name") : undefined,
    sortOrder,
    offset: offset.toString(),
    limit: limit.toString(),
  };

  const { data, isLoading } =
    user?.role === "ADMIN"
      ? client.admin.getProducts.useQuery(["admin-products", queryParams], {
          query: queryParams,
        })
      : client.sellers.getProducts.useQuery(["seller-products", queryParams], {
          query: queryParams,
        });

  if (isLoading) return <div>Loading...</div>;
  if (!data || data.status !== 200) return <div>Something went wrong</div>;

  return (
    <div className="p-8">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        {user?.role === "SELLER" && (
          <Link to={"/app/products/$productId"} params={{ productId: "new" }}>
            <Button>Add New Product</Button>
          </Link>
        )}
      </div>

      {/* Filters and Search */}
      <div className="flex gap-4 mb-6">
        <Input
          placeholder="Search Mark..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="max-w-sm"
        />
        <div className="flex gap-2">
          {(["published", "draft"] as const).map((st) => (
            <Button
              key={st}
              variant={statusFilter === st ? "default" : "outline"}
              onClick={() => setStatusFilter(statusFilter === st ? "all" : st)}
              className={`flex items-center gap-1 border-2 ${
                statusFilter === st ? "border-blue-500" : ""
              }`}
            >
              <Filter className="h-4 w-4" />
              {st === "published" ? "Published" : "Draft"}
            </Button>
          ))}
        </div>
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
              <TableHead className="text-right">
                <Button
                  variant="ghost"
                  onClick={() => {
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
              <TableHead className="text-right">Status</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Origin</TableHead>
              <TableHead>Production</TableHead>
              {user?.role === "ADMIN" && <TableHead>Seller</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.body.data.map((product) => (
              <TableRow
                key={product.id}
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => {
                  navigate({
                    to: "/app/products/$productId",
                    params: { productId: product.id.toString() },
                  });
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
                  {product.quantity * product.weightPerUnit -
                    Number(product.sampleWeight)}{" "}
                  kg
                </TableCell>
                <TableCell className="text-right">
                  {product.pricePerUnit.toLocaleString("en-IN")}
                </TableCell>
                <TableCell className="text-right">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      product.isLive
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {product.isLive ? "Published" : "Draft"}
                  </span>
                </TableCell>
                <TableCell>{product.location}</TableCell>
                <TableCell>{product.origin}</TableCell>
                <TableCell>
                  {new Date(product.productionMonth).toLocaleString("en-IN", {
                    month: "short",
                    year: "numeric",
                  })}
                </TableCell>
                {user?.role === "ADMIN" && (
                  <TableCell>
                    {/* @ts-ignore - seller info is available in admin view */}
                    {product.seller?.businessName || product.sellerId}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-muted-foreground">
          Showing {offset + 1} to {Math.min(offset + limit, data.body.total)} of{" "}
          {data.body.total} products
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
  );
}
