/**
 * NexusLogo — Sistema de logo do Newe Nexus
 */

interface NexusLogoProps {
  variant?: "negative" | "positive" | "silver";
  size?: "sm" | "md" | "lg";
  withDescriptor?: boolean;
  withHolding?: boolean;
  iconOnly?: boolean;
  markOnly?: boolean;
  className?: string;
}

const VERDE = "#9DCA79";
const VERDE_TEXT_DARK = "#3B6D11";

const CONFIG = {
  sm: { barWidth: 2, barHeight: 28, wordmarkSize: 16, wordmarkY: 20, descriptorSize: 6, descriptorY: 29, ruleY: 35, ruleWidth: 100, viewW: 140, viewH: 42 },
  md: { barWidth: 2, barHeight: 40, wordmarkSize: 22, wordmarkY: 28, descriptorSize: 7.5, descriptorY: 39, ruleY: 47, ruleWidth: 130, viewW: 160, viewH: 56 },
  lg: { barWidth: 3, barHeight: 56, wordmarkSize: 32, wordmarkY: 42, descriptorSize: 9, descriptorY: 56, ruleY: 66, ruleWidth: 172, viewW: 210, viewH: 78 },
};

export function NexusLogo({
  variant = "negative",
  size = "md",
  withDescriptor = true,
  withHolding = false,
  iconOnly = false,
  markOnly = false,
  className,
}: NexusLogoProps) {
  const c = CONFIG[size];

  const wordmarkColor =
    variant === "negative" ? "#FFFFFF"
    : variant === "silver" ? "#C0C0C0"
    : "#0A0A0A";

  const descriptorColor = variant === "positive" ? VERDE_TEXT_DARK : VERDE;
  const holdingColor = "#6B6B6B";
  const ruleMainColor = variant === "positive" ? "#D8D8D8" : "#2E2E2E";

  const showDescriptor = !iconOnly && !markOnly && (withDescriptor || withHolding);
  const viewH = showDescriptor ? c.viewH : c.viewH - 18;

  if (iconOnly) {
    const s = size === "sm" ? 28 : size === "lg" ? 48 : 36;
    return (
      <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Nexus" role="img" className={className}>
        <rect x="0" y="0" width={s} height={s} fill="#1C1C1C" />
        <rect x="3" y="3" width="2.5" height={s - 6} fill={VERDE} />
        <text
          x={s * 0.32}
          y={s * 0.68}
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          fontSize={s * 0.44}
          fontWeight="200"
          fill="#FFFFFF"
          letterSpacing="-0.5"
        >
          NX
        </text>
      </svg>
    );
  }

  return (
    <svg
      width="100%"
      viewBox={`0 0 ${c.viewW} ${viewH}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Nexus · Nosso Jeito de Ser"
      role="img"
      className={className}
      style={{ maxWidth: c.viewW }}
    >
      <rect
        x="0"
        y={c.wordmarkY - c.wordmarkSize * 0.85}
        width={c.barWidth}
        height={c.barHeight}
        fill={VERDE}
      />
      <text
        x={c.barWidth + 8}
        y={c.wordmarkY}
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
        fontSize={c.wordmarkSize}
        fontWeight="200"
        fill={wordmarkColor}
        letterSpacing="-0.5"
      >
        NEXUS
      </text>
      {showDescriptor && (
        <text
          x={c.barWidth + 8}
          y={c.descriptorY}
          fontFamily="'Space Mono', ui-monospace, monospace"
          fontSize={c.descriptorSize}
          fill={withHolding ? holdingColor : descriptorColor}
          letterSpacing={withHolding ? "2" : "2.5"}
        >
          {withHolding ? "HYNDRA · NEWE" : "NOSSO JEITO DE SER"}
        </text>
      )}
      {showDescriptor && (
        <>
          <line
            x1={c.barWidth + 8}
            y1={c.ruleY}
            x2={c.ruleWidth}
            y2={c.ruleY}
            stroke={ruleMainColor}
            strokeWidth="0.5"
          />
          <line
            x1={c.barWidth + 8}
            y1={c.ruleY}
            x2={c.barWidth + 8 + 20}
            y2={c.ruleY}
            stroke={VERDE}
            strokeWidth="0.5"
          />
        </>
      )}
    </svg>
  );
}

export default NexusLogo;