import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";
import {
  Container,
  Eyebrow,
  Reveal,
  sectionLeadCls,
  sectionTitleCls,
} from "@/components/landing/primitives";
import { cn } from "@/lib/utils";

type CodeItem = { label: string; count: number };

const STRUCTURE: { name: string; items: CodeItem[] }[] = [
  {
    name: "Attacking",
    items: [
      { label: "Build Up", count: 14 },
      { label: "Progression", count: 9 },
      { label: "Finishing", count: 5 },
    ],
  },
  {
    name: "Defending",
    items: [
      { label: "Low Block", count: 8 },
      { label: "Mid Block", count: 6 },
      { label: "High Block", count: 3 },
    ],
  },
  {
    name: "Transitions",
    items: [
      { label: "Attacking Transition", count: 6 },
      { label: "Defensive Transition", count: 4 },
    ],
  },
  {
    name: "Set Pieces",
    items: [
      { label: "Throw-in", count: 7 },
      { label: "Attacking Corner", count: 5 },
      { label: "Defending Corner", count: 4 },
      { label: "Attacking FK", count: 2 },
      { label: "Defending FK", count: 3 },
    ],
  },
];

const HOTKEYS = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "Q",
  "W",
  "E",
  "R",
];
const TAG_TIMES = ["67:12", "68:03", "68:41", "69:15", "70:02"];

const BULLETS = [
  "Categories and codes built around your own methodology.",
  "Keyboard-first tagging while the footage keeps rolling.",
  "Live counts and filters for every code you create.",
];

/** Section 03 — coding: the analyst builds their own taxonomy. */
export function CodingSection() {
  const [counts, setCounts] = useState<Record<string, number>>(() => {
    const seed: Record<string, number> = {};
    STRUCTURE.forEach((group, gi) =>
      group.items.forEach((item, ii) => {
        seed[`${gi}-${ii}`] = item.count;
      }),
    );
    return seed;
  });
  const [flashed, setFlashed] = useState<string | null>(null);
  const [lastTag, setLastTag] = useState<{
    code: string;
    time: string;
    n: number;
  } | null>(null);
  const timeout = useRef<number | undefined>(undefined);
  const tags = useRef(0);

  useEffect(() => () => window.clearTimeout(timeout.current), []);

  const tag = (key: string, code: string) => {
    tags.current += 1;
    setCounts((prev) => ({ ...prev, [key]: (prev[key] ?? 0) + 1 }));
    setFlashed(key);
    setLastTag({
      code,
      time: TAG_TIMES[tags.current % TAG_TIMES.length],
      n: tags.current,
    });
    window.clearTimeout(timeout.current);
    timeout.current = window.setTimeout(() => setFlashed(null), 700);
  };

  return (
    <section id="coding" className="relative py-24 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Copy */}
          <div className="lg:pt-4">
            <Reveal>
              <Eyebrow index="03">Coding</Eyebrow>
              <h2 className={sectionTitleCls}>
                Build your own analysis language.
              </h2>
              <p className={sectionLeadCls}>
                Analysts structure coding according to their own methodology —
                not preset templates. Define categories, codes and hotkeys
                that match the way you see the game.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mt-8 space-y-3.5">
                {BULLETS.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 rotate-45 bg-primary"
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Coding interface */}
          <Reveal delay={0.12}>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0c0e0c] shadow-[0_40px_110px_-45px_rgba(0,0,0,0.95)]">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-3">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground">
                    Coding structure
                  </span>
                  <span className="hidden truncate rounded border border-white/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground sm:inline">
                    NBR v ALB · 1st team
                  </span>
                </div>
                <span className="flex shrink-0 items-center gap-1 rounded border border-primary/40 bg-primary/10 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-primary">
                  <Plus className="size-3" />
                  New
                </span>
              </div>

              <div className="grid gap-3 p-4 sm:grid-cols-2">
                {STRUCTURE.map((group, gi) => {
                  const total = group.items.reduce(
                    (sum, _item, ii) => sum + (counts[`${gi}-${ii}`] ?? 0),
                    0,
                  );
                  return (
                    <div
                      key={group.name}
                      className="rounded-lg border border-white/8 bg-white/[0.02]"
                    >
                      <div className="flex items-center justify-between border-b border-white/8 px-3 py-2.5">
                        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground">
                          <span
                            className="size-1.5 bg-primary"
                            aria-hidden="true"
                          />
                          {group.name}
                        </span>
                        <span className="font-mono text-[9px] tabular-nums text-muted-foreground">
                          {total}
                        </span>
                      </div>
                      <div className="space-y-0.5 p-1.5">
                        {group.items.map((item, ii) => {
                          const key = `${gi}-${ii}`;
                          const isFlashed = flashed === key;
                          return (
                            <button
                              key={key}
                              type="button"
                              onClick={() => tag(key, item.label)}
                              aria-label={`Tag ${item.label}`}
                              className={cn(
                                "flex w-full items-center justify-between gap-2 rounded px-2 py-[7px] text-left text-[12px] transition-colors duration-200",
                                isFlashed
                                  ? "bg-primary/15 text-primary"
                                  : "text-muted-foreground hover:bg-white/5 hover:text-foreground",
                              )}
                            >
                              <span className="flex min-w-0 items-center gap-2">
                                <span
                                  className={cn(
                                    "size-1.5 shrink-0 rotate-45 border",
                                    isFlashed
                                      ? "border-primary bg-primary"
                                      : "border-primary/50",
                                  )}
                                  aria-hidden="true"
                                />
                                <span className="truncate">{item.label}</span>
                              </span>
                              <span className="flex shrink-0 items-center gap-2">
                                <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[9px] text-muted-foreground">
                                  {HOTKEYS[gi * 3 + ii] ?? "·"}
                                </kbd>
                                <span className="w-6 text-right font-mono text-[10px] tabular-nums text-primary/85">
                                  {counts[key] ?? 0}
                                </span>
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Tag feedback bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 bg-white/[0.02] px-4 py-3">
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em]">
                  <span
                    className={cn(
                      "size-1.5 rounded-full",
                      lastTag ? "animate-tac-blink bg-primary" : "bg-white/25",
                    )}
                    aria-hidden="true"
                  />
                  {lastTag ? (
                    <span className="text-primary">
                      Tagged · {lastTag.code} @ {lastTag.time}
                    </span>
                  ) : (
                    <span className="text-muted-foreground">
                      Awaiting first tag
                    </span>
                  )}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground/70">
                  Click any code to tag
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
