import { createFileRoute } from "@tanstack/react-router";
import { ResourceButton } from "@/components/newe/ResourceButton";
import { NexusLogo } from "@/components/nexus/NexusLogo";

export const Route = createFileRoute("/cultura")({
  head: () => ({
    meta: [
      { title: "Cultura · Nosso Jeito de Ser — Nexus" },
      {
        name: "description",
        content:
          "Cultura do grupo Hyndra | Newe: manifesto, valores, rituais e história. Aqui você entende quem somos e por que faz parte disso.",
      },
    ],
  }),
  component: CulturaPage,
});

function CulturaPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12 px-6 md:px-12 py-12 md:py-16 max-w-[1280px]">
      <div className="min-w-0">
        <Hero />
        <Tabs />
        <Manifesto />
        <Values />
        <Rituals />
        <History />
        <Articles />
        <div className="mt-10">
          <ResourceButton label="Contribuir com a Cultura" />
        </div>
      </div>
      <Aside />
    </div>
  );
}

/* ------------------------------- HERO ------------------------------- */

function Hero() {
  return (
    <header className="pb-12 border-b border-[#D8D8D8]">
      {/* Eyebrow */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.25rem" }}>
        <span style={{ display: "block", width: 16, height: 1, backgroundColor: "#9DCA79" }} />
        <p className="font-mono-newe text-[9px] tracking-[0.3em] uppercase" style={{ color: "#6B6B6B" }}>
          Módulo · Cultura
        </p>
      </div>

      {/* Headline */}
      <h1
        className="font-display font-extralight leading-[0.95] tracking-[-0.025em]"
        style={{ fontSize: "clamp(36px,5vw,52px)", color: "#0A0A0A" }}
      >
        Nosso Jeito
        <br />
        <span style={{ color: "#6B6B6B" }}>de Ser.</span>
      </h1>

      {/* Subtítulo editorial */}
      <div className="mt-8 pl-6 max-w-2xl" style={{ borderLeft: "2px solid #9DCA79" }}>
        <p className="font-display font-light italic" style={{ fontSize: 19, color: "#1C1C1C", lineHeight: 1.55 }}>
          Aqui você entende quem somos — e por que você faz parte disso.
        </p>
      </div>

      {/* Bloco NEXUS */}
      <div
        className="mt-10 p-6 md:p-8"
        style={{
          backgroundColor: "#0A0A0A",
          borderRadius: 2,
          backgroundImage:
            "linear-gradient(to right, rgba(192,192,192,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(192,192,192,0.025) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem", flexWrap: "wrap" }}>
          <div style={{ flexShrink: 0 }}>
            <NexusLogo variant="negative" size="md" />
          </div>

          <div style={{ flex: 1, minWidth: 200 }}>
            <p className="font-mono-newe text-[9px] tracking-[0.25em] uppercase mb-2" style={{ color: "#9DCA79" }}>
              O produto digital desta cultura
            </p>
            <p className="font-body font-light" style={{ fontSize: 13, color: "#9A9A9A", lineHeight: 1.7, maxWidth: 420 }}>
              O Nexus é o sistema operacional que dá forma ao Nosso Jeito de Ser. Cada módulo e produto desta cultura vive lá — acessível, navegável, vivo.
            </p>
          </div>

          <a
            href="/"
            className="font-mono-newe text-[9px] tracking-[0.3em] uppercase px-4 py-2.5 self-center transition-colors hover:bg-[#9DCA79] hover:text-[#0A0A0A]"
            style={{ border: "1px solid #9DCA79", color: "#9DCA79", borderRadius: 2, whiteSpace: "nowrap", flexShrink: 0 }}
          >
            Acessar o Nexus →
          </a>
        </div>
      </div>

      <dl className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-px bg-[#D8D8D8]" style={{ border: "1px solid #D8D8D8" }}>
        {[
          ["Artigos", "12"],
          ["Valores", "06"],
          ["Rituais", "04"],
          ["Empresas", "02"],
          ["Atualizado", "Hoje"],
        ].map(([k, v]) => (
          <div key={k} className="bg-[#FAFAFA] px-5 py-4">
            <dt className="font-mono-newe text-[8.5px] tracking-[0.3em] uppercase text-[#6B6B6B]">
              {k}
            </dt>
            <dd className="mt-2 font-display font-light text-[18px] text-[#0A0A0A]">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 flex flex-wrap gap-3">
        <ResourceButton label="☆ Favoritar" />
        <ResourceButton label="+ Contribuir" variant="filled" />
      </div>
    </header>
  );
}

/* ------------------------------- TABS ------------------------------- */

const TABS = [
  "Visão Geral",
  "Valores",
  "Rituais",
  "Nossa História",
  "Artigos",
  "Contribuições",
];

function Tabs() {
  return (
    <nav
      aria-label="Navegação do módulo Cultura"
      className="sticky top-14 z-10 bg-[#F7F6F4] -mx-6 md:-mx-12 px-6 md:px-12 py-3 mt-6 border-b border-[#D8D8D8]"
    >
      <ul className="flex flex-wrap gap-x-7 gap-y-2">
        {TABS.map((t, i) => (
          <li key={t}>
            <a
              href={`#${t.toLowerCase().replace(/\s/g, "-")}`}
              className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors"
              style={i === 0 ? { color: "#0A0A0A" } : undefined}
            >
              {t}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ----------------------------- MANIFESTO ---------------------------- */

function Manifesto() {
  return (
    <section id="manifesto" className="mt-16 bg-[#FAFAFA] p-8 md:p-12" style={{ borderLeft: "2px solid #9DCA79", borderRadius: 2 }}>
      <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#6B6B6B]">
        Manifesto · Hyndra Group
      </p>
      <blockquote className="mt-6 font-display font-light italic text-[22px] md:text-[24px] text-[#1C1C1C] leading-[1.45] max-w-3xl">
        Construímos com intenção.
        <br />
        Cada espaço que criamos carrega a marca de quem somos —
        pessoas que acreditam que o ambiente transforma vidas.
        <br />
        <br />
        Não fazemos apenas urbanismo. Fazemos pertencimento.
        <br />
        Não gerimos apenas pessoas. Cultivamos trajetórias.
      </blockquote>
      <p className="mt-8 font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#9A9A9A]">
        Hyndra Group · Fundadores · 2019
      </p>
    </section>
  );
}

/* ------------------------------- VALORES ----------------------------- */

const VALUES: { n: string; name: string; desc: string; ev: string }[] = [
  {
    n: "01",
    name: "Integração radical",
    desc: "Nenhuma decisão de projeto ignora seu impacto no entorno, nas pessoas e no tempo.",
    ev: "Estudo de impacto urbano antes de cada projeto",
  },
  {
    n: "02",
    name: "Curadoria com propósito",
    desc: "Cada escolha — parceiro, material, arquiteto — é feita por razão, não por conveniência.",
    ev: "Briefing público para cada parceria",
  },
  {
    n: "03",
    name: "Beleza como ética",
    desc: "O cuidado estético não é decoração — é respeito pela experiência de quem vai habitar.",
    ev: "Comitê estético interno",
  },
  {
    n: "04",
    name: "Comunidade como projeto",
    desc: "O empreendimento não termina na entrega das chaves — começa aí.",
    ev: "Programa de vida em comunidade",
  },
  {
    n: "05",
    name: "Transparência construtiva",
    desc: "Compartilhamos o processo, as tensões e as escolhas difíceis — não só os resultados.",
    ev: "Almanaque do projeto, atualizado a cada fase",
  },
  {
    n: "06",
    name: "Longevidade responsável",
    desc: "Construímos para durar décadas, não para vender rapidamente.",
    ev: "Garantias estendidas e manutenção planejada",
  },
];

function Values() {
  return (
    <section id="valores" className="mt-20">
      <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#6B6B6B]">
        Os 6 valores oficiais
      </p>
      <h2 className="mt-2 mb-8 font-display font-light text-[28px] text-[#0A0A0A]">
        Nossos Valores
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#D8D8D8]" style={{ border: "1px solid #D8D8D8" }}>
        {VALUES.map((v) => (
          <article
            key={v.n}
            className="group relative bg-[#FAFAFA] p-8 transition-all hover:bg-[#F7F6F4] hover:border-t-[#9DCA79]"
            style={{ borderTop: "2px solid transparent" }}
          >
            <span
              aria-hidden
              className="absolute left-0 bottom-0 h-px w-0 group-hover:w-full transition-all duration-500"
              style={{ backgroundColor: "#9DCA79" }}
            />
            <p className="font-display font-extralight text-[32px] text-[#D8D8D8] leading-none group-hover:text-[#9DCA79] transition-colors">
              {v.n}
            </p>
            <h3 className="mt-4 font-display font-light text-[20px] text-[#0A0A0A]">
              {v.name}
            </h3>
            <p className="mt-3 font-body font-light text-[13px] text-[#2E2E2E] leading-relaxed max-w-md">
              {v.desc}
            </p>
            <p className="mt-6 font-mono-newe text-[8.5px] tracking-[0.3em] uppercase text-[#6B6B6B]">
              Evidência · {v.ev}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------- RITUAIS ---------------------------- */

const RITUALS = [
  {
    n: "01",
    name: "Roda de Abertura",
    desc: "Cada semana começa com a equipe reunida por 20 minutos — não para falar de tarefas, mas para se reconectar como grupo.",
    freq: "Semanal",
    scope: "Todo o grupo",
  },
  {
    n: "02",
    name: "Reconhecimento Público",
    desc: "Uma vez por mês, celebramos publicamente quem viveu nossos valores de forma exemplar — indicado pelos próprios colegas.",
    freq: "Mensal",
    scope: "Todo o grupo",
  },
  {
    n: "03",
    name: "Conversa Franca",
    desc: "Espaço trimestral de diálogo aberto entre lideranças e equipes — sem pauta fixa, sem hierarquia, com escuta real.",
    freq: "Trimestral",
    scope: "Newe · Hyndra",
  },
  {
    n: "04",
    name: "Dia de Chegada",
    desc: "O primeiro dia de cada pessoa no grupo é um ritual — não é onboarding, é uma chegada celebrada com presença e atenção.",
    freq: "A cada chegada",
    scope: "Todo o grupo",
  },
];

function Rituals() {
  return (
    <section id="rituais" className="mt-20">
      <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#6B6B6B]">
        Práticas vivas
      </p>
      <h2 className="mt-2 mb-8 font-display font-light text-[28px] text-[#0A0A0A]">
        Nossos Rituais
      </h2>
      <ul>
        {RITUALS.map((r) => (
          <li
            key={r.n}
            className="grid grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-start py-8 border-t last:border-b border-[#D8D8D8]"
          >
            <p className="font-display font-extralight text-[44px] text-[#D8D8D8] leading-none">
              {r.n}
            </p>
            <div className="min-w-0">
              <h3 className="font-display font-light text-[20px] text-[#0A0A0A]">{r.name}</h3>
              <p className="mt-2 font-body font-light text-[13px] text-[#2E2E2E] leading-relaxed max-w-2xl">
                {r.desc}
              </p>
            </div>
            <div className="hidden md:flex flex-col items-end gap-2 shrink-0">
              <span
                className="font-mono-newe text-[8.5px] tracking-[0.3em] uppercase px-2.5 py-1"
                style={{ border: "1px solid #D8D8D8", color: "#6B6B6B", borderRadius: 2 }}
              >
                {r.freq}
              </span>
              <p className="font-mono-newe text-[8.5px] tracking-[0.3em] uppercase text-[#9A9A9A]">
                {r.scope}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* -------------------------- NOSSA HISTÓRIA --------------------------- */

const TIMELINE = [
  {
    year: "2019",
    title: "Fundação da Hyndra",
    desc: "O grupo nasce com uma crença: que ambientes bem construídos transformam vidas.",
    state: "past" as const,
  },
  {
    year: "2021",
    title: "Nasce a Newe Urbanismo Integrativo",
    desc: "A primeira empresa do grupo focada em real estate de alto padrão — Newe Atma como primeiro projeto.",
    state: "past" as const,
  },
  {
    year: "2023",
    title: "Nosso Jeito de Ser é nomeado",
    desc: "O que já existia como prática passou a ter nome e estrutura.",
    state: "past" as const,
  },
  {
    year: "2025",
    title: "O Nexus entra em operação",
    desc: "A cultura ganha um produto digital — o Nexus. O sistema operacional cultural do grupo, onde Nosso Jeito de Ser vive e se atualiza.",
    state: "current" as const,
  },
  {
    year: "—",
    title: "Próximos capítulos",
    desc: "Novas empresas, novos projetos, novas pessoas. O grupo segue se escrevendo.",
    state: "future" as const,
  },
];

function History() {
  return (
    <section id="nossa-história" className="mt-20">
      <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#6B6B6B]">
        Linha do tempo
      </p>
      <h2 className="mt-2 mb-10 font-display font-light text-[28px] text-[#0A0A0A]">
        Nossa História
      </h2>
      <ol className="relative pl-8">
        <span
          aria-hidden
          className="absolute left-[7px] top-2 bottom-2 w-px"
          style={{ backgroundColor: "#D8D8D8" }}
        />
        {TIMELINE.map((t) => (
          <li key={t.year + t.title} className="relative pb-12 last:pb-0">
            <span
              aria-hidden
              className="absolute -left-[26px] top-1 w-3.5 h-3.5 rounded-full"
              style={{
                backgroundColor:
                  t.state === "future" ? "transparent" : t.state === "current" ? "#9DCA79" : "#C0C0C0",
                border:
                  t.state === "future"
                    ? "1px solid #D8D8D8"
                    : t.state === "current"
                    ? "2px solid #9DCA79"
                    : "1px solid #C0C0C0",
              }}
            >
              {t.state === "current" && (
                <span className="block w-full h-full rounded-full newe-pulse" style={{ backgroundColor: "#9DCA79" }} />
              )}
            </span>
            <p className="font-display font-extralight text-[28px] text-[#0A0A0A] leading-none">
              {t.year}
            </p>
            <p className="mt-3 font-display font-light text-[18px] text-[#0A0A0A]">{t.title}</p>
            <p className="mt-2 font-body font-light text-[13px] text-[#6B6B6B] leading-relaxed max-w-2xl">
              {t.desc}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ------------------------------ ARTIGOS ------------------------------ */

const ARTICLES = [
  {
    tag: "Manifesto",
    title: "Por que dizemos pertencimento e não engajamento",
    author: "Editorial Hyndra",
    read: "6 min",
  },
  {
    tag: "Ritual",
    title: "Como nasce uma Roda de Abertura — bastidores",
    author: "Pessoas & Cultura",
    read: "4 min",
  },
  {
    tag: "Valor 05",
    title: "Transparência construtiva na prática: o Almanaque do projeto",
    author: "Time Newe Atma",
    read: "9 min",
  },
];

function Articles() {
  return (
    <section id="artigos" className="mt-20">
      <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#6B6B6B]">
        Repertório editorial
      </p>
      <h2 className="mt-2 mb-8 font-display font-light text-[28px] text-[#0A0A0A]">
        Artigos recentes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#D8D8D8]" style={{ border: "1px solid #D8D8D8" }}>
        {ARTICLES.map((a) => (
          <a
            key={a.title}
            href="#"
            className="group bg-[#FAFAFA] p-6 flex flex-col gap-4 transition-colors hover:bg-[#F7F6F4]"
          >
            <span
              className="self-start font-mono-newe text-[8.5px] tracking-[0.3em] uppercase px-2 py-1"
              style={{ border: "1px solid #D8D8D8", color: "#6B6B6B", borderRadius: 2 }}
            >
              {a.tag}
            </span>
            <h3 className="font-display font-light text-[17px] text-[#0A0A0A] leading-snug group-hover:underline decoration-[#C0C0C0] underline-offset-4">
              {a.title}
            </h3>
            <p className="mt-auto font-mono-newe text-[8.5px] tracking-[0.3em] uppercase text-[#9A9A9A]">
              {a.author} · {a.read}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------- ASIDE ------------------------------ */

function Aside() {
  return (
    <aside className="hidden lg:block sticky top-20 self-start space-y-10">
      <div>
        <p className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#6B6B6B] mb-3">
          Nesta página
        </p>
        <ul className="space-y-2">
          {[
            ["Manifesto", "#manifesto"],
            ["Valores", "#valores"],
            ["Rituais", "#rituais"],
            ["Nossa História", "#nossa-história"],
            ["Artigos", "#artigos"],
          ].map(([l, h]) => (
            <li key={h}>
              <a
                href={h}
                className="font-body font-light text-[12px] text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#6B6B6B] mb-3">
          Contribuidores
        </p>
        <ul className="space-y-3">
          {[
            ["AC", "Ana Couto", "Branding"],
            ["RV", "Rafael V.", "Liderança · Newe"],
            ["MT", "Marina T.", "Pessoas & Cultura"],
          ].map(([i, n, r]) => (
            <li key={n} className="flex items-center gap-3">
              <span
                className="w-7 h-7 flex items-center justify-center font-mono-newe text-[9px]"
                style={{
                  border: "1px solid #D8D8D8",
                  backgroundColor: "#FAFAFA",
                  color: "#2E2E2E",
                  borderRadius: 2,
                }}
                aria-hidden
              >
                {i}
              </span>
              <div className="min-w-0">
                <p className="font-body font-light text-[12px] text-[#0A0A0A] truncate">{n}</p>
                <p className="font-mono-newe text-[8px] tracking-[0.3em] uppercase text-[#9A9A9A] truncate">
                  {r}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-6 border-t border-[#D8D8D8]">
        <p className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#6B6B6B] mb-3">
          Sobre este módulo
        </p>
        <dl className="space-y-2 font-body font-light text-[12px]">
          {[
            ["Criado em", "Mar/2023"],
            ["Atualizado", "Hoje"],
            ["Visitas no mês", "1.284"],
            ["Empresas", "Hyndra · Newe"],
          ].map(([k, v]) => (
            <div key={k} className="flex items-baseline justify-between gap-3">
              <dt className="text-[#6B6B6B]">{k}</dt>
              <dd className="text-[#0A0A0A]">{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="pt-6 border-t border-[#D8D8D8]">
        <p className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#6B6B6B] mb-3">
          Produto digital
        </p>
        <a href="/" className="flex items-center gap-2 group">
          <span style={{ display: "block", width: 2, height: 24, backgroundColor: "#9DCA79", flexShrink: 0 }} />
          <div>
            <p className="font-display font-extralight text-[14px] text-[#0A0A0A] group-hover:underline decoration-[#C0C0C0] underline-offset-4">
              NEXUS
            </p>
            <p className="font-mono-newe text-[8px] tracking-[0.25em] uppercase text-[#9A9A9A]">
              Sistema operacional da cultura
            </p>
          </div>
        </a>
      </div>
    </aside>
  );
}