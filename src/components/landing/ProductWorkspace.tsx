import { useState } from "react";
import {
  Check,
  ChevronLeft,
  ChevronUp,
  Circle,
  Clock,
  Eraser,
  Filter,
  Folder,
  Highlighter,
  Layers,
  ListVideo,
  Maximize2,
  Minus,
  MousePointer2,
  MoveUpRight,
  Pencil,
  PenLine,
  Pause,
  Play,
  Plus,
  Redo2,
  Repeat,
  Scissors,
  Search,
  SkipBack,
  SkipForward,
  Sparkles,
  Trash2,
  Type,
  Undo2,
  Upload,
  User,
  Volume2,
  X,
} from "lucide-react";
import { BroadcastScene } from "@/components/landing/BroadcastScene";
import { TacstemMark } from "@/components/landing/TacstemMark";
import { cn } from "@/lib/utils";

/** Left icon rail — the telestration toolbox. Index 3 (Aerial Arrow) is the
 *  tool the analyst has selected in the real app. */
const TOOLS = [
  { Icon: MousePointer2, label: "Select" },
  { Icon: PenLine, label: "Draw" },
  { Icon: Highlighter, label: "Mark" },
  { Icon: MoveUpRight, label: "Aerial Arrow" },
  { Icon: Circle, label: "Circle" },
  { Icon: Minus, label: "Line" },
  { Icon: Eraser, label: "Erase" },
  { Icon: Search, label: "Zoom" },
  { Icon: User, label: "Player" },
  { Icon: Type, label: "Text" },
];

/** Pen colors in the top bar — cyan is the active telestration color. */
const SWATCHES = [
  "#ef4444",
  "#f4d03f",
  "#3b82f6",
  "#22c55e",
  "#f8fafc",
  "#2ee6f6",
  "#f97316",
  "#d946ef",
  "#3f3f46",
];

const TABS = ["Tags", "Events", "Notes", "Playlist"] as const;
type Tab = (typeof TABS)[number];

const TAG_CHIPS = [
  "Build Up",
  "Progression",
  "Finishing",
  "Low Block",
  "Transition",
  "Counter Press",
];

const EVENTS = [
  { time: "20:52", label: "Build Up" },
  { time: "27:52", label: "Goal" },
  { time: "41:20", label: "High Block" },
  { time: "67:12", label: "Progression" },
];

const NOTES = [
  "Box entries: 14 · 6 on target",
  "PPDA: 8.4 — highest of the season",
  "Weak-side runs beat the offside trap",
];

const DOT_COUNT = 41;
const PLAYHEAD = 46;

