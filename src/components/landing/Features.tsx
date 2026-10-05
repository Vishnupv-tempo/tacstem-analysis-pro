import {
  FolderKanban,
  ListVideo,
  MonitorPlay,
  PenLine,
  Share2,
  Tag,
} from "lucide-react";
import {
  Container,
  Eyebrow,
  Reveal,
  sectionTitleCls,
} from "@/components/landing/primitives";

const FEATURES = [
  {
    n: "01",
    Icon: MonitorPlay,
    title: "Match Analysis",
    copy: "Work directly with match footage and build structured analysis around the game.",
    meta: "Footage · Timeline",
  },
  {
    n: "02",
    Icon: Tag,
    title: "Smart Coding",
    copy: "Create your own football coding structure and tag moments quickly.",
    meta: "Taxonomy · Hotkeys",
  },
  {
    n: "03",
    Icon: PenLine,
    title: "Tactical Telestration",
    copy: "Draw lines, arrows, shapes and tactical movements directly over video.",
    meta: "Arrows · Zones",
  },
  {
    n: "04",
    Icon: ListVideo,
    title: "Playlists",
    copy: "Collect coded moments into focused playlists for review and presentation.",
    meta: "Review · Present",
  },
  {
    n: "05",
    Icon: FolderKanban,
    title: "Project Workspace",
    copy: "Keep matches, analysis and outputs organized inside dedicated projects.",
    meta: "Matches · Outputs",
  },
  {
    n: "06",
    Icon: Share2,
    title: "Export",
    copy: "Turn your analysis into professional video outputs and shareable material.",
    meta: "Video · Share",
  },
];

/** Section 03 — the feature grid. */
export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div
        aria-hidden="true"
        className="glow-lime-soft pointer-events-none absolute inset-x-0 top-1/4 h-[480px]"
      />
      <Container className="relative">
        <Reveal>
          <Eyebrow index="02">Product features</Eyebrow>
          <h2 className={`${sectionTitleCls} max-w-3xl`}>
            Everything you need to understand the game.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 0.07}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.04]">
                <span
                  className="absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <div className="flex items-start justify-between">
                  <div className="grid size-11 place-items-center rounded-lg border border-white/10 bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_0_24px_-8px_rgba(201,247,60,0.8)]">
                    <feature.Icon className="size-5" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/60">
                    {feature.n}
                  </span>
                </div>
                <h3 className="mt-6 font-mono text-[13px] font-medium uppercase tracking-[0.2em] text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {feature.copy}
                </p>
                <div className="mt-5 flex items-center gap-2 border-t border-white/8 pt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/70">
                  <span
                    className="size-1 rounded-full bg-primary/70"
                    aria-hidden="true"
                  />
                  {feature.meta}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
