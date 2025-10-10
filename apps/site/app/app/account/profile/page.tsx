"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { client } from "@/lib/api-client";
import { useAuthStore } from "@/store/auth.store";
import { format } from "date-fns";

export default function ProfilePage() {
  const { data } = client.buyers.getProfile.useQuery(["profile"]);

  if (data?.status !== 200) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>
          View and manage your profile information.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid gap-2">
            <h3 className="text-lg font-medium">Business Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Owner</p>
                <p>{data.body.ownerName}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p>{data.body.email}</p>
              </div>
            </div>
          </div>
          <div className="grid gap-2">
            <h3 className="text-lg font-medium">Account Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Member Since</p>
                <p>{format(data.body.createdAt, "dd MMM yyyy")}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
