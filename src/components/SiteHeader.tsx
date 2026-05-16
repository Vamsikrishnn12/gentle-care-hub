import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/ctn-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Care Touch Nursing logo" className="h-24 w-auto object-contain" />
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/70 hover:text-brand transition-colors"
              activeProps={{ className: "text-brand font-semibold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:8825500905"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-brand text-white px-4 py-2 text-sm font-medium shadow-soft hover:opacity-95 transition"
        >
          <Phone className="h-4 w-4" /> 88255 00905 / 94427 56140
        </a>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="px-4 py-3 flex flex-col gap-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-sm font-medium py-1">
                {n.label}
              </Link>
            ))}
            <a href="tel:8825500905" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand text-white px-4 py-2 text-sm w-fit">
              <Phone className="h-4 w-4" /> 88255 00905 / 94427 56140
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
