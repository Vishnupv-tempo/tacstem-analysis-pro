import { Link } from "react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Container,
  Eyebrow,
  Reveal,
  sectionTitleCls,
} from "@/components/landing/primitives";

/**
 * Pricing config — edit this object to change plan name, price, billing
 * note, feature list or CTA copy. The layout adapts automatically.
 */
const PLAN = {
  name: "Pro",
  price: 3,
  period: "month",
  billing: "Billed annually",
  features: [
    "Match analysis",
    "Coding",
    "Telestration",
    "Playlists",
    "Projects",
    "Export tools",
  ],
  cta: "Start Analyzing",
};

/** Section 08 — pricing. */
export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div
        aria-hidden="true"
        className="glow-lime-soft pointer-events-none absolute inset-x-0 top-1/3 h-[420px]"
      />

      <Container className="relative">
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow index="08" className="justify-center">
            Pricing
          </Eyebrow>
          <h2 className={`${sectionTitleCls} text-center`}>
            Start analyzing.
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
            One plan. Every analysis tool. No hidden tiers.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mt-12 flex justify-center">
          <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-card p-8 shadow-[0_40px_110px_-50px_rgba(0,0,0,0.95)]">
            <span
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent"
              aria-hidden="true"
            />

            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-primary">
                {PLAN.name}
              </span>
              <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                All features
              </span>
            </div>

            <div className="mt-6 flex items-baseline gap-1.5">
              <span className="text-2xl font-medium text-muted-foreground">
                $
              </span>
              <span className="text-6xl font-semibold leading-none tracking-[-0.04em] text-foreground">
                {PLAN.price}
              </span>
              <span className="text-sm text-muted-foreground">
                / {PLAN.period}
              </span>
            </div>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {PLAN.billing}
            </p>

            <div className="my-7 h-px bg-white/8" aria-hidden="true" />

            <ul className="space-y-3.5">
              {PLAN.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-foreground/90"
                >
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="group mt-8 h-11 w-full gap-2 font-semibold shadow-[0_0_30px_-8px_rgba(201,247,60,0.7)]"
            >
              <Link to="/auth">
                {PLAN.cta}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
