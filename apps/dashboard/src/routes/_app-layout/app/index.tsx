import { Card, CardContent } from "@/components/ui/card";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Users } from "lucide-react";
import client from "@/api-client";
import { useAuthStore } from "@/stores/auth.store";

export const Route = createFileRoute("/_app-layout/app/")({
  component: () => {
    const user = useAuthStore((state) => state.user);

    if (!user) return null;

    if (user.role === "ADMIN") return <AdminDash />;

    return <SellerDash />;
  },
});

const SellerDash = () => {
  const { data, isLoading } = client.sellers.stats.useQuery(["dash-stats"]);
  if (isLoading) return <div>loading...</div>;
  if (!data || data.status !== 200) return <div>something went wrong</div>;
  return (
    <div className="p-8">
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
        <Link to="/app/orders" className="block">
          <Card className="hover:bg-muted/50 transition-colors">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{data.body.totalSales}</h2>
                <p className="text-muted-foreground">Total Sales</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link to="/app/orders" className="block">
          <Card className="hover:bg-muted/50 transition-colors">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{data.body.totalOrders}</h2>
                <p className="text-muted-foreground">Total Orders</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link to="/app/products" className="block">
          <Card className="hover:bg-muted/50 transition-colors">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  {data.body.totalProducts}
                </h2>
                <p className="text-muted-foreground">Listed Products</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

const AdminDash = () => {
  const { data, isLoading } = client.admin.stats.useQuery(["dash-stats"]);
  if (isLoading) return <div>loading...</div>;
  if (!data || data.status !== 200) return <div>something went wrong</div>;

  return (
    <div className="p-8">
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
        <Link to="/app/buyers" className="block">
          <Card className="hover:bg-muted/50 transition-colors">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{data.body.totalBuyers}</h2>
                <p className="text-muted-foreground">Total Verified Buyers</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link to="/app/sellers" className="block">
          <Card className="hover:bg-muted/50 transition-colors">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{data.body.totalSellers}</h2>
                <p className="text-muted-foreground">Total Verified Sellers</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link to="/app/registrations" className="block">
          <Card className="hover:bg-muted/50 transition-colors">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  {data.body.totalPendingVerifications}
                </h2>
                <p className="text-muted-foreground">Pending Registrations</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};
