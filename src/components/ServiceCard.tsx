import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

export function ServiceCard({
  icon: Icon,
  title,
  slug,
  image,
  imageAlt,
  delay = 0,
}: {
  icon: LucideIcon;
  title: string;
  slug: string;
  image?: string;
  imageAlt?: string;
  delay?: number;
}) {
  return (
    <Link
      to={`/services/${slug}`}
      className="group relative block overflow-hidden rounded-2xl bg-card shadow-card border border-border/60 hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {image ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-brand-soft">
          <img
            src={image}
            alt={imageAlt ?? title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-deep shadow-card">
            <Icon className="h-5 w-5" />
          </div>
        </div>
      ) : (
        <div className="m-6 mb-0 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand-deep group-hover:bg-gradient-brand group-hover:text-white transition-colors">
          <Icon className="h-6 w-6" />
        </div>
      )}
      <div className="p-6">
        <h3 className="font-display text-lg text-foreground">{title}</h3>
        <span className="mt-4 inline-flex items-center gap-1 rounded-full bg-brand-soft px-4 py-2 text-sm font-semibold text-brand-deep group-hover:bg-gradient-brand group-hover:text-white transition">
          Learn more <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
