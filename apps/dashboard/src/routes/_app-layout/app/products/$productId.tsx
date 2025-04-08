import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import client from "@/api-client";
import type { Product } from "@intealegend/api-contract";

export const Route = createFileRoute("/_app-layout/app/products/$productId")({
  component: ProductDetailPage,
});

type ProductInput = Omit<
  Product,
  "id" | "sellerId" | "createdAt" | "updatedAt" | "cartItems" | "orderItems"
>;

function ProductDetailPage() {
  const { productId } = Route.useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

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

  const updateProductMutation = client.sellers.updateProduct.useMutation();

  const handleUpdate = async (formData: FormData) => {
    const updatedProduct: ProductInput = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      grade: formData.get("grade") as string,
      mark: formData.get("mark") as string,
      invoiceNo: formData.get("invoiceNo") as string,
      productionMonth: formData.get("productionMonth") as string,
      weightPerUnit: Number(formData.get("weightPerUnit")),
      sampleWeight: formData.get("sampleWeight")
        ? Number(formData.get("sampleWeight"))
        : null,
      location: formData.get("location") as string,
      origin: formData.get("origin") as string,
      pricePerUnit: Number(formData.get("pricePerUnit")),
      score: formData.get("score") ? Number(formData.get("score")) : null,
      mbp: formData.get("mbp") ? Number(formData.get("mbp")) : null,
      imageUrl: (formData.get("imageUrl") as string) || null,
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

        {product.imageUrl && (
          <div>
            <h3 className="font-semibold mb-2">Product Image</h3>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="max-w-md rounded-lg"
            />
          </div>
        )}
      </form>
    </div>
  );
}
