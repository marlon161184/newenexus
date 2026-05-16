import { Section } from "../newe/Section";
import { ResourceButton } from "../newe/ResourceButton";

const PILLARS: [string, string][] = [
  ["CRESCIMENTO COMERCIAL", "[Meta e foco 2026]"],
  ["EXCELÊNCIA OPERACIONAL", "[Meta e foco 2026]"],
  ["PESSOAS & CULTURA", "[Meta e foco 2026]"],
  ["SUSTENTABILIDADE & ESG", "[Meta e foco 2026]"],
  ["MARCA & EXPERIÊNCIA", "[Meta e foco 2026]"],
];

export function Par2026() {
  return (
    <Section
      label="PLANEJAMENTO ESTRATÉGICO"
      title="PAR 2026 — Plano Anual de Resultados"
      intro="O PAR é o nosso norte compartilhado. É onde transformamos estratégia em metas claras, responsabilidades definidas e rituais de acompanhamento que mantêm o time alinhado e em movimento."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {PILLARS.map(([k, v], i) => (
          <div key={k} className="border border-[#D8D8D8] p-8 bg-[#FAFAFA]">
            <p className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#9A9A9A] mb-3">
              0{i + 1} · PILAR
            </p>
            <h3 className="font-display font-light text-[18px] text-[#0A0A0A] mb-4">{k}</h3>
            <p className="newe-placeholder-text text-[13px]">{v}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <ResourceButton label="ACESSAR PAR 2026 COMPLETO" />
        <ResourceButton label="VER PAINEL DE OKRs" />
      </div>
    </Section>
  );
}