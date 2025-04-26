import { useState } from "react";
import {
  createFileRoute,
  useNavigate,
  useRouter,
} from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import client from "@/api-client";
import type { Product } from "@intealegend/api-contract";
import { useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "@/stores/auth.store";
import { StarRating } from "@/components/ui/star-rating";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const Route = createFileRoute("/_app-layout/app/products/$productId")({
  component: ProductDetailPage,
});

type ProductInput = Partial<
  Omit<
    Product,
    "id" | "sellerId" | "createdAt" | "updatedAt" | "cartItems" | "orderItems"
  >
>;

function ProductDetailPage() {
  const router = useRouter();
  const { productId } = Route.useParams();
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const queryClient = useQueryClient();
  const [isEditing, setIsEditing] = useState(false);
  const [inventoryDialogOpen, setInventoryDialogOpen] = useState(false);
  const [inventoryAction, setInventoryAction] = useState<"add" | "remove">(
    "add"
  );
  const [inventoryAmount, setInventoryAmount] = useState(0);

  // Rating state for admin
  const [ratings, setRatings] = useState({
    appearanceScore: 0,
    liquorScore: 0,
    tasteScore: 0,
    infusionScore: 0,
    gradingScore: 0,
    volumeScore: 0,
  });
  const [status, setStatus] = useState<"APPROVED" | "REJECTED">("APPROVED");

  const queryFn =
    user?.role === "ADMIN"
      ? client.admin.getProduct
      : client.sellers.getProduct;

  const { data, isLoading } = queryFn.useQuery(
    ["product", productId],
    {
      params: { id: productId },
    },
    {
      queryKey: ["product", productId],
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    }
  );

  const mutationFn =
    user?.role === "ADMIN"
      ? client.admin.updateProduct
      : client.sellers.updateProduct;

  const updateProductMutation = mutationFn.useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product", productId] });
      router.invalidate();
    },
  });

  const handleUpdate = async (formData: FormData) => {
    if (user?.role === "ADMIN") {
      // For admin, only update scores and status
      try {
        await updateProductMutation.mutateAsync({
          params: { id: productId },
          body: {
            ...ratings,
            status,
          },
        });
      } catch (error) {
        console.error(error);
      }
      return;
    }

    // Original seller update logic
    const updatedProduct: ProductInput = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      grade: formData.get("grade") as string,
      mark: Number(formData.get("mark")),
      invoiceNo: formData.get("invoiceNo") as string,
      productionMonth: formData.get("productionMonth") as string,
      weightPerUnit: Number(formData.get("weightPerUnit")),
      sampleWeight: formData.get("sampleWeight")
        ? Number(formData.get("sampleWeight"))
        : null,
      location: formData.get("location") as string,
      origin: formData.get("origin") as string,
      pricePerUnit: Number(formData.get("pricePerUnit")),
      mbp: formData.get("mbp") ? Number(formData.get("mbp")) : null,
      imageUrl: (formData.get("imageUrl") as string) || null,
      quantity: data?.body.quantity || 0,
    };

    try {
      updateProductMutation.mutate({
        params: { id: productId },
        body: updatedProduct,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleInventoryUpdate = async () => {
    if (!data?.body) return;

    const currentQuantity = data.body.quantity;
    const newQuantity =
      inventoryAction === "add"
        ? currentQuantity + inventoryAmount
        : currentQuantity - inventoryAmount;

    if (newQuantity < 0) {
      alert("Cannot have negative inventory");
      return;
    }

    try {
      await updateProductMutation.mutateAsync({
        params: { id: productId },
        body: {
          quantity: newQuantity,
        },
      });
      setInventoryDialogOpen(false);
      setInventoryAmount(0);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLiveStatusToggle = async () => {
    if (!data?.body) return;
    try {
      await updateProductMutation.mutateAsync({
        params: { id: productId },
        body: {
          isLive: !product.isLive,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (!data || data.status !== 200) return <div>Something went wrong</div>;

  const product = data.body;

  // Initialize ratings from product data if not set
  if (
    user?.role === "ADMIN" &&
    ratings.appearanceScore === 0 &&
    product.appearanceScore !== 0
  ) {
    setRatings({
      appearanceScore: product.appearanceScore,
      liquorScore: product.liquorScore,
      tasteScore: product.tasteScore,
      infusionScore: product.infusionScore,
      gradingScore: product.gradingScore,
      volumeScore: product.volumeScore,
    });
    // If status is PENDING, default to APPROVED, otherwise use the current status
    setStatus(
      product.status === "PENDING"
        ? "APPROVED"
        : (product.status as "APPROVED" | "REJECTED")
    );
  }

  return (
    <div className="p-8">
      <div className="flex justify-between mb-6">
        <Button
          variant="outline"
          onClick={() => navigate({ to: "/app/products" })}
        >
          Back
        </Button>
        {user?.role === "SELLER" && !isEditing && (
          <Button onClick={() => setIsEditing(true)}>Edit</Button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Details Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Product Details</h2>

          {isEditing ? (
            // Editable form for sellers
            <form
              id="product-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdate(new FormData(e.currentTarget));
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-muted-foreground">
                    Brand Mark
                  </h3>
                  <Input name="mark" defaultValue={product.mark} />
                </div>
                <div>
                  <h3 className="font-medium text-muted-foreground">Grade</h3>
                  <Input name="grade" defaultValue={product.grade} />
                </div>
              </div>

              <div>
                <h3 className="font-medium text-muted-foreground">
                  Invoice Number
                </h3>
                <Input name="invoiceNo" defaultValue={product.invoiceNo} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-muted-foreground">
                    Weight Per Package (kg)
                  </h3>
                  <Input
                    name="weightPerUnit"
                    type="number"
                    min={0}
                    step="0.01"
                    defaultValue={product.weightPerUnit}
                  />
                </div>
                <div>
                  <h3 className="font-medium text-muted-foreground">
                    Sample Weight (kg)
                  </h3>
                  <Input
                    name="sampleWeight"
                    type="number"
                    min={0}
                    step="0.01"
                    defaultValue={product.sampleWeight || ""}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-muted-foreground">
                    Location
                  </h3>
                  <Input name="location" defaultValue={product.location} />
                </div>
                <div>
                  <h3 className="font-medium text-muted-foreground">Origin</h3>
                  <Input name="origin" defaultValue={product.origin} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-muted-foreground">
                    Price Per Unit
                  </h3>
                  <Input
                    name="pricePerUnit"
                    type="number"
                    min={0}
                    step="0.01"
                    defaultValue={product.pricePerUnit}
                  />
                </div>
                <div>
                  <h3 className="font-medium text-muted-foreground">MBP</h3>
                  <Input
                    name="mbp"
                    type="number"
                    min={0}
                    defaultValue={product.mbp || ""}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-muted-foreground">
                    Production Month
                  </h3>
                  <Input
                    name="productionMonth"
                    type="month"
                    defaultValue={product.productionMonth}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  {updateProductMutation.isPending
                    ? "Saving..."
                    : "Save Changes"}
                </Button>
              </div>
            </form>
          ) : (
            // Read-only view
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-muted-foreground">
                    Brand Mark
                  </h3>
                  <p className="text-lg">{product.brandMark.name}</p>
                </div>
                <div>
                  <h3 className="font-medium text-muted-foreground">Grade</h3>
                  <p className="text-lg">{product.grade}</p>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-muted-foreground">
                  Invoice Number
                </h3>
                <p className="text-lg">{product.invoiceNo}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-muted-foreground">
                    Weight Per Package
                  </h3>
                  <p className="text-lg">{product.weightPerUnit} kg</p>
                </div>
                <div>
                  <h3 className="font-medium text-muted-foreground">
                    Sample Weight
                  </h3>
                  <p className="text-lg">{product.sampleWeight || "N/A"} kg</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-muted-foreground">
                    Location
                  </h3>
                  <p className="text-lg">{product.location}</p>
                </div>
                <div>
                  <h3 className="font-medium text-muted-foreground">Origin</h3>
                  <p className="text-lg">{product.origin}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-muted-foreground">
                    Price Per Unit
                  </h3>
                  <p className="text-lg">₹{product.pricePerUnit}</p>
                </div>
                <div>
                  <h3 className="font-medium text-muted-foreground">MBP</h3>
                  <p className="text-lg">{product.mbp || "N/A"}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-muted-foreground">
                    Production Month
                  </h3>
                  <p className="text-lg">
                    {new Date(product.productionMonth).toLocaleDateString(
                      "en-US",
                      { month: "long", year: "numeric" }
                    )}
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-muted-foreground">
                    Quantity
                  </h3>
                  <p className="text-lg">{product.quantity} units</p>
                </div>
              </div>
            </>
          )}

          {user?.role === "SELLER" && (
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">Current Inventory</h3>
                    <p className="text-2xl font-bold">
                      {product.quantity} units
                    </p>
                  </div>
                  <Dialog
                    open={inventoryDialogOpen}
                    onOpenChange={setInventoryDialogOpen}
                  >
                    <DialogTrigger asChild>
                      <Button variant="outline">Update Inventory</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Update Inventory</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="flex space-x-4">
                          <Button
                            variant={
                              inventoryAction === "add" ? "default" : "outline"
                            }
                            onClick={() => setInventoryAction("add")}
                          >
                            Add to Inventory
                          </Button>
                          <Button
                            variant={
                              inventoryAction === "remove"
                                ? "default"
                                : "outline"
                            }
                            onClick={() => setInventoryAction("remove")}
                          >
                            Remove from Inventory
                          </Button>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Package to {inventoryAction}
                          </label>
                          <Input
                            type="number"
                            min={0}
                            value={inventoryAmount || ""}
                            onChange={(e) =>
                              setInventoryAmount(Number(e.target.value))
                            }
                          />
                        </div>
                        <div className="flex justify-end space-x-2">
                          <Button
                            variant="outline"
                            onClick={() => {
                              setInventoryDialogOpen(false);
                              setInventoryAmount(0);
                            }}
                          >
                            Cancel
                          </Button>
                          <Button
                            onClick={handleInventoryUpdate}
                            disabled={inventoryAmount <= 0}
                          >
                            {inventoryAction === "add" ? "Add" : "Remove"}
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">Product Status</h3>
                    <p className="text-sm text-muted-foreground">
                      {product.isLive ? "Currently Live" : "Currently in Draft"}
                    </p>
                  </div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div>
                          <Button
                            onClick={handleLiveStatusToggle}
                            disabled={product.status !== "APPROVED"}
                            variant={product.isLive ? "default" : "outline"}
                          >
                            {product.isLive ? "Set to Draft" : "Make Live"}
                          </Button>
                        </div>
                      </TooltipTrigger>
                      {product.status !== "APPROVED" && (
                        <TooltipContent>
                          <p>
                            Product needs to be approved before it can go live
                          </p>
                        </TooltipContent>
                      )}
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
          )}

          {product.imageUrl && (
            <div>
              <h3 className="font-medium text-muted-foreground mb-2">
                Product Image
              </h3>
              <img
                src={product.imageUrl}
                alt={product.name ?? "Product"}
                className="max-w-md rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Admin Rating Section */}
        {user?.role === "ADMIN" && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Product Rating</h2>

            <form
              id="rating-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdate(new FormData(e.currentTarget));
              }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium text-muted-foreground mb-2">
                    Appearance
                  </h3>
                  <StarRating
                    value={ratings.appearanceScore}
                    onChange={(value) =>
                      setRatings({ ...ratings, appearanceScore: value })
                    }
                  />
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium text-muted-foreground mb-2">
                    Liquor
                  </h3>
                  <StarRating
                    value={ratings.liquorScore}
                    onChange={(value) =>
                      setRatings({ ...ratings, liquorScore: value })
                    }
                  />
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium text-muted-foreground mb-2">
                    Taste
                  </h3>
                  <StarRating
                    value={ratings.tasteScore}
                    onChange={(value) =>
                      setRatings({ ...ratings, tasteScore: value })
                    }
                  />
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium text-muted-foreground mb-2">
                    Infusion
                  </h3>
                  <StarRating
                    value={ratings.infusionScore}
                    onChange={(value) =>
                      setRatings({ ...ratings, infusionScore: value })
                    }
                  />
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium text-muted-foreground mb-2">
                    Grading
                  </h3>
                  <StarRating
                    value={ratings.gradingScore}
                    onChange={(value) =>
                      setRatings({ ...ratings, gradingScore: value })
                    }
                  />
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium text-muted-foreground mb-2">
                    Volume
                  </h3>
                  <StarRating
                    value={ratings.volumeScore}
                    onChange={(value) =>
                      setRatings({ ...ratings, volumeScore: value })
                    }
                  />
                </div>
              </div>

              <div className="border rounded-lg p-4 space-y-4">
                <h3 className="font-medium">Status</h3>
                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant={status === "APPROVED" ? "default" : "outline"}
                    onClick={() => setStatus("APPROVED")}
                  >
                    Approve
                  </Button>
                  <Button
                    type="button"
                    variant={status === "REJECTED" ? "destructive" : "outline"}
                    onClick={() => setStatus("REJECTED")}
                  >
                    Reject
                  </Button>
                </div>
              </div>

              <Button type="submit" className="w-full">
                {updateProductMutation.isPending ? "Saving..." : "Save Rating"}
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
