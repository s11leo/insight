import { useEffect } from "react";

import { Outlet, createRootRoute, useRouter } from "@tanstack/react-router";

import { AppErrorBoundary } from "@/app/boundary";
import { Devtools } from "@/app/devtools";
import { AppLoading } from "@/app/loading";
import { AppProvider } from "@/app/provider";

// ScrollToTop component
function ScrollToTop() {
  const router = useRouter();

  useEffect(() => {
    const unsub = router.subscribe("onResolved", (event) => {
      if (event.toLocation.hash) return;

      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    return () => unsub();
  }, [router]);

  return null;
}

export const Route = createRootRoute({
  component: () => (
    <>
      <AppProvider>
        <AppLoading>
          <AppErrorBoundary>
            <Outlet />
          </AppErrorBoundary>
        </AppLoading>

        <ScrollToTop />
      </AppProvider>

      <Devtools />
    </>
  )
});
