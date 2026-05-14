import { createFileRoute } from "@tanstack/react-router";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/services-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Care Touch Nursing & Home Care" },
      { name: "description", content: "Doctor visits, nursing care, physiotherapy, lab tests, elder care, ambulance and more — all at home in Vellore." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-brand">What we do</p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl">Our Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            A full spectrum of medical and personal care delivered at the comfort of your home, by trained and compassionate professionals.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 50} />
          ))}
        </div>
      </section>
    </>
  );
}
