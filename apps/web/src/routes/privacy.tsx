import { createFileRoute } from "@tanstack/react-router";

import { PrivacyPolicy } from "@/app/pages/PrivacyPolicy";

export const Route = createFileRoute("/privacy")({
  component: () => <PrivacyPolicy />
});
