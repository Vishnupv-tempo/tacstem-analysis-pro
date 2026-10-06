import {
  Container,
  Eyebrow,
  Reveal,
  sectionTitleCls,
} from "@/components/landing/primitives";
import { cn } from "@/lib/utils";

const AUDIENCE = [
  {
    n: "01",
    title: "Coaches",
    copy: "Prepare training and match reviews.",
  },
  {
    n: "02",
    title: "Performance Analysts",
    copy: "Build structured tactical analysis.",
  },
  {
    n: "03",
    title: "Opposition Analysts",
    copy: "Identify patterns and weaknesses.",
  },
  {
    n: "04",
    title: "Scouts",
    copy: "Study players and match behaviours.",
  },
  {
    n: "05",
    title: "Analyst Students",
    copy: "Learn professional analysis workflows.",
  },
];

/** Section 08 — who Tacstem is built for. */
export function Audience() {
  return (
    <section id="audience" className="relative py-24 md:py-32">
      <Container>
        <Reveal>
          <Eyebrow index="08">Who it’s for</Eyebrow>
          <h2 className={`${sectionTitleCls} max-w-2xl`}>
            Who is Tacstem for?
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-white/8 bg-white/8 md:grid-cols-2 xl:grid-cols-5">
          {AUDIENCE.map((person, i) => (
            <div
              key={person.title}
              className={cn(
                "bg-[#0c0e0c] transition-colors duration-300 hover:bg-white/[0.04]",
                i === AUDIENCE.length - 1 && "md:col-span-2 xl:col-span-1",
              )}
            >
              <Reveal delay={i * 0.06} className="group h-full">
                <div className="flex h-full flex-col p-6 lg:p-7">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/60">
                    {person.n}
                  </span>
                  <h3 className="mt-8 font-mono text-[13px] font-medium uppercase leading-5 tracking-[0.18em] text-foreground transition-colors duration-300 group-hover:text-primary">
                    {person.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {person.copy}
                  </p>
                  <span
                    className="mt-6 h-px w-8 bg-primary/40 transition-all duration-300 group-hover:w-14"
                    aria-hidden="true"
                  />
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
