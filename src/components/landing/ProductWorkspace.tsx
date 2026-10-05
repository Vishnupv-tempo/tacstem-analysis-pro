import { useState } from "react";
import {
  ChevronDown,
  Circle,
  Eraser,
  Maximize2,
  Minus,
  MousePointer2,
  MoveUpRight,
  Pause,
  PenLine,
  Play,
  Plus,
  Repeat,
  Search,
  SkipBack,
  SkipForward,
  Square,
  Type,
  Volume2,
} from "lucide-react";
import { BroadcastScene } from "@/components/landing/BroadcastScene";
import { TacstemMark } from "@/components/landing/TacstemMark";
import { cn } from "@/lib/utils";

const CODING = [
  {
    name: "Attacking",
    items: [
      { label: "Build Up", count: 14 },
      { label: "Progression", count: 9, active: true },
      { label: "Finishing", count: 5 },
    ],
  },
  {
    name: "Defending",
    items: [
      { label: "Low Block", count: 7 },
      { label: "High Block", count: 3 },
    ],
  },
  {
    name: "Transitions",
    items: [
      { label: "Attacking Trans.", count: 6 },
      { label: "Defensive Trans.", count: 4 },
    ],
  },
];

const EVENTS = [
  { left: 7, time: "06:12", label: "Build Up" },
  { left: 20, time: "17:40", label: "Low Block" },
  { left: 33, time: "29:45", label: "Line Break" },
  { left: 46, time: "41:20", label: "Finishing" },
  { left: 61, time: "54:50", label: "Transition" },
  { left: 74.7, time: "67:12", label: "Progression" },
  { left: 88, time: "79:12", label: "Att. Corner" },
];

const CLIPS = [
  { left: 8, width: 15, label: "Build Up" },
  { left: 38, width: 21, label: "Pressing" },
  { left: 68, width: 17, label: "Transitions" },
];

const RULER_MARKS = [
  { left: 6.7, label: "06:00" },
  { left: 26.7, label: "24:00" },
  { left: 46.7, label: "42:00" },
  { left: 66.7, label: "60:00" },
  { left: 86.7, label: "78:00" },
];

const PLAYLIST = [
  { time: "06:12", tag: "Build Up — 3rd Man", dur: "0:18" },
  { time: "17:40", tag: "Low Block Escape", dur: "0:11" },
  { time: "41:20", tag: "Finishing — Back Post", dur: "0:24" },
  { time: "67:12", tag: "Progression", dur: "0:14" },
  { time: "79:12", tag: "Attacking Corner", dur: "0:09" },
];

const TOOLS = [
  { Icon: MousePointer2, label: "Select" },
  { Icon: MoveUpRight, label: "Arrow" },
  { Icon: Minus, label: "Line" },
  { Icon: Square, label: "Rectangle" },
  { Icon: Circle, label: "Circle" },
  { Icon: PenLine, label: "Freehand" },
  { Icon: Type, label: "Text" },
  { Icon: Eraser, label: "Erase" },
];

const PLAYLIST_DEFAULT = 3;

/**
 * The hero product mockup — a faithful slice of the Tacstem analysis
 * workspace: coding panel, match footage with telestration rail, transport,
 * multi-track timeline with coded events, and a playlist. Clickable bits
 * (play, tools, event markers, clips) make it feel like the real thing.
 */
