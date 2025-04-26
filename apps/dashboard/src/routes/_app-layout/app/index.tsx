import { Card, CardContent } from "@/components/ui/card";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChartBar,
  ClipboardList,
  Clock2,
  Notebook,
  Package,
  Package2,
  ShieldCheck,
  ShieldUser,
} from "lucide-react";
import client from "@/api-client";
import { useAuthStore } from "@/stores/auth.store";
import { Button } from "@/components/ui/button";

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
    <div className="p-8 space-y-8">
      {/* Sales Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Orders</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Link to="/app/orders" className="block">
            <Card className="hover:bg-muted/50 transition-colors">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <ChartBar className="w-8 h-8 text-primary" />
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
                  <Clock2 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    {data.body.totalOrders}
                  </h2>
                  <p className="text-muted-foreground">Total Orders</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      {/* Products Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Products</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Link to="/app/products" className="block">
            <Card className="hover:bg-muted/50 transition-colors">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Package className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    {data.body.products.listed}
                  </h2>
                  <p className="text-muted-foreground">Listed Products</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link to="/app/products" className="block">
            <Card className="hover:bg-muted/50 transition-colors">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Package2 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    {data.body.products.total - data.body.products.listed}
                  </h2>
                  <p className="text-muted-foreground">Products in Draft</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

const AdminDash = () => {
  const { data, isLoading } = client.admin.stats.useQuery(["dash-stats"]);
  if (isLoading) return <div>loading...</div>;
  if (!data || data.status !== 200) return <div>something went wrong</div>;

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-end gap-4">
        <Button className="gap-2">
          <Notebook /> <span>Deal Book</span>
        </Button>
        <Button className="gap-2">
          <ClipboardList /> <span>Market Report</span>
        </Button>
      </div>

      {/* Products Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Products</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Link to="/app/products" className="block">
            <Card className="hover:bg-muted/50 transition-colors">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Package className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    {data.body.products.listed}
                  </h2>
                  <p className="text-muted-foreground">Live Products</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link to="/app/products" className="block">
            <Card className="hover:bg-muted/50 transition-colors">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Package2 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    {data.body.products.pending}
                  </h2>
                  <p className="text-muted-foreground">Products in Draft</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      {/* Sales Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Orders</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* <Link to="/app/orders" className="block">
            <Card className="hover:bg-muted/50 transition-colors">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <ChartBar className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    {dummyData.sales.totalSales}
                  </h2>
                  <p className="text-muted-foreground">Total Sales</p>
                </div>
              </CardContent>
            </Card>
          </Link> */}
          <Link to="/app/orders" className="block">
            <Card className="hover:bg-muted/50 transition-colors">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Clock2 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    {data.body.orders.pending}
                  </h2>
                  <p className="text-muted-foreground">Pending Orders</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      {/* Users Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Users</h2>
        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
          <Link to="/app/sellers" className="block">
            <Card className="hover:bg-muted/50 transition-colors">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    {data.body.users.seller}
                  </h2>
                  <p className="text-muted-foreground">Verified Sellers</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link to="/app/buyers" className="block">
            <Card className="hover:bg-muted/50 transition-colors">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <ShieldUser className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    {data.body.users.buyer}
                  </h2>
                  <p className="text-muted-foreground">Verified Buyers</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link to="/app/registrations" className="block">
            <Card className="hover:bg-muted/50 transition-colors">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Clock2 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    {data.body.users.pending}
                  </h2>
                  <p className="text-muted-foreground">Pending Registrations</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      {/* Brands Section */}
      {/* <div>
        <h2 className="text-xl font-semibold mb-4">Brands</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Link to="/app/brands" className="block">
            <Card className="hover:bg-muted/50 transition-colors">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Store className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    {dummyData.brands.verifiedBrands}
                  </h2>
                  <p className="text-muted-foreground">Verified Brand Marks</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link to="/app/brands" className="block">
            <Card className="hover:bg-muted/50 transition-colors">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Clock2 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    {dummyData.brands.pendingBrands}
                  </h2>
                  <p className="text-muted-foreground">Pending Brand Marks</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div> */}
    </div>
  );
};
