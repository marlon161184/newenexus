import { OutlineCard, Section } from "../newe/Section";
import { ResourceButton } from "../newe/ResourceButton";

const CATEGORIES = [
  "Localização",
  "Espaços Externos",
  "Entrada e Circulação",
  "Espaços de Trabalho",
  "Áreas Compartilhadas",
  "Políticas",
  "Alimentação Saudável",
  "Atividade Física",
  "Bem-Estar Mental",
];

function Star({ filled }: { filled: boolean }) {
  return <span style={{ color: filled ? "#0A0A0A" : "#D8D8D8" }}>★</span>;
}

function Tier({ filled, label, sub }: { filled: number; label: string; sub: string }) {
  return (
    <div className="flex items-center gap-4 py-3 border-t border-[#D8D8D8]">
      <div className="text-xl tracking-widest">
        <Star filled={filled >= 1} /> <Star filled={filled >= 2} /> <Star filled={filled >= 3} />
      </div>
      <div className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#0A0A0A]">{label}</div>
      <div className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#9A9A9A] ml-auto">{sub}</div>
    </div>
  );
}

export function Fitwel() {
  return (
    <Section
      label="CERTIFICAÇÃO INTERNACIONAL"
      title="Fitwel: Nosso Compromisso com o Bem-Estar"
    >
      <div
        className="p-8 mb-16 bg-[#FAFAFA]"
        style={{ borderLeft: "2px solid #C0C0C0" }}
      >
        <p className="font-body font-light text-[14px] text-[#6B6B6B]" style={{ lineHeight: 1.8 }}>
          A certificação Fitwel é o principal padrão internacional de design e gestão voltado ao bem-estar humano em empreendimentos imobiliários. Criada pelo CDC (Centers for Disease Control and Prevention) dos EUA, avalia mais de 55 indicadores de impacto à saúde — da qualidade do ar ao design de espaços de convivência.
        </p>
      </div>

      <p className="newe-label mb-6">9 CATEGORIAS DE IMPACTO</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {CATEGORIES.map((c) => (
          <OutlineCard
            key={c}
            title={c}
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth="1">
                <rect x="4" y="4" width="16" height="16" />
                <path d="M4 12h16M12 4v16" />
              </svg>
            }
          />
        ))}
      </div>

      <div className="mb-16">
        <p className="newe-label mb-4">SISTEMA DE CERTIFICAÇÃO</p>
        <div className="bg-[#FAFAFA] border border-[#D8D8D8] p-6">
          <Tier filled={1} label="1 ESTRELA" sub="BASELINE" />
          <Tier filled={2} label="2 ESTRELAS" sub="SILVER" />
          <Tier filled={3} label="3 ESTRELAS" sub="GOLD" />
        </div>
      </div>

      <div
        className="p-8 mb-16 bg-[#FAFAFA]"
        style={{ border: "1px solid #0A0A0A" }}
      >
        <p className="font-mono-newe text-[11px] tracking-[0.3em] uppercase text-[#0A0A0A]">
          NEWE DISTRICT — PRIMEIRA CERTIFICAÇÃO FITWEL DO INTERIOR DO BRASIL
        </p>
      </div>

      <blockquote
        className="pl-6 mb-16"
        style={{ borderLeft: "2px solid #C0C0C0" }}
      >
        <p className="font-display font-light italic text-[20px] text-[#0A0A0A] leading-relaxed max-w-2xl">
          "Para a Newe, o Fitwel não é apenas um selo. É a prova técnica de que nossos empreendimentos foram concebidos para gerar qualidade de vida real."
        </p>
      </blockquote>

      <div className="mb-12">
        <p className="newe-label mb-6">COMO CAPITALIZAMOS</p>
        <ul className="space-y-3">
          {[
            "Em materiais de vendas e apresentações comerciais",
            "No site e plataformas digitais da Newe",
            "Em eventos, feiras e roadshows",
            "Na comunicação com investidores e parceiros",
            "No discurso de todos os colaboradores (você incluído!)",
          ].map((t) => (
            <li key={t} className="font-body font-light text-[14px] text-[#6B6B6B]">
              <span className="text-[#C0C0C0] mr-2">—</span>
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-3">
        <ResourceButton label="CONHEÇA O FITWEL" href="https://www.fitwel.org" />
        <ResourceButton label="BAIXAR GUIA INTERNO DO FITWEL" />
      </div>
    </Section>
  );
}