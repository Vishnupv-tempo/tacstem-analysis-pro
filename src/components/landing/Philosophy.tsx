import {
  Container,
  Eyebrow,
  Reveal,
} from "@/components/landing/primitives";

const GRID_MASK = {
  maskImage: "radial-gradient(70% 70% at 50% 50%, black 20%, transparent 100%)",
  WebkitMaskImage:
    "radial-gradient(70% 70% at 50% 50%, black 20%, transparent 100%)",
};

/** Section 07 — product philosophy, deliberately sparse. */
export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative overflow-hidden border-y border-white/8 bg-[#070807] py-32 md:py-44"
    >
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0 opacity-50"
        style={GRID_MASK}
      />
      <div
        aria-hidden="true"
        className="glow-lime-soft pointer-events-none absolute inset-x-0 bottom-0 h-[380px]"
      />

      <Container className="relative text-center">
        <Reveal y={12}>
          <Eyebrow index="07" className="justify-center">
            Philosophy
          </Eyebrow>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-10 max-w-3xl text-[2.1rem] font-semibold leading-[1.06] tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Less software.
            <br />
            <span className="text-primary">More football thinking.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-9 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Tacstem is built to remove unnecessary complexity from video
            analysis so analysts can spend more time understanding the game.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="mx-auto mt-9 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-[0.24em] text-primary">
            <span>Easy to use</span>
            <span
              className="size-1 rounded-full bg-primary/50"
              aria-hidden="true"
            />
            <span>Affordable</span>
            <span
              className="size-1 rounded-full bg-primary/50"
              aria-hidden="true"
            />
            <span>Built by an analyst</span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
