import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-brand-soft/40 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl text-brand-deep">Care Touch Nursing & Home Care Agency</h3>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Trusted home healthcare in Vellore — nurses, caregivers and doctors at your doorstep.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">Proprietor: Dr. Lavanya, PT.D.NDT</p>
        </div>
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-brand-deep">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-brand">Home</Link></li>
            <li><Link to="/services" className="hover:text-brand">Services</Link></li>
            <li><Link to="/about" className="hover:text-brand">About</Link></li>
            <li><Link to="/contact" className="hover:text-brand">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-brand-deep">Get in Touch</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-brand" /> 88255 00905 / 94427 56140</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-brand" /> caretouchnursinghomecare@gmail.com</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-brand" /> KR Complex (1st Floor), Vallimalai Road, Katpadi, Vellore - 7</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Care Touch Nursing & Home Care Agency. All rights reserved.
      </div>
    </footer>
  );
}
