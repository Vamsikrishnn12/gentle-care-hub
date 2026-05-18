import { createFileRoute, Outlet } from "@tanstack/react-router";
import { canonicalLink, seoMeta, site } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: seoMeta({
      title: `Home Healthcare Services in Vellore - ${site.shortName}`,
      description:
        "Doctor visits, nursing care, physiotherapy, lab tests, elder care, ambulance, patient transfer and postoperative care at home in Vellore and Katpadi.",
      path: "/services",
    }),
    links: [canonicalLink("/services")],
  }),
  component: ServicesLayout,
});

function ServicesLayout() {
  return <Outlet />;
}
