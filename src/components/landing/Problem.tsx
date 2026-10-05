import { ArrowRight, Keyboard, ListVideo, PenLine } from "lucide-react";
import {
  Container,
  Eyebrow,
  Reveal,
  sectionLeadCls,
  sectionTitleCls,
} from "@/components/landing/primitives";

const SCATTERED = [
  "Video players",
  "Spreadsheets",
  "Drawing tools",
  "Notes",
  "Folders",
];

const CARDS = [
  {
    n: "01",
    Icon: Keyboard,
    title: "Code",
    copy: "Tag the moments that matter.",
  },
  {
    n: "02",
    Icon: PenLine,
    title: "Telestrate",
    copy: "Draw, highlight and explain tactical details.",
  },
  {
    n: "03",
    Icon: ListVideo,
    title: "Review",
    copy: "Turn coded moments into focused playlists.",
  },
];

/** Section 02 — the problem: scattered tools vs one focused workspace. */
export function Problem() {
  return (
    <section id="problem" className="relative py-24 md:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-16">
          <Reveal>
            <Eyebrow index="01">The problem</Eyebrow>
            <h2 className={sectionTitleCls}>
              Football is complex.
              <br />
              Analysis <span className="text-primary">shouldn’t be.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className={sectionLeadCls}>
              Analysts spend too much time switching between video players,
              spreadsheets, drawing tools, notes and folders. Tacstem brings
              the essential analysis workflow into one focused workspace.
            </p>

            {/* Fragmented stack → one workspace */}
            <div className="mt-7 flex flex-wrap items-center gap-2">
              {SCATTERED.map((tool) => (
                <span
                  key={tool}
                  className="rounded-md border border-white/10 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground/70 line-through decoration-primary/50"
                >
                  {tool}
                </span>
              ))}
              <ArrowRight
                className="size-4 shrink-0 text-primary/70"
                aria-hidden="true"
              />
              <span className="rounded-md border border-primary/40 bg-primary/10 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                One workspace
              </span>
            </div>
          </Reveal>
        </div>

        {/* Three pillars */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.04]">
                <span
                  className="absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <div className="flex items-start justify-between">
                  <div className="grid size-10 place-items-center rounded-lg border border-white/10 bg-primary/10 text-primary transition-colors duration-300 group-hover:border-primary/40">
                    <card.Icon className="size-5" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/60">
                    {card.n}
                  </span>
                </div>
                <h3 className="mt-6 font-mono text-[13px] font-medium uppercase tracking-[0.24em] text-foreground">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {card.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
