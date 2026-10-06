import { motion } from "framer-motion";
import {
  Container,
  Eyebrow,
  Reveal,
  sectionLeadCls,
  sectionTitleCls,
} from "@/components/landing/primitives";

/**
 * Monthly entry-plan prices, normalized to one scale so bar width maps
 * directly to price. Tacstem is the anchor; competitors stay muted.
 */
const PLANS = [
  {
    name: "Tacstem",
    note: "Everything included",
    price: "€10",
    amount: 10,
    own: true,
  },
  {
    name: "Metrica Play",
    note: "Base plan",
    price: "$15",
    amount: 15,
    own: false,
  },
  {
    name: "Once Sports",
    note: "Entry plan",
    price: "$17",
    amount: 17,
    own: false,
  },
  {
    name: "Live Tag Pro",
    note: "Entry plan",
    price: "$18",
    amount: 18,
    own: false,
  },
] as const;

const MAX = 18;

/** Section 06 — affordability, the animated price comparison. */
export function Affordability() {
  return (
    <section id="affordability" className="relative py-24 md:py-32">
      <Container>
        <Reveal>
          <Eyebrow index="06">Affordability</Eyebrow>
          <h2 className={`${sectionTitleCls} max-w-2xl`}>
            We made football analysis{" "}
            <span className="text-primary">more affordable</span>.
          </h2>
          <p className={sectionLeadCls}>
            Professional video analysis shouldn’t cost a professional’s wage.
            Here’s what analysts pay per month for the tools next to us.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mt-14">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-card p-6 sm:p-9">
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent"
            />

            <ul className="space-y-7">
              {PLANS.map((plan, i) => (
                <li key={plan.name}>
                  <div className="flex items-baseline justify-between gap-4">
                    <span
                      className={
                        plan.own
                          ? "font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary"
                          : "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
                      }
                    >
                      {plan.name}
                    </span>
                    <span
                      className={
                        plan.own
                          ? "text-lg font-semibold tabular-nums text-foreground"
                          : "text-base font-medium tabular-nums text-muted-foreground"
                      }
                    >
                      {plan.price}
                      <span className="ml-1 text-xs font-normal text-muted-foreground">
                        / mo
                      </span>
                    </span>
                  </div>

                  <div
                    aria-hidden="true"
                    className="mt-2.5 h-3 overflow-hidden rounded-full bg-white/[0.05]"
                  >
                    <motion.div
                      className={
                        plan.own
                          ? "h-full rounded-full bg-primary shadow-[0_0_18px_-4px_rgba(201,247,60,0.8)]"
                          : "h-full rounded-full bg-white/15"
                      }
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${(plan.amount / MAX) * 100}%`,
                      }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.15 + i * 0.14,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </div>

                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
                    {plan.note}
                  </p>
                </li>
              ))}
            </ul>

            <div className="my-7 h-px bg-white/8" aria-hidden="true" />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-sm leading-6 text-muted-foreground">
                Same job, a third to nearly half the price —{" "}
                <span className="text-foreground">
                  €10 against $15–$18 entry plans elsewhere
                </span>
                , with no feature paywalls on top.
              </p>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/60">
                Entry plans · Published prices
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
