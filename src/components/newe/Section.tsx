import { type ReactNode } from "react";

interface SectionProps {
  label: string;
  title: string;
  intro?: string;
  dark?: boolean;
  children: ReactNode;
  id?: string;
}

export function Section({ label, title, intro, dark, children, id }: SectionProps) {
  return (
    <section
      id={id}
      className="w-full py-24 md:py-32 px-6 md:px-12"
      style={{
        backgroundColor: dark ? "#0A0A0A" : "#F7F6F4",
        color: dark ? "#FAFAFA" : "#0A0A0A",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <p
          className="font-mono-newe text-[10px] tracking-[0.3em] uppercase mb-6"
          style={{ color: dark ? "#C0C0C0" : "#6B6B6B" }}
        >
          {label}
        </p>
        <h2 className="font-display font-light text-3xl md:text-5xl mb-8 max-w-3xl leading-tight">
          {title}
        </h2>
        {intro && (
          <p
            className="font-body font-light text-base md:text-lg max-w-2xl mb-16 leading-relaxed"
            style={{ color: dark ? "#D8D8D8" : "#6B6B6B" }}
          >
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

export function OutlineCard({
  title,
  description,
  icon,
  children,
  dark,
  accent,
}: {
  title?: string;
  description?: string;
  icon?: ReactNode;
  children?: ReactNode;
  dark?: boolean;
  accent?: boolean;
}) {
  return (
    <div
      className="p-6 md:p-8 transition-colors duration-200"
      style={{
        border: `1px solid ${dark ? "#2E2E2E" : "#D8D8D8"}`,
        borderLeft: accent ? "2px solid #C0C0C0" : undefined,
        backgroundColor: dark ? "#1C1C1C" : "transparent",
        borderRadius: 2,
      }}
    >
      {icon && <div className="mb-5 text-[#6B6B6B]">{icon}</div>}
      {title && (
        <h3
          className="font-display font-light text-base md:text-[18px] mb-3"
          style={{ color: dark ? "#FAFAFA" : "#0A0A0A" }}
        >
          {title}
        </h3>
      )}
      {description && (
        <p
          className="font-body font-light text-[12px] leading-relaxed"
          style={{ color: dark ? "#9A9A9A" : "#6B6B6B" }}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
}

/** Minimal thin-line geometric icon */
export function LineIcon({ d = "M3 3h18v18H3z" }: { d?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <path d={d} />
    </svg>
  );
}

export function Placeholder({ text }: { text: string }) {
  return (
    <span className="newe-placeholder-text" style={{ fontStyle: "italic" }}>
      {text}
    </span>
  );
}