export function ProductWorkspace() {
  const [playing, setPlaying] = useState(false);
  const [tool, setTool] = useState(1);
  const [eventIdx, setEventIdx] = useState(5);
  const [clipIdx, setClipIdx] = useState(PLAYLIST_DEFAULT);

  const active = EVENTS[eventIdx];

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0c0e0c] shadow-[0_50px_140px_-40px_rgba(0,0,0,0.95)] ring-1 ring-black/40">
      {/* ---------- Window chrome ---------- */}
      <div className="flex h-11 items-center gap-3 border-b border-white/10 bg-white/[0.03] px-3 sm:px-4">
        <div className="hidden gap-1.5 sm:flex">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <TacstemMark className="size-4 text-primary" />
          <span className="text-[11px] font-semibold tracking-[0.2em]">
            TACSTEM
          </span>
        </div>
        <div className="hidden min-w-0 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground md:flex">
          <span className="text-white/20">/</span>
          <span className="truncate">Preseason 25/26 · Opposition</span>
          <span className="text-white/20">/</span>
          <span className="text-foreground/80">NBR v ALB</span>
        </div>
        <div className="ml-auto flex shrink-0 items-center gap-2">
          <span className="hidden items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:flex">
            <span className="size-1.5 animate-tac-blink rounded-full bg-primary" />
            Auto-saved
          </span>
          <span className="rounded border border-primary/40 bg-primary/10 px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-primary">
            Export
          </span>
          <span className="grid size-6 place-items-center rounded-full bg-secondary text-[9px] font-semibold text-muted-foreground">
            JR
          </span>
        </div>
      </div>

      {/* ---------- Body ---------- */}
      <div className="flex">
        {/* Coding panel */}
        <aside className="hidden w-56 shrink-0 flex-col border-r border-white/10 lg:flex">
          <div className="flex items-center justify-between border-b border-white/10 px-3 py-2.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Coding
            </span>
            <span className="grid size-5 place-items-center rounded border border-white/10 text-muted-foreground">
              <Plus className="size-3" />
            </span>
          </div>
          <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2 text-muted-foreground">
            <Search className="size-3" />
            <span className="font-mono text-[10px]">Search codes</span>
          </div>
          <div className="space-y-3 overflow-hidden p-2.5">
            {CODING.map((group) => (
              <div key={group.name}>
                <div className="flex items-center gap-1.5 px-1.5 pb-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                  <ChevronDown className="size-3" />
                  {group.name}
                </div>
                <div className="space-y-0.5">
                  {group.items.map((item) => (
                    <div
                      key={item.label}
                      className={cn(
                        "flex items-center justify-between rounded px-2 py-1.5 text-[11px] transition-colors",
                        item.active
                          ? "bg-primary/10 font-medium text-primary"
                          : "text-muted-foreground hover:bg-white/5 hover:text-foreground",
                      )}
                    >
                      <span className="truncate">{item.label}</span>
                      <span className="font-mono text-[9px] tabular-nums opacity-70">
                        {item.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Centre: footage, transport, timeline */}
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="p-3 sm:p-4">
            <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-black">
              <BroadcastScene />

              {/* Score bug */}
              <div className="absolute left-3 top-3 flex items-center gap-2 rounded-md border border-white/10 bg-black/70 px-2.5 py-1.5 backdrop-blur-sm">
                <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-foreground">
                  NBR
                </span>
                <span className="grid size-4 place-items-center rounded-sm bg-primary font-mono text-[10px] font-bold text-primary-foreground">
                  1
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  0
                </span>
                <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-foreground">
                  ALB
                </span>
                <span className="ml-0.5 rounded-sm bg-white/10 px-1.5 py-0.5 font-mono text-[10px] tabular-nums text-foreground/90">
                  {active.time}
                </span>
              </div>

              {/* Feed meta */}
              <div className="absolute right-3 top-3 hidden items-center gap-2 sm:flex">
                <span className="rounded border border-white/10 bg-black/60 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-primary/90">
                  Tactical
                </span>
                <span className="rounded border border-white/10 bg-black/60 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                  1080p50
                </span>
              </div>

              {/* Tag confirmation */}
              <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-md border border-primary/40 bg-primary/15 px-2.5 py-1.5 backdrop-blur-sm">
                <span className="size-1.5 animate-tac-blink rounded-full bg-primary" />
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                  {active.label} · Tagged
                </span>
              </div>

              {/* Telestration rail */}
              <div className="absolute right-3 top-1/2 hidden -translate-y-1/2 flex-col gap-1 rounded-lg border border-white/10 bg-black/70 p-1.5 backdrop-blur-sm sm:flex">
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
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-white/10 hover:text-foreground",
                    )}
                  >
                    <Icon className="size-3.5" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Transport */}
          <div className="flex items-center gap-2 border-t border-white/10 px-3 py-2.5 sm:gap-3 sm:px-4">
            <button
              type="button"
              aria-label={playing ? "Pause" : "Play"}
              onClick={() => setPlaying((v) => !v)}
              className="grid size-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_0_18px_-4px_rgba(201,247,60,0.9)] transition-transform active:scale-95"
            >
              {playing ? (
                <Pause className="size-3.5" />
              ) : (
                <Play className="size-3.5 translate-x-[1px]" />
              )}
            </button>
            <button
              type="button"
              aria-label="Previous event"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <SkipBack className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next event"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <SkipForward className="size-4" />
            </button>
            <span className="font-mono text-[11px] tabular-nums">
              <span className="text-foreground">{active.time}</span>
              <span className="text-muted-foreground"> / 90:00</span>
            </span>
            <div className="ml-auto flex items-center gap-2 sm:gap-3">
              <span className="hidden rounded border border-white/10 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline">
                1.0×
              </span>
              <button
                type="button"
                aria-label="Loop clip"
                className="hidden text-muted-foreground transition-colors hover:text-primary sm:block"
              >
                <Repeat className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Volume"
                className="hidden text-muted-foreground transition-colors hover:text-foreground sm:block"
              >
                <Volume2 className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Fullscreen"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Maximize2 className="size-4" />
              </button>
            </div>
          </div>

          {/* Timeline */}
          <div className="border-t border-white/10 bg-white/[0.02] px-3 pb-3 pt-3 sm:px-4">
            <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
              <span>Timeline · Coded events</span>
              <span className="hidden items-center gap-2 sm:flex">
                <span>Zoom</span>
                <span className="grid size-4 place-items-center rounded border border-white/10">
                  <Minus className="size-2.5" />
                </span>
                <span className="grid size-4 place-items-center rounded border border-white/10">
                  <Plus className="size-2.5" />
                </span>
              </span>
            </div>

            <div className="relative mt-6">
              {/* Selected event chip */}
              <div
                className="absolute -top-5 hidden -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded border border-primary/40 bg-primary/10 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-primary sm:flex"
                style={{ left: `${active.left}%` }}
              >
                <span className="size-1 rounded-full bg-primary" />
                {active.time} · {active.label}
              </div>

              <div className="flex gap-2">
                <div className="hidden w-14 shrink-0 flex-col gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground sm:flex">
                  <span className="h-4 leading-4">Time</span>
                  <span className="flex h-7 items-center">Events</span>
                  <span className="flex h-5 items-center">Clips</span>
                </div>

                <div className="relative min-w-0 flex-1">
                  {/* Ruler */}
                  <div
                    className="relative h-4 border-b border-white/10"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(to right, rgba(255,255,255,0.16) 0 1px, transparent 1px 46px)",
                    }}
                  >
                    {RULER_MARKS.map((mark) => (
                      <span
                        key={mark.label}
                        className="absolute top-0 hidden font-mono text-[9px] tabular-nums text-muted-foreground/70 sm:block"
                        style={{ left: `${mark.left}%` }}
                      >
                        {mark.label}
                      </span>
                    ))}
                  </div>

                  {/* Coded events */}
                  <div className="relative mt-1.5 h-7 rounded border border-white/5 bg-white/[0.02]">
                    {EVENTS.map((event, i) => (
                      <button
                        key={event.left}
                        type="button"
                        aria-label={`${event.time} ${event.label}`}
                        aria-pressed={eventIdx === i}
                        onClick={() => setEventIdx(i)}
                        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 p-2"
                        style={{ left: `${event.left}%` }}
                      >
                        <span
                          className={cn(
                            "block size-2 rotate-45 border transition-all",
                            eventIdx === i
                              ? "size-2.5 border-primary-foreground bg-primary shadow-[0_0_10px_rgba(201,247,60,0.9)]"
                              : "border-black/60 bg-primary/70 hover:bg-primary",
                          )}
                        />
                      </button>
                    ))}
                  </div>

                  {/* Clip ranges */}
                  <div className="relative mt-1.5 h-5 rounded border border-white/5 bg-white/[0.02]">
                    {CLIPS.map((clip) => (
                      <div
                        key={clip.label}
                        className="absolute top-0 flex h-full items-center overflow-hidden rounded-sm border border-primary/40 bg-primary/15 px-1.5"
                        style={{
                          left: `${clip.left}%`,
                          width: `${clip.width}%`,
                        }}
                      >
                        <span className="hidden truncate font-mono text-[9px] uppercase tracking-wider text-primary/90 md:block">
                          {clip.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Playhead */}
                  <div
                    className="pointer-events-none absolute inset-y-0 w-px bg-primary/80"
                    style={{ left: `${active.left}%` }}
                  >
                    <span className="absolute -left-[3.5px] -top-1 size-1.5 rotate-45 bg-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Playlist panel */}
        <aside className="hidden w-60 shrink-0 flex-col border-l border-white/10 xl:flex">
          <div className="flex items-center justify-between border-b border-white/10 px-3 py-2.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Playlist
            </span>
            <span className="font-mono text-[10px] tabular-nums text-primary">
              {String(PLAYLIST.length).padStart(2, "0")}
            </span>
          </div>
          <div className="flex-1 space-y-1 overflow-hidden p-2">
            {PLAYLIST.map((clip, i) => (
              <button
                key={clip.time}
                type="button"
                aria-pressed={clipIdx === i}
                onClick={() => setClipIdx(i)}
                className={cn(
                  "flex w-full items-center gap-2.5 rounded-md border p-2 text-left transition-colors",
                  clipIdx === i
                    ? "border-primary/40 bg-primary/10"
                    : "border-transparent hover:border-white/10 hover:bg-white/5",
                )}
              >
                <span className="relative grid h-10 w-14 shrink-0 place-items-center overflow-hidden rounded border border-white/10 bg-gradient-to-br from-[#16351f] to-[#0d1a12]">
                  <span className="absolute inset-y-0 left-1/2 w-px bg-white/25" />
                  <span className="absolute size-4 rounded-full border border-white/25" />
                  <span
                    className={cn(
                      "relative size-1.5 rounded-full",
                      clipIdx === i ? "bg-primary" : "bg-white/60",
                    )}
                  />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] tabular-nums text-muted-foreground">
                      {clip.time}
                    </span>
                    <span className="font-mono text-[9px] tabular-nums text-muted-foreground/70">
                      {clip.dur}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "mt-0.5 block truncate text-[11px]",
                      clipIdx === i ? "text-primary" : "text-foreground/85",
                    )}
                  >
                    {clip.tag}
                  </span>
                </span>
              </button>
            ))}
          </div>
          <div className="p-2 pt-0">
            <span className="flex items-center justify-center gap-1.5 rounded-md border border-dashed border-white/15 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              <Plus className="size-3" />
              New clip
            </span>
          </div>
        </aside>
      </div>

      {/* ---------- Status bar ---------- */}
      <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-white/[0.02] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground sm:px-4">
        <span className="truncate">Project workspace · Match 04 of 12</span>
        <span className="hidden shrink-0 gap-4 sm:flex">
          <span>Keyboard tagging on</span>
          <span className="text-primary">Sync ok</span>
        </span>
      </div>
    </div>
  );
}
