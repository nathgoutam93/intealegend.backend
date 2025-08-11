"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/lib/api-client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";
import { ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { CartSummary } from "@/components/CartSummary";
import { cn, formatProductId } from "@/lib/utils";
import { Product } from "@intealegend/api-contract";
import { toast } from "sonner";

type Props = {};

function ProductList({}: Props) {
  const [searchText, setSearchText] = useState("");
  const [gradeText, setGradeText] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState(searchText);
  const [debouncedGradeText, setDebouncedGradeText] = useState(gradeText);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | undefined>(
    undefined
  );
  const [offset, setOffset] = useState(0);
  const limit = 10;

  // Dialog state
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Product | null>(null);

  const openDialog = (p: Product) => {
    setSelected(p);
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
    setSelected(null);
  };

  // Debounce the search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchText(searchText);
      const params = new URLSearchParams(window.location.search);
      searchText ? params.set("search", searchText) : params.delete("search");
      window.history.replaceState({}, "", `?${params.toString()}`);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchText]);

  // Debounce the grade input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedGradeText(gradeText);
      const params = new URLSearchParams(window.location.search);
      gradeText ? params.set("grade", gradeText) : params.delete("grade");
      window.history.replaceState({}, "", `?${params.toString()}`);
    }, 500);
    return () => clearTimeout(handler);
  }, [gradeText]);

  // Handle sort and pagination URL updates
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    sortOrder ? params.set("sortOrder", sortOrder) : params.delete("sortOrder");
    offset ? params.set("offset", offset.toString()) : params.delete("offset");
    window.history.replaceState({}, "", `?${params.toString()}`);
  }, [sortOrder, offset]);

  const { data, isLoading } = client.buyers.getProducts.useQuery(
    [
      "products",
      {
        search: debouncedSearchText,
        grade: debouncedGradeText,
        sortBy: sortOrder ? "price" : undefined,
        sortOrder,
        offset: offset.toString(),
        limit: limit.toString(),
      },
    ],
    {
      query: {
        search: debouncedSearchText,
        grade: debouncedGradeText,
        sortBy: sortOrder ? "price" : undefined,
        sortOrder,
        offset: offset.toString(),
        limit: limit.toString(),
      },
    }
  );

  const addToCart = useCartStore((state) => state.addItem);

  const handleAddToCart = (product: Product) => {
    const mbp = product.mbp || 1;
    if (product.quantity < mbp) {
      toast.error("Item is out of stock");
      return;
    }
    addToCart({
      id: product.id.toString(),
      mark: product.brandMark.name,
      productionMonth: product.productionMonth,
      grade: product.grade,
      pricePerKg: product.pricePerUnit,
      weightPerPkg: product.weightPerUnit,
      quantity: mbp,
      mbp: mbp,
    });
    toast.success("Added to cart");
  };

  if (isLoading) return <div>Loading...</div>;
  if (!data || data.status !== 200) return <div>Something went wrong</div>;

  return (
    <>
      <div className="p-2 md:p-8">
        {/* Filters */}
        <div className="flex gap-4 mb-6">
          <Input
            placeholder="Search Mark..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="max-w-sm"
          />
          <Input
            placeholder="Search Grade..."
            value={gradeText}
            onChange={(e) => setGradeText(e.target.value)}
            className="max-w-sm"
          />
        </div>

        {/* Unified Table (responsive columns) */}
        <div className="h-[40vh] overflow-y-scroll shadow-sm">
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  {/* Visible on all screens */}
                  <TableHead className="text-center">Mark</TableHead>
                  <TableHead className="text-center">Grade</TableHead>

                  {/* Small-screen action (View) */}

                  {/* Extra columns — hidden on small, visible md+ */}
                  <TableHead className="hidden md:table-cell text-center">
                    Invoice No.
                  </TableHead>
                  <TableHead className="hidden md:table-cell text-center">
                    Pkgs
                  </TableHead>
                  <TableHead className="hidden md:table-cell text-center">
                    Wt/Pkg
                  </TableHead>
                  <TableHead className="hidden md:table-cell text-center">
                    Sample
                  </TableHead>
                  <TableHead className="hidden md:table-cell text-center">
                    Total Wt.
                  </TableHead>
                  <TableHead className="hidden md:table-cell text-center">
                    Score
                  </TableHead>
                  <TableHead className="text-center">
                    <Button
                      variant="ghost"
                      onClick={() => {
                        setSortOrder(
                          sortOrder === undefined
                            ? "asc"
                            : sortOrder === "asc"
                              ? "desc"
                              : undefined
                        );
                      }}
                      className="flex items-center gap-1 mx-auto"
                    >
                      Price/Kg (₹)
                      <ChevronDown
                        className="h-4 w-4"
                        style={{
                          opacity: sortOrder ? 1 : 0.5,
                          transform:
                            sortOrder === "asc"
                              ? "rotate(180deg)"
                              : sortOrder === "desc"
                                ? "rotate(0deg)"
                                : "none",
                        }}
                      />
                    </Button>
                  </TableHead>
                  <TableHead className="text-center"></TableHead>
                  <TableHead className="hidden md:table-cell text-center">
                    Location
                  </TableHead>
                  <TableHead className="hidden md:table-cell text-center">
                    Origin
                  </TableHead>
                  <TableHead className="hidden md:table-cell text-right">
                    Production
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {data.body.data.map((product) => {
                  const totalWt =
                    product.quantity * product.weightPerUnit -
                    Number(product.sampleWeight || 0);
                  const score =
                    product.tasteScore +
                    product.liquorScore +
                    product.infusionScore +
                    product.gradingScore +
                    product.volumeScore +
                    product.appearanceScore;

                  return (
                    <TableRow
                      key={product.id}
                      className={cn(
                        "cursor-pointer hover:bg-muted/50",
                        product.quantity < (product.mbp || 0) && "bg-red-50"
                      )}
                      onClick={() => {
                        // on md+ we keep row click passive to avoid accidental opens; only buttons act.
                      }}
                    >
                      {/* Always-visible cells (mobile-friendly) */}
                      <TableCell className="text-center">
                        {product.brandMark.name}
                      </TableCell>
                      <TableCell className="text-center">
                        {product.grade}
                      </TableCell>

                      {/* md+ only cells */}
                      <TableCell className="hidden md:table-cell text-center">
                        {product.invoiceNo}
                      </TableCell>
                      <TableCell className="hidden md:table-cell text-center">
                        {product.quantity}
                      </TableCell>
                      <TableCell className="hidden md:table-cell text-center">
                        {product.weightPerUnit} kg
                      </TableCell>
                      <TableCell className="hidden md:table-cell text-center">
                        {product.sampleWeight} kg
                      </TableCell>
                      <TableCell className="hidden md:table-cell text-center">
                        {totalWt} kg
                      </TableCell>
                      <TableCell className="hidden md:table-cell text-center">
                        <TooltipProvider delayDuration={0}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button
                                className="cursor-pointer underline decoration-dotted"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  (e.currentTarget as HTMLElement).focus();
                                }}
                                onBlur={(e) =>
                                  (e.currentTarget as HTMLElement).blur()
                                }
                              >
                                {score}
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <div className="p-1 text-gray-900 text-xs">
                                <p>Taste: {product.tasteScore}</p>
                                <p>Liquor: {product.liquorScore}</p>
                                <p>Infusion: {product.infusionScore}</p>
                                <p>Grading: {product.gradingScore}</p>
                                <p>Volume: {product.volumeScore}</p>
                                <p>Appearance: {product.appearanceScore}</p>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </TableCell>
                      <TableCell className="text-center">
                        {product.pricePerUnit.toLocaleString("en-IN")}
                      </TableCell>
                      <TableCell className="text-center md:hidden">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            openDialog(product);
                          }}
                        >
                          View
                        </Button>
                      </TableCell>
                      <TableCell className="hidden md:table-cell text-center">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(product);
                          }}
                        >
                          Add to Cart
                        </Button>
                      </TableCell>
                      <TableCell className="hidden md:table-cell text-xs text-center">
                        {product.location}
                      </TableCell>
                      <TableCell className="hidden md:table-cell text-xs text-center">
                        {product.origin}
                      </TableCell>
                      <TableCell className="hidden md:table-cell text-xs text-right">
                        {new Date(product.productionMonth).toLocaleString(
                          "en-IN",
                          {
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-muted-foreground">
            Showing {offset + 1} to {Math.min(offset + limit, data.body.total)}{" "}
            of {data.body.total} products
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setOffset(Math.max(0, offset - limit))}
              disabled={offset === 0}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              onClick={() => setOffset(offset + limit)}
              disabled={offset + limit >= data.body.total}
            >
              Next
            </Button>
          </div>
        </div>
      </div>

      {/* Cart summary on md+ */}
      <div className="hidden md:block w-full p-2 md:p-8">
        <div className="h-[40vh] overflow-y-scroll shadow-sm w-full">
          <CartSummary />
        </div>
      </div>

      {/* Detail Dialog for small screens (works on all breakpoints if you want to open it) */}
      <Dialog
        open={open}
        onOpenChange={(v) => (v ? setOpen(true) : closeDialog())}
      >
        <DialogContent className="max-w-lg">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle>Product Details</DialogTitle>
              </DialogHeader>

              <div className="w-full grid grid-cols-4 gap-4 text-sm">
                <div className="text-center">
                  <p className="text-muted-foreground">Mark</p>
                  <p className="font-medium">{selected.brandMark.name}</p>
                </div>
                <div className="text-center">
                  <p className="text-muted-foreground">Invoice</p>
                  <p className="font-medium">{selected.invoiceNo}</p>
                </div>
                <div className="text-center">
                  <p className="text-muted-foreground">Grade</p>
                  <p className="font-medium">{selected.grade}</p>
                </div>
                <div className="text-center">
                  <p className="text-muted-foreground">Pro Month</p>
                  <p className="font-medium">{selected.productionMonth}</p>
                </div>
                <div className="text-center">
                  <p className="text-muted-foreground">Pkgs</p>
                  <p className="font-medium">{selected.quantity}</p>
                </div>
                <div className="text-center">
                  <p className="text-muted-foreground">Wt/Pkg</p>
                  <p className="font-medium">{selected.weightPerUnit} kg</p>
                </div>
                <div className="text-center">
                  <p className="text-muted-foreground">Total Wt.</p>
                  <p className="font-medium">
                    {selected.quantity * selected.weightPerUnit -
                      Number(selected.sampleWeight || 0)}{" "}
                    kg
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-muted-foreground">Price/kg</p>
                  <p className="font-medium">
                    ₹{selected.pricePerUnit.toLocaleString("en-IN")}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-muted-foreground">Origin</p>
                  <p className="font-medium">{selected.origin || "n/a"}</p>
                </div>
                <div className="text-center">
                  <p className="text-muted-foreground">Location</p>
                  <p className="font-medium">{selected.location || "/na"}</p>
                </div>
              </div>

              <div className="flex flex-col gap-1 p-2">
                <span className="text-muted-foreground">Score breakdown:</span>
                <div className="grid grid-cols-3 gap-x-6 gap-y-1 text-xs">
                  <span>Taste: {selected.tasteScore}</span>
                  <span>Liquor: {selected.liquorScore}</span>
                  <span>Infusion: {selected.infusionScore}</span>
                  <span>Grading: {selected.gradingScore}</span>
                  <span>Volume: {selected.volumeScore}</span>
                  <span>Appearance: {selected.appearanceScore}</span>
                </div>
              </div>

              <DialogFooter className="grid grid-cols-2 gap-2">
                <Button variant="outline" onClick={closeDialog}>
                  Close
                </Button>
                <Button
                  onClick={() => {
                    handleAddToCart(selected);
                    // keep dialog open or close — choose close for snappier UX on mobile
                    closeDialog();
                  }}
                  disabled={(selected?.quantity ?? 0) < (selected?.mbp || 1)}
                >
                  Add to Cart
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ProductList;
