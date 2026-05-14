import type { LucideIcon } from "lucide-react";

export function ServiceCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <div
      className="group relative rounded-2xl bg-card p-6 shadow-card border border-border/60 hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand-deep group-hover:bg-gradient-brand group-hover:text-white transition-colors">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 font-display text-lg text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
