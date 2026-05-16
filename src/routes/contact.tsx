import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { services } from "@/lib/services-data";

const whatsappHref = "https://wa.me/918825500905";
const mapsHref = "https://maps.app.goo.gl/jiKyDZm3U3EfHq5C7";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Care Touch Nursing & Home Care Agency" },
      { name: "description", content: "Reach Care Touch Nursing & Home Care Agency in Katpadi, Vellore. Call 88255 00905 / 94427 56140." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const email = String(formData.get("email") ?? "");
    const service = String(formData.get("service") ?? "");
    const message = String(formData.get("message") ?? "");
    const text = [
      "New enquiry from Care Touch website",
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : "",
      `Service needed: ${service}`,
      `Message: ${message}`,
    ].filter(Boolean).join("\n");

    setSent(true);
    window.open(`${whatsappHref}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-brand">Get in touch</p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl">We're here, whenever you need us</h1>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">Call us directly or send a message - our coordinator will respond promptly.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10">
        <div className="space-y-4 animate-fade-up">
          {[
            { icon: Phone, title: "Phone", lines: ["88255 00905", "94427 56140"], phoneLinks: ["tel:8825500905", "tel:9442756140"] },
            { icon: WhatsAppIcon, title: "WhatsApp", lines: ["88255 00905"], href: whatsappHref },
            { icon: Mail, title: "Email", lines: ["caretouchnursinghomecare@gmail.com"], href: "mailto:caretouchnursinghomecare@gmail.com" },
            { icon: MapPin, title: "Address", lines: ["No 91, KR Complex, Vallimalai Rd,", "opposite to vinayagar temple, Kumarappan Nagar,", "KRS Nagar, Katpadi, Vellore, Tamil Nadu 632007"], href: mapsHref },
            { icon: Clock, title: "Hours", lines: ["Open 24 hours - 7 days a week"] },
          ].map((c) => {
            const Body = (
              <div className="flex gap-4 rounded-2xl border border-border/60 bg-card p-5 hover:border-brand/40 hover:shadow-card transition">
                <div className={`h-11 w-11 rounded-xl flex items-center justify-center shrink-0 ${c.title === "WhatsApp" ? "bg-[#25D366] text-white" : "bg-brand-soft text-brand-deep"}`}>
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">{c.title}</div>
                  {"phoneLinks" in c
                    ? c.lines.map((l, i) => (
                        <a key={l} href={c.phoneLinks[i]} className="block text-sm text-muted-foreground hover:text-brand">
                          {l}
                        </a>
                      ))
                    : c.lines.map((l) => <div key={l} className="text-sm text-muted-foreground">{l}</div>)}
                </div>
              </div>
            );
            return "href" in c ? <a key={c.title} href={c.href} target={c.title === "WhatsApp" || c.title === "Address" ? "_blank" : undefined} rel={c.title === "WhatsApp" || c.title === "Address" ? "noreferrer" : undefined} className="block">{Body}</a> : <div key={c.title}>{Body}</div>;
          })}
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-border/60 bg-card p-6 sm:p-8 shadow-card animate-fade-up"
          style={{ animationDelay: "150ms" }}
        >
          <h2 className="font-display text-2xl">Send us a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">Tell us briefly what care you need.</p>
          <div className="mt-6 grid gap-4">
            <input required name="name" placeholder="Your name" className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30" />
            <input required name="phone" type="tel" placeholder="Phone number" className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30" />
            <input name="email" type="email" placeholder="Email (optional)" className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30" />
            <select required name="service" defaultValue="" className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand/30">
              <option value="" disabled>Select service needed</option>
              {services.map((service) => (
                <option key={service.slug} value={service.title}>{service.title}</option>
              ))}
            </select>
            <textarea required name="message" rows={4} placeholder="How can we help?" className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30" />
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-semibold shadow-soft hover:bg-[#20bd5a] transition">
              <WhatsAppIcon className="h-5 w-5" />
              {sent ? "Opening WhatsApp..." : "Send on WhatsApp"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
