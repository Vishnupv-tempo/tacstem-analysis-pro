import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Reveal } from "@/components/landing/primitives";

const GRID_MASK = {
  maskImage: "radial-gradient(75% 75% at 50% 55%, black 15%, transparent 100%)",
  WebkitMaskImage:
    "radial-gradient(75% 75% at 50% 55%, black 15%, transparent 100%)",
};

/** Final conversion section — hero-scale close. */
export function FinalCta() {
  return (
    <section
      id="get-started"
      className="relative overflow-hidden py-28 md:py-40"
    >
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0 opacity-60"
        style={GRID_MASK}
      />
      <div
        aria-hidden="true"
        className="glow-lime pointer-events-none absolute inset-x-0 bottom-0 h-[560px] rotate-180"
      />

      {/* Centre-circle watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10 sm:block"
      >
        <span className="absolute left-1/2 top-0 h-full w-px bg-primary/10" />
        <span className="absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" />
        <span className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40" />
      </div>

      <Container className="relative flex flex-col items-center text-center">
        <Reveal y={16}>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            Ready when you are
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-7 max-w-3xl text-[2.1rem] font-semibold leading-[1.06] tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl lg:text-[4rem]">
            Your next analysis starts here.
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">
            Build better analysis. Communicate better football.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="group h-12 gap-2 px-8 text-[15px] font-semibold shadow-[0_0_34px_-8px_rgba(201,247,60,0.75)] transition-shadow hover:shadow-[0_0_40px_-6px_rgba(201,247,60,0.85)]"
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
              className="h-12 border-white/15 bg-transparent px-8 text-[15px] font-medium text-foreground hover:border-primary/40 hover:bg-primary/5"
            >
              <a href="#product">Explore Tacstem</a>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
