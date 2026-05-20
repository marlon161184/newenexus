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
        <div className="pl-6 py-2 max-w-3xl" style={{ borderLeft: "2px solid #C0C0C0" }}>
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

      {/* RECENTES + DESTAQUE CULTURA */}
      <section className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 pb-16">
        <div style={{ border: "1px solid #D8D8D8", borderRadius: 2, backgroundColor: "#FAFAFA" }}>
          <div className="px-6 py-5 border-b border-[#EBEBEB] flex items-center justify-between">
            <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#6B6B6B]">
              Acessados recentemente
            </p>
            <a href="#" className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#6B6B6B] hover:text-[#0A0A0A]">
              Ver tudo →
            </a>
          </div>
          <ul>
            {RECENT.map((r, i) => (
              <li
                key={i}
                className="px-6 py-4 flex items-center gap-4 border-b last:border-b-0 border-[#EBEBEB] hover:bg-[#F7F6F4] transition-colors"
              >
                <span className="text-[#6B6B6B]">
                  <RecentIcon kind={r.kind} />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-body font-light text-[13px] text-[#0A0A0A] truncate">
                    {r.title}
                  </p>
                  <p className="mt-1 font-mono-newe text-[8.5px] tracking-[0.3em] uppercase text-[#9A9A9A] truncate">
                    {r.crumb}
                  </p>
                </div>
                <span className="font-mono-newe text-[8.5px] tracking-[0.25em] uppercase text-[#9A9A9A] shrink-0">
                  {r.time}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <aside
          className="p-8 flex flex-col justify-between"
          style={{ backgroundColor: "#0A0A0A", borderRadius: 2 }}
        >
          <div>
            <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#C0C0C0]">
              Destaque · Cultura
            </p>
            <p className="mt-6 font-display font-light italic text-[22px] text-[#F7F6F4] leading-snug">
              “Não fazemos apenas urbanismo. Fazemos pertencimento.”
            </p>
            <p className="mt-4 font-body font-light text-[12px] text-[#9A9A9A]">
              Manifesto · Hyndra Group
            </p>
          </div>
          <a
            href="#"
            className="mt-10 inline-flex items-center gap-2 self-start px-5 py-2.5 font-mono-newe text-[9px] tracking-[0.3em] uppercase transition-colors hover:bg-[#FAFAFA] hover:text-[#0A0A0A]"
            style={{ border: "1px solid #C0C0C0", color: "#F7F6F4", borderRadius: 2 }}
          >
            Explorar Cultura →
          </a>
        </aside>
      </section>

      {/* MINHA JORNADA */}
      <section className="pb-16">
        <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#6B6B6B]">
          Minha jornada
        </p>
        <h2 className="mt-2 mb-8 font-display font-light text-[24px] text-[#0A0A0A]">
          Onde você está no grupo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {JOURNEY.map((j) => (
            <StatCard key={j.label} {...j} />
          ))}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

/* ---------- subcomponentes ---------- */

function StatCard({
  label,
  value,
  caption,
  progress,
}: {
  label: string;
  value: string;
  caption: string;
  progress: number;
}) {
  return (
    <div
      className="p-6 bg-[#FAFAFA] flex flex-col"
      style={{ border: "1px solid #D8D8D8", borderRadius: 2 }}
    >
      <p className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#6B6B6B]">
        {label}
      </p>
      <p className="mt-4 font-display font-extralight text-[36px] text-[#0A0A0A] leading-none">
        {value}
      </p>
      <p className="mt-2 font-body font-light text-[12px] text-[#9A9A9A]">{caption}</p>
      <div className="mt-5 h-px w-full bg-[#EBEBEB]">
        <div
          className="h-px transition-all"
          style={{ width: `${progress}%`, backgroundColor: "#0A0A0A" }}
        />
      </div>
    </div>
  );
}

function CompanyCard({
  name,
  type,
  badge,
  dim,
}: {
  name: string;
  type: string;
  badge: string;
  dim?: boolean;
}) {
  return (
    <div
      className="p-6 bg-[#FAFAFA] flex flex-col gap-4"
      style={{
        border: "1px solid #D8D8D8",
        borderRadius: 2,
        opacity: dim ? 0.55 : 1,
      }}
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
          style={{
            border: "1px solid #D8D8D8",
            color: "#6B6B6B",
            borderRadius: 2,
          }}
        >
          {badge}
        </span>
      </div>
    </div>
  );
}

/* ---------- ícones / formas ---------- */

function RecentIcon({ kind }: { kind: "doc" | "video" | "link" | "sheet" }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.2,
  } as const;
  switch (kind) {
    case "doc":
      return (
        <svg {...common}>
          <path d="M6 3h9l3 3v15H6z" />
          <path d="M9 10h6M9 14h6M9 18h4" />
        </svg>
      );
    case "video":
      return (
        <svg {...common}>
          <rect x="3" y="6" width="14" height="12" />
          <path d="M17 10l4-2v8l-4-2z" />
        </svg>
      );
    case "link":
      return (
        <svg {...common}>
          <path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1.5 1.5" />
          <path d="M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1.5-1.5" />
        </svg>
      );
    case "sheet":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" />
          <path d="M4 10h16M4 16h16M10 4v16" />
        </svg>
      );
  }
}

/* ---------- dados ---------- */

const RECENT: { title: string; crumb: string; time: string; kind: "doc" | "video" | "link" | "sheet" }[] = [
  {
    title: "Manifesto Hyndra · versão editorial 2025",
    crumb: "Cultura · Nosso Jeito de Ser",
    time: "Há 2h",
    kind: "doc",
  },
  {
    title: "PAR 2026 — pilares estratégicos",
    crumb: "Workspace · Planejamento",
    time: "Ontem",
    kind: "sheet",
  },
  {
    title: "Programa Buddy — guia rápido",
    crumb: "Pessoas · Programas",
    time: "Ontem",
    kind: "doc",
  },
  {
    title: "Roda de Abertura · ritual semanal",
    crumb: "Cultura · Rituais",
    time: "3 dias",
    kind: "video",
  },
  {
    title: "Brand Book Newe v1.0",
    crumb: "Governança · Marca",
    time: "Semana passada",
    kind: "link",
  },
];

const JOURNEY = [
  {
    label: "Tempo no grupo",
    value: "3 anos",
    caption: "Desde mar/2022 · Newe Urbanismo",
    progress: 60,
  },
  {
    label: "PDI · ciclo atual",
    value: "68%",
    caption: "Próximo marco em duas semanas",
    progress: 68,
  },
  {
    label: "Contribuições ao Conhecimento",
    value: "12 docs",
    caption: "5 nos últimos 90 dias",
    progress: 40,
  },
];

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
  {
    name: "[Próxima empresa]",
    type: "Em desenvolvimento",
    badge: "Em breve",
    dim: true,
  },
];