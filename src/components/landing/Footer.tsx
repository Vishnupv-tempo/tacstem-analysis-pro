import { Linkedin, Twitter, Youtube } from "lucide-react";
import { Container } from "@/components/landing/primitives";
import { TacstemMark } from "@/components/landing/TacstemMark";

const LINKS = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#philosophy" },
  { label: "Contact", href: "mailto:hello@tacstem.com" },
  { label: "Terms", href: "#terms" },
  { label: "Privacy", href: "#privacy" },
];

const SOCIALS = [
  { label: "Twitter", href: "https://x.com", Icon: Twitter },
  { label: "YouTube", href: "https://www.youtube.com", Icon: Youtube },
  { label: "LinkedIn", href: "https://www.linkedin.com", Icon: Linkedin },
];

/** Site footer — wordmark, tagline, navigation and socials. */
export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#070807]">
      <Container className="py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <a
              href="#product"
              className="inline-flex items-center gap-2.5 text-foreground"
              aria-label="Tacstem home"
            >
              <TacstemMark className="size-6 text-primary" />
              <span className="text-[15px] font-semibold tracking-[0.24em]">
                TACSTEM
              </span>
            </a>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Video Analysis Simplified.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-md border border-white/8 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-8 gap-y-3.5 text-sm"
          >
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/8 pt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Tacstem. All rights reserved.</span>
          <span>Built for football.</span>
        </div>
      </Container>
    </footer>
  );
}
