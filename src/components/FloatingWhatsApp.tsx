import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918825500905"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-7 right-7 z-50 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#39D852] text-white shadow-card transition hover:-translate-y-1 hover:bg-[#25D366]"
    >
      <WhatsAppIcon className="h-10 w-10" />
    </a>
  );
}
