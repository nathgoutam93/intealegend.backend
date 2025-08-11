import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import type { Product } from "@intealegend/api-contract";
import client from "@/api-client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect } from "react";

export const Route = createFileRoute("/_app-layout/app/products/new")({
  component: NewProductPage,
});

type ProductInput = Omit<
  Product,
  | "id"
  | "sellerId"
  | "createdAt"
  | "updatedAt"
  | "cartItems"
  | "orderItems"
  | "score"
> & {
  appearanceScore: number;
  liquorScore: number;
  tasteScore: number;
  infusionScore: number;
  gradingScore: number;
  volumeScore: number;
};

function NewProductPage() {
  const navigate = useNavigate();
  const createProduct = client.sellers.createProduct.useMutation();
  const { data: marks } = client.sellers.getBrandMarks.useQuery(["get-marks"]);

  const form = useForm<ProductInput>({
    defaultValues: {
      name: "",
      grade: "",
      mark: undefined,
      invoiceNo: "",
      description: null,
      productionMonth: "",
      weightPerUnit: 0,
      sampleWeight: null,
      location: "",
      origin: "",
      pricePerUnit: 0,
      mbp: null,
      imageUrl: null,
      status: "PENDING",
      isLive: false,
      appearanceScore: 0,
      liquorScore: 0,
      tasteScore: 0,
      infusionScore: 0,
      gradingScore: 0,
      volumeScore: 0,
      quantity: 0,
    },
  });

  const selectedMark = marks?.body.find((m) => m.id === form.watch("mark"));
  const selectedMarkOrigin = selectedMark?.origin ?? null;

  useEffect(() => {
    const defaultMark = marks?.body.find((m) => m.isDefault);
    defaultMark && form.setValue("mark", defaultMark.id);
  }, [marks]);

  const onSubmit = async (data: ProductInput) => {
    try {
      const response = await createProduct.mutateAsync({
        body: {
          ...data,
        },
      });
      if (response.status === 201) {
        navigate({ to: "/app/products" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (marks?.status !== 200) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Add New Product</h1>
        {/* <Button
          variant="outline"
          onClick={() => navigate({ to: "/app/products" })}
        >
          Cancel
        </Button> */}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value ?? ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    value={field.value ?? ""}
                    onChange={(e) => field.onChange(e.target.value || null)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          <div className="grid grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="mark"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand Mark</FormLabel>
                  <Select
                    defaultValue={
                      marks?.body.find((m) => m.isDefault)?.id.toString() ?? ""
                    }
                    onValueChange={(value: string) => {
                      const selectedMark = marks?.body.find(
                        (m) => m.id.toString() === value
                      );
                      if (selectedMark) {
                        field.onChange(selectedMark.id);
                        form.setValue("brandMark", selectedMark);
                        form.setValue("mark", selectedMark.id);
                        if (selectedMark.origin) {
                          form.setValue("origin", selectedMark.origin);
                        } else {
                          form.setValue("origin", "");
                        }
                      }
                    }}
                    value={field.value?.toString()}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a mark" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {marks?.body.map((mark) => {
                        return (
                          <SelectItem key={mark.id} value={mark.id.toString()}>
                            {mark.name}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="grade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Grade</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value ?? ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="productionMonth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Production Month</FormLabel>
                  <FormControl>
                    <Input type="month" {...field} value={field.value ?? ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="invoiceNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Invoice Number</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="weightPerUnit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Weight Per Package (Kg)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) =>
                        field.onChange(
                          e.target.value === "" ? 0 : Number(e.target.value)
                        )
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sampleWeight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sample Weight (Kg)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      value={field.value ?? ""}
                      onChange={(e) =>
                        field.onChange(
                          e.target.value === "" ? null : Number(e.target.value)
                        )
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="origin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Origin</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value ?? ""}
                      disabled={!!selectedMarkOrigin}
                      placeholder={selectedMarkOrigin || "Enter origin"}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* <div className="grid grid-cols-3 gap-4">
            

            <FormField
              control={form.control}
              name="appearanceScore"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Appearance Score</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      max={100}
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="liquorScore"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Liquor Score</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      max={100}
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tasteScore"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Taste Score</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      max={100}
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="infusionScore"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Infusion Score</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      max={100}
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="gradingScore"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Grading Score</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      max={100}
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="volumeScore"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Volume Score</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      max={100}
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div> */}

          <div className="grid grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="pricePerUnit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price Per Kg</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) =>
                        field.onChange(
                          e.target.value === "" ? 0 : Number(e.target.value)
                        )
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mbp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>MBP</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      value={field.value ?? ""}
                      onChange={(e) =>
                        field.onChange(
                          e.target.value === "" ? null : Number(e.target.value)
                        )
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Available Quantity</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      {...field}
                      value={field.value || ""}
                      onChange={(e) =>
                        field.onChange(
                          e.target.value === "" ? 0 : Number(e.target.value)
                        )
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value ?? ""}
                    onChange={(e) => field.onChange(e.target.value || null)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate({ to: "/app/products" })}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={createProduct.isPending}>
              {createProduct.isPending ? "Creating..." : "Create Product"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
