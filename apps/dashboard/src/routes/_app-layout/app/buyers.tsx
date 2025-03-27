import { VerifiedBuyersView } from "@/components/verified-buyers-view";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app-layout/app/buyers")({
  component: RouteComponent,
});

function RouteComponent() {
  return <VerifiedBuyersView />;
}
