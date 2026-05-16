import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";

export function ServiceCard({
  icon: Icon,
  title,
  slug,
  delay = 0,
}: {
  icon: LucideIcon;
  title: string;
  slug: string;
  delay?: number;
}) {
  return (
    <Link
      to={`/services/${slug}`}
      className="group flex min-h-36 flex-col items-center justify-center gap-4 rounded-lg bg-card p-6 text-center shadow-card border border-border/60 hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-brand-soft text-brand-deep group-hover:bg-gradient-brand group-hover:text-white transition-colors">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="font-display text-lg text-foreground">{title}</h3>
    </Link>
  );
}
