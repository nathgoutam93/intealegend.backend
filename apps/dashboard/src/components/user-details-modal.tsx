import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

type UserDetailsModalProps = {
  user: {
    id: number;
    email: string;
    role: string;
    verified: boolean;
    createdAt: string;
    profile: {
      fullName?: string;
      businessName?: string;
      address?: string;
      phone?: string;
      taxId?: string;
      // Add other profile fields based on your schema
    };
  } | null;
  isOpen: boolean;
  onClose: () => void;
};

export function UserDetailsModal({
  user,
  isOpen,
  onClose,
}: UserDetailsModalProps) {
  if (!user) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Registration Details</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-sm text-muted-foreground">
                Email
              </h3>
              <p>{user.email}</p>
            </div>
            <div>
              <h3 className="font-medium text-sm text-muted-foreground">
                Role
              </h3>
              <Badge>{user.role}</Badge>
            </div>
            <div>
              <h3 className="font-medium text-sm text-muted-foreground">
                Status
              </h3>
              <Badge variant={user.verified ? "default" : "outline"}>
                {user.verified ? "Verified" : "Pending"}
              </Badge>
            </div>
            <div>
              <h3 className="font-medium text-sm text-muted-foreground">
                Registration Date
              </h3>
              <p>{new Date(user.createdAt).toLocaleString()}</p>
            </div>
          </div>
          <div className="space-y-4">
            {user.profile && (
              <>
                {user.profile.fullName && (
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">
                      Full Name
                    </h3>
                    <p>{user.profile.fullName}</p>
                  </div>
                )}
                {user.profile.businessName && (
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">
                      Business Name
                    </h3>
                    <p>{user.profile.businessName}</p>
                  </div>
                )}
                {user.profile.address && (
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">
                      Address
                    </h3>
                    <p>{user.profile.address}</p>
                  </div>
                )}
                {user.profile.phone && (
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">
                      Phone
                    </h3>
                    <p>{user.profile.phone}</p>
                  </div>
                )}
                {user.profile.taxId && (
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">
                      Tax ID
                    </h3>
                    <p>{user.profile.taxId}</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
