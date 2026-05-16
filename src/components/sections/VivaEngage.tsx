import { Section } from "../newe/Section";
import { ResourceButton } from "../newe/ResourceButton";

const DO_LIST = [
  "Compartilhe aprendizados",
  "Celebre vitórias do time",
  "Engaje com conteúdo de colegas",
  "Use grupos temáticos",
];
const DONT_LIST = [
  "Tópicos sensíveis em canais abertos",
  "Discussões que geram conflito",
  "Conteúdo fora do contexto profissional",
  "Mensagens em massa sem relevância",
];

export function VivaEngage() {
  return (
    <Section
      label="COMUNICAÇÃO INTERNA"
      title="Viva Engage — Nossa Rede Interna"
      intro="O Viva Engage é nossa plataforma de comunicação interna — onde compartilhamos conquistas, ideias, novidades e tudo que mantém o time conectado, independente de onde esteja."
    >
      <div className="p-8 mb-16 bg-[#FAFAFA] border border-[#D8D8D8]">
        <p className="newe-label mb-3">COMO ACESSAR</p>
        <p className="newe-placeholder-text text-[14px]">[Instruções de acesso — a preencher]</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="p-6 border border-[#D8D8D8]" style={{ borderLeft: "2px solid #0A0A0A" }}>
          <p className="newe-label mb-5">FAÇA</p>
          <ul className="space-y-3">
            {DO_LIST.map((t) => (
              <li key={t} className="font-body font-light text-[13px] text-[#6B6B6B]">
                <span className="text-[#0A0A0A] mr-2">+</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 border border-[#D8D8D8]" style={{ borderLeft: "2px solid #C0C0C0" }}>
          <p className="newe-label mb-5">EVITE</p>
          <ul className="space-y-3">
            {DONT_LIST.map((t) => (
              <li key={t} className="font-body font-light text-[13px] text-[#6B6B6B]">
                <span className="text-[#9A9A9A] mr-2">−</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <ResourceButton label="ACESSAR O VIVA ENGAGE" variant="filled" />
        <ResourceButton label="TUTORIAL DE PRIMEIROS PASSOS" />
      </div>
    </Section>
  );
}