import { useState } from "react";
import {
  createFileRoute,
  useNavigate,
  useRouter,
} from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import client from "@/api-client";
import type { Product } from "@intealegend/api-contract";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useQueryClient } from "@tanstack/react-query";

export const Route = createFileRoute("/_app-layout/app/products/$productId")({
  component: ProductDetailPage,
});

type ProductInput = Omit<
  Product,
  "id" | "sellerId" | "createdAt" | "updatedAt" | "cartItems" | "orderItems"
>;

function ProductDetailPage() {
  const router = useRouter();

  const { productId } = Route.useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [inventoryDialogOpen, setInventoryDialogOpen] = useState(false);
  const [inventoryAction, setInventoryAction] = useState<"add" | "remove">(
    "add"
  );
  const [inventoryAmount, setInventoryAmount] = useState(0);

  const queryClient = useQueryClient();

  const { data, isLoading } = client.sellers.getProduct.useQuery(
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

  const updateProductMutation = client.sellers.updateProduct.useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product", productId] });
      router.invalidate();
    },
  });

  const handleUpdate = async (formData: FormData) => {
    // @ts-ignore
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
      score: formData.get("score") ? Number(formData.get("score")) : 0,
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

  if (isLoading) return <div>Loading...</div>;
  if (!data || data.status !== 200) return <div>Something went wrong</div>;

  const product = data.body;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="flex justify-between mb-6">
        <div className="space-x-2">
          {isEditing ? (
            <>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button form="product-form" type="submit">
                {updateProductMutation.isPending ? "Saving..." : "Save"}
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                onClick={() => navigate({ to: "/app/products" })}
              >
                Back
              </Button>
              <Button onClick={() => setIsEditing(true)}>Edit</Button>
            </>
          )}
        </div>
      </div>

      <div className="mb-6 p-4 border rounded-lg">
        <div className="flex justify-between items-center">
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
                    variant={inventoryAction === "add" ? "default" : "outline"}
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
                    Amount to {inventoryAction}
                  </label>
                  <Input
                    type="number"
                    min={0}
                    value={inventoryAmount || ""}
                    onChange={(e) => setInventoryAmount(Number(e.target.value))}
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

      <form
        id="product-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate(new FormData(e.currentTarget));
        }}
        className="space-y-6"
      >
        <div>
          <h3 className="font-semibold">Name</h3>
          <Input
            name="name"
            defaultValue={product.name || ""}
            readOnly={!isEditing}
            className={!isEditing ? "bg-muted" : ""}
          />
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold">Description</h3>
          <Textarea
            name="description"
            defaultValue={product.description || ""}
            readOnly={!isEditing}
            className={!isEditing ? "bg-muted" : ""}
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold">Grade</h3>
            <Input
              name="grade"
              defaultValue={product.grade}
              readOnly={!isEditing}
              className={!isEditing ? "bg-muted" : ""}
            />
          </div>
          <div>
            <h3 className="font-semibold">Mark</h3>
            <Input
              name="mark"
              defaultValue={product.mark}
              readOnly={!isEditing}
              className={!isEditing ? "bg-muted" : ""}
            />
          </div>
          <div>
            <h3 className="font-semibold">Production Month</h3>
            <Input
              name="productionMonth"
              type="month"
              defaultValue={product.productionMonth}
              readOnly={!isEditing}
              className={!isEditing ? "bg-muted" : ""}
            />
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Invoice Number</h3>
          <Input
            name="invoiceNo"
            defaultValue={product.invoiceNo}
            readOnly={!isEditing}
            className={!isEditing ? "bg-muted" : ""}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Weight Per Unit</h3>
            <Input
              name="weightPerUnit"
              type="number"
              defaultValue={product.weightPerUnit}
              readOnly={!isEditing}
              className={!isEditing ? "bg-muted" : ""}
            />
          </div>
          <div>
            <h3 className="font-semibold">Sample Weight</h3>
            <Input
              name="sampleWeight"
              type="number"
              defaultValue={product.sampleWeight || ""}
              readOnly={!isEditing}
              className={!isEditing ? "bg-muted" : ""}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Location</h3>
            <Input
              name="location"
              defaultValue={product.location}
              readOnly={!isEditing}
              className={!isEditing ? "bg-muted" : ""}
            />
          </div>
          <div>
            <h3 className="font-semibold">Origin</h3>
            <Input
              name="origin"
              defaultValue={product.origin}
              readOnly={!isEditing}
              className={!isEditing ? "bg-muted" : ""}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold">Price Per Unit</h3>
            <Input
              name="pricePerUnit"
              type="number"
              defaultValue={product.pricePerUnit}
              readOnly={!isEditing}
              className={!isEditing ? "bg-muted" : ""}
            />
          </div>
          <div>
            <h3 className="font-semibold">Score</h3>
            <Input
              name="score"
              type="number"
              defaultValue={product.score || ""}
              readOnly={!isEditing}
              className={!isEditing ? "bg-muted" : ""}
            />
          </div>
          <div>
            <h3 className="font-semibold">MBP</h3>
            <Input
              name="mbp"
              type="number"
              defaultValue={product.mbp || ""}
              readOnly={!isEditing}
              className={!isEditing ? "bg-muted" : ""}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold">Available Quantity</h3>
            <Input
              name="quantity"
              type="number"
              min={0}
              defaultValue={product.quantity}
              readOnly={!isEditing}
              className={!isEditing ? "bg-muted" : ""}
            />
          </div>
        </div>

        {product.imageUrl && (
          <div>
            <h3 className="font-semibold mb-2">Product Image</h3>
            <img
              src={product.imageUrl}
              alt={product.name ?? ""}
              className="max-w-md rounded-lg"
            />
          </div>
        )}
      </form>
    </div>
  );
}
