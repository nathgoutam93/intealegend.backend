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
import { ArrowLeft, Printer } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function OrderDetailsPage() {
  const params = useParams();
  const orderId = params.id as string;

  const { data, isPending } = client.buyers.getOrderById.useQuery(
    ["order", orderId],
    { params: { orderId } }
  );

  const handlePrint = () => {
    window.print();
  };

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

      <div className="py-8 max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Order Details</h2>
          <Button
            variant="outline"
            size="sm"
            className="print:hidden"
            onClick={handlePrint}
          >
            <Printer className="h-4 w-4 mr-2" />
            Print
          </Button>
        </div>

        <div className="grid grid-cols-5 gap-4">
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
            <span className="">{order.invoice}</span>
            <Button
              variant="link"
              className="ml-1 text-blue-400 p-0 h-auto print:hidden"
              onClick={() => {
                const element = document.getElementById("documents");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View
            </Button>
          </div>
          <div className="w-max">
            <h3 className="font-semibold mb-2">CN No.</h3>
            <span>{order.cn}</span>
            <Button
              variant="link"
              className="ml-1 text-blue-400 p-0 h-auto print:hidden"
              onClick={() => {
                const element = document.getElementById("documents");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View
            </Button>
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
                <TableHead className="text-left">Order No.</TableHead>
                <TableHead className="text-center">Total Pkgs</TableHead>
                <TableHead className="text-center">Total Weight</TableHead>
                <TableHead className="text-center">Tea Value</TableHead>
                <TableHead className="text-center">Shipping</TableHead>
                <TableHead className="text-center">GST</TableHead>
                <TableHead className="text-right">Total Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-left">{order.id}</TableCell>
                <TableCell className="text-center">
                  {order.orderItems.reduce((prv, cur) => prv + cur.quantity, 0)}
                </TableCell>
                <TableCell className="text-center">
                  {order.estimatedWeight}
                </TableCell>
                <TableCell className="text-center">{order.subtotal}</TableCell>
                <TableCell className="text-center">
                  {order.deliveryCharges}
                </TableCell>
                <TableCell className="text-center">{order.gstAmount}</TableCell>
                <TableCell className="text-right">
                  {order.totalAmount}
                </TableCell>
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
                  <TableHead className="text-center">Mark</TableHead>
                  <TableHead className="text-center">Grade</TableHead>
                  <TableHead className="text-center">Total Pkgs</TableHead>
                  <TableHead className="text-center">Weight/pkg</TableHead>
                  <TableHead className="text-center">Sample Weight</TableHead>
                  <TableHead className="text-center">Total Weight</TableHead>
                  <TableHead className="text-center">Price/Kg</TableHead>
                  <TableHead className="text-right">Tea Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {order.orderItems.map((item) => (
                  <TableRow key={item.product.id}>
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
                    <TableCell className="text-center">
                      {item.product.brandMark.name}
                    </TableCell>
                    <TableCell className="text-center">
                      {item.product.grade}
                    </TableCell>
                    <TableCell className="text-center">
                      {item.quantity}
                    </TableCell>
                    <TableCell className="text-center">
                      {item.product.weightPerUnit}
                    </TableCell>
                    <TableCell className="text-center">
                      {item.product.sampleWeight}
                    </TableCell>
                    <TableCell className="text-center">
                      {item.totalWeight}
                    </TableCell>
                    <TableCell className="text-center">
                      {item.product.pricePerUnit}
                    </TableCell>
                    <TableCell className="text-right">
                      {item.totalPrice}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-6">
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

        {/* Documents Section */}
        <div id="documents" className="mt-10 print:mt-4">
          <h3 className="font-semibold mb-6">Documents</h3>
          <div className="grid grid-cols-2 gap-8">
            <div className="border p-4 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-medium">Invoice</h4>
                  <p className="text-sm text-gray-500">
                    {order.invoice || "Not available"}
                  </p>
                </div>
                {order.invoice_url && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="print:hidden"
                    asChild
                  >
                    <a
                      href={order.invoice_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in New Tab
                    </a>
                  </Button>
                )}
              </div>
              <div className="bg-gray-50 rounded-lg overflow-hidden min-h-[200px] flex items-center justify-center">
                {order.invoice_url ? (
                  <img
                    src={order.invoice_url}
                    alt="Invoice Document"
                    className="w-full h-auto object-contain"
                  />
                ) : (
                  <div className="text-gray-400 text-center">
                    <p>No invoice document available</p>
                  </div>
                )}
              </div>
            </div>

            <div className="border p-4 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-medium">CN Document</h4>
                  <p className="text-sm text-gray-500">
                    {order.cn || "Not available"}
                  </p>
                </div>
                {order.cn_url && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="print:hidden"
                    asChild
                  >
                    <a
                      href={order.cn_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in New Tab
                    </a>
                  </Button>
                )}
              </div>
              <div className="bg-gray-50 rounded-lg overflow-hidden min-h-[200px] flex items-center justify-center">
                {order.cn_url ? (
                  <img
                    src={order.cn_url}
                    alt="CN Document"
                    className="w-full h-auto object-contain"
                  />
                ) : (
                  <div className="text-gray-400 text-center">
                    <p>No CN document available</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          .print\\:hidden {
            display: none !important;
          }
          .print\\:inline {
            display: inline !important;
          }
          .print\\:mt-4 {
            margin-top: 1rem !important;
          }
          @page {
            margin: 20mm;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          img {
            max-height: 100vh;
            page-break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}
