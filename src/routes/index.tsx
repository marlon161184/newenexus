import { createFileRoute } from "@tanstack/react-router";
import { ResourceButton } from "@/components/newe/ResourceButton";
import { NexusHero } from "@/components/nexus/NexusHero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexus · Hyndra | Newe" },
      {
        name: "description",
        content:
          "Nexus — o sistema operacional cultural do grupo Hyndra | Newe. Cultura, conhecimento e pessoas em um só lugar.",
      },
    ],
  }),
  component: NexusHome,
});

function NexusHome() {
  return (
    <div className="px-6 md:px-12 py-12 md:py-16 max-w-[1280px]">
      <NexusHero />

      {/* FRASE DO DIA */}
      <section className="py-14">
        <div className="pl-6 py-2 max-w-3xl" style={{ borderLeft: "2px solid #9DCA79" }}>
          <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#6B6B6B]">
            Valor do dia · Nosso Jeito de Ser
          </p>
          <p className="mt-4 font-display font-light italic text-[24px] text-[#1C1C1C] leading-snug">
            “Construímos com intenção. Cada detalhe carrega o propósito de quem somos.”
          </p>
          <p className="mt-4 font-body font-light text-[12px] text-[#6B6B6B]">
            Nosso Jeito de Ser · Hyndra Group
          </p>
        </div>
      </section>

      {/* PONTO DE PARTIDA — manifesto */}
      <section className="pb-16">
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.5rem" }}>
          <span style={{ display: "block", width: 16, height: 1, backgroundColor: "#9DCA79" }} />
          <p className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#6B6B6B]">
            Ponto de partida
          </p>
        </div>
        <div
          className="p-8 md:p-12"
          style={{ backgroundColor: "#0A0A0A", borderRadius: 2 }}
        >
          <p
            className="font-display font-extralight italic"
            style={{ fontSize: 22, color: "#F7F6F4", lineHeight: 1.5, maxWidth: 600, marginBottom: "2rem" }}
          >
            "A Newe não acredita em fórmulas. Acredita em projeto — com método, estética e responsabilidade."
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <a
              href="/cultura"
              className="font-mono-newe text-[9px] tracking-[0.3em] uppercase px-4 py-2.5 transition-colors hover:bg-[#FAFAFA] hover:text-[#0A0A0A]"
              style={{ border: "1px solid #C0C0C0", color: "#F7F6F4", borderRadius: 2 }}
            >
              Explorar Nosso Jeito de Ser →
            </a>
          </div>
        </div>
      </section>

      {/* EMPRESAS DO GRUPO */}
      <section className="pb-20">
        <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#6B6B6B]">
          Empresas do grupo
        </p>
        <h2 className="mt-2 mb-8 font-display font-light text-[24px] text-[#0A0A0A]">
          O ecossistema Hyndra
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {COMPANIES.map((c) => (
            <CompanyCard key={c.name} {...c} />
          ))}
        </div>
        <div className="mt-10">
          <ResourceButton label="Acessar Chegada · Newe Lovers →" href="/onboarding" />
        </div>
      </section>
    </div>
  );
}

function CompanyCard({
  name,
  type,
  badge,
}: {
  name: string;
  type: string;
  badge: string;
}) {
  return (
    <div
      className="p-6 bg-[#FAFAFA] flex flex-col gap-4"
      style={{ border: "1px solid #D8D8D8", borderRadius: 2 }}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono-newe text-[8.5px] tracking-[0.3em] uppercase text-[#9A9A9A]">
            {type}
          </p>
          <p className="mt-2 font-display font-light text-[20px] text-[#0A0A0A] leading-tight">
            {name}
          </p>
        </div>
        <span
          className="font-mono-newe text-[8px] tracking-[0.3em] uppercase px-2 py-1 shrink-0"
          style={{ border: "1px solid #D8D8D8", color: "#6B6B6B", borderRadius: 2 }}
        >
          {badge}
        </span>
      </div>
    </div>
  );
}

const COMPANIES = [
  {
    name: "Hyndra Participações",
    type: "Holding · Corporativo",
    badge: "Ativo",
  },
  {
    name: "Newe Urbanismo Integrativo",
    type: "Real estate · Mercado",
    badge: "Sua empresa",
  },
];
