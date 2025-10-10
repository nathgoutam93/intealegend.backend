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
// import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function VerifiedBuyersView() {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [offset, setOffset] = useState(0);
  const limit = 20;

  const queryParams = {
    role: "BUYER" as const,
    verified: "true",
    limit: limit.toString(),
    offset: offset.toString(),
  };

  const { data: buyers, isLoading } = client.admin.listUsers.useQuery(
    ["verified-buyers", queryParams],
    { query: queryParams }
  );

  if (isLoading) return <div>Loading...</div>;
  if (!buyers || buyers.status !== 200) return <div>Something went wrong</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Verified Buyers</h1>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Registration Date</TableHead>
            <TableHead>Business Name</TableHead>
            <TableHead>Contact Number</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Town</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {buyers?.body.data.users.map((user) => (
            <TableRow
              key={user.id}
              className="cursor-pointer hover:bg-muted/50"
              onClick={() => setSelectedUser(user)}
            >
              <TableCell>{user.uniqueIdentifier}</TableCell>
              <TableCell>
                {new Date(user.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell>{user.profile.businessName}</TableCell>
              <TableCell>{user.profile.phone}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                {
                  // @ts-ignore
                  user.profile.town
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-muted-foreground">
          Showing {offset + 1} to {Math.min(offset + limit, buyers.body.total)}{" "}
          of {buyers.body.total} buyers
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setOffset(Math.max(0, offset - limit));
                }}
                className={offset === 0 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setOffset(offset + limit);
                }}
                className={
                  offset + limit >= buyers.body.total
                    ? "pointer-events-none opacity-50"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      <UserDetailsModal
        user={selectedUser}
        isOpen={!!selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    </div>
  );
}
