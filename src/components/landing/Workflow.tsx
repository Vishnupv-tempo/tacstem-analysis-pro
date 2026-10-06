import {
  Container,
  Eyebrow,
  Reveal,
  sectionLeadCls,
  sectionTitleCls,
} from "@/components/landing/primitives";

const STEPS = [
  {
    n: "01",
    title: "Load",
    copy: "No three-hour uploads, no bulky lagging software. Load your match video locally, right in the browser, and start in seconds.",
    meta: "Local load · No upload",
  },
  {
    n: "02",
    title: "Tag",
    copy: "A coding panel of tags and labels, plus an advanced coding pad where analysts design their own tagging system.",
    meta: "Tags · Coding pad",
  },
  {
    n: "03",
    title: "Telestrate",
    copy: "Freeze any frame and draw over it with broadcast-style visual tools — arrows, zones, markers and highlights.",
    meta: "Freeze · Broadcast tools",
  },
  {
    n: "04",
    title: "Export",
    copy: "Export your telestrated video and the CSV data you tagged in one click.",
    meta: "Video + CSV · One click",
  },
];

/** Section 05 — the four-step analysis workflow. */
export function Workflow() {
  return (
    <section id="workflow" className="relative py-24 md:py-32">
      <Container>
        <Reveal>
          <Eyebrow index="05">Workflow</Eyebrow>
          <h2 className={`${sectionTitleCls} max-w-2xl`}>
            Load. Tag. Telestrate. Export.
          </h2>
          <p className={sectionLeadCls}>
            Four steps, one browser tab — from raw footage to finished video
            and data.
          </p>
        </Reveal>

        <ol className="relative mt-16 grid gap-12 md:grid-cols-4 md:gap-6">
          {/* Mobile: vertical progression */}
          <span
            aria-hidden="true"
            className="absolute bottom-2 left-[4.5px] top-1 w-px bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 md:hidden"
          />
          {/* Desktop: horizontal progression */}
          <span
            aria-hidden="true"
            className="absolute left-[12%] right-[12%] top-[8px] hidden h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 md:block"
          />

          {STEPS.map((step, i) => (
            <li key={step.n} className="relative list-none md:pt-8">
              <span
                aria-hidden="true"
                className="absolute left-0 top-1 size-2.5 rotate-45 border border-primary bg-background"
              />
              <Reveal delay={i * 0.09}>
                <div className="pl-6 md:pl-0">
                  <span className="font-mono text-3xl font-medium leading-none tracking-tight text-white/15 md:text-4xl">
                    {step.n}
                  </span>
                  <h3 className="mt-4 font-mono text-sm font-medium uppercase tracking-[0.26em] text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[30ch] text-sm leading-6 text-muted-foreground">
                    {step.copy}
                  </p>
                  <p className="mt-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-primary/80">
                    <span
                      className="size-1 rounded-full bg-primary/70"
                      aria-hidden="true"
                    />
                    {step.meta}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
