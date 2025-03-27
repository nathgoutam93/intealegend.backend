import { VerifiedSellersView } from "@/components/verified-sellers-view";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app-layout/app/sellers")({
  component: RouteComponent,
});

function RouteComponent() {
  return <VerifiedSellersView />;
}
