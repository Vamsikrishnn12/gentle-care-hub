import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { Phone, X } from "lucide-react";
import { services } from "@/lib/services-data";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const whatsappHref = "https://wa.me/918825500905";

export function BookingPopup() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(true);
    }, 2000);

    return () => window.clearTimeout(timer);
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const service = String(formData.get("service") ?? "");
    const message = String(formData.get("message") ?? "");
    const text = [
      "New booking request from Care Touch website",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service needed: ${service}`,
      message ? `Message: ${message}` : "",
    ].filter(Boolean).join("\n");

    window.open(`${whatsappHref}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[60] pointer-events-none">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`absolute right-0 top-1/2 flex h-40 w-11 -translate-y-1/2 items-center justify-center rounded-l-2xl bg-gradient-brand text-white shadow-soft transition-transform duration-500 ease-out pointer-events-auto sm:h-64 sm:w-16 sm:rounded-l-3xl ${open ? "translate-x-full" : "translate-x-0"}`}
        aria-label="Open booking services form"
      >
        <span className="-rotate-90 whitespace-nowrap text-xs font-bold uppercase tracking-[0.16em] sm:text-sm sm:tracking-[0.18em]">
          Book Services
        </span>
      </button>
      <div
        className={`absolute inset-0 bg-foreground/15 transition-opacity duration-500 ${open ? "opacity-100 pointer-events-auto" : "opacity-0"}`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`absolute right-4 top-24 w-[min(92vw,390px)] overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card transition-transform duration-500 ease-out pointer-events-auto sm:right-6 ${open ? "translate-x-0" : "translate-x-[calc(100%+2rem)]"}`}
        aria-label="Booking service form"
      >
        <div className="bg-gradient-brand px-5 py-4 text-white">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/80">Quick booking</p>
              <h2 className="mt-1 font-display text-2xl">Need care at home?</h2>
              <p className="mt-1 text-sm text-white/90">Share the details and our coordinator will respond.</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full bg-white/15 p-2 text-white hover:bg-white/25 transition"
              aria-label="Close booking popup"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-3 p-5">
          <input required name="name" placeholder="Your name" className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30" />
          <input required name="phone" type="tel" placeholder="Phone number" className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30" />
          <select required name="service" defaultValue="" className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand/30">
            <option value="" disabled>Select service needed</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>{service.title}</option>
            ))}
          </select>
          <textarea name="message" rows={3} placeholder="Message (optional)" className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30" />

          <div className="grid grid-cols-2 gap-3 pt-1">
            <a href="tel:8825500905" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-4 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95 transition">
              <Phone className="h-4 w-4" />
              Call
            </a>
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-soft hover:bg-[#20bd5a] transition">
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </button>
          </div>
        </form>
      </aside>
    </div>
  );
}
