import { RegistrationApprovalView } from "@/components/registration-approval";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/registrations")({
  component: RegistrationApprovalView,
});
