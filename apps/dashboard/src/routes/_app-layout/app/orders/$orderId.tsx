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
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import client from "@/api-client";
import { useAuthStore } from "@/stores/auth.store";

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
  const [formData, setFormData] = useState<{
    status: string;
    deliveryCharges: string;
    otherCharges: string;
  }>({
    status: "",
    deliveryCharges: "0",
    otherCharges: "0",
  });

  const { data, isLoading, refetch } =
    user?.role === "SELLER"
      ? client.sellers.getOrder.useQuery(["order", orderId], {
          params: { id: orderId },
        })
      : client.admin.getOrder.useQuery(["order", orderId], {
          params: { id: orderId },
        });

  const updateOrderMutation = client.admin.updateOrder.useMutation();

  useEffect(() => {
    if (data?.body) {
      setFormData({
        status: data.body.status,
        deliveryCharges: data.body.deliveryCharges?.toString() || "0",
        otherCharges: data.body.otherCharges?.toString() || "0",
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

  const handleSaveChanges = async () => {
    try {
      await updateOrderMutation.mutateAsync({
        params: { id: orderId },
        body: {
          deliveryCharges: formData.deliveryCharges
            ? parseFloat(formData.deliveryCharges)
            : 0,
          otherCharges: formData.otherCharges
            ? parseFloat(formData.otherCharges)
            : 0,
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

  return (
    <div className="p-8">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Order #{order.id}</h1>
        <div className="space-x-2">
          {user?.role === "ADMIN" && !isEditing && (
            <Button onClick={() => setIsEditing(true)} variant="outline">
              Edit
            </Button>
          )}
          <Button onClick={() => navigate({ to: "/app/orders" })}>Back</Button>
        </div>
      </div>
      <div className="space-y-4">
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
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gray-50 p-2 rounded-sm">
            <h3 className="font-semibold">Total Items</h3>
            <p>{order.orderItems.length}</p>
          </div>
          <div className="bg-gray-50 p-2 rounded-sm">
            <h3 className="font-semibold">Total Pkgs</h3>
            <p>
              {order.orderItems.reduce((prv, cur) => cur.quantity + prv, 0)}
            </p>
          </div>
          <div className="bg-gray-50 p-2 rounded-sm">
            <h3 className="font-semibold">Total Weight</h3>
            <p>{order.estimatedWeight}</p>
          </div>
          <div className="bg-gray-50 p-2 rounded-sm"></div>
          <div className="bg-gray-50 p-2 rounded-sm">
            <h3 className="font-semibold">Total Amount</h3>
            <p>₹{order.totalAmount.toFixed(2)}</p>
          </div>

          <div className="bg-gray-50 p-2 rounded-sm">
            <h3 className="font-semibold">Shipping Charges</h3>
            {user?.role === "ADMIN" && isEditing ? (
              <div className="flex items-center space-x-2">
                <Label htmlFor="deliveryCharges">₹</Label>
                <Input
                  id="deliveryCharges"
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.deliveryCharges}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      deliveryCharges: e.target.value,
                    }))
                  }
                  className="w-32"
                />
              </div>
            ) : (
              <p>₹{(order.deliveryCharges || 0).toFixed(2)}</p>
            )}
          </div>
          <div className="bg-gray-50 p-2 rounded-sm">
            <h3 className="font-semibold">GST Amount</h3>
            <p>₹{order.gstAmount.toFixed(2)}</p>
          </div>
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
        </div>
        <div className="mt-6 grid grid-cols-2">
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
        {user?.role === "ADMIN" && isEditing && (
          <div className="flex justify-end space-x-2 mt-4">
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveChanges}>Save Changes</Button>
          </div>
        )}
        <div>
          <h3 className="font-semibold mb-6">Order Items</h3>
          <div className="space-y-2">
            {order.orderItems.map((item) => (
              <div key={item.id} className="border p-2 rounded">
                <p>
                  Product ID: IIL{new Date(item.createdAt).getFullYear()}
                  {new Date(item.createdAt)
                    .getMonth()
                    .toString()
                    .padStart(2, "0")}
                  {item.id.toString().padStart(6, "0")}
                </p>
                <p>Quantity: {item.quantity}</p>
                <p>Price/Kg: ₹{item.unitPrice}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
