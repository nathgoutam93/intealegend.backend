import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import client from "@/api-client";
import { UserDetailsModal } from "./user-details-modal";

export function VerifiedBuyersView() {
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const { data: buyers, isLoading } = client.admin.listUsers.useQuery(
    ["verified-buyers"],
    { query: { role: "BUYER", verified: "true" } }
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Verified Buyers</h1>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Business Name</TableHead>
            <TableHead>Contact Number</TableHead>
            <TableHead>Registration Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {buyers?.body.data.users.map((user) => (
            <TableRow
              key={user.id}
              className="cursor-pointer hover:bg-muted/50"
              onClick={() => setSelectedUser(user)}
            >
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.profile.businessName}</TableCell>
              <TableCell>{user.profile.phone}</TableCell>
              <TableCell>
                {new Date(user.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <Badge>Verified</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <UserDetailsModal
        user={selectedUser}
        isOpen={!!selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    </div>
  );
}
