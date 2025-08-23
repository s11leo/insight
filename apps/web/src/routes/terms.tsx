import { createFileRoute } from "@tanstack/react-router";

import { TermsOfService } from "@/app/pages/TermsOfService";

export const Route = createFileRoute("/terms")({
  component: () => <TermsOfService />
});
