import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

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

type Product = {
  name: string;
  tagline: string;
  url: string;
  logoText?: string;
  logoSub?: string;
  logoBg?: string;
  logoTextColor?: string;
};

type ModuleEntry = {
  slug: string;
  tag: string;
  title: string;
  desc: string;
  count: string;
  shape: "circle" | "circle-small" | "triangle" | "square" | "diamond" | "circle-dashed";
  products: Product[];
};

function NexusHome() {
  const [openModule, setOpenModule] = useState<string | null>(null);

  return (
    <div className="max-w-[1280px]">

      {/* ── HERO ── */}
      <section
        className="-mx-0 px-8 md:px-12 pt-14 pb-12"
        style={{
          backgroundColor: "#0A0A0A",
          backgroundImage:
            "linear-gradient(to right,rgba(192,192,192,0.025) 1px,transparent 1px),linear-gradient(to bottom,rgba(192,192,192,0.025) 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.25rem" }}>
          <span style={{ display: "block", width: 20, height: 1, backgroundColor: "#9DCA79" }} />
          <p className="font-mono-newe text-[9px] tracking-[0.3em] uppercase" style={{ color: "#9DCA79" }}>
            Newe Nexus · Sistema Operacional da Cultura
          </p>
        </div>

        <h1
          className="font-display font-extralight leading-[0.95] tracking-[-0.03em]"
          style={{ fontSize: "clamp(40px,6vw,68px)", color: "#FFFFFF", marginBottom: "1.25rem" }}
        >
          Nosso Jeito
          <br />
          <span style={{ color: "#C0C0C0" }}>de Ser.</span>
        </h1>

        <p
          className="font-body font-light leading-relaxed"
          style={{ fontSize: 16, color: "#9A9A9A", maxWidth: 480, marginBottom: "2rem" }}
        >
          O produto digital que materializa nossa cultura. Cada módulo, produto e ritual — tudo começa aqui.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: "2.5rem" }}>
          <a
            href="https://newemanifesto.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-newe text-[9px] tracking-[0.3em] uppercase px-5 py-2.5 transition-all hover:bg-[#9DCA79] hover:text-[#0A0A0A]"
            style={{ border: "1px solid #9DCA79", color: "#9DCA79", borderRadius: 2 }}
          >
            Nosso Jeito de Ser ↗
          </a>
          <a
            href="#modulos"
            className="font-mono-newe text-[9px] tracking-[0.3em] uppercase px-5 py-2.5 transition-all hover:border-[#C0C0C0] hover:text-white"
            style={{ border: "1px solid #2E2E2E", color: "#6B6B6B", borderRadius: 2 }}
          >
            Explorar módulos ↓
          </a>
        </div>

        <div
          style={{
            height: 1,
            background:
              "linear-gradient(90deg,#9DCA79 0,#9DCA79 60px,#C0C0C0 60px,#C0C0C0 200px,transparent 200px)",
            marginBottom: "2.5rem",
          }}
        />

        <div style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem" }}>
          {[
            { v: "5", l: "Módulos" },
            { v: "11", l: "Produtos digitais" },
            { v: "6", l: "Valores fundadores" },
            { v: "7", l: "Fases da jornada EE" },
          ].map(({ v, l }) => (
            <div key={l}>
              <p className="font-display font-extralight" style={{ fontSize: 28, color: "#FFFFFF", lineHeight: 1 }}>{v}</p>
              <p className="font-mono-newe text-[9px] tracking-[0.25em] uppercase mt-1" style={{ color: "#6B6B6B" }}>{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── LINHA DO TEMPO EE ── */}
      <section className="px-8 md:px-12 pt-12 pb-14 border-b border-[#D8D8D8]">
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "2rem" }}>
          <span style={{ display: "block", width: 16, height: 1, backgroundColor: "#9DCA79" }} />
          <p className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#6B6B6B]">
            Employee Experience Journey
          </p>
        </div>

        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", top: 5, left: 0, right: 0, height: 1, backgroundColor: "#D8D8D8" }}>
            <div style={{ width: 60, height: 1, backgroundColor: "#9DCA79" }} />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {EE_PHASES.map(({ label, products }) => (
              <div
                key={label}
                className="group"
                style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, position: "relative" }}
              >
                <div
                  className="opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200"
                  style={{
                    position: "absolute",
                    bottom: "calc(100% + 12px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#1C1C1C",
                    border: "1px solid rgba(157,202,121,0.3)",
                    borderTop: "2px solid #9DCA79",
                    padding: "0.6rem 0.85rem",
                    minWidth: 140,
                    zIndex: 50,
                    borderRadius: 2,
                  }}
                >
                  <p className="font-mono-newe text-[8px] tracking-[0.15em] uppercase mb-1.5" style={{ color: "#9DCA79" }}>
                    {label}
                  </p>
                  {products.map((p) => (
                    <p key={p} className="font-body font-light text-[11px]" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>
                      · {p}
                    </p>
                  ))}
                </div>

                <div
                  className="group-hover:scale-[1.8] group-hover:bg-[#9DCA79] group-hover:border-[#9DCA79] transition-all duration-200"
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    border: "1px solid #C0C0C0",
                    backgroundColor: "#F7F6F4",
                    zIndex: 2,
                  }}
                />

                <p
                  className="font-mono-newe text-center group-hover:text-[#9DCA79] transition-colors mt-2"
                  style={{ fontSize: 8, letterSpacing: "0.06em", textTransform: "uppercase", color: "#9A9A9A", maxWidth: 64, lineHeight: 1.4 }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MÓDULOS ── */}
      <section id="modulos" className="px-8 md:px-12 py-12 pb-16">
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "0.75rem" }}>
          <span style={{ display: "block", width: 16, height: 1, backgroundColor: "#9DCA79" }} />
          <p className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#6B6B6B]">
            Módulos · Nosso Jeito de Ser em ação
          </p>
        </div>
        <h2 className="font-display font-light text-[26px] text-[#0A0A0A] mb-8">
          Cultura que se materializa em produtos.
        </h2>

        <div style={{ border: "1px solid #D8D8D8" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D8D8D8]">
            {MODULES.slice(0, 3).map((m) => (
              <ModuleCard
                key={m.slug}
                {...m}
                isOpen={openModule === m.slug}
                onClick={() => setOpenModule(openModule === m.slug ? null : m.slug)}
              />
            ))}
          </div>
          {openModule && MODULES.slice(0, 3).find((m) => m.slug === openModule) && (
            <ProductPanel
              module={MODULES.find((m) => m.slug === openModule)!}
              onClose={() => setOpenModule(null)}
            />
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D8D8D8]" style={{ borderTop: "1px solid #D8D8D8" }}>
            {MODULES.slice(3).map((m) => (
              <ModuleCard
                key={m.slug}
                {...m}
                isOpen={openModule === m.slug}
                onClick={() => setOpenModule(openModule === m.slug ? null : m.slug)}
              />
            ))}
          </div>
          {openModule && MODULES.slice(3).find((m) => m.slug === openModule) && (
            <ProductPanel
              module={MODULES.find((m) => m.slug === openModule)!}
              onClose={() => setOpenModule(null)}
            />
          )}
        </div>
      </section>

      {/* ── BLOCO CULTURA ── */}
      <section className="px-8 md:px-12 pb-16">
        <div
          className="p-8 md:p-12"
          style={{
            backgroundColor: "#0A0A0A",
            borderRadius: 2,
            backgroundImage:
              "linear-gradient(to right,rgba(192,192,192,0.025) 1px,transparent 1px),linear-gradient(to bottom,rgba(192,192,192,0.025) 1px,transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        >
          <p className="font-mono-newe text-[9px] tracking-[0.3em] uppercase" style={{ color: "#9DCA79" }}>
            A cultura por trás do produto
          </p>
          <p className="font-display font-extralight italic mt-5" style={{ fontSize: 22, color: "#F7F6F4", lineHeight: 1.5, maxWidth: 580 }}>
            "A Newe não acredita em fórmulas. Acredita em projeto — com método, estética e responsabilidade."
          </p>
          <p className="font-body font-light mt-3" style={{ fontSize: 12, color: "#6B6B6B" }}>
            Nosso Jeito de Ser · Hyndra Group
          </p>
          <a
            href="https://newemanifesto.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 font-mono-newe text-[9px] tracking-[0.3em] uppercase px-5 py-2.5 transition-all hover:bg-[#FAFAFA] hover:text-[#0A0A0A]"
            style={{ border: "1px solid #C0C0C0", color: "#F7F6F4", borderRadius: 2 }}
          >
            Ler o Nosso Jeito de Ser ↗
          </a>
        </div>
      </section>

      {/* ── EMPRESAS DO GRUPO ── */}
      <section className="px-8 md:px-12 pb-20">
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
      </section>

    </div>
  );
}

function ModuleShape({ shape }: { shape: ModuleEntry["shape"] }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (shape) {
    case "circle":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
    case "circle-small":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="6" />
        </svg>
      );
    case "triangle":
      return (
        <svg {...common}>
          <path d="M12 4l9 16H3z" />
        </svg>
      );
    case "square":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" />
        </svg>
      );
    case "diamond":
      return (
        <svg {...common}>
          <path d="M12 3l9 9-9 9-9-9z" />
        </svg>
      );
    case "circle-dashed":
      return (
        <svg {...common} strokeDasharray="3 3">
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

function ModuleCard({
  tag, title, desc, count, shape, isOpen, onClick,
}: ModuleEntry & { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-expanded={isOpen}
      className="group relative bg-[#FAFAFA] p-8 flex flex-col gap-4 transition-colors hover:bg-[#F7F6F4] w-full text-left"
      style={{ borderBottom: isOpen ? "2px solid #9DCA79" : "2px solid transparent" }}
    >
      {isOpen && (
        <span aria-hidden className="absolute left-0 top-0 bottom-0 w-[2px]" style={{ backgroundColor: "#9DCA79" }} />
      )}
      <span aria-hidden className="absolute left-0 bottom-0 h-px w-0 group-hover:w-full transition-all duration-500" style={{ backgroundColor: "#C0C0C0" }} />
      <div style={{ color: isOpen ? "#9DCA79" : "#6B6B6B" }}>
        <ModuleShape shape={shape} />
      </div>
      <p className="font-mono-newe text-[8.5px] tracking-[0.35em] uppercase text-[#9A9A9A]">{tag}</p>
      <h3 className="font-display font-light text-[22px] text-[#0A0A0A] leading-tight">{title}</h3>
      <p className="font-body font-extralight text-[13px] text-[#6B6B6B] leading-relaxed">{desc}</p>
      <div className="mt-2 flex items-center justify-between">
        <span className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#9A9A9A]">{count}</span>
        <span
          className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#0A0A0A] transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(90deg)" : "none" }}
        >
          →
        </span>
      </div>
    </button>
  );
}

function ProductPanel({ module: mod, onClose }: { module: ModuleEntry; onClose: () => void }) {
  if (!mod.products.length) {
    return (
      <div className="px-8 py-8 flex items-center justify-between" style={{ backgroundColor: "#F7F6F4", borderTop: "1px solid #EBEBEB" }}>
        <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#9A9A9A]">Em construção · Em breve</p>
        <button onClick={onClose} className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors">Fechar ×</button>
      </div>
    );
  }
  return (
    <div
      style={{
        backgroundColor: "#0A0A0A",
        borderTop: "1px solid #1C1C1C",
        backgroundImage:
          "linear-gradient(to right,rgba(192,192,192,0.025) 1px,transparent 1px),linear-gradient(to bottom,rgba(192,192,192,0.025) 1px,transparent 1px)",
        backgroundSize: "56px 56px",
      }}
    >
      <div className="px-8 pt-6 pb-4 flex items-center justify-between">
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ display: "block", width: 16, height: 1, backgroundColor: "#9DCA79" }} />
          <p className="font-mono-newe text-[9px] tracking-[0.3em] uppercase" style={{ color: "#9DCA79" }}>
            {mod.title} · {mod.products.length} produto{mod.products.length > 1 ? "s" : ""}
          </p>
        </div>
        <button onClick={onClose} className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#6B6B6B] hover:text-white transition-colors">Fechar ×</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] px-6 pb-6" style={{ background: "rgba(255,255,255,0.04)" }}>
        {mod.products.map((p) => (
          <a
            key={p.url}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden transition-colors"
            style={{ backgroundColor: "#111110", border: "1px solid #2E2E2E", borderRadius: 2, margin: 4 }}
          >
            <div
              className="flex items-center justify-center px-6 relative"
              style={{ backgroundColor: p.logoBg ?? "#1C1C1C", height: 96, borderBottom: "1px solid #2E2E2E" }}
            >
              <span
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, backgroundColor: "#9DCA79" }}
              />
              <div className="text-center px-2">
                <p
                  className="font-display font-extralight leading-tight"
                  style={{ fontSize: p.logoText && p.logoText.length > 16 ? 13 : 17, color: p.logoTextColor ?? "#FFFFFF", letterSpacing: "-0.02em" }}
                >
                  {p.logoText}
                </p>
                {p.logoSub && (
                  <p
                    className="font-mono-newe mt-1"
                    style={{
                      fontSize: 7,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: p.logoTextColor === "#0A0A0A" ? "#6B6B6B" : "rgba(255,255,255,0.35)",
                    }}
                  >
                    {p.logoSub}
                  </p>
                )}
              </div>
            </div>

            <div className="px-5 py-4">
              <p className="font-body font-light text-[13px]" style={{ color: "#E8E2D9" }}>{p.name}</p>
              <p className="mt-1 font-mono-newe text-[8px] tracking-[0.22em] uppercase" style={{ color: "#6B6B6B" }}>{p.tagline}</p>
              <p className="mt-3 font-mono-newe text-[8px] tracking-[0.2em] uppercase transition-colors group-hover:text-white" style={{ color: "#9DCA79" }}>Acessar →</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function CompanyCard({ name, type, badge }: { name: string; type: string; badge: string }) {
  return (
    <div className="p-6 bg-[#FAFAFA] flex flex-col gap-4" style={{ border: "1px solid #D8D8D8", borderRadius: 2 }}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono-newe text-[8.5px] tracking-[0.3em] uppercase text-[#9A9A9A]">{type}</p>
          <p className="mt-2 font-display font-light text-[20px] text-[#0A0A0A] leading-tight">{name}</p>
        </div>
        <span className="font-mono-newe text-[8px] tracking-[0.3em] uppercase px-2 py-1 shrink-0" style={{ border: "1px solid #D8D8D8", color: "#6B6B6B", borderRadius: 2 }}>{badge}</span>
      </div>
    </div>
  );
}

const EE_PHASES = [
  { label: "Atração", products: ["Employer Brand", "Vitrine Cultural"] },
  { label: "Seleção", products: ["Assessment Cultural", "Painel de Talentos"] },
  { label: "Integração", products: ["All Aboard", "Nosso Jeito de Ser", "Benefícios"] },
  { label: "Desenvolvimento", products: ["Academia de Líderes", "Academia de Vendas"] },
  { label: "Engajamento", products: ["HYNstaNewe", "Hub Hyndra"] },
  { label: "Performance", products: ["PAR 2026"] },
  { label: "Transição", products: ["Offboarding", "Alumni Newe"] },
];

const MODULES: ModuleEntry[] = [
  {
    slug: "cultura",
    tag: "Módulo · 01",
    title: "Cultura",
    desc: "Nosso Jeito de Ser — identidade, propósito e o que nos une como grupo.",
    count: "1 produto",
    shape: "circle",
    products: [
      {
        name: "Nosso Jeito de Ser",
        tagline: "Manifesto · Hyndra Group",
        url: "https://newemanifesto.lovable.app",
        logoText: "Nosso Jeito de Ser",
        logoSub: "MANIFESTO · HYNDRA GROUP",
        logoBg: "#0A0A0A",
        logoTextColor: "#FFFFFF",
      },
    ],
  },
  {
    slug: "pessoas",
    tag: "Módulo · 02",
    title: "Pessoas",
    desc: "Jornada, desenvolvimento, remuneração e sua trajetória no grupo.",
    count: "3 produtos",
    shape: "triangle",
    products: [
      {
        name: "All Aboard",
        tagline: "Plataforma de Embarque",
        url: "https://newe-welcome-journey.lovable.app",
        logoText: "all aboard",
        logoSub: "PLATAFORMA DE EMBARQUE",
        logoBg: "#1C1C1C",
        logoTextColor: "#FFFFFF",
      },
      {
        name: "PAR 2026",
        tagline: "Participação Anual nos Resultados",
        url: "https://par-nexus.lovable.app",
        logoText: "PAR 2026",
        logoSub: "Programa de Participação Anual",
        logoBg: "#111111",
        logoTextColor: "#FFFFFF",
      },
      {
        name: "Decidir com Intenção",
        tagline: "Ferramenta de decisão estratégica",
        url: "https://choice-compass-suite.lovable.app",
        logoText: "Decidir com intenção.",
        logoBg: "#0A0A0A",
        logoTextColor: "#FFFFFF",
      },
    ],
  },
  {
    slug: "conhecimento",
    tag: "Módulo · 03",
    title: "Conhecimento",
    desc: "Aprendizagem, trilhas e capacitação para quem constrói o urbanismo.",
    count: "2 produtos",
    shape: "circle-small",
    products: [
      {
        name: "Academia de Líderes Newe",
        tagline: "Formação em liderança · by Hyndra",
        url: "https://kindred-prompter.lovable.app",
        logoText: "academia de líderes",
        logoSub: "NEWE · BY HYNDRA",
        logoBg: "#FAFAFA",
        logoTextColor: "#0A0A0A",
      },
      {
        name: "Academia de Vendas Newe",
        tagline: "Formação em venda consultiva · by Hyndra",
        url: "https://elevate-newe-forge.lovable.app",
        logoText: "academia de vendas",
        logoSub: "NEWE · BY HYNDRA",
        logoBg: "#FAFAFA",
        logoTextColor: "#0A0A0A",
      },
    ],
  },
  {
    slug: "comunidade",
    tag: "Módulo · 04",
    title: "Comunidade",
    desc: "Conexão, pertencimento e a rede humana do grupo.",
    count: "2 produtos",
    shape: "circle-dashed",
    products: [
      {
        name: "HYNstaNewe",
        tagline: "Rede social interna do grupo",
        url: "#",
        logoText: "HYNstaNewe",
        logoSub: "REDE INTERNA · EM BREVE",
        logoBg: "#0A0A0A",
        logoTextColor: "#FFFFFF",
      },
      {
        name: "Habitar a Estrutura",
        tagline: "Quem somos, em camadas",
        url: "https://hyndra-animated-core.lovable.app",
        logoText: "Habitar a estrutura",
        logoSub: "— quem somos, em camadas.",
        logoBg: "#111111",
        logoTextColor: "#FFFFFF",
      },
    ],
  },
  {
    slug: "governanca",
    tag: "Módulo · 05",
    title: "Governança",
    desc: "Políticas, compliance e a estrutura que sustenta o grupo.",
    count: "1 produto",
    shape: "square",
    products: [
      {
        name: "HUB Hyndra",
        tagline: "Políticas e procedimentos do grupo",
        url: "https://hyndra-hub-core.lovable.app",
        logoText: "HUB Hyndra",
        logoSub: "POLÍTICAS & PROCEDIMENTOS",
        logoBg: "#F7F6F4",
        logoTextColor: "#0A0A0A",
      },
    ],
  },
];

const COMPANIES = [
  { name: "Hyndra Participações", type: "Holding · Corporativo", badge: "Ativo" },
  { name: "Newe Urbanismo Integrativo", type: "Real estate · Mercado", badge: "Sua empresa" },
];
