import { OutlineCard, Section } from "../newe/Section";
import { ResourceButton } from "../newe/ResourceButton";

function BuddyCard({ name, area }: { name: string; area: string }) {
  return (
    <div className="border border-[#D8D8D8] bg-[#FAFAFA] p-6 flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-[#0A0A0A] text-[#FAFAFA] flex items-center justify-center font-display font-light">
        {name.charAt(1) || "B"}
      </div>
      <div>
        <p className="font-display font-light text-[15px] text-[#0A0A0A]">{name}</p>
        <p className="font-mono-newe text-[8px] tracking-[0.3em] uppercase text-[#9A9A9A] mt-1">{area}</p>
      </div>
    </div>
  );
}

export function Buddy() {
  return (
    <Section
      label="PROGRAMA BUDDY · HYNDRA & NEWE"
      title="Seu Padrinho de Jornada"
    >
      <div className="flex items-end gap-6 mb-16">
        <span className="font-display text-[80px] md:text-[120px] leading-none text-[#D8D8D8]" style={{ fontWeight: 200 }}>
          90
        </span>
        <span className="newe-label pb-6">DIAS DE ACOMPANHAMENTO</span>
      </div>

      <p className="font-body font-light text-[16px] text-[#6B6B6B] max-w-2xl mb-16 leading-relaxed">
        O Buddy é o padrinho ou madrinha do novo colaborador. Não é gestor, não é RH — é um par experiente que já viveu a jornada e se dispõe a ser bússola nos primeiros 90 dias.
      </p>

      <p className="newe-label mb-6">O PAPEL</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {[
          "Acolher e apresentar a cultura de forma humana",
          "Ser ponto de contato para dúvidas do dia a dia",
          "Compartilhar contextos que não estão nos manuais",
          "Acompanhar nas primeiras semanas com check-ins leves",
        ].map((t) => (
          <OutlineCard
            key={t}
            description={t}
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth="1">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
              </svg>
            }
          />
        ))}
      </div>

      <p className="newe-label mb-6">O QUE O BUDDY NÃO É</p>
      <ul className="space-y-3 mb-16">
        {[
          "Não substitui o gestor direto",
          "Não tem responsabilidade de avaliação de desempenho",
          "Não precisa ter todas as respostas — precisa saber onde buscar",
        ].map((t) => (
          <li key={t} className="font-body font-light text-[14px] text-[#6B6B6B]">
            <span className="text-[#9A9A9A] mr-3">✕</span>
            {t}
          </li>
        ))}
      </ul>

      <div className="p-8 mb-12 bg-[#FAFAFA]" style={{ border: "1px solid #C0C0C0" }}>
        <p className="newe-label mb-4">FORMAÇÃO</p>
        <p className="font-body font-light text-[14px] text-[#6B6B6B] leading-relaxed">
          Para ser um Buddy da Hyndra ou da Newe, o colaborador passa por uma formação específica conduzida por Pessoas & Cultura: escuta ativa · cultura organizacional · mapa de stakeholders · rituais de acolhimento.
        </p>
      </div>

      <div className="mb-16">
        <ResourceButton label="QUERO ME TORNAR UM BUDDY" variant="filled" />
      </div>

      <p className="newe-label mb-6">BUDDIES ATUAIS</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <BuddyCard name="[Nome do Buddy]" area="[Área]" />
        <BuddyCard name="[Nome do Buddy]" area="[Área]" />
        <BuddyCard name="[Nome do Buddy]" area="[Área]" />
      </div>
      <ResourceButton label="VER TODOS OS BUDDIES" />
    </Section>
  );
}