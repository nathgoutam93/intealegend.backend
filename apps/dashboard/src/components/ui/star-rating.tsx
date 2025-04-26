import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  value: number;
  max?: number;
  onChange?: (value: number) => void;
  readOnly?: boolean;
  className?: string;
}

export const StarRating = React.forwardRef<HTMLDivElement, StarRatingProps>(
  (
    { value, max = 10, onChange, readOnly = false, className, ...props },
    ref
  ) => {
    // Convert 1-10 scale to 1-5 stars
    const stars = max;
    const normalizedValue = value;

    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-1", className)}
        {...props}
      >
        {Array.from({ length: stars }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-5 w-5 cursor-pointer transition-colors",
              i < normalizedValue
                ? "fill-yellow-400 text-yellow-400"
                : "fill-none text-muted-foreground",
              readOnly && "cursor-default"
            )}
            onClick={() => {
              if (!readOnly && onChange) {
                // Convert back to 1-10 scale
                onChange(i + 1);
              }
            }}
          />
        ))}
      </div>
    );
  }
);

StarRating.displayName = "StarRating";
