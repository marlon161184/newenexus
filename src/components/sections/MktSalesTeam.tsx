import { OutlineCard, Section } from "../newe/Section";
import { ResourceButton } from "../newe/ResourceButton";

const TEAMS: [string, string][] = [
  ["BRANDING", "Identidade, posicionamento e consistência"],
  ["PERFORMANCE", "Mídia, dados e conversão"],
  ["CRM", "Relacionamento e base de clientes"],
  ["INSIDE SALES", "Vendas consultivas e qualificação"],
  ["FIELD SALES", "Relacionamento presencial e fechamento"],
  ["CUSTOMER EXPERIENCE", "Jornada e encantamento do cliente"],
];

export function MktSalesTeam() {
  return (
    <Section
      label="ARQUITETURA DO TIME"
      title="Marketing & Comercial — Como nos Organizamos"
    >
      <div className="w-full h-[280px] mb-12 bg-[#EBEBEB] border border-[#D8D8D8] flex items-center justify-center">
        <span className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#6B6B6B]">
          ORGANOGRAMA — A SER INSERIDO
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {TEAMS.map(([t, d]) => (
          <OutlineCard
            key={t}
            title={t}
            description={d}
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth="1">
                <path d="M3 12h6l2-7 4 14 2-7h4" />
              </svg>
            }
          />
        ))}
      </div>
      <ResourceButton label="VER ESTRUTURA COMPLETA" />
    </Section>
  );
}