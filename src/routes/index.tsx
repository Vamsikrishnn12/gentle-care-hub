import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ShieldCheck, Clock, Award, ArrowRight, HeartPulse } from "lucide-react";
import hero from "@/assets/hero-care.jpg";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/services-data";
import { canonicalLink, defaultDescription, seoMeta, site } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: seoMeta({
      title: `${site.name} - 24/7 Home Nursing in Vellore`,
      description: defaultDescription,
      path: "/",
      image: hero,
    }),
    links: [canonicalLink("/")],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand/10 blur-3xl animate-float-slow" />
        <div
          className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-accent-coral/10 blur-3xl animate-float-slow"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-brand-deep border border-brand/20">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-leaf opacity-75 animate-pulse-ring" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-leaf" />
              </span>
              Available 24 / 7 in Vellore
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
              Compassionate <span className="text-brand">home healthcare</span> for the ones you
              love.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              From bedside nursing to doctor visits, physiotherapy and elder care — Care Touch
              brings hospital-grade care to the comfort of your home.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:8825500905"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand text-white px-6 py-3 text-sm font-semibold shadow-soft hover:shadow-lg hover:-translate-y-0.5 transition"
              >
                <Phone className="h-4 w-4" />
                88255 00905
              </a>
              <a
                href="tel:9442756140"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand text-white px-6 py-3 text-sm font-semibold shadow-soft hover:shadow-lg hover:-translate-y-0.5 transition"
              >
                <Phone className="h-4 w-4" />
                94427 56140
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-brand transition"
              >
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { n: "12+", l: "Services" },
                { n: "24/7", l: "Support" },
                { n: "100%", l: "Trusted" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="text-center rounded-xl bg-white/60 backdrop-blur border border-border/60 p-3"
                >
                  <div className="font-display text-2xl text-brand-deep">{s.n}</div>
                  <div className="text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="absolute -inset-4 bg-gradient-brand opacity-20 blur-2xl rounded-3xl" />
            <img
              src={hero}
              alt="Nurse caring for elderly patient at home"
              width={1536}
              height={1024}
              className="relative rounded-3xl shadow-soft object-cover w-full aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-card p-4 flex items-center gap-3 animate-float-slow">
              <div className="h-10 w-10 rounded-full bg-brand-soft flex items-center justify-center">
                <HeartPulse className="h-5 w-5 text-brand" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Caring since</div>
                <div className="font-semibold text-sm">Day one, every day</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: ShieldCheck,
              title: "Verified Professionals",
              desc: "Trained, background-checked nurses and caregivers.",
            },
            {
              icon: Clock,
              title: "On-Demand Care",
              desc: "Same-day visits and round-the-clock availability.",
            },
            {
              icon: Award,
              title: "Patient-First Approach",
              desc: "Personalised care plans for every patient.",
            },
          ].map((f, i) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border/60 bg-card p-6 hover:shadow-card transition animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <f.icon className="h-7 w-7 text-brand" />
              <h3 className="mt-4 font-display text-lg">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-brand">Our Services</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">
              Complete care, under one roof
            </h2>
          </div>
          <Link
            to="/services"
            className="text-sm font-medium text-brand hover:text-brand-deep inline-flex items-center gap-1"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.slice(0, 8).map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 60} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand text-white p-10 sm:p-14 shadow-soft">
          <div className="absolute -top-16 -right-16 h-64 w-64 bg-white/10 rounded-full blur-2xl" />
          <div className="relative grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl">
                Need care today? We're one call away.
              </h2>
              <p className="mt-3 text-white/90 max-w-lg">
                Speak to our coordinator and get a nurse, caregiver or doctor scheduled within
                hours.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href="tel:8825500905"
                className="inline-flex items-center gap-2 rounded-full bg-white text-brand-deep px-6 py-3 text-sm font-semibold hover:bg-white/90 transition"
              >
                <Phone className="h-4 w-4" />
                88255 00905
              </a>
              <a
                href="tel:9442756140"
                className="inline-flex items-center gap-2 rounded-full bg-white text-brand-deep px-6 py-3 text-sm font-semibold hover:bg-white/90 transition"
              >
                <Phone className="h-4 w-4" />
                94427 56140
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/30 text-white px-6 py-3 text-sm font-semibold hover:bg-white/20 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
