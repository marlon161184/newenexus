import { Section } from "../newe/Section";
import { ResourceButton } from "../newe/ResourceButton";

const ROWS: [string, string][] = [
  ["MARKETING", "[Responsabilidade — a preencher]"],
  ["COMERCIAL", "[Responsabilidade — a preencher]"],
  ["LIDERANÇA", "[Responsabilidade — a preencher]"],
  ["PESSOAS & CULTURA", "[Responsabilidade — a preencher]"],
  ["PRODUTO", "[Responsabilidade — a preencher]"],
];

export function BrandJourney() {
  return (
    <Section
      label="PAPÉIS E RESPONSABILIDADES"
      title="Jornada da Marca — Quem Faz o Quê"
      intro="Construir uma marca forte é um esporte coletivo. Cada área tem um papel — e entender o seu é o primeiro passo para que a Newe se apresente ao mundo de forma coesa e poderosa."
    >
      <div className="border border-[#D8D8D8] bg-[#FAFAFA] mb-12">
        {ROWS.map(([area, resp], i) => (
          <div
            key={area}
            className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-4 p-6"
            style={{ borderTop: i === 0 ? "none" : "1px solid #D8D8D8" }}
          >
            <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#0A0A0A]">{area}</p>
            <p className="newe-placeholder-text text-[13px]">{resp}</p>
          </div>
        ))}
      </div>
      <ResourceButton label="DOCUMENTO DE PAPÉIS E RESPONSABILIDADES" />
    </Section>
  );
}