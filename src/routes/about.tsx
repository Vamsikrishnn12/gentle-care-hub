import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import about from "@/assets/about-care.jpg";
import { canonicalLink, seoMeta, site } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: seoMeta({
      title: `About ${site.shortName} - Home Care Team in Vellore`,
      description:
        "Learn about Care Touch Nursing & Home Care Agency in Katpadi, Vellore, including our trained staff, 24/7 coordinator support and patient-first care values.",
      path: "/about",
      image: about,
    }),
    links: [canonicalLink("/about")],
  }),
  component: AboutPage,
});

function AboutPage() {
  const values = [
    "Compassion in every interaction",
    "Strict hygiene and safety protocols",
    "Trained, background-verified staff",
    "Transparent pricing, no hidden costs",
    "Personalised care plans",
    "24/7 coordinator support",
  ];
  return (
    <>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-brand">About Us</p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl">
            A trusted hand in home healthcare
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative animate-fade-up">
          <div className="absolute -inset-4 bg-brand/10 blur-2xl rounded-3xl" />
          <img
            src={about}
            alt="Caring nurse"
            width={1024}
            height={1024}
            loading="lazy"
            className="relative rounded-3xl shadow-card object-cover w-full aspect-square"
          />
        </div>
        <div className="animate-fade-up" style={{ animationDelay: "150ms" }}>
          <h2 className="font-display text-3xl">Care Touch Nursing & Home Care Agency</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Founded by <span className="font-semibold text-foreground">Jayakumar</span>, Care Touch
            is a Vellore-based home healthcare agency dedicated to bringing quality medical and
            personal care to families across Katpadi and surrounding areas. Whether your loved one
            needs a nurse for a few hours, an elder caretaker, postoperative recovery support or a
            doctor's visit at home — our team is ready, day or night.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We believe healing happens best at home, surrounded by familiar faces. Every nurse and
            caretaker on our roster is trained, verified and committed to treating your family like
            our own.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {values.map((v) => (
              <li key={v} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-leaf shrink-0 mt-0.5" /> {v}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
