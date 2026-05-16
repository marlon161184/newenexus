import { type ReactNode } from "react";

interface ResourceButtonProps {
  icon?: ReactNode;
  label: string;
  href?: string;
  variant?: "outline" | "filled";
}

export function ResourceButton({ icon, label, href = "#", variant = "outline" }: ResourceButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-5 py-2.5 transition-colors duration-200 ease-out";
  const style =
    "font-mono-newe text-[9px] tracking-[0.3em] uppercase";
  const variants = {
    outline:
      "border border-[#D8D8D8] bg-transparent text-[#0A0A0A] hover:bg-[#F7F6F4]",
    filled:
      "bg-[#0A0A0A] text-[#FAFAFA] hover:bg-[#2E2E2E] border border-[#0A0A0A]",
  };
  return (
    <a
      href={href}
      aria-label={label}
      className={`${base} ${style} ${variants[variant]}`}
      style={{ borderRadius: 2 }}
    >
      {icon ? <span aria-hidden>{icon}</span> : null}
      <span>{label}</span>
    </a>
  );
}