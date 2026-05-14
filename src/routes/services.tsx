import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services - Care Touch Nursing & Home Care" },
      { name: "description", content: "Doctor visits, nursing care, physiotherapy, lab tests, elder care, ambulance and more - all at home in Vellore." },
    ],
  }),
  component: ServicesLayout,
});

function ServicesLayout() {
  return <Outlet />;
}
