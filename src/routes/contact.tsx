import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Care Touch Nursing & Home Care Agency" },
      { name: "description", content: "Reach Care Touch Nursing & Home Care Agency in Katpadi, Vellore. Call 88255 00905 / 94427 56140." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-brand">Get in touch</p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl">We're here, whenever you need us</h1>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">Call us directly or send a message — our coordinator will respond promptly.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10">
        <div className="space-y-4 animate-fade-up">
          {[
            { icon: Phone, title: "Phone", lines: ["88255 00905", "94427 56140"], href: "tel:8825500905" },
            { icon: Mail, title: "Email", lines: ["caretouchnursinghomecare@gmail.com"], href: "mailto:caretouchnursinghomecare@gmail.com" },
            { icon: MapPin, title: "Address", lines: ["KR Complex (First Floor),", "Vallimalai Road, Katpadi, Vellore - 7"] },
            { icon: Clock, title: "Hours", lines: ["Open 24 hours · 7 days a week"] },
          ].map((c) => {
            const Body = (
              <div className="flex gap-4 rounded-2xl border border-border/60 bg-card p-5 hover:border-brand/40 hover:shadow-card transition">
                <div className="h-11 w-11 rounded-xl bg-brand-soft flex items-center justify-center text-brand-deep shrink-0">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">{c.title}</div>
                  {c.lines.map((l) => <div key={l} className="text-sm text-muted-foreground">{l}</div>)}
                </div>
              </div>
            );
            return c.href ? <a key={c.title} href={c.href} className="block">{Body}</a> : <div key={c.title}>{Body}</div>;
          })}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-3xl border border-border/60 bg-card p-6 sm:p-8 shadow-card animate-fade-up"
          style={{ animationDelay: "150ms" }}
        >
          <h2 className="font-display text-2xl">Send us a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">Tell us briefly what care you need.</p>
          <div className="mt-6 grid gap-4">
            <input required placeholder="Your name" className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30" />
            <input required type="tel" placeholder="Phone number" className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30" />
            <input type="email" placeholder="Email (optional)" className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30" />
            <textarea required rows={4} placeholder="How can we help?" className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30" />
            <button className="rounded-full bg-gradient-brand text-white px-6 py-3 text-sm font-semibold shadow-soft hover:shadow-lg transition">
              {sent ? "Thank you — we'll be in touch!" : "Send Message"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
