import { OutlineCard, Section } from "../newe/Section";
import { ResourceButton } from "../newe/ResourceButton";

const PMV = [
  ["PROPÓSITO", "[Insira o propósito oficial da Newe/Hyndra]"],
  ["MISSÃO", "[Insira a missão]"],
  ["VISÃO", "[Insira a visão]"],
  ["VALORES", "[Liste os valores separados por · ]"],
];

const RITUALS = [
  ["COMO NOS REUNIMOS", "[Descreva aqui]"],
  ["COMO CELEBRAMOS", "[Descreva aqui]"],
  ["COMO DAMOS FEEDBACKS", "[Descreva aqui]"],
  ["COMO TOMAMOS DECISÕES", "[Descreva aqui]"],
];

export function Culture() {
  return (
    <>
      <Section label="NOSSO JEITO DE SER" title="Cultura">
        <p className="newe-label mb-6">PMV²</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {PMV.map(([k, v]) => (
            <div key={k} className="p-8 bg-[#FAFAFA] border border-[#D8D8D8]" style={{ borderLeft: "2px solid #C0C0C0" }}>
              <p className="newe-label mb-4">{k}</p>
              <p className="font-display font-light italic text-[16px] text-[#0A0A0A] leading-relaxed">{v}</p>
            </div>
          ))}
        </div>

        <p className="newe-label mb-6">RITUAIS</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {RITUALS.map(([k, v]) => (
            <OutlineCard
              key={k}
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth="1">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              }
              title={k}
              description={v}
            />
          ))}
        </div>
      </Section>

      <section className="w-full px-6 md:px-12 py-24 md:py-40 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto pl-8" style={{ borderLeft: "2px solid #C0C0C0" }}>
          <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#C0C0C0] mb-8">
            MANIFESTO
          </p>
          <p className="font-display font-light italic text-[#FAFAFA] text-3xl md:text-5xl leading-[1.3]" style={{ fontWeight: 200 }}>
            "[Aqui entra o manifesto cultural da Newe/Hyndra]"
          </p>
          <div className="mt-16">
            <ResourceButton label="PLATAFORMA DE CULTURA COMPLETA" variant="filled" />
          </div>
        </div>
      </section>
    </>
  );
}