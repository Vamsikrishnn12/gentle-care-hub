import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { MapPin } from "lucide-react";

const mapsHref = "https://maps.app.goo.gl/jiKyDZm3U3EfHq5C7";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-7 right-7 z-50 flex flex-col items-center gap-3">
      <a
        href={mapsHref}
        target="_blank"
        rel="noreferrer"
        aria-label="View location on Google Maps"
        className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white shadow-card transition hover:-translate-y-1 hover:bg-brand-deep"
      >
        <MapPin className="h-9 w-9" />
      </a>
      <a
        href="https://wa.me/918825500905"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#39D852] text-white shadow-card transition hover:-translate-y-1 hover:bg-[#25D366]"
      >
        <WhatsAppIcon className="h-10 w-10" />
      </a>
    </div>
  );
}
