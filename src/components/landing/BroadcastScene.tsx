const LIME = "#c9f73c";
const PITCH_LINE = "rgba(255,255,255,0.5)";

/** Even vertical mow bands, the way a side camera sees a pitch. */
const BANDS = Array.from({ length: 19 }, (_, i) => i * 89);

/** Figures further up the frame (deeper) are drawn smaller. */
const depth = (y: number) =>
  Math.min(1.18, Math.max(0.55, 0.6 + ((y - 170) / 714) * 0.58));

type FigureProps = { x: number; y: number; light: boolean };

/** Stylised match figure: shadow, legs, shirt, head. */
function Figure({ x, y, light }: FigureProps) {
  const s = depth(y);
  return (
    <g>
      <ellipse
        cx={x}
        cy={y + 3 * s}
        rx={15 * s}
        ry={4.5 * s}
        fill="rgba(0,0,0,0.45)"
      />
      <rect
        x={x - 6 * s}
        y={y - 13 * s}
        width={12 * s}
        height={13 * s}
        rx={3 * s}
        fill="#14160f"
      />
      <rect
        x={x - 8 * s}
        y={y - 31 * s}
        width={16 * s}
        height={20 * s}
        rx={5 * s}
        fill={light ? "#f1f3ec" : "#2b3033"}
        stroke={
          light ? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.6)"
        }
        strokeWidth={1.3}
      />
      <circle cx={x} cy={y - 37 * s} r={5.4 * s} fill="#a8846a" />
    </g>
  );
}

/** Mono annotation chip drawn on the footage. */
function Chip({
  x,
  y,
  w,
  text,
}: {
  x: number;
  y: number;
  w: number;
  text: string;
}) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        width={w}
        height={40}
        rx={7}
        fill="rgba(8,10,8,0.88)"
        stroke="rgba(201,247,60,0.45)"
      />
      <circle cx={15} cy={20} r={3.5} fill={LIME} />
      <text
        x={28}
        y={26}
        fontFamily="'JetBrains Mono', monospace"
        fontSize={19}
        letterSpacing="1.4"
        fill={LIME}
      >
        {text}
      </text>
    </g>
  );
}

const ATTACKERS: [number, number][] = [
  [560, 560],
  [700, 445],
  [1085, 505],
  [820, 690],
  [470, 700],
  [905, 330],
];

const DEFENDERS: [number, number][] = [
  [1000, 320],
  [985, 460],
  [1005, 600],
  [992, 735],
  [855, 558],
  [742, 300],
];

/**
 * Broadcast-style match frame: grass, pitch markings, two teams and a set of
 * lime tactical overlays (pressing ring, line-breaking pass, run path, target
 * zone, defensive line). Rendered as pure SVG so it stays razor sharp.
 */
export function BroadcastScene() {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    >
      <defs>
        <linearGradient id="tc-grass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f2416" />
          <stop offset="55%" stopColor="#16351f" />
          <stop offset="100%" stopColor="#1c4025" />
        </linearGradient>
        <linearGradient id="tc-stand" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#070d0a" />
          <stop offset="100%" stopColor="#0e2118" />
        </linearGradient>
        <radialGradient id="tc-vig" cx="50%" cy="46%" r="76%">
          <stop offset="55%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.55" />
        </radialGradient>
        <marker
          id="tc-head"
          viewBox="0 0 26 26"
          refX="23"
          refY="13"
          markerWidth="26"
          markerHeight="26"
          markerUnits="userSpaceOnUse"
          orient="auto"
        >
          <path d="M3 3 L24 13 L3 23 Z" fill={LIME} />
        </marker>
      </defs>

      {/* Out-of-focus stand beyond the far touchline */}
      <rect x="0" y="0" width="1600" height="172" fill="url(#tc-stand)" />

      {/* Grass + mow bands */}
      <rect x="0" y="172" width="1600" height="728" fill="url(#tc-grass)" />
      {BANDS.map((x, i) => (
        <rect
          key={x}
          x={x}
          y={172}
          width={89}
          height={728}
          fill={
            i % 2 === 0 ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.08)"
          }
        />
      ))}

      {/* Pitch markings */}
      <g stroke={PITCH_LINE} strokeWidth="5" fill="none">
        <line x1="0" y1="172" x2="1600" y2="172" />
        <line x1="0" y1="884" x2="1600" y2="884" />
        <line x1="770" y1="172" x2="770" y2="884" />
        <ellipse cx="770" cy="528" rx="204" ry="92" />
      </g>
      <circle cx="770" cy="528" r="6" fill="rgba(255,255,255,0.65)" />

      {/* Target zone behind the defensive line */}
      <polygon
        points="1062,372 1452,392 1440,652 1054,632"
        fill="rgba(201,247,60,0.07)"
        stroke="rgba(201,247,60,0.35)"
        strokeWidth="2.5"
        strokeDasharray="14 10"
      />
      <Chip x={1076} y={402} w={158} text="ZONE 14" />

      {/* Defensive line */}
      <line
        x1="1008"
        y1="282"
        x2="992"
        y2="778"
        stroke={LIME}
        strokeOpacity="0.65"
        strokeWidth="3"
        strokeDasharray="16 12"
      />
      <Chip x={1014} y={786} w={244} text="DEFENSIVE LINE" />

      {/* Players */}
      {DEFENDERS.map(([x, y]) => (
        <Figure key={`d-${x}-${y}`} x={x} y={y} light={false} />
      ))}
      {ATTACKERS.map(([x, y]) => (
        <Figure key={`a-${x}-${y}`} x={x} y={y} light />
      ))}

      {/* Ball */}
      <ellipse cx={648} cy={574} rx={8} ry={3} fill="rgba(0,0,0,0.45)" />
      <circle cx={648} cy={566} r={9} fill="#f5f7f2" />

      {/* Line-breaking pass */}
      <path
        d="M 662 562 C 796 538, 934 506, 1048 512"
        stroke={LIME}
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        markerEnd="url(#tc-head)"
      />

      {/* Run in behind */}
      <path
        d="M 840 674 C 934 666, 1044 652, 1138 622"
        stroke={LIME}
        strokeOpacity="0.85"
        strokeWidth="3.5"
        strokeDasharray="13 7"
        strokeLinecap="round"
        fill="none"
        markerEnd="url(#tc-head)"
        className="animate-tac-flow"
      />

      {/* Between-the-lines receiver highlight */}
      <ellipse
        cx="700"
        cy="445"
        rx="48"
        ry="31"
        fill="rgba(201,247,60,0.08)"
        stroke={LIME}
        strokeWidth="3"
        strokeDasharray="12 8"
        className="animate-tac-flow"
      />
      <ellipse
        cx="700"
        cy="445"
        rx="48"
        ry="31"
        fill="none"
        stroke={LIME}
        strokeWidth="2"
        className="animate-tac-ping"
      />
      <Chip x={608} y={358} w={306} text="8 · BETWEEN LINES" />

      {/* Vignette */}
      <rect x="0" y="0" width="1600" height="900" fill="url(#tc-vig)" />
    </svg>
  );
}
