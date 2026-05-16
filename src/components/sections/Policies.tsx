import { Section } from "../newe/Section";
import { ResourceButton } from "../newe/ResourceButton";

const POLICIES = [
  { t: "POLÍTICA DE BENEFÍCIOS", d: "Entenda seu pacote de benefícios." },
  { t: "POLÍTICA DE FÉRIAS E AFASTAMENTOS", d: "Férias, licenças e afastamentos." },
  { t: "CÓDIGO DE CONDUTA E ÉTICA", d: "Os princípios que guiam nossas relações." },
  { t: "POLÍTICA DE HOME OFFICE / TRABALHO HÍBRIDO", d: "Como funcionamos no modelo híbrido." },
  { t: "POLÍTICA DE CARGOS E SALÁRIOS", d: "Estrutura de remuneração e progressão." },
  { t: "PROCESSO DE AVALIAÇÃO DE DESEMPENHO", d: "Como avaliamos e somos avaliados." },
  { t: "ONBOARDING & OFFBOARDING", d: "Chegada e partida com cuidado." },
  { t: "POLÍTICA DE SAÚDE E SEGURANÇA", d: "Seu bem-estar é prioridade." },
  { t: "CANAL DE ESCUTA E DENÚNCIA", d: "Espaço seguro para ouvir e ser ouvido." },
];

export function Policies() {
  return (
    <Section label="PESSOAS & CULTURA" title="Políticas & Procedimentos">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {POLICIES.map((p) => (
          <div key={p.t} className="border border-[#D8D8D8] p-6 flex flex-col gap-4 transition-colors hover:bg-[#FAFAFA]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth="1">
              <path d="M6 3h9l3 3v15H6zM6 8h12M6 13h12M6 18h8" />
            </svg>
            <h3 className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#0A0A0A] leading-relaxed">
              {p.t}
            </h3>
            <p className="font-body font-light text-[12px] text-[#9A9A9A] flex-1">{p.d}</p>
            <div>
              <ResourceButton label="ACESSAR DOCUMENTO" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}