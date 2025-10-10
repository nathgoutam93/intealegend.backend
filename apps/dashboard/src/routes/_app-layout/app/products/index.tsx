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
import { ChevronDown, CircleHelp, Filter } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useAuthStore } from "@/stores/auth.store";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const Route = createFileRoute("/_app-layout/app/products/")({
  component: ProductsPage,
});

function ProductsPage() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  // Get initial values from URL params
  const params = new URLSearchParams(window.location.search);
  const initialStatus =
    params.get("status") === "published"
      ? "published"
      : params.get("status") === "draft"
        ? "draft"
        : "all";
  const initialSortOrder = params.get("sortOrder") as
    | "asc"
    | "desc"
    | undefined;
  const initialSearch = params.get("search") || "";
  const initialOffset = Number(params.get("offset")) || 0;

  const [searchText, setSearchText] = useState(initialSearch);
  const [debouncedSearchText, setDebouncedSearchText] = useState(searchText);
  const [statusFilter, setStatusFilter] = useState<
    "all" | "published" | "draft"
  >(initialStatus);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | undefined>(
    initialSortOrder === "asc" || initialSortOrder === "desc"
      ? initialSortOrder
      : undefined
  );
  const [offset, setOffset] = useState(initialOffset);
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
  useEffect(() => {
    updateSearchParams();
  }, [
    debouncedSearchText,
    statusFilter,
    sortOrder,
    offset,
    updateSearchParams,
  ]);

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
              <TableHead className="text-left">ID</TableHead>
              <TableHead className="text-center">Mark</TableHead>
              <TableHead className="text-center">Invoice No.</TableHead>
              <TableHead className="text-center">Grade</TableHead>
              <TableHead className="text-center">Pkgs</TableHead>
              <TableHead className="text-center">Wt/Pkg</TableHead>
              <TableHead className="text-center">Sample Wt.</TableHead>
              <TableHead className="text-center">Total Wt.</TableHead>
              <TableHead className="text-center">Score</TableHead>
              <TableHead className="text-center">
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
              <TableHead className="text-center">
                <TooltipProvider delayDuration={200}>
                  <Tooltip>
                    <TooltipTrigger>
                      <span>MBP</span>
                      <CircleHelp size={14} className="ml-1 mb-0.5 inline" />
                    </TooltipTrigger>
                    <TooltipContent>Minimum Buy Pkgs</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Location</TableHead>
              <TableHead className="text-center">Origin</TableHead>
              <TableHead className="text-center">Production</TableHead>
              {user?.role === "ADMIN" && <TableHead></TableHead>}
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
                <TableCell className="font-medium text-left">
                  <span>
                    IIL{new Date(product.createdAt).getFullYear()}
                    {new Date(product.createdAt)
                      .getMonth()
                      .toString()
                      .padStart(2, "0")}
                    {product.id.toString().padStart(6, "0")}
                  </span>
                </TableCell>
                <TableCell className="text-center">
                  {product.brandMark.name}
                </TableCell>
                <TableCell className="text-center">
                  {product.invoiceNo}
                </TableCell>
                <TableCell className="text-center">{product.grade}</TableCell>
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
                <TableCell className="text-center">
                  {product.location}
                </TableCell>
                <TableCell className="text-center">{product.origin}</TableCell>
                <TableCell className="text-center">
                  {new Date(product.productionMonth).toLocaleString("en-IN", {
                    month: "short",
                    year: "numeric",
                  })}
                </TableCell>
                {user?.role === "ADMIN" && (
                  <TableCell>
                    <Button asChild>
                      <Link
                        to={`/app/products/$productId`}
                        params={{ productId: product.id.toString() }}
                        className="text-blue-500 hover:underline"
                      >
                        Edit
                      </Link>
                    </Button>
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
