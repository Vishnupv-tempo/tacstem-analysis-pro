import { useState } from "react";
import {
  Circle,
  Eraser,
  Minus,
  MousePointer2,
  MoveUpRight,
  Pause,
  PenLine,
  Play,
  Square,
  Type,
} from "lucide-react";
import {
  Container,
  Eyebrow,
  Reveal,
  sectionTitleCls,
} from "@/components/landing/primitives";
import { TelestrationPitch } from "@/components/landing/TelestrationPitch";
import { cn } from "@/lib/utils";

const TOOLS = [
  { Icon: MousePointer2, label: "Select" },
  { Icon: MoveUpRight, label: "Arrow" },
  { Icon: Minus, label: "Line" },
  { Icon: Square, label: "Zone" },
  { Icon: Circle, label: "Circle" },
  { Icon: PenLine, label: "Freehand" },
  { Icon: Type, label: "Text" },
  { Icon: Eraser, label: "Erase" },
];

const LEGEND = [
  "Arrows",
  "Lines",
  "Zones",
  "Circles",
  "Player highlight",
  "Movement paths",
  "Tactical shapes",
];

/** Section 04 — telestration, the most visual section of the page. */
export function TelestrationSection() {
  const [tool, setTool] = useState(1);
  const [playing, setPlaying] = useState(false);

  return (
    <section id="telestration" className="relative py-24 md:py-32">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <Eyebrow index="04">Telestration</Eyebrow>
            <h2 className={`${sectionTitleCls} max-w-xl`}>
              Explain what the video alone can’t.
            </h2>
            <p className={cn(
              "mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg",
            )}>
              Turn a match clip into a tactical explanation.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex max-w-md flex-wrap gap-2 lg:justify-end">
              {LEGEND.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Large telestrated frame */}
        <Reveal delay={0.12} className="mt-12">
          <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black shadow-[0_50px_140px_-45px_rgba(0,0,0,0.95)] ring-1 ring-black/40">
            <TelestrationPitch />

            {/* Frame meta */}
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-md border border-white/10 bg-black/70 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-sm">
              <span className="size-1.5 animate-tac-blink rounded-full bg-primary" />
              Telestration · Frame 67:12
            </div>

            {/* Horizontal tool rail */}
            <div className="absolute right-4 top-4 hidden gap-1 rounded-lg border border-white/10 bg-black/70 p-1.5 backdrop-blur-sm sm:flex">
              {TOOLS.map(({ Icon, label }, i) => (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  aria-pressed={tool === i}
                  onClick={() => setTool(i)}
                  className={cn(
                    "grid size-8 place-items-center rounded transition-colors",
                    tool === i
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-white/10 hover:text-foreground",
                  )}
                >
                  <Icon className="size-4" />
                </button>
              ))}
            </div>

            {/* Caption */}
            <div className="absolute bottom-16 left-4 flex items-center gap-2 rounded-md border border-primary/40 bg-primary/15 px-3 py-1.5 backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-primary" />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                67:12 · Progression · Zone 14
              </span>
            </div>

            {/* Mini transport */}
            <div className="absolute inset-x-0 bottom-0 flex h-11 items-center gap-3 border-t border-white/10 bg-black/75 px-4 backdrop-blur-sm">
              <button
                type="button"
                aria-label={playing ? "Pause clip" : "Play clip"}
                onClick={() => setPlaying((v) => !v)}
                className="grid size-7 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-transform active:scale-95"
              >
                {playing ? (
                  <Pause className="size-3.5" />
                ) : (
                  <Play className="size-3.5 translate-x-[1px]" />
                )}
              </button>
              <span className="shrink-0 font-mono text-[11px] tabular-nums text-foreground">
                67:12
              </span>
              <div className="relative h-1 min-w-0 flex-1 rounded-full bg-white/15">
                <div
                  className="absolute inset-y-0 left-0 w-[74%] rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span className="absolute left-[74%] top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_10px_rgba(201,247,60,0.9)]" />
              </div>
              <span className="shrink-0 font-mono text-[11px] tabular-nums text-muted-foreground">
                90:00
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
