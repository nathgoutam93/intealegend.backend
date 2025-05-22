"use client";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { client } from "@/lib/api-client";
import { useParams } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function OrderDetailsPage() {
  const params = useParams();
  const orderId = params.id as string;

  const { data, isPending } = client.buyers.getOrderById.useQuery(
    ["order", orderId],
    { params: { orderId } }
  );

  if (isPending) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header showBackButton backUrl="/app/orders" />
        <div className="flex-1 pt-4">
          <div className="container mx-auto px-4">
            <div className="p-8 text-center">
              <div>Loading order details...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!data || data.status !== 200) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header showBackButton backUrl="/app/orders" />
        <div className="flex-1 pt-4">
          <div className="container mx-auto px-4">
            <div className="p-8 text-center">
              <h1 className="text-2xl font-bold mb-4">Order Not Found</h1>
              <p className="text-gray-500 mb-6">
                We couldn&apos;t find the order you&apos;re looking for.
              </p>
              <Button asChild>
                <Link href="/app/orders">Back to Orders</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const order = data.body;

  return (
    <div className="min-h-screen flex flex-col">
      <Header showBackButton backUrl="/app/orders" />
      <div className="py-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-5">
          <div className="w-max">
            <h3 className="font-semibold mb-2">Status</h3>
            <div
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
              ${
                order.status === "DELIVERED"
                  ? "bg-green-100 text-green-800"
                  : order.status === "CANCELLED"
                    ? "bg-red-100 text-red-800"
                    : "bg-blue-100 text-blue-800"
              }`}
            >
              {order.status}
            </div>
          </div>
          <div className="w-max">
            <h3 className="font-semibold mb-2">Invoice</h3>
            {order.invoice ? (
              <div className="bg-gray-100 p-2 rounded-sm">
                <a
                  href={order.invoice}
                  target="_blank"
                  className="text-blue-400"
                >
                  View Invoice
                </a>
              </div>
            ) : (
              <span>N/A</span>
            )}
          </div>
          <div className="w-max">
            <h3 className="font-semibold mb-2">CN No.</h3>
            <span>{order.cn ?? "n/a"}</span>
          </div>
          <div className="w-max">
            <h3 className="font-semibold mb-2">Transport</h3>
            <span>{order.transport ?? "n/a"}</span>
          </div>
        </div>

        <div className="mt-4 border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order No.</TableHead>
                <TableHead>Total Pkgs</TableHead>
                <TableHead>Total Weight</TableHead>
                <TableHead>Tea Value</TableHead>
                <TableHead>Shipping</TableHead>
                <TableHead>GST</TableHead>
                <TableHead>Total Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>{order.id}</TableCell>
                <TableCell>
                  {order.orderItems.reduce((prv, cur) => prv + cur.quantity, 0)}
                </TableCell>
                <TableCell>{order.estimatedWeight}</TableCell>
                <TableCell>{order.subtotal}</TableCell>
                <TableCell>{order.deliveryCharges}</TableCell>
                <TableCell>{order.gstAmount}</TableCell>
                <TableCell>{order.totalAmount}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-6">Order Items</h3>
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product Id</TableHead>
                  <TableHead>Mark</TableHead>
                  <TableHead>Grade</TableHead>
                  <TableHead>Price/Kg</TableHead>
                  <TableHead>Weight/pkg</TableHead>
                  <TableHead>Sample Weight</TableHead>
                  <TableHead>Total Pkgs</TableHead>
                  <TableHead>Total Weight</TableHead>
                  <TableHead>Total Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {order.orderItems.map((item) => (
                  <TableRow>
                    <TableCell>
                      <span>
                        IIL{new Date(item.product.createdAt).getFullYear()}
                        {new Date(item.product.createdAt)
                          .getMonth()
                          .toString()
                          .padStart(2, "0")}
                        {item.product.id.toString().padStart(6, "0")}
                      </span>
                    </TableCell>
                    <TableCell>{item.product.brandMark.name}</TableCell>
                    <TableCell>{item.product.grade}</TableCell>
                    <TableCell>{item.product.pricePerUnit}</TableCell>
                    <TableCell>{item.product.weightPerUnit}</TableCell>
                    <TableCell>{item.product.sampleWeight}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{item.totalWeight}</TableCell>
                    <TableCell>{item.totalPrice}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-3">
          <div className="">
            <p className="mb-4 font-semibold">Buyer Details</p>
            <p className="text-sm">Business Name: {order.buyer.businessName}</p>
            <p className="text-sm">Owner: {order.buyer.ownerName}</p>
            <p className="text-sm">
              Prefered Transport: {order.buyer.transportName}
            </p>
          </div>

          <div className="">
            <p className="mb-4 font-semibold">Shipping Address</p>
            <p>
              {[
                order.shippingAddress,
                order.shippingDistrict,
                order.shippingState,
                order.shippingPincode,
              ].join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
