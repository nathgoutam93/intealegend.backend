import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Toaster } from "sonner";

export const Route = createRootRoute({
  component: () => (
    <div>
      <Outlet />
      <Toaster />
    </div>
  ),
  notFoundComponent: () => <div>Not Found</div>,
});
