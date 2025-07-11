import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import client from "@/api-client";
import { UserDetailsModal } from "./user-details-modal";

export function VerifiedSellersView() {
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const { data: sellers, isLoading } = client.admin.listUsers.useQuery(
    ["verified-sellers"],
    { query: { role: "SELLER", verified: "true" } }
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Verified Sellers</h1>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Mark</TableHead>
            <TableHead>Business Name</TableHead>
            <TableHead>Contact Number</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Registration Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sellers?.body.data.users.map((user) => (
            <TableRow
              key={user.id}
              className="cursor-pointer hover:bg-muted/50"
              onClick={() => setSelectedUser(user)}
            >
              <TableCell>{user.uniqueIdentifier}</TableCell>

              <TableCell>
                {
                  // @ts-ignore
                  user.profile.BrandMarks[0].name
                }
              </TableCell>
              <TableCell>{user.profile.businessName}</TableCell>
              <TableCell>{user.profile.phone}</TableCell>
              <TableCell>{user.profile.email}</TableCell>
              <TableCell>
                {new Date(user.createdAt).toLocaleDateString()}
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
