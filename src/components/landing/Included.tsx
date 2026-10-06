import {
  Braces,
  CalendarDays,
  Circle,
  Clock,
  Layers,
  Spline,
} from "lucide-react";
import {
  Container,
  Eyebrow,
  Reveal,
  sectionLeadCls,
  sectionTitleCls,
} from "@/components/landing/primitives";

const INCLUDED = [
  {
    icon: Circle,
    title: "Recording video",
    copy: "We watched whole projects crash mid-export. Tacstem is built for low-end devices: one minute of footage exports in about one minute — without crashing.",
    meta: "No crashes · Low-end ready",
  },
  {
    icon: Braces,
    title: "JSON designing",
    copy: "Skip the manual setup. Ask ChatGPT or Gemini for the JSON of your desired tagging system, paste it in, done. An hour of work completed in 30 seconds.",
    meta: "1 hour → 30 seconds",
  },
  {
    icon: Clock,
    title: "Live tagging without video",
    copy: "No need to wait until the footage arrives. Tag moments while watching the game or travelling to it — and save up to 50% of your time.",
    meta: "Save up to 50%",
  },
  {
    icon: Layers,
    title: "Freeze-frame timeline",
    copy: "Some tools splash every drawing on screen at once. In Tacstem you control what appears first, what appears next, and exactly when.",
    meta: "You control the order",
  },
  {
    icon: Spline,
    title: "Tactical pad",
    copy: "Why should an analyst pay extra for a tactical pad? Ours is built in — create board animations and integrate them with your video playlist.",
    meta: "Built in · Not an add-on",
  },
  {
    icon: CalendarDays,
    title: "Batch analysis",
    copy: "An event analysis doesn’t end with one match. Synchronise your tagged events across different games and analyse a whole season at once.",
    meta: "Sync across a season",
  },
] as const;

/** Section 07 — features other platforms charge extra for. */
export function Included() {
  return (
    <section id="included" className="relative py-24 md:py-32">
      <Container>
        <Reveal>
          <Eyebrow index="07">Included</Eyebrow>
          <h2 className={`${sectionTitleCls} max-w-2xl`}>
            Features they charge you{" "}
            <span className="text-primary">extra</span> for.
          </h2>
          <p className={sectionLeadCls}>
            Six tools that arrive with your €10 plan — no upsells, no add-on
            modules, no “contact sales”.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INCLUDED.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-card p-6 transition-colors duration-300 hover:border-primary/35">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent transition-opacity duration-300 group-hover:opacity-0"
                />

                <span className="grid size-10 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary transition-transform duration-300 group-hover:-translate-y-0.5">
                  <item.icon className="size-5" strokeWidth={1.8} />
                </span>

                <h3 className="mt-5 font-mono text-xs font-medium uppercase tracking-[0.22em] text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.copy}
                </p>

                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-primary/80">
                  {item.meta}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10">
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
              More to go
            </p>
            <p className="max-w-xl text-sm leading-6 text-muted-foreground">
              This is what ships today. The roadmap keeps moving — and nothing
              on it changes your price.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
