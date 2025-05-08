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
import { useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "@/stores/auth.store";
import { StarRating } from "@/components/ui/star-rating";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export const Route = createFileRoute("/_app-layout/app/products/$productId")({
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const router = useRouter();
  const { productId } = Route.useParams();
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const queryClient = useQueryClient();
  const [inventoryDialogOpen, setInventoryDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
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

      toast("Product updated successfully", {
        description: "The product details have been updated.",
        duration: 3000,
      });
    },
  });

  const handleRatingUpdate = async (_: FormData) => {
    if (user?.role !== "ADMIN") return;

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
  };

  const handleProductUpdate = async (formData: FormData) => {
    if (!data?.body) return;

    const updatedProduct = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      grade: formData.get("grade") as string,
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
      quantity: Number(formData.get("quantity")),
    };

    try {
      await updateProductMutation.mutateAsync({
        params: { id: productId },
        body: updatedProduct,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleInventoryUpdate = async () => {
    if (!data?.body || user?.role !== "ADMIN") return;

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
    if (!data?.body || user?.role !== "ADMIN") return;
    try {
      await updateProductMutation.mutateAsync({
        params: { id: productId },
        body: {
          isLive: !data.body.isLive,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    if (!data?.body || user?.role !== "ADMIN") return;

    try {
      await updateProductMutation.mutateAsync({
        params: { id: productId },
        body: {
          status: "REJECTED",
        },
      });
      setDeleteDialogOpen(false);
      navigate({ to: "/app/products" });
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
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Details Section */}
        <div className="space-y-6 p-4 border rounded-lg">
          <h2 className="text-xl font-semibold">Product Details</h2>

          <form
            id="product-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleProductUpdate(new FormData(e.currentTarget));
            }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-muted-foreground">
                  Brand Mark
                </h3>
                <Input
                  name="mark"
                  defaultValue={product.brandMark.name}
                  disabled={true}
                />
              </div>
              <div>
                <h3 className="font-medium text-muted-foreground">Grade</h3>
                <Input
                  name="grade"
                  defaultValue={product.grade}
                  disabled={user?.role !== "ADMIN"}
                />
              </div>
            </div>

            <div>
              <h3 className="font-medium text-muted-foreground">
                Invoice Number
              </h3>
              <Input
                name="invoiceNo"
                defaultValue={product.invoiceNo}
                disabled={user?.role !== "ADMIN"}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-muted-foreground">
                  Weight Per Package
                </h3>
                <Input
                  name="weightPerUnit"
                  type="number"
                  defaultValue={product.weightPerUnit}
                  disabled={user?.role !== "ADMIN"}
                  step={0.01}
                />
              </div>
              <div>
                <h3 className="font-medium text-muted-foreground">
                  Sample Weight
                </h3>
                <Input
                  name="sampleWeight"
                  type="number"
                  defaultValue={product.sampleWeight ?? ""}
                  disabled={user?.role !== "ADMIN"}
                  step={0.01}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-muted-foreground">Location</h3>
                <Input
                  name="location"
                  defaultValue={product.location}
                  disabled={user?.role !== "ADMIN"}
                />
              </div>
              <div>
                <h3 className="font-medium text-muted-foreground">Origin</h3>
                <Input
                  name="origin"
                  defaultValue={product.origin}
                  disabled={user?.role !== "ADMIN"}
                />
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
                  defaultValue={product.pricePerUnit}
                  disabled={user?.role !== "ADMIN"}
                  step={0.01}
                />
              </div>
              <div>
                <h3 className="font-medium text-muted-foreground">MBP</h3>
                <Input
                  name="mbp"
                  type="number"
                  defaultValue={product.mbp ?? ""}
                  disabled={user?.role !== "ADMIN"}
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
                  disabled={user?.role !== "ADMIN"}
                />
              </div>
              <div>
                <h3 className="font-medium text-muted-foreground">Quantity</h3>
                <Input
                  name="quantity"
                  type="number"
                  defaultValue={product.quantity}
                  disabled={user?.role !== "ADMIN"}
                />
              </div>
            </div>

            {user?.role === "ADMIN" && (
              <div className="flex justify-end gap-4">
                <Button type="submit">
                  {updateProductMutation.isPending
                    ? "Saving..."
                    : "Save Changes"}
                </Button>
              </div>
            )}
          </form>

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
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Product Status</h3>
                  <p className="text-sm text-muted-foreground">
                    {product.isLive ? "Currently Live" : "Currently in Draft"}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Button
                    onClick={handleLiveStatusToggle}
                    variant={product.isLive ? "default" : "outline"}
                  >
                    {product.isLive ? "Set to Draft" : "Make Live"}
                  </Button>
                  <Button
                    onClick={() => setDeleteDialogOpen(true)}
                    variant={"destructive"}
                    className="text-white"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>

            {/* Delete Confirmation Dialog */}
            <AlertDialog
              open={deleteDialogOpen}
              onOpenChange={setDeleteDialogOpen}
            >
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action will mark the product as rejected and it will no
                    longer be visible.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleDelete}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-semibold">Current Inventory</h3>
                  <p className="text-2xl font-bold">{product.quantity} units</p>
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
                            inventoryAction === "remove" ? "default" : "outline"
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
              <form
                id="rating-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleRatingUpdate(new FormData(e.currentTarget));
                }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
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
                </div>

                <Button type="submit" className="w-full">
                  {updateProductMutation.isPending
                    ? "Saving..."
                    : "Save Rating"}
                </Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
