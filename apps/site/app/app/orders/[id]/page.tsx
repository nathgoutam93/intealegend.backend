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
      <div className="flex-1 pt-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/app/orders">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold">Order #{order.id}</h1>
              <p className="text-sm text-muted-foreground">
                Placed on {new Date(order.createdAt).toLocaleDateString()}
              </p>
            </div>
            <Badge
              className="ml-auto"
              variant={
                order.status === "ON_WAY"
                  ? "default"
                  : order.status === "DESPATCHED"
                    ? "secondary"
                    : order.status === "ACCEPTED"
                      ? "secondary"
                      : "outline"
              }
            >
              {order.status}
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Order Items</CardTitle>
                  <CardDescription>
                    Items included in this order
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Weight</TableHead>
                        <TableHead className="text-right">Price</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {order.orderItems.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>
                            <div>
                              <p>
                                Product ID: IIL
                                {new Date(item.createdAt).getFullYear()}
                                {new Date(item.createdAt)
                                  .getMonth()
                                  .toString()
                                  .padStart(2, "0")}
                                {item.id.toString().padStart(6, "0")}
                              </p>
                            </div>
                          </TableCell>
                          <TableCell>{item.quantity}</TableCell>
                          <TableCell>{item.totalWeight}kg</TableCell>
                          <TableCell className="text-right">
                            ₹{item.unitPrice.toFixed(2)} /kg
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>₹{order.totalAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">GST</span>
                      <span>₹{order.gstAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Delivery Charges
                      </span>
                      <span>
                        ₹{order.deliveryCharges?.toFixed(2) || "0.00"}
                      </span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-medium">
                      <span>Total Amount</span>
                      <span>₹{order.totalAmount.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Delivery Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Address</div>
                      <div>{order.shippingAddress}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        Contact Number
                      </div>
                      <div>{order.contactNumber}</div>
                    </div>
                    {order.deliveryNotes && (
                      <div>
                        <div className="text-sm text-muted-foreground">Notes</div>
                        <div>{order.deliveryNotes}</div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
