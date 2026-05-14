import { createFileRoute } from "@tanstack/react-router";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/services-data";

export const Route = createFileRoute("/services/")({
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
          <div className="mt-8 grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-left">
            {[
              "Home visits planned around patient comfort",
              "Service guidance before booking",
              "Coordinator support from enquiry to follow-up",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-white/80 border border-border p-4 text-sm font-medium text-brand-deep shadow-card">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-brand">Choose the right support</p>
          <h2 className="mt-2 font-display text-3xl">Every service includes clear guidance, trained hands and family updates.</h2>
          <p className="mt-3 text-muted-foreground">
            Click any service to see detailed descriptions, who it is best for, what is included, what to keep ready and how the visit works.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 50} />
          ))}
        </div>
      </section>
    </>
  );
}
