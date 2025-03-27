import { RegistrationApprovalView } from "@/components/registration-approval";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app-layout/app/registrations")({
  component: RegistrationApprovalView,
});
