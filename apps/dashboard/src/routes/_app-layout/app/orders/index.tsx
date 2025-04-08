import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import client from "@/api-client";

export const Route = createFileRoute("/_app-layout/app/orders/")({
  component: OrdersPage,
});

function OrdersPage() {
  const { data, isLoading } = client.sellers.getOrders.useQuery(["orders"], {
    query: {
      offset: "0",
      limit: "10",
      sortBy: "createdAt",
      sortOrder: "desc",
      status: undefined,
      startDate: undefined,
      endDate: undefined,
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (!data || data.status !== 200) return <div>Something went wrong</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Orders</h1>
      <div className="space-y-4">
        {data.body.data.map((order) => (
          <Link
            key={order.id}
            to={"/app/orders/$orderId"}
            params={{ orderId: order.id.toString() }}
          >
            <div className="border rounded-lg p-4 hover:bg-muted/50">
              <div className="flex justify-between">
                <h3 className="font-semibold">Order #{order.id}</h3>
                <span className="text-sm bg-primary/10 px-2 py-1 rounded">
                  {order.status}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Total Amount: ₹{order.totalAmount}
              </p>
              <p className="text-sm text-muted-foreground">
                Date: {new Date(order.createdAt).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
