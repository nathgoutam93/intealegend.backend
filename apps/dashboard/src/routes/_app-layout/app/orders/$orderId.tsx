import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import client from "@/api-client";

export const Route = createFileRoute("/_app-layout/app/orders/$orderId")({
  component: OrderDetailPage,
});

function OrderDetailPage() {
  const { orderId } = Route.useParams();
  const navigate = useNavigate();
  const { data, isLoading } = client.sellers.getOrder.useQuery(
    ["order", orderId],
    { params: { id: orderId } }
  );

  if (isLoading) return <div>Loading...</div>;
  if (!data || data.status !== 200) return <div>Something went wrong</div>;

  const order = data.body;

  return (
    <div className="p-8">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Order #{order.id}</h1>
        <Button onClick={() => navigate({ to: "/app/orders" })}>Back</Button>
      </div>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Status</h3>
          <p>{order.status}</p>
        </div>
        <div>
          <h3 className="font-semibold">Total Amount</h3>
          <p>₹{order.totalAmount}</p>
        </div>
        <div>
          <h3 className="font-semibold">Order Items</h3>
          <div className="space-y-2">
            {order.orderItems.map((item) => (
              <div key={item.id} className="border p-2 rounded">
                <p>Product ID: {item.productId}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹{item.unitPrice}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
