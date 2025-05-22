"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/Header";
import Link from "next/link";
import { client } from "@/lib/api-client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

export default function OrdersPage() {
  const router = useRouter();

  const [filters, setFilters] = useState({
    status: "",
    search: "",
  });

  const { data, isPending } = client.buyers.getOrders.useQuery(["orders"]);

  const filteredOrders =
    data?.body.filter((order) => {
      if (filters.status && order.status !== filters.status) return false;
      if (filters.search && !order.id.toString().includes(filters.search))
        return false;
      return true;
    }) || [];

  if (isPending) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header showBackButton backUrl="/explore" />
        <div className="flex-1 pt-4">
          <div className="mx-auto px-4">
            <div className="p-8 text-center">
              <div>Loading orders...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Display empty state if there are no orders
  if (!data || data.status !== 200 || data.body.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header showBackButton backUrl="/explore" />
        <div className="flex-1 pt-4">
          <div className="mx-auto px-4">
            <div className="p-8 text-center">
              <h1 className="text-2xl font-bold mb-4">My Orders</h1>
              <p className="text-gray-500 mb-6">
                You haven&apos;t placed any orders yet.
              </p>
              <Button asChild>
                <Link href={"/app/explore"}>Start Buying</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header showBackButton backUrl="/explore" />
      <div className="flex-1 pt-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">My Orders</h1>
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Search by Order ID"
                  className="w-[200px]"
                  value={filters.search}
                  onChange={(e) =>
                    setFilters((prev) => ({ ...prev, search: e.target.value }))
                  }
                />
              </div>
              <Select
                value={filters.status}
                onValueChange={(value) =>
                  setFilters((prev) => ({ ...prev, status: value }))
                }
              >
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Status</SelectItem>
                  <SelectItem value="PENDING">Pending</SelectItem>
                  <SelectItem value="ACCEPTED">Accepted</SelectItem>
                  <SelectItem value="DESPATCHED">Despatched</SelectItem>
                  <SelectItem value="ON_WAY">On Way</SelectItem>
                  <SelectItem value="DELIVERED">Delivered</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="rounded-md border">
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
                  <TableHead>Invoice</TableHead>
                  <TableHead>CN No.</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order) => (
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
                      {order.orderItems.reduce(
                        (prv, cur) => prv + cur.quantity,
                        0
                      )}
                    </TableCell>
                    <TableCell>{order.estimatedWeight} kg</TableCell>

                    <TableCell>
                      <Button asChild>
                        <Link href={`/app/orders/${order.id}`}>
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
        </div>
      </div>
    </div>
  );
}
