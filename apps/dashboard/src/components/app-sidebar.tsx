import * as React from "react";
import {
  Command,
  Frame,
  LifeBuoy,
  Send,
  Store,
  User2,
  Package,
  ShoppingCart,
} from "lucide-react";
import { useAuthStore } from "@/stores/auth.store";

import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ReactNode } from "@tanstack/react-router";

const navigationConfig: {
  [key: string]: { projects: { name: string; url: string; icon: ReactNode }[] };
} = {
  admin: {
    projects: [
      {
        name: "Overview",
        url: "/app",
        icon: Frame,
      },
      {
        name: "Sellers",
        url: "/app/sellers",
        icon: Store,
      },
      {
        name: "Buyers",
        url: "/app/buyers",
        icon: User2,
      },
      // {
      //   name: "Settings",
      //   url: "/app/settings",
      //   icon: Settings,
      // },
    ],
  },
  seller: {
    projects: [
      {
        name: "Dashboard",
        url: "/app",
        icon: Frame,
      },
      {
        name: "Products",
        url: "/app/products",
        icon: Package,
      },
      {
        name: "Orders",
        url: "/app/orders",
        icon: ShoppingCart,
      },
    ],
  },
};

const commonNavSecondary = [
  {
    title: "Support",
    url: "#",
    icon: LifeBuoy,
  },
  {
    title: "Feedback",
    url: "#",
    icon: Send,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const user = useAuthStore((state) => state.user);
  const role = user?.role || "buyer";

  const navigation = navigationConfig[role.toLowerCase()];

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Intealegend</span>
                  <span className="truncate text-xs capitalize">
                    {user?.role === "ADMIN"
                      ? "ADMIN"
                      : `Seller ID: ${user?.uniqueIdentifier}`}
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={navigation.projects} />
        <NavSecondary items={commonNavSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
