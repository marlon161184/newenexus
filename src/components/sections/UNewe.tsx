import { OutlineCard, Section } from "../newe/Section";
import { ResourceButton } from "../newe/ResourceButton";

const PILARES = [
  "TÉCNICA COMERCIAL",
  "CONHECIMENTO DE PRODUTO",
  "EXPERIÊNCIA DO CLIENTE",
  "CULTURA DE ALTO DESEMPENHO",
  "STORYTELLING DE MARCA",
];

export function UNewe() {
  return (
    <Section label="U-NEWE & UNHYNDRA" title="Universidade Corporativa">
      <p className="font-display font-light italic text-[20px] md:text-[24px] text-[#0A0A0A] mb-12 max-w-2xl">
        "Lifelong learners constroem o futuro que vendem."
      </p>

      <div className="inline-block px-3 py-1 mb-6 border border-[#D8D8D8] bg-[#EBEBEB]">
        <span className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#6B6B6B]">
          EM DESENVOLVIMENTO
        </span>
      </div>

      <div
        className="p-8 mb-16 bg-[#FAFAFA]"
        style={{ borderLeft: "2px solid #C0C0C0" }}
      >
        <p className="font-body font-light text-[14px] text-[#6B6B6B] leading-relaxed">
          A primeira academia do ecossistema Hyndra | Newe nasce com foco em Vendas — formação contínua que vai além da técnica: narrativa, propósito e experiência do cliente.
        </p>
      </div>

      <p className="newe-label mb-6">5 PILARES</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
        {PILARES.map((p) => (
          <OutlineCard
            key={p}
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth="1">
                <path d="M3 21h18M5 21V8l7-4 7 4v13" />
              </svg>
            }
          >
            <p className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#0A0A0A]">{p}</p>
          </OutlineCard>
        ))}
      </div>

      <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#9A9A9A] mb-8">
        LANÇAMENTO: [DATA A DEFINIR]
      </p>

      <ResourceButton label="SAIBA MAIS SOBRE A ACADEMIA" />
    </Section>
  );
}