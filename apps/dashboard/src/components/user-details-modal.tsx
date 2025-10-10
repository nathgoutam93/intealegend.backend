// @ts-nocheck

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Printer, Ban } from "lucide-react";
import { PendingUser } from "@intealegend/api-contract";
import client from "@/api-client";
import { QueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

interface UserDetailsModalProps {
  user: PendingUser;
  isOpen: boolean;
  onClose: () => void;
}

export function UserDetailsModal({
  user,
  isOpen,
  onClose,
}: UserDetailsModalProps) {
  if (!user) return null;

  const isSeller = user.role === "SELLER";

  const queryClient = new QueryClient();

  const toggleBanMutation = client.admin.toggleUserBan.useMutation({
    onSuccess: (res) => {
      toast.success(
        `User ${res.body.isSuspended ? "Banned" : "Unbanned"}  successfully`
      );

      queryClient.invalidateQueries({
        queryKey: ["verified-buyers"],
      });
      queryClient.invalidateQueries({
        queryKey: ["verified-sellers"],
      });

      toast;
    },
    onError: (error) => {
      toast.error("Failed", {
        description: error.body as string,
      });
    },
  });

  const handleToggleBan = async () => {
    await toggleBanMutation.mutateAsync({ params: { id: user.id }, body: {} });
  };

  const handlePrint = () => {
    const printWindow = window.open("", "", "width=800,height=600");
    if (!printWindow) return;

    const content = document.querySelector("[data-print-content]");
    if (!content) return;

    // Clone the content to modify it for printing
    const contentClone = content.cloneNode(true) as HTMLElement;

    // Ensure all images have complete URLs
    const images = contentClone.getElementsByTagName("img");
    Array.from(images).forEach((img) => {
      img.src = img.src; // This converts relative URLs to absolute
    });

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>User Details - ${user.profile.businessName}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            .header { text-align: center; margin-bottom: 20px; }
            .section { margin-bottom: 20px; }
            .section-title { font-weight: bold; margin-bottom: 10px; }
            .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
            .field { margin-bottom: 8px; }
            .label { color: #666; font-size: 0.9em; }
            .value { margin-top: 2px; }
            img { max-width: 200px; height: auto; display: block; margin: 10px 0; }
            @page { size: A4; margin: 2cm; }
            @media print {
              body { -webkit-print-color-adjust: exact; }
              img { max-width: 100%; page-break-inside: avoid; }
            }
          </style>
        </head>
        <body>
          ${contentClone.innerHTML}
        </body>
      </html>
    `);

    printWindow.document.close();

    // Wait for images to load before printing
    const loadImages = Array.from(printWindow.document.images).map((img) => {
      return new Promise((resolve, reject) => {
        if (img.complete) {
          resolve(null);
        } else {
          img.onload = () => resolve(null);
          img.onerror = reject;
        }
      });
    });

    Promise.all(loadImages)
      .then(() => {
        // Add a small delay to ensure styles are applied
        setTimeout(() => {
          printWindow.focus();
          printWindow.print();
          printWindow.close();
        }, 500);
      })
      .catch((error) => {
        console.error("Error loading images:", error);
        printWindow.focus();
        printWindow.print();
        printWindow.close();
      });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader className="flex flex-row justify-between items-center">
          <DialogTitle>User Details</DialogTitle>
          <div className="flex space-x-1">
            <Button
              variant="outline"
              onClick={handleToggleBan}
              className="space-x-2"
            >
              <Ban className="h-4 w-4" />
              <span>{user.isSuspended ? "Unban" : "Ban"}</span>
            </Button>
            <Button variant="outline" size="icon" onClick={handlePrint}>
              <Printer className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-4 overflow-y-auto pr-6" data-print-content>
          {/* Basic Info */}
          <div className="space-y-2">
            <h3 className="font-semibold">Basic Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p>{user.email}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Role</p>
                <Badge>{user.role}</Badge>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Registration Date
                </p>
                <p>{new Date(user.createdAt).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <Badge variant={user.verified ? "default" : "outline"}>
                  {user.verified ? "Verified" : "Pending"}
                </Badge>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-semibold">Business Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Business Name</p>
                  <p>{user.profile.businessName}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Business Type</p>
                  <p>{user.profile.businessType}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Owner Name</p>
                  <p>{user.profile.ownerName}</p>
                </div>

                {isSeller && (
                  <>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Brand Name
                      </p>
                      <p>{user.profile.brandName || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Transport Name
                      </p>
                      <p>{user.profile.transportName || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        TMCO Number
                      </p>
                      <p>{user.profile.tmcoNumber || "N/A"}</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Contact Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p>{user.profile.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p>{user.profile.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Secondary Contact
                  </p>
                  <p>{user.profile.secondaryContactName || "N/A"}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Secondary Contact Role
                  </p>
                  <p>{user.profile.secondaryContactDesignation || "N/A"}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Secondary Contact Number
                  </p>
                  <p>{user.profile.secondaryContactNumber || "N/A"}</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Address Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p>{user.profile.address}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">State</p>
                  <p>{user.profile.state}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">District</p>
                  <p>{user.profile.district}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pincode</p>
                  <p>{user.profile.pincode}</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Business Documents</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">GST Number</p>
                  <p>{user.profile.gstNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">PAN Number</p>
                  <p>{user.profile.panNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">FSSAI Number</p>
                  <p>{user.profile.fssaiNumber || "N/A"}</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Banking Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Bank Account Number
                  </p>
                  <p>{user.profile.bankAccountNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">IFSC Code</p>
                  <p>{user.profile.bankIfscCode}</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Documents</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {
                  <>
                    {user.profile.panCard && (
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          PAN Card
                        </p>
                        <img
                          src={user.profile.panCard}
                          alt="PAN Card"
                          className="w-full h-40 object-cover rounded-lg border"
                        />
                      </div>
                    )}
                    {user.profile.gstCertificate && (
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          GST Certificate
                        </p>
                        <img
                          src={user.profile.gstCertificate}
                          alt="GST Certificate"
                          className="w-full h-40 object-cover rounded-lg border"
                        />
                      </div>
                    )}
                    {user.profile.fssaiLicense && (
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          FSSAI License
                        </p>
                        <img
                          src={user.profile.fssaiLicense}
                          alt="FSSAI License"
                          className="w-full h-40 object-cover rounded-lg border"
                        />
                      </div>
                    )}
                    {isSeller && user.profile.brandLogo && (
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          Brand Logo
                        </p>
                        <img
                          src={user.profile.brandLogo}
                          alt="Brand Logo"
                          className="w-full h-40 object-cover rounded-lg border"
                        />
                      </div>
                    )}
                    {isSeller && user.profile.brandCertificate && (
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          Brand Certificate
                        </p>
                        <img
                          src={user.profile.brandCertificate}
                          alt="Brand Certificate"
                          className="w-full h-40 object-cover rounded-lg border"
                        />
                      </div>
                    )}
                    {isSeller && user.profile.cancelledCheque && (
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          Cancelled Cheque
                        </p>
                        <img
                          src={user.profile.cancelledCheque}
                          alt="Cancelled Cheque"
                          className="w-full h-40 object-cover rounded-lg border"
                        />
                      </div>
                    )}
                  </>
                }
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
