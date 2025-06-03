import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { toast } from "sonner";
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

type OrderStatus =
  | "PENDING"
  | "ACCEPTED"
  | "DESPATCHED"
  | "ON_WAY"
  | "DELIVERED"
  | "CANCELLED"
  | undefined;

export const Route = createFileRoute("/_app-layout/app/orders/$orderId")({
  component: OrderDetailPage,
});

function OrderDetailPage() {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const { orderId } = Route.useParams();

  const [isEditing, setIsEditing] = useState(false);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [showCnModal, setShowCnModal] = useState(false);
  const [invoiceFile, setInvoiceFile] = useState<File | null>(null);
  const [cnFile, setCnFile] = useState<File | null>(null);
  const [formData, setFormData] = useState<{
    cn: string;
    invoice: string;
    transport: string;
  }>({
    cn: "",
    invoice: "",
    transport: "0",
  });

  const handlePrint = () => {
    window.print();
  };

  const { data, isLoading, refetch } =
    user?.role === "SELLER"
      ? client.sellers.getOrder.useQuery(["order", orderId], {
          params: { id: orderId },
        })
      : client.admin.getOrder.useQuery(["order", orderId], {
          params: { id: orderId },
        });

  const updateOrderMutation = client.admin.updateOrder.useMutation();
  const updateInvoiceMutation = client.admin.uploadInvoice.useMutation();
  const updateCnMutation = client.admin.uploadCn.useMutation();

  useEffect(() => {
    if (data?.body) {
      setFormData({
        cn: data.body.cn?.toString() || "",
        invoice: data.body.invoice?.toString() || "",
        transport: data.body.transport?.toString() || "",
      });
    }
  }, [data?.body]);

  if (isLoading) return <div>Loading...</div>;
  if (!data || data.status !== 200) return <div>Something went wrong</div>;

  const order = data.body;

  const handleStatusChange = async (newStatus: string) => {
    try {
      await updateOrderMutation.mutateAsync({
        params: { id: orderId },
        body: { status: newStatus as OrderStatus },
      });
      await refetch();
      toast("Order updated", {
        description: "Order status has been updated successfully.",
      });
    } catch (error) {
      toast.error("Error", {
        description: "Failed to update order status.",
      });
    }
  };

  // Handler for invoice upload
  const handleCnUpload = async (e: any) => {
    e.preventDefault();
    if (!cnFile) {
      toast("Error", { description: "Please select a file." });
      return;
    }
    try {
      const formData = new FormData();
      formData.append("cn", cnFile);

      await updateCnMutation.mutateAsync({
        params: { id: orderId },
        body: formData,
      });

      setShowInvoiceModal(false);
      setInvoiceFile(null);
      toast("CN Uploaded", {
        description: "CN uploaded successfully.",
      });
      await refetch();
    } catch (error) {
      toast("Error", { description: "Failed to upload CN." });
    }
  };

  // Handler for invoice upload
  const handleInvoiceUpload = async (e: any) => {
    e.preventDefault();
    if (!invoiceFile) {
      toast("Error", { description: "Please select a file." });
      return;
    }
    try {
      const formData = new FormData();
      formData.append("invoice", invoiceFile);

      await updateInvoiceMutation.mutateAsync({
        params: { id: orderId },
        body: formData,
      });

      setShowInvoiceModal(false);
      setInvoiceFile(null);
      toast("Invoice Uploaded", {
        description: "Invoice uploaded successfully.",
      });
      await refetch();
    } catch (error) {
      toast("Error", { description: "Failed to upload invoice." });
    }
  };

  const handleSaveChanges = async () => {
    try {
      await updateOrderMutation.mutateAsync({
        params: { id: orderId },
        body: {
          cn: formData.cn,
          invoice: formData.invoice,
          transport: formData.transport,
        },
      });
      await refetch();
      setIsEditing(false);
      toast("Order updated", {
        description: "Order details have been updated successfully.",
      });
    } catch (error) {
      toast("Error", {
        description: "Failed to update order details.",
      });
    }
  };

  const scrollToDocuments = (e: React.MouseEvent) => {
    e.preventDefault();
    document
      .getElementById("documents-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>
        {`
          @media print {
            @page {
              size: A4;
            }
            body * {
              visibility: hidden;
            }
            .print-content, .print-content * {
              visibility: visible;
            }
            .print-content {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
            }
            .no-print {
              display: none !important;
            }
            .page-break {
              page-break-before: always;
            }
            .placeholder-image {
              display: none !important;
            }

            /* Table print styles */
            .print-table {
              font-size: 11px;
              width: 100%;
              table-layout: fixed;
            }
            .print-table th, 
            .print-table td {
              padding: 4px;
              white-space: normal;
              word-wrap: break-word;
            }
            .print-table .product-id {
              width: 12%;
            }
            .print-table .mark {
              width: 10%;
            }
            .print-table .grade {
              width: 8%;
            }
            .print-table .pkgs {
              width: 8%;
            }
            .print-table .weight {
              width: 8%;
            }
            .print-table .sample {
              width: 8%;
            }
            .print-table .total-weight {
              width: 10%;
            }
            .print-table .price {
              width: 10%;
            }
            .print-table .value {
              width: 10%;
            }
            .print-table .location {
              width: 16%;
            }
          }

          .placeholder-image {
            aspect-ratio: 1/1.414;
            background-color: #f3f4f6;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0.375rem;
            border: 1px dashed #d1d5db;
          }
        `}
      </style>
      <div className="p-8">
        <div className="flex justify-between mb-6">
          <h1 className="text-2xl font-bold">Order #{order.id}</h1>
          <div className="space-x-2 no-print">
            {user?.role === "ADMIN" && !isEditing && (
              <Button onClick={() => setIsEditing(true)} variant="outline">
                Edit
              </Button>
            )}
            <Button onClick={handlePrint} variant="outline">
              Print
            </Button>
            <Button onClick={() => navigate({ to: "/app/orders" })}>
              Back
            </Button>
          </div>
        </div>
        <div className="print-content space-y-4">
          <div className="grid grid-cols-5">
            <div className="w-max">
              <h3 className="font-semibold mb-2">Status</h3>
              {user?.role === "ADMIN" ? (
                <Select value={order.status} onValueChange={handleStatusChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PENDING">Pending</SelectItem>
                    <SelectItem value="ACCEPTED">Accepted</SelectItem>
                    <SelectItem value="DESPATCHED">Despatched</SelectItem>
                    <SelectItem value="ON_WAY">On Way</SelectItem>
                    <SelectItem value="DELIVERED">Delivered</SelectItem>
                    <SelectItem value="CANCELLED">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              ) : (
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
              )}
            </div>
            <div className="w-max">
              <h3 className="font-semibold mb-2">Invoice</h3>
              <div className="space-y-2">
                <Input
                  disabled={!isEditing}
                  value={formData.invoice}
                  onChange={(e) =>
                    setFormData((prv) => ({ ...prv, invoice: e.target.value }))
                  }
                />
                <div className="bg-gray-100 p-2 rounded-sm w-max no-print">
                  <a
                    href="#documents-section"
                    onClick={scrollToDocuments}
                    className="text-blue-400"
                  >
                    View Invoice
                  </a>
                </div>
              </div>
            </div>
            <div className="w-max">
              <h3 className="font-semibold mb-2">CN No.</h3>
              <div className="space-y-2">
                <Input
                  disabled={!isEditing}
                  value={formData.cn}
                  onChange={(e) =>
                    setFormData((prv) => ({ ...prv, cn: e.target.value }))
                  }
                />
                <div className="bg-gray-100 p-2 rounded-sm w-max no-print">
                  <a
                    href="#documents-section"
                    onClick={scrollToDocuments}
                    className="text-blue-400"
                  >
                    View CN
                  </a>
                </div>
              </div>
            </div>
            <div className="w-max">
              <h3 className="font-semibold mb-2">Transport</h3>
              <Input
                disabled={!isEditing}
                value={formData.transport}
                onChange={(e) =>
                  setFormData((prv) => ({ ...prv, transport: e.target.value }))
                }
              />
            </div>
            {user?.role === "ADMIN" && isEditing && (
              <div className="flex justify-end space-x-2 mt-4">
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSaveChanges}>Save Changes</Button>
              </div>
            )}
          </div>

          <div className="border rounded-lg">
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
                    {order.orderItems.reduce(
                      (prv, cur) => prv + cur.quantity,
                      0
                    )}
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

          {/* <div className="grid grid-cols-4 gap-4">
          {user?.role === "ADMIN" && (
            <div className="bg-gray-50 p-2 rounded-sm">
              <h3 className="font-semibold">Other Charges</h3>
              {isEditing ? (
                <div className="flex items-center space-x-2">
                  <Label htmlFor="otherCharges">₹</Label>
                  <Input
                    id="otherCharges"
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.otherCharges}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        otherCharges: e.target.value,
                      }))
                    }
                    className="w-32"
                  />
                </div>
              ) : (
                <p>₹{(order.otherCharges || 0).toFixed(2)}</p>
              )}
            </div>
          )}
        </div> */}

          <div className="mt-6">
            <h3 className="font-semibold mb-6">Order Items</h3>
            <div className="border rounded-lg">
              <Table className="print-table">
                <TableHeader>
                  <TableRow>
                    <TableHead className="product-id">Product Id</TableHead>
                    <TableHead className="mark">Mark</TableHead>
                    <TableHead className="grade">Grade</TableHead>
                    <TableHead className="pkgs">Total Pkgs</TableHead>
                    <TableHead className="weight">Weight/pkg</TableHead>
                    <TableHead className="sample">Sample Weight</TableHead>
                    <TableHead className="total-weight">Total Weight</TableHead>
                    <TableHead className="price">Price/Kg</TableHead>
                    <TableHead className="value">Tea Value</TableHead>
                    <TableHead className="location">Location</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {order.orderItems.map((item) => (
                    <TableRow key={item.product.id}>
                      <TableCell className="product-id">
                        <span>
                          IIL{new Date(item.product.createdAt).getFullYear()}
                          {new Date(item.product.createdAt)
                            .getMonth()
                            .toString()
                            .padStart(2, "0")}
                          {item.product.id.toString().padStart(6, "0")}
                        </span>
                      </TableCell>
                      <TableCell className="mark">
                        {item.product.brandMark.name}
                      </TableCell>
                      <TableCell className="grade">
                        {item.product.grade}
                      </TableCell>
                      <TableCell className="pkgs">{item.quantity}</TableCell>
                      <TableCell className="weight">
                        {item.product.weightPerUnit}
                      </TableCell>
                      <TableCell className="sample">
                        {item.product.sampleWeight}
                      </TableCell>
                      <TableCell className="total-weight">
                        {item.totalWeight}
                      </TableCell>
                      <TableCell className="price">
                        {item.product.pricePerUnit}
                      </TableCell>
                      <TableCell className="value">{item.totalPrice}</TableCell>
                      <TableCell className="location">
                        {item.product.location}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-3">
            <div className="">
              <p className="mb-4 font-semibold">Buyer Details</p>
              <p className="text-sm">
                Business Name: {order.buyer.businessName}
              </p>
              <p className="text-sm">Owner: {order.buyer.ownerName}</p>
              <p className="text-sm">GST: {order.buyer.gstNumber}</p>
              <p className="text-sm">
                Prefered Transport: {order.buyer.transportName}
              </p>
            </div>

            <div className="">
              <p className="mb-4 font-semibold">Shipping Address</p>
              <p className="text-sm">
                {[
                  order.shippingAddress,
                  order.shippingDistrict,
                  order.shippingState,
                  order.shippingPincode,
                ].join(", ")}
              </p>
              <p className="text-sm">
                Contact:{" "}
                <span className="font-semibold">
                  {[order.shippingPhone, order.shippingEmail].join(", ")}
                </span>
              </p>
            </div>
          </div>

          {/* Documents section with placeholders and upload buttons */}
          <div id="documents-section" className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Documents</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Invoice</h3>
                  {user?.role === "ADMIN" && !order.invoice_url && (
                    <Button
                      size={"sm"}
                      onClick={() => setShowInvoiceModal(true)}
                      className="no-print"
                    >
                      Upload Invoice
                    </Button>
                  )}
                </div>
                {order.invoice_url ? (
                  <img
                    src={order.invoice_url}
                    alt="Invoice"
                    className="max-w-full h-auto border rounded"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                ) : (
                  <div className="placeholder-image">
                    <p className="text-gray-400">Invoice not uploaded</p>
                  </div>
                )}
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">CN Document</h3>
                  {user?.role === "ADMIN" && !order.cn_url && (
                    <Button
                      size={"sm"}
                      onClick={() => setShowCnModal(true)}
                      className="no-print"
                    >
                      Upload CN
                    </Button>
                  )}
                </div>
                {order.cn_url ? (
                  <img
                    src={order.cn_url}
                    alt="CN Document"
                    className="max-w-full h-auto border rounded"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                ) : (
                  <div className="placeholder-image">
                    <p className="text-gray-400">CN not uploaded</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Upload Modals */}
          {showInvoiceModal && (
            <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center no-print">
              <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h2 className="font-bold text-xl mb-4">Upload Invoice</h2>
                <form onSubmit={handleInvoiceUpload}>
                  <Input
                    type="file"
                    accept="application/pdf,image/*"
                    onChange={(e) =>
                      setInvoiceFile(e.target.files?.[0] ?? null)
                    }
                    className="mb-4"
                  />
                  <div className="flex justify-end space-x-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowInvoiceModal(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={updateInvoiceMutation.isPending}
                    >
                      {updateInvoiceMutation.isPending
                        ? "Uploading..."
                        : "Upload"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}
          {showCnModal && (
            <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center no-print">
              <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h2 className="font-bold text-xl mb-4">Upload CN</h2>
                <form onSubmit={handleCnUpload}>
                  <Input
                    type="file"
                    accept="application/pdf,image/*"
                    onChange={(e) => setCnFile(e.target.files?.[0] ?? null)}
                    className="mb-4"
                  />
                  <div className="flex justify-end space-x-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowCnModal(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={updateInvoiceMutation.isPending}
                    >
                      {updateInvoiceMutation.isPending
                        ? "Uploading..."
                        : "Upload"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
