import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import client from "@/api-client";
import { UserDetailsModal } from "./user-details-modal";
import { QueryClient } from "@tanstack/react-query";

export function RegistrationApprovalView() {
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const { data: buyers, isLoading: isBuyersLoading } =
    client.admin.listPendingVerifications.useQuery(
      ["pending-registrations-buyers"],
      { query: { role: "BUYER" } }
    );
  const { data: sellers, isLoading: isSellersLoading } =
    client.admin.listPendingVerifications.useQuery(
      ["pending-registrations-sellers"],
      { query: { role: "SELLER" } }
    );

  const queryClient = new QueryClient();

  const verifyMutation = client.admin.verifyRegistration.useMutation({
    onSuccess: () => {
      toast.success("Users verified successfully");
      setSelectedUsers([]);

      queryClient.invalidateQueries({ queryKey: ["pending-registrations"] });
    },
    onError: (error) => {
      toast.error("Failed to verify users", {
        description: error.body as string,
      });
    },
  });

  const handleVerify = async () => {
    if (!selectedUsers.length) return;
    await verifyMutation.mutateAsync({ body: { userIds: selectedUsers } });
  };

  if (isBuyersLoading || isSellersLoading) return <div>Loading...</div>;

  const renderTable = (data: typeof buyers, title: string) => (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedUsers(
                      data?.body.data.users.map((user) => user.id) ?? []
                    );
                  } else {
                    setSelectedUsers([]);
                  }
                }}
              />
            </TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Registration Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.body.data.users.map((user) => (
            <TableRow
              key={user.id}
              className="cursor-pointer hover:bg-muted/50"
              onClick={() => setSelectedUser(user)}
            >
              <TableCell onClick={(e) => e.stopPropagation()}>
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(user.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedUsers([...selectedUsers, user.id]);
                    } else {
                      setSelectedUsers(
                        selectedUsers.filter((id) => id !== user.id)
                      );
                    }
                  }}
                />
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Badge>{user.role}</Badge>
              </TableCell>
              <TableCell>
                {new Date(user.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <Badge variant={user.verified ? "default" : "outline"}>
                  {user.verified ? "Verified" : "Pending"}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Pending Registrations</h1>
        <Button
          onClick={handleVerify}
          disabled={!selectedUsers.length || verifyMutation.isPending}
        >
          {verifyMutation.isPending ? "Verifying..." : "Verify Selected"}
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {renderTable(sellers, "Pending Seller Registrations")}
        {renderTable(buyers, "Pending Buyer Registrations")}
      </div>

      <UserDetailsModal
        user={selectedUser}
        isOpen={!!selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    </div>
  );
}
