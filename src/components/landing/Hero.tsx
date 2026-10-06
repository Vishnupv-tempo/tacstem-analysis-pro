import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Reveal } from "@/components/landing/primitives";
import { ProductWorkspace } from "@/components/landing/ProductWorkspace";

const GRID_MASK = {
  maskImage:
    "radial-gradient(90% 65% at 50% 25%, black 25%, transparent 100%)",
  WebkitMaskImage:
    "radial-gradient(90% 65% at 50% 25%, black 25%, transparent 100%)",
};

/** Hero — core promise, CTAs and the product workspace mockup. */
export function Hero() {
  return (
    <section id="product" className="relative overflow-hidden">
      {/* Blueprint grid + electric glow */}
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-x-0 top-0 h-[820px] opacity-70"
        style={GRID_MASK}
      />
      <div
        aria-hidden="true"
        className="glow-lime pointer-events-none absolute inset-x-0 top-0 h-[720px]"
      />

      <Container className="relative pt-14 md:pt-20">
        <Reveal y={14}>
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            <span className="relative flex size-1.5">
              <span className="animate-tac-ping absolute inset-0 rounded-full bg-primary" />
              <span className="size-1.5 rounded-full bg-primary" />
            </span>
            Football Video Analysis Platform
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="mt-7 text-[2.25rem] font-semibold leading-[1.04] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl xl:text-[4.75rem]">
            Tactical Analysis
            <br />
            Simplified<span className="text-primary">.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            <span className="font-medium text-foreground">
              Spend less time and money on your workflow.
            </span>{" "}
            Professional football video analysis, built for coaches, analysts
            and scouts.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="group h-12 gap-2 px-7 text-[15px] font-semibold shadow-[0_0_34px_-8px_rgba(201,247,60,0.75)] transition-shadow hover:shadow-[0_0_40px_-6px_rgba(201,247,60,0.85)]"
            >
              <Link to="/auth">
                Start Analyzing
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 border-white/15 bg-transparent px-7 text-[15px] font-medium text-foreground hover:border-primary/40 hover:bg-primary/5"
            >
              <a href="#features">Explore Features</a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="mt-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.26em] text-muted-foreground">
            <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
            No install. No upload. Just analysis.
          </p>
        </Reveal>
      </Container>

      {/* Workspace mockup */}
      <Container className="relative mt-14 md:mt-20">
        {/* Floating analysis annotations */}
        <div
          aria-hidden="true"
          className="animate-tac-float absolute -left-12 top-[44%] z-10 hidden items-center gap-2.5 rounded-lg border border-primary/40 bg-background/90 px-3 py-2 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur xl:flex"
        >
          <span className="relative flex size-2">
            <span className="animate-tac-ping absolute inset-0 rounded-full bg-primary" />
            <span className="size-2 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
            67:12 · Progression
          </span>
        </div>

        <div
          aria-hidden="true"
          className="animate-tac-float absolute -right-10 -top-14 z-10 hidden items-center gap-2 rounded-lg border border-white/12 bg-background/90 px-3 py-2 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur xl:flex"
          style={{ animationDelay: "1.4s" }}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Playlist · 05 clips
          </span>
        </div>

        <div
          aria-hidden="true"
          className="animate-tac-float absolute -right-14 top-[30%] z-10 hidden xl:block"
          style={{ animationDelay: "0.7s" }}
        >
          <svg width="72" height="46" viewBox="0 0 72 46" fill="none">
            <path
              d="M68 6 C 48 8, 26 18, 8 36"
              stroke="#c9f73c"
              strokeOpacity="0.7"
              strokeWidth="2"
              strokeDasharray="7 6"
              strokeLinecap="round"
            />
            <path
              d="M4 30 L6 38 L14 35"
              stroke="#c9f73c"
              strokeOpacity="0.7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>

        <Reveal y={44} delay={0.1} className="relative">
          <ProductWorkspace />
        </Reveal>
      </Container>
    </section>
  );
}
