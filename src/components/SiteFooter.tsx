import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/ctn-logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-brand-soft/40 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <img src={logo} alt="Care Touch Nursing logo" className="h-24 w-auto object-contain" />
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Trusted home healthcare in Vellore — nurses, caregivers and doctors at your doorstep.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Proprietor <span className="font-semibold text-foreground">DR. Lavanya.. PT.D.NDT</span>
          </p>
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
            <li className="flex items-start gap-2"><MapPin className="h-5 w-5 mt-0.5 shrink-0 text-brand" /> No 91, KR Complex, Vallimalai Rd, opposite to vinayagar temple, Kumarappan Nagar, KRS Nagar, Katpadi, Vellore, Tamil Nadu 632007</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Care Touch Nursing & Home Care Agency. All rights reserved.
      </div>
    </footer>
  );
}
