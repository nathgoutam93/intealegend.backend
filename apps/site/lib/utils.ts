import { Product } from "@intealegend/api-contract";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatProductId(id: string, productionMonth: string) {
  return `IIL${new Date(productionMonth).getFullYear()}${new Date(productionMonth).getMonth().toString().padStart(2, "0")}${id.toString().padStart(6, "0")}`;
}
