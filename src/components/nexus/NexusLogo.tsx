/**
 * NexusLogo — Logo definitivo do Nexus.
 * Dois sinais verdes: a barra vertical colada ao N e a letra X.
 * Letras N, E, U, S em branco (negative), preto (positive) ou prata (silver).
 */

interface NexusLogoProps {
  variant?: "negative" | "positive" | "silver";
  size?: "sm" | "md" | "lg";
  withDescriptor?: boolean;
  markOnly?: boolean;
  iconOnly?: boolean;
  className?: string;
}

const VERDE = "#9DCA79";
const VERDE_DARK = "#3B6D11";

const SIZE_PX = { sm: 18, md: 32, lg: 48 } as const;

export function NexusLogo({
  variant = "negative",
  size = "md",
  withDescriptor,
  markOnly = false,
  iconOnly = false,
  className,
}: NexusLogoProps) {
  const fontSize = SIZE_PX[size];

  const letterColor =
    variant === "negative" ? "#FFFFFF" : variant === "positive" ? "#0A0A0A" : "#C0C0C0";
  const descriptorColor =
    variant === "positive" ? VERDE_DARK : VERDE;
  const ruleSecondary = variant === "positive" ? "#D8D8D8" : "#C0C0C0";

  const showDescriptor =
    !markOnly && !iconOnly && (withDescriptor ?? size !== "sm");

  if (iconOnly) {
    return (
      <span
        role="img"
        aria-label="Nexus"
        className={className}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 36,
          height: 36,
          backgroundColor: "#1C1C1C",
          borderRadius: 4,
          position: "relative",
          fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
          fontWeight: 200,
          fontSize: 18,
          letterSpacing: "-0.03em",
          lineHeight: 1,
        }}
      >
        <span
          aria-hidden
          style={{
            position: "absolute",
            left: 4,
            top: 4,
            bottom: 4,
            width: 2,
            backgroundColor: VERDE,
          }}
        />
        <span style={{ color: "#FFFFFF" }}>N</span>
        <span style={{ color: VERDE }}>X</span>
      </span>
    );
  }

  const barWidth = 2;
  const barHeight = Math.round(fontSize * 0.95);

  return (
    <span
      role="img"
      aria-label="Nexus · Nosso Jeito de Ser"
      className={className}
      style={{ display: "inline-flex", flexDirection: "column", alignItems: "flex-start" }}
    >
      <span
        style={{
          position: "relative",
          display: "inline-block",
          paddingLeft: barWidth + 6,
          fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
          fontWeight: 200,
          fontSize,
          letterSpacing: "-0.03em",
          lineHeight: 1,
          color: letterColor,
        }}
      >
        <span
          aria-hidden
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: barWidth,
            height: barHeight,
            backgroundColor: VERDE,
          }}
        />
        <span>N</span>
        <span>E</span>
        <span style={{ color: VERDE }}>X</span>
        <span>U</span>
        <span>S</span>
      </span>

      {showDescriptor && (
        <>
          <span
            style={{
              marginTop: 6,
              fontFamily: "'Space Mono', ui-monospace, monospace",
              fontSize: 7.5,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: descriptorColor,
            }}
          >
            Nosso Jeito de Ser
          </span>
          <span
            aria-hidden
            style={{
              marginTop: 4,
              display: "block",
              height: 1,
              width: 200,
              background: `linear-gradient(90deg, ${VERDE} 0, ${VERDE} 20px, ${ruleSecondary} 20px, ${ruleSecondary} 120px, transparent 120px)`,
            }}
          />
        </>
      )}
    </span>
  );
}

export default NexusLogo;