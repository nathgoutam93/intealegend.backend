import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import client from "@/api-client";
import { useAuthStore } from "@/stores/auth.store";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export const Route = createFileRoute("/_app-layout/app/orders/")({
  component: OrdersPage,
});

const ORDER_STATUS = [
  "PENDING",
  "ACCEPTED",
  "DESPATCHED",
  "ON_WAY",
  "DELIVERED",
  "CANCELLED",
] as const;

type OrderStatus = (typeof ORDER_STATUS)[number];

function OrdersPage() {
  const { user } = useAuthStore();
  const [statusFilter, setStatusFilter] = useState<OrderStatus | "all">("all");
  const [offset, setOffset] = useState(0);
  const limit = 10;

  // when filters change, update URL
  const updateSearchParams = useCallback(() => {
    const params = new URLSearchParams();
    if (statusFilter !== "all") params.set("status", statusFilter);
    if (offset) params.set("offset", offset.toString());
    window.history.replaceState({}, "", `?${params.toString()}`);
  }, [statusFilter, offset]);

  // on mount, read params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const status = params.get("status") as OrderStatus | null;
    if (status && ORDER_STATUS.includes(status)) {
      setStatusFilter(status);
    }
    setOffset(Number(params.get("offset")) || 0);
  }, []);

  useEffect(() => {
    updateSearchParams();
  }, [statusFilter, offset, updateSearchParams]);

  const queryParams = {
    offset: offset.toString(),
    limit: limit.toString(),
    sortBy: "createdAt" as const,
    sortOrder: "desc" as const,
    status: statusFilter !== "all" ? statusFilter : undefined,
    startDate: undefined,
    endDate: undefined,
  };

  const { data, isLoading } =
    user?.role === "ADMIN"
      ? client.admin.getOrders.useQuery(["admin-orders", queryParams], {
          query: queryParams,
        })
      : client.sellers.getOrders.useQuery(["orders", queryParams], {
          query: queryParams,
        });

  if (isLoading) return <div>Loading...</div>;
  if (!data || data.status !== 200) return <div>Something went wrong</div>;

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Orders</h1>
        <div className="flex gap-2">
          {ORDER_STATUS.map((status) => (
            <Button
              key={status}
              variant={statusFilter === status ? "default" : "outline"}
              onClick={() =>
                setStatusFilter(statusFilter === status ? "all" : status)
              }
              className={`flex items-center gap-1 border-2 ${
                statusFilter === status ? "border-blue-500" : ""
              }`}
            >
              <Filter className="h-4 w-4" />
              {status.charAt(0) + status.slice(1).toLowerCase()}
            </Button>
          ))}
        </div>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Tea Value</TableHead>
              <TableHead>Total Amount</TableHead>
              <TableHead>Total Pkgs</TableHead>
              <TableHead>Total Weight</TableHead>
              <TableHead>Actions</TableHead>
              <TableHead>Inv No.</TableHead>
              <TableHead>CN No.</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.body.data.map((order) => (
              <TableRow
                key={order.id}
                className="cursor-pointer hover:bg-muted/50"
              >
                <TableCell>#{order.id}</TableCell>
                <TableCell>
                  {new Date(order.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      order.status === "DELIVERED"
                        ? "bg-green-100 text-green-800"
                        : order.status === "CANCELLED"
                          ? "bg-red-100 text-red-800"
                          : order.status === "PENDING"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </TableCell>
                <TableCell>₹{order.subtotal.toFixed(2)}</TableCell>
                <TableCell>₹{order.totalAmount.toFixed(2)}</TableCell>
                <TableCell>
                  {order.orderItems.reduce((prv, cur) => prv + cur.quantity, 0)}
                </TableCell>
                <TableCell>{order.estimatedWeight} kg</TableCell>

                <TableCell>
                  <Button asChild>
                    <Link
                      to="/app/orders/$orderId"
                      params={{ orderId: order.id.toString() }}
                    >
                      View Details
                    </Link>
                  </Button>
                </TableCell>

                <TableCell>
                  {order.invoice ? (
                    <a href={order.invoice} className="text-blue-400">
                      view invoice
                    </a>
                  ) : (
                    <span>N/A</span>
                  )}
                </TableCell>
                <TableCell>{order.cn ?? "N/A"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-muted-foreground">
          Showing {offset + 1} to {Math.min(offset + limit, data.body.total)} of{" "}
          {data.body.total} orders
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
