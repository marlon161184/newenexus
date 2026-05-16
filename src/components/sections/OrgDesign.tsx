import { OutlineCard, Section } from "../newe/Section";
import { ResourceButton } from "../newe/ResourceButton";

const TEAMS = [
  ["LIDERANÇA", "Direção estratégica do grupo"],
  ["COMERCIAL", "Vendas, relacionamento e resultado"],
  ["MARKETING", "Marca, comunicação e experiência"],
  ["PESSOAS & CULTURA", "Gente, desenvolvimento e Nosso Jeito de Ser"],
  ["OPERAÇÕES", "Execução, qualidade e entrega"],
  ["FINANCEIRO", "Saúde financeira e sustentabilidade"],
  ["JURÍDICO", "Segurança, compliance e contratos"],
];

export function OrgDesign() {
  return (
    <Section
      label="ORG & DESIGN"
      title="Como nos Organizamos"
      intro="Estrutura não é burocracia — é clareza. Entender como nos organizamos é entender como as decisões fluem, como os times se conectam e onde você se encaixa nesse ecossistema."
    >
      <div
        className="w-full h-[280px] mb-8 bg-[#EBEBEB] border border-[#D8D8D8] flex items-center justify-center"
      >
        <span className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#6B6B6B]">
          ORGANOGRAMA — A SER INSERIDO
        </span>
      </div>
      <div className="mb-16">
        <ResourceButton label="VER ORGANOGRAMA COMPLETO" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {TEAMS.map(([t, d]) => (
          <OutlineCard
            key={t}
            title={t}
            description={d}
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth="1">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
            }
          />
        ))}
      </div>
    </Section>
  );
}