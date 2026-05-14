import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Phone, ChevronRight } from "lucide-react";
import { getService, services } from "@/lib/services-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} — Care Touch Nursing` },
          { name: "description", content: loaderData.service.description },
          { property: "og:title", content: `${loaderData.service.title} — Care Touch Nursing` },
          { property: "og:description", content: loaderData.service.description },
        ]
      : [],
  }),
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl">Service not found</h1>
      <Link to="/services" className="mt-4 inline-block text-brand">View all services</Link>
    </div>
  ),
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <nav className="flex items-center gap-1 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-brand">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-brand">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground/80">{service.title}</span>
          </nav>
          <div className="mt-6 grid lg:grid-cols-[auto_1fr] gap-6 items-center animate-fade-up">
            <div className="h-20 w-20 rounded-2xl bg-white shadow-card flex items-center justify-center text-brand-deep">
              <Icon className="h-10 w-10" />
            </div>
            <div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl">{service.title}</h1>
              <p className="mt-3 text-lg text-muted-foreground max-w-2xl">{service.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-12">
          {/* Overview */}
          <div className="animate-fade-up">
            <h2 className="font-display text-2xl">Overview</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{service.description}</p>
          </div>

          {/* Highlights */}
          <div className="animate-fade-up">
            <h2 className="font-display text-2xl">What's included</h2>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3">
              {service.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 rounded-xl border border-border/60 bg-card p-4">
                  <CheckCircle2 className="h-5 w-5 text-leaf shrink-0 mt-0.5" />
                  <span className="text-sm">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Process */}
          <div className="animate-fade-up">
            <h2 className="font-display text-2xl">How it works</h2>
            <ol className="mt-5 space-y-4">
              {service.process.map((p, i) => (
                <li key={p.step} className="flex gap-4 rounded-xl border border-border/60 bg-card p-5">
                  <div className="h-8 w-8 shrink-0 rounded-full bg-gradient-brand text-white text-sm font-semibold flex items-center justify-center">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold">{p.step}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{p.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* FAQs */}
          <div className="animate-fade-up">
            <h2 className="font-display text-2xl">Frequently asked</h2>
            <div className="mt-5 space-y-3">
              {service.faqs.map((f) => (
                <details key={f.q} className="group rounded-xl border border-border/60 bg-card p-5 open:shadow-card transition">
                  <summary className="cursor-pointer font-medium list-none flex justify-between items-center">
                    {f.q}
                    <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90 text-brand" />
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-24 self-start">
          <div className="rounded-2xl bg-gradient-brand text-white p-6 shadow-soft">
            <h3 className="font-display text-xl">Book this service</h3>
            <p className="mt-2 text-sm text-white/90">Talk to our coordinator and we'll arrange care quickly.</p>
            <a href="tel:8825500905" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white text-brand-deep px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition">
              <Phone className="h-4 w-4" /> 88255 00905
            </a>
            <Link to="/contact" className="mt-2 block text-center rounded-full bg-white/10 border border-white/30 text-white px-5 py-2.5 text-sm font-semibold hover:bg-white/20 transition">
              Send a message
            </Link>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card p-6">
            <h3 className="font-semibold">Related services</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link to="/services/$slug" params={{ slug: r.slug }} className="flex items-center justify-between py-1 hover:text-brand">
                    <span>{r.title}</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <Link to="/services" className="inline-flex items-center gap-2 text-sm text-brand hover:text-brand-deep">
          <ArrowLeft className="h-4 w-4" /> Back to all services
        </Link>
      </div>
    </>
  );
}
