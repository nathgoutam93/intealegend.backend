import { Card, CardContent } from "@/components/ui/card";
import {
  createFileRoute,
  Link,
  redirect,
  useNavigate,
} from "@tanstack/react-router";
import { Users, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import client from "@/api-client";

export const Route = createFileRoute("/dashboard")({
  beforeLoad: async () => {
    // Check if user is authenticated
    const token = localStorage.getItem("accessToken");
    if (!token) {
      throw redirect({
        to: "/login",
      });
    }
  },
  component: () => {
    const navigate = useNavigate();
    const { data, isLoading } = client.admin.stats.useQuery(["dash-stats"]);
    console.log(data);

    const handleLogout = () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      navigate({ to: "/login" });
    };

    if (isLoading) return <div>loading...</div>;

    if (!data || data.status !== 200) return <div>something went wrong</div>;

    return (
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
          <Link to="/buyers" className="block">
            <Card className="hover:bg-muted/50 transition-colors">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    {data.body.totalBuyers}
                  </h2>
                  <p className="text-muted-foreground">Total Verified Buyers</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link to="/sellers" className="block">
            <Card className="hover:bg-muted/50 transition-colors">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    {data.body.totalSellers}
                  </h2>
                  <p className="text-muted-foreground">
                    Total Verified Sellers
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link to="/registrations" className="block">
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
  },
});
