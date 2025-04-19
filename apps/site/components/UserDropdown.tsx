"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { User } from "lucide-react";

export function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center">
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <span className="text-sm">Account</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => (window.location.href = "/profile")}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => (window.location.href = "/statement")}>
          Statement
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => (window.location.href = "/support")}>
          Support
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
