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
    client.admin.listUsers.useQuery(["pending-registrations-buyers"], {
      query: { role: "BUYER", verified: "false" },
    });
  const { data: sellers, isLoading: isSellersLoading } =
    client.admin.listUsers.useQuery(["pending-registrations-sellers"], {
      query: { role: "SELLER", verified: "false" },
    });

  const queryClient = new QueryClient();

  const verifyMutation = client.admin.verifyRegistration.useMutation({
    onSuccess: () => {
      toast.success("Users verified successfully");
      setSelectedUsers([]);

      queryClient.invalidateQueries({
        queryKey: ["pending-registrations-buyers"],
      });
      queryClient.invalidateQueries({
        queryKey: ["pending-registrations-sellers"],
      });
    },
    onError: (error) => {
      toast.error("Failed to verify users", {
        description: error.body as string,
      });
    },
  });

  const deleteMutation = client.admin.deleteRegistration.useMutation({
    onSuccess: () => {
      toast.success("Users deleted successfully");
      setSelectedUsers([]);

      queryClient.invalidateQueries({
        queryKey: ["pending-registrations-buyers"],
      });
      queryClient.invalidateQueries({
        queryKey: ["pending-registrations-sellers"],
      });
    },
    onError: (error) => {
      toast.error("Failed to delete users", {
        description: error.body as string,
      });
    },
  });

  const handleDelete = async () => {
    if (!selectedUsers.length) return;
    const count = selectedUsers.length;
    const confirmed = window.confirm(
      `Are you sure you want to delete ${count} selected user${count > 1 ? "s" : ""}? This action cannot be undone.`
    );
    if (!confirmed) return;
    await deleteMutation.mutateAsync({ body: { userIds: selectedUsers } });
  };

  const handleVerify = async () => {
    if (!selectedUsers.length) return;
    await verifyMutation.mutateAsync({ body: { userIds: selectedUsers } });
  };

  if (isBuyersLoading || isSellersLoading) return <div>Loading...</div>;

  const renderSellersTable = () => (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">
        Pending Seller Registrations
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedUsers(
                      sellers?.body.data.users.map((user) => user.id) ?? []
                    );
                  } else {
                    setSelectedUsers([]);
                  }
                }}
              />
            </TableHead>
            <TableHead>Application Date</TableHead>
            <TableHead>Mark</TableHead>
            <TableHead>Business Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sellers?.body.data.users.map((user) => (
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
              <TableCell>
                {new Date(user.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell>
                {"BrandMarks" in user.profile
                  ? (user.profile.BrandMarks as any)[0]?.name || "N/A"
                  : "N/A"}
              </TableCell>
              <TableCell>{user.profile.businessName}</TableCell>
              <TableCell>
                <Badge>{user.role}</Badge>
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

  const renderBuyersTable = () => (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">
        Pending Buyer Registrations
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedUsers(
                      buyers?.body.data.users.map((user) => user.id) ?? []
                    );
                  } else {
                    setSelectedUsers([]);
                  }
                }}
              />
            </TableHead>
            <TableHead>Application Date</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Town</TableHead>
            <TableHead>Role</TableHead>
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
              <TableCell>
                {new Date(user.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell>{user.profile.ownerName}</TableCell>
              <TableCell>{user.profile.district}</TableCell>
              <TableCell>
                <Badge>{user.role}</Badge>
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
        <div className="flex items-center gap-2">
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={!selectedUsers.length || deleteMutation.isPending}
          >
            {deleteMutation.isPending ? "Deleting..." : "Delete Selected"}
          </Button>
          <Button
            onClick={handleVerify}
            disabled={!selectedUsers.length || verifyMutation.isPending}
          >
            {verifyMutation.isPending ? "Verifying..." : "Verify Selected"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {renderSellersTable()}
        {renderBuyersTable()}
      </div>

      <UserDetailsModal
        user={selectedUser}
        isOpen={!!selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    </div>
  );
}
