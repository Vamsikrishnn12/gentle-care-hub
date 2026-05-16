import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  HeartHandshake,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { getService, services, type Service } from "@/lib/services-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }): { service: Service } => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} - Care Touch Nursing` },
          { name: "description", content: loaderData.service.description },
          { property: "og:title", content: `${loaderData.service.title} - Care Touch Nursing` },
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
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <nav className="flex items-center gap-1 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-brand">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-brand">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground/80">{service.title}</span>
          </nav>

          <div className="mt-6 grid lg:grid-cols-2 gap-10 items-center animate-fade-up">
            <div>
              <div className="h-20 w-20 rounded-2xl bg-white shadow-card flex items-center justify-center text-brand-deep">
                <Icon className="h-10 w-10" />
              </div>
              <h1 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl">{service.title}</h1>
              <p className="mt-3 text-lg text-muted-foreground max-w-2xl">{service.tagline}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.outcomes.slice(0, 2).map((outcome) => (
                  <span key={outcome} className="rounded-full bg-white/80 border border-border px-4 py-2 text-xs font-medium text-brand-deep">
                    {outcome}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl shadow-soft">
              <img
                src={service.image}
                alt={service.imageAlt}
                width={1200}
                height={800}
                className="h-full min-h-[280px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-12">
          <div className="animate-fade-up">
            <h2 className="font-display text-2xl">Service overview</h2>
            <div className="mt-3 space-y-4 text-muted-foreground leading-relaxed">
              {service.longDescription.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 animate-fade-up">
            <div className="rounded-2xl border border-border/60 bg-card p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-deep">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h2 className="mt-4 font-display text-2xl">Best for</h2>
              <ul className="mt-4 space-y-3">
                {service.bestFor.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-leaf" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-deep">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h2 className="mt-4 font-display text-2xl">Why families choose it</h2>
              <ul className="mt-4 space-y-3">
                {service.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-leaf" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-display text-2xl">What's included</h2>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3">
              {service.includedDetails.map((h: string) => (
                <li key={h} className="flex items-start gap-2 rounded-xl border border-border/60 bg-card p-4">
                  <CheckCircle2 className="h-5 w-5 text-leaf shrink-0 mt-0.5" />
                  <span className="text-sm">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-display text-2xl">Care focus areas</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              This service is planned around the patient's condition, comfort level and family expectations. Our coordinator explains the visit clearly before booking, so you know what support will be provided and how it helps at home.
            </p>
            <div className="mt-5 grid sm:grid-cols-2 gap-3">
              {service.highlights.map((item) => (
                <div key={item} className="rounded-xl border border-border/60 bg-card p-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-leaf" />
                    <p className="text-sm font-medium text-foreground">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-up rounded-2xl border border-brand/20 bg-brand-soft/40 p-6">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-deep shadow-card">
                <ClipboardList className="h-5 w-5" />
              </div>
              <h2 className="font-display text-2xl">Keep ready before the visit</h2>
            </div>
            <ul className="mt-5 grid sm:grid-cols-3 gap-3">
              {service.prepare.map((item) => (
                <li key={item} className="rounded-xl bg-white/80 border border-border/60 p-4 text-sm text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-display text-2xl">How it works</h2>
            <ol className="mt-5 space-y-4">
              {service.process.map((p: { step: string; detail: string }, i: number) => (
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

          <div className="animate-fade-up">
            <h2 className="font-display text-2xl">Frequently asked</h2>
            <div className="mt-5 space-y-3">
              {service.faqs.map((f: { q: string; a: string }) => (
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

        <aside className="space-y-6 lg:sticky lg:top-24 self-start">
          <div className="rounded-2xl bg-gradient-brand text-white p-6 shadow-soft">
            <h3 className="font-display text-xl">Book this service</h3>
            <p className="mt-2 text-sm text-white/90">Talk to our coordinator and we'll arrange care quickly.</p>
            <a href="tel:8825500905" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white text-brand-deep px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition">
              <Phone className="h-4 w-4" /> 88255 00905 / 94427 56140
            </a>
            <Link to="/contact" className="mt-2 block text-center rounded-full bg-white/10 border border-white/30 text-white px-5 py-2.5 text-sm font-semibold hover:bg-white/20 transition">
              Send a message
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-card">
            <img src={service.image} alt={service.imageAlt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <div className="p-5">
              <h3 className="font-semibold">Care built around your home</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We plan the visit around the patient's comfort, family instructions and doctor advice.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card p-6">
            <h3 className="font-semibold">Related services</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link to={`/services/${r.slug}`} className="group flex items-center gap-3 rounded-xl border border-border/60 p-2 hover:border-brand/40 hover:bg-brand-soft/30 transition">
                    <img src={r.image} alt={r.imageAlt} loading="lazy" className="h-14 w-16 rounded-lg object-cover" />
                    <span className="min-w-0 flex-1 font-medium group-hover:text-brand">{r.title}</span>
                    <ChevronRight className="h-4 w-4 shrink-0 text-brand" />
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
