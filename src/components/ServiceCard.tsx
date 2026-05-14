import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

export function ServiceCard({
  icon: Icon,
  title,
  description,
  slug,
  delay = 0,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  slug: string;
  delay?: number;
}) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug }}
      className="group relative block rounded-2xl bg-card p-6 shadow-card border border-border/60 hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand-deep group-hover:bg-gradient-brand group-hover:text-white transition-colors">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 font-display text-lg text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition">
        Learn more <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