/** Tiny track-and-knob slider used across the app chrome. */
function MiniSlider({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  return (
    <span className={cn("relative block h-1 rounded-full bg-white/12", className)}>
      <span
        className="absolute -top-[3px] size-2.5 -translate-x-1/2 rounded-full bg-white shadow"
        style={{ left: `${value}%` }}
      />
    </span>
  );
}

/**
 * The hero product mockup — a faithful reconstruction of the real Tacstem
 * desktop app: tool rail with stroke settings, record bar, match footage with
 * cyan telestration, scrubber + dot timeline, transport, and the tabbed
 * playlist panel. The tabs, tools, pen colors and play state are clickable.
 */
export function ProductWorkspace() {
  const [playing, setPlaying] = useState(false);
  const [tool, setTool] = useState(3);
  const [dashed, setDashed] = useState(false);
  const [swatch, setSwatch] = useState(5);
  const [tab, setTab] = useState<Tab>("Playlist");
  const [goalSelected, setGoalSelected] = useState(true);

  const activeTool = TOOLS[tool];
  const selectedCount = goalSelected ? 2 : 0;

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0b0a] shadow-[0_50px_140px_-40px_rgba(0,0,0,0.95)] ring-1 ring-black/40">
      {/* ---------- Top bar ---------- */}
      <div className="flex h-10 items-center gap-2 border-b border-white/10 bg-white/[0.03] px-2.5 sm:gap-3">
        <button
          type="button"
          className="flex shrink-0 items-center gap-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="size-3.5" />
          Back
        </button>

        <span className="hidden h-4 w-px bg-white/10 sm:block" />

        <div className="flex shrink-0 items-center gap-2">
          <TacstemMark className="size-5 text-primary" />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-[12px] font-bold tracking-[0.04em]">
              TacStem
            </span>
            <span className="font-mono text-[7px] uppercase tracking-[0.22em] text-muted-foreground">
              Football Analysis
            </span>
          </span>
        </div>

        <span className="hidden h-4 w-px bg-white/10 lg:block" />

        <span className="hidden min-w-0 items-center gap-1.5 text-[12px] font-medium text-foreground/90 lg:flex">
          <span className="truncate">Barcelona vs Athletic Club Playmate</span>
          <Pencil className="size-3 shrink-0 text-muted-foreground" />
        </span>

        <span className="hidden items-center rounded-full bg-primary px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-black sm:flex">
          Temporary Drawing
        </span>

        <button
          type="button"
          aria-label="Auto highlights"
          className="hidden size-7 shrink-0 place-items-center rounded-full border border-primary/50 bg-[#151715] text-primary transition-colors hover:bg-primary/10 sm:grid"
        >
          <Sparkles className="size-3.5" />
        </button>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="hidden items-center gap-2.5 text-muted-foreground xl:flex">
            {[Undo2, Redo2, Eraser, Trash2, Clock].map((Icon, i) => (
              <button
                key={i}
                type="button"
                aria-label={["Undo", "Redo", "Clear drawing", "Delete", "History"][i]}
                className="transition-colors hover:text-foreground"
              >
                <Icon className="size-4" />
              </button>
            ))}
          </div>

          <span className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 sm:flex">
            <span className="size-2 animate-tac-blink rounded-full bg-[#ef4444]" />
            <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-foreground">
              Record
            </span>
          </span>

          <div className="hidden items-center gap-1.5 md:flex">
            {SWATCHES.map((color, i) => (
              <button
                key={color}
                type="button"
                aria-label={`Pen color ${i + 1}`}
                aria-pressed={swatch === i}
                onClick={() => setSwatch(i)}
                className={cn(
                  "size-4 rounded-full transition-transform hover:scale-110",
                  swatch === i && "ring-2 ring-white/70 ring-offset-2 ring-offset-[#0a0b0a]",
                )}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ---------- Body ---------- */}
      <div className="flex">
        {/* Left tool rail */}
        <div className="flex w-9 shrink-0 flex-col items-center gap-1 border-r border-white/10 py-2">
          {TOOLS.map(({ Icon, label }, i) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              aria-pressed={tool === i}
              onClick={() => setTool(i)}
              className={cn(
                "grid size-7 place-items-center rounded transition-colors",
                tool === i
                  ? "bg-primary text-black"
                  : "text-muted-foreground hover:bg-white/10 hover:text-foreground",
              )}
            >
              <Icon className="size-3.5" />
            </button>
          ))}
          <span className="mt-auto grid size-7 place-items-center rounded text-muted-foreground">
            <Layers className="size-3.5" />
          </span>
        </div>

        {/* Tool settings */}
        <aside className="hidden w-44 shrink-0 flex-col border-r border-white/10 p-3 md:flex">
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-2">
            <span className="grid size-7 shrink-0 place-items-center rounded-md bg-primary text-black">
              <activeTool.Icon className="size-3.5" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[11px] font-semibold text-foreground">
                {activeTool.label}
              </span>
              <span className="block font-mono text-[7px] uppercase tracking-[0.18em] text-muted-foreground">
                Customize stroke
              </span>
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
            <span>Tool size</span>
            <span className="rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-foreground">
              5px
            </span>
          </div>
          <MiniSlider value={30} className="mt-4" />

          <div className="mt-5 flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-2">
            <span className="text-[11px] text-foreground/90">Dashed Line</span>
            <button
              type="button"
              role="switch"
              aria-checked={dashed}
              aria-label="Dashed line"
              onClick={() => setDashed((v) => !v)}
              className={cn(
                "relative h-4 w-8 rounded-full transition-colors",
                dashed ? "bg-primary" : "bg-white/15",
              )}
            >
              <span
                className={cn(
                  "absolute top-0.5 size-3 rounded-full bg-white transition-all",
                  dashed ? "left-[18px]" : "left-0.5",
                )}
              />
            </button>
          </div>
        </aside>

        {/* Centre: footage, scrubber, transport */}
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="p-2.5 sm:p-3">
            <div className="relative aspect-video overflow-hidden rounded-md bg-black">
              <BroadcastScene dashed={dashed} />

              {/* Score bug */}
              <div className="absolute left-2.5 top-2.5 overflow-hidden rounded border border-white/10 bg-black/80 backdrop-blur-sm">
                <div className="flex">
                  <div className="flex flex-col gap-0.5 p-1">
                    <span className="block h-5 w-6 rounded-sm bg-[#c8102e]" />
                    <span className="block h-5 w-6 rounded-sm bg-[#1b2a55]" />
                  </div>
                  <div className="flex flex-col justify-center border-l border-white/10 px-1.5 font-mono text-[13px] font-bold leading-5 text-white">
                    <span>0</span>
                    <span>0</span>
                  </div>
                </div>
                <div className="border-t border-white/10 px-1.5 py-0.5 text-center font-mono text-[10px] tabular-nums text-foreground/90">
                  20:52
                </div>
              </div>

              {/* Player label */}
              <div className="absolute left-[44%] top-[36%] flex items-center gap-1 rounded-[3px] bg-black/85 px-1 py-0.5 shadow-lg ring-1 ring-white/10">
                <span className="grid size-5 place-items-center rounded-[2px] bg-[#2ee6f6] font-mono text-[10px] font-bold text-black">
                  17
                </span>
                <span className="text-[11px] font-semibold tracking-wide text-white">
                  DE BRUYNE
                </span>
              </div>

              {/* Broadcast watermark */}
              <span className="absolute bottom-2 right-3 text-[10px] font-medium text-white/70">
                #Tacstem
              </span>
            </div>
          </div>

          {/* Scrubber + dot timeline */}
          <div className="relative px-3 pb-3 pt-1 sm:px-4">
            {/* Red scrub progress */}
            <div className="relative h-[3px] rounded-full bg-white/10">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-[#ef4444]"
                style={{ width: `${PLAYHEAD}%` }}
              />
            </div>

            {/* Selection chip */}
            <div className="absolute right-3 top-0 z-10 hidden -translate-y-1/2 items-center gap-1.5 sm:flex">
              <span className="flex items-center gap-1.5 rounded-full bg-[#151715] px-2.5 py-1 text-[10px] text-foreground shadow-lg ring-1 ring-white/10">
                <Check className="size-3 text-primary" />
                {selectedCount > 0
                  ? `${selectedCount} events selected`
                  : "No events selected"}
              </span>
              <button
                type="button"
                disabled={selectedCount === 0}
                className="flex items-center gap-1.5 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold text-black transition-opacity disabled:opacity-40"
              >
                <ListVideo className="size-3" />
                Add to Playlist
                <span className="rounded bg-black/20 px-1 py-px font-mono text-[8px]">
                  Ctrl+S
                </span>
              </button>
              <button
                type="button"
                className="rounded-full bg-[#151715] px-2.5 py-1 text-[10px] text-foreground shadow-lg ring-1 ring-white/10 transition-colors hover:text-primary"
              >
                Select All
              </button>
              <button
                type="button"
                aria-label="Clear selection"
                onClick={() => setGoalSelected(false)}
                className="grid size-5 place-items-center rounded-full bg-[#151715] text-muted-foreground shadow-lg ring-1 ring-white/10 transition-colors hover:text-foreground"
              >
                <X className="size-3" />
              </button>
            </div>

            {/* Dot timeline with the selected marker */}
            <div className="relative mt-6 flex items-center justify-between">
              {Array.from({ length: DOT_COUNT }, (_, i) => (
                <span
                  key={i}
                  className={cn(
                    "size-1 rounded-full",
                    i % 4 === 0 ? "bg-white/35" : "bg-white/15",
                  )}
                />
              ))}
              <span
                className="absolute -top-1.5 flex h-6 w-2.5 -translate-x-1/2 flex-col items-center justify-center rounded-sm bg-[#f4d03f] shadow-[0_0_10px_rgba(244,208,63,0.6)]"
                style={{ left: `${PLAYHEAD}%` }}
                aria-hidden="true"
              >
                <span className="size-1 rounded-full bg-black/70" />
              </span>
            </div>
          </div>

          {/* Transport row */}
          <div className="flex items-center gap-2 border-t border-white/10 px-3 py-2.5 sm:gap-3 sm:px-4">
            <button
              type="button"
              aria-label="Previous event"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <SkipBack className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Loop"
              className="hidden text-muted-foreground transition-colors hover:text-primary sm:block"
            >
              <Repeat className="size-4" />
            </button>
            <button
              type="button"
              aria-label={playing ? "Pause" : "Play"}
              onClick={() => setPlaying((v) => !v)}
              className="grid size-8 shrink-0 place-items-center rounded-full bg-white text-black transition-transform active:scale-95"
            >
              {playing ? (
                <Pause className="size-3.5" />
              ) : (
                <Play className="size-3.5 translate-x-[1px]" />
              )}
            </button>
            <button
              type="button"
              aria-label="Next event"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <SkipForward className="size-4" />
            </button>

            <span className="flex flex-col font-mono text-[11px] leading-tight tabular-nums">
              <span className="text-foreground">28:12.8</span>
              <span className="text-muted-foreground">/ 111:44.3</span>
            </span>

            <div className="hidden items-center gap-1.5 lg:flex">
              <span className="grid size-5 place-items-center rounded-full border border-white/15 text-muted-foreground">
                <Minus className="size-2.5" />
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">
                1x
              </span>
              <span className="grid size-5 place-items-center rounded-full border border-white/15 text-muted-foreground">
                <Plus className="size-2.5" />
              </span>
            </div>

            <button
              type="button"
              aria-label="Filter"
              className="hidden text-muted-foreground transition-colors hover:text-foreground xl:block"
            >
              <Filter className="size-4" />
            </button>

            <button
              type="button"
              className="hidden items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground xl:flex"
            >
              <ChevronUp className="size-3.5" />
              Timeline
            </button>

            <button
              type="button"
              className="ml-auto flex shrink-0 items-center gap-1.5 rounded-md border border-primary/50 bg-primary/10 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary/20"
            >
              <Maximize2 className="size-3" />
              Presentation
            </button>
          </div>

          {/* Volume + speed row */}
          <div className="hidden items-center gap-4 border-t border-white/10 px-4 py-2 md:flex">
            <div className="flex flex-1 items-center gap-2">
              <Volume2 className="size-4 shrink-0 text-muted-foreground" />
              <MiniSlider value={34} className="max-w-28 flex-1" />
            </div>
            <div className="flex flex-1 items-center justify-end gap-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                Speed
              </span>
              <MiniSlider value={22} className="max-w-24 flex-1" />
              <span className="font-mono text-[10px] tabular-nums text-foreground/90">
                1.0x
              </span>
            </div>
          </div>
        </div>

        {/* Right: tabbed panel */}
        <aside className="hidden w-52 shrink-0 flex-col border-l border-white/10 lg:flex">
          <div className="flex items-center justify-end gap-3 border-b border-white/10 px-2.5 py-2 font-mono text-[9px] uppercase tracking-[0.14em]">
            {TABS.map((t) => (
              <button
                key={t}
                type="button"
                aria-pressed={tab === t}
                onClick={() => setTab(t)}
                className={cn(
                  "pb-0.5 transition-colors",
                  tab === t
                    ? "border-b border-primary font-semibold text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {t}
              </button>
            ))}
          </div>

          {tab === "Playlist" && (
            <>
              <div className="flex items-center justify-between px-2.5 pt-2.5">
                <span className="flex items-center gap-1.5 text-[11px] font-semibold text-foreground">
                  <ListVideo className="size-3.5 text-primary" />
                  Playlists
                </span>
                <span className="flex items-center gap-1">
                  <span className="flex items-center gap-1 rounded border border-primary/50 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-primary">
                    <Maximize2 className="size-2.5" />
                    Present
                  </span>
                  <span className="grid size-5 place-items-center rounded border border-white/10 text-muted-foreground">
                    <Plus className="size-3" />
                  </span>
                </span>
              </div>

              <div className="mt-2 space-y-0.5 px-1.5">
                <div className="flex items-center justify-between rounded px-1.5 py-1.5 text-[11px] text-foreground/90 hover:bg-white/5">
                  <span className="flex items-center gap-2">
                    <Folder className="size-3.5 text-primary" />
                    Highlights
                  </span>
                  <span className="font-mono text-[9px] text-muted-foreground">
                    1
                  </span>
                </div>
                <div className="flex items-center justify-between rounded px-1.5 py-1.5 text-[11px] text-muted-foreground hover:bg-white/5">
                  <span className="flex items-center gap-2">
                    <Folder className="size-3.5" />
                    Defense
                  </span>
                  <span className="font-mono text-[9px]">0</span>
                </div>
              </div>

              <div className="mt-2 flex items-center gap-1 px-1.5">
                <span className="flex items-center gap-1 rounded border border-white/10 bg-white/[0.04] px-1.5 py-1 text-[9px] text-foreground/90">
                  <Folder className="size-2.5 text-primary" />
                  Highlights
                </span>
                <span className="flex items-center gap-1 rounded border border-white/10 px-1.5 py-1 text-[9px] text-muted-foreground">
                  <Scissors className="size-2.5" />
                  Playbar
                </span>
                <span className="flex items-center gap-1 rounded border border-white/10 px-1.5 py-1 text-[9px] text-muted-foreground">
                  <Upload className="size-2.5" />
                  Exp
                </span>
                <span className="flex items-center gap-1 rounded border border-primary/40 px-1.5 py-1 text-[9px] text-primary">
                  <Play className="size-2.5" />
                  Play
                </span>
              </div>

              <div className="mt-2 space-y-1.5 px-1.5">
                <button
                  type="button"
                  aria-pressed={goalSelected}
                  onClick={() => setGoalSelected((v) => !v)}
                  className={cn(
                    "flex w-full items-start gap-2 rounded-md border p-2 text-left transition-colors",
                    goalSelected
                      ? "border-primary/50 bg-primary/10"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20",
                  )}
                >
                  <span className="flex flex-1 items-center gap-1.5">
                    <span
                      className={cn(
                        "size-2 rounded-full",
                        goalSelected ? "bg-primary" : "bg-white/30",
                      )}
                    />
                    <span className="text-[11px] font-semibold text-foreground">
                      Goal
                    </span>
                  </span>
                  <span className="font-mono text-[9px] text-muted-foreground">
                    #3
                  </span>
                  <span className="grid size-3.5 shrink-0 place-items-center rounded-full bg-primary text-black">
                    <Check className="size-2.5" strokeWidth={3.5} />
                  </span>
                </button>
                <div className="flex items-center justify-between px-0.5 font-mono text-[9px] tabular-nums text-muted-foreground">
                  <span>27:52.8 - 28:12.8</span>
                  <span>00:20.0</span>
                </div>
              </div>
            </>
          )}

          {tab === "Tags" && (
            <div className="flex flex-wrap gap-1.5 p-2.5">
              {TAG_CHIPS.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {tab === "Events" && (
            <div className="space-y-0.5 p-1.5">
              {EVENTS.map((event) => (
                <div
                  key={event.time}
                  className="flex items-center justify-between rounded px-2 py-1.5 text-[11px] text-foreground/85 hover:bg-white/5"
                >
                  <span className="truncate">{event.label}</span>
                  <span className="font-mono text-[9px] tabular-nums text-muted-foreground">
                    {event.time}
                  </span>
                </div>
              ))}
            </div>
          )}

          {tab === "Notes" && (
            <div className="space-y-2.5 p-2.5">
              {NOTES.map((note) => (
                <p
                  key={note}
                  className="border-l-2 border-primary/50 pl-2.5 text-[11px] leading-5 text-muted-foreground"
                >
                  {note}
                </p>
              ))}
            </div>
          )}

          <div className="mt-auto p-2">
            <button
              type="button"
              disabled={selectedCount === 0}
              className="flex w-full items-center justify-center gap-1.5 rounded-md bg-primary py-2 text-[11px] font-bold text-black transition-opacity hover:brightness-105 disabled:opacity-40"
            >
              <ListVideo className="size-3.5" />
              Add Selected ({selectedCount})
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
