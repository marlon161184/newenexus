import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { NexusLogo } from "@/components/nexus/NexusLogo";
import nossoJeitoLogo from "@/assets/products/nosso-jeito.jpg";
import academiaLideresLogo from "@/assets/products/academia-lideres.jpg";
import academiaVendasLogo from "@/assets/products/academia-vendas.jpg";
import par2026Logo from "@/assets/products/par-2026.jpg";
import hubHyndraLogo from "@/assets/products/hub-hyndra.jpg";
import habitarEstruturaLogo from "@/assets/products/habitar-estrutura.jpg";
import decidirIntencaoLogo from "@/assets/products/decidir-intencao.jpg";
import allAboardLogo from "@/assets/products/all-aboard.jpg";
import plataformaMarcaLogo from "@/assets/products/plataforma-marca.jpg";

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
  logoImg?: string;
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
    <div className="w-full" style={{ backgroundColor: "#0A0A0A" }}>

      {/* ── HERO ── */}
      <section
        className="px-5 sm:px-8 md:px-16 lg:px-24 pt-12 sm:pt-16 md:pt-20 pb-12 md:pb-16"
        style={{
          backgroundColor: "#0A0A0A",
          backgroundImage:
            "radial-gradient(ellipse at 30% 0%, rgba(157,202,121,0.08), transparent 60%),linear-gradient(to right,rgba(192,192,192,0.025) 1px,transparent 1px),linear-gradient(to bottom,rgba(192,192,192,0.025) 1px,transparent 1px)",
          backgroundSize: "auto, 56px 56px, 56px 56px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "2rem" }}>
          <span style={{ display: "block", width: 32, height: 1, backgroundColor: "#9DCA79" }} />
          <p className="font-mono-newe text-[10px] sm:text-[11px] tracking-[0.3em] uppercase" style={{ color: "#9DCA79" }}>
            Sistema Operacional da Cultura
          </p>
        </div>

        {/* NEXUS gigante */}
        <h1 className="mb-3" style={{ maxWidth: "100%" }}>
          <span className="sr-only">Nexus</span>
          <div className="w-full max-w-[260px] sm:max-w-[420px] md:max-w-[600px] lg:max-w-[760px]">
            <NexusLogo variant="negative" size="lg" withDescriptor={false} />
          </div>
        </h1>

        {/* Descritor pequeno */}
        <p
          className="font-mono-newe text-[9px] sm:text-[10px] tracking-[0.4em] uppercase mb-8 sm:mb-10"
          style={{ color: "#9DCA79" }}
        >
          Nosso Jeito de Ser
        </p>

        <p
          className="font-body font-extralight leading-relaxed text-[18px] sm:text-[22px] md:text-[26px]"
          style={{ color: "#9A9A9A", maxWidth: 760, marginBottom: "2.5rem" }}
        >
          O produto digital que materializa nossa cultura. Cada módulo, produto e ritual — tudo começa aqui.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          <GreenSideButton href="#modulos" label="Explorar módulos" />
          <GreenOutlineButton href="https://newemanifesto.lovable.app" label="Nosso Jeito de Ser ↗" external />
        </div>
      </section>

      {/* ── MÓDULOS — accordion vertical ── */}
      <section
        id="modulos"
        className="px-5 sm:px-8 md:px-16 lg:px-24 pt-16 md:pt-24 pb-16 md:pb-24"
        style={{ backgroundColor: "#0A0A0A", borderTop: "1px solid #1C1C1C" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1rem" }}>
          <span style={{ display: "block", width: 24, height: 1, backgroundColor: "#9DCA79" }} />
          <p className="font-mono-newe text-[10px] sm:text-[11px] tracking-[0.3em] uppercase" style={{ color: "#9DCA79" }}>
            Módulos · 5 territórios · 10 produtos
          </p>
        </div>
        <h2 className="font-display font-extralight text-[32px] sm:text-[44px] md:text-[56px] mb-10 md:mb-14 leading-[1.05] tracking-[-0.02em]" style={{ color: "#F7F6F4" }}>
          Cultura que se materializa em produtos.
        </h2>

        <div className="flex flex-col gap-3 md:gap-4">
          {MODULES.map((m) => (
            <ModuleBlock
              key={m.slug}
              module={m}
              isOpen={openModule === m.slug}
              onToggle={() => setOpenModule(openModule === m.slug ? null : m.slug)}
            />
          ))}
        </div>
      </section>

      {/* ── BLOCO CULTURA ── */}
      <section className="px-5 sm:px-8 md:px-16 lg:px-24 pb-20 md:pb-24" style={{ backgroundColor: "#0A0A0A" }}>
        <div
          className="p-8 sm:p-10 md:p-16"
          style={{
            backgroundColor: "#111110",
            borderRadius: 2,
            borderLeft: "2px solid #9DCA79",
            backgroundImage:
              "linear-gradient(to right,rgba(192,192,192,0.025) 1px,transparent 1px),linear-gradient(to bottom,rgba(192,192,192,0.025) 1px,transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        >
          <p className="font-mono-newe text-[10px] sm:text-[11px] tracking-[0.3em] uppercase" style={{ color: "#9DCA79" }}>
            A cultura por trás do produto
          </p>
          <p className="font-display font-extralight italic mt-6 text-[22px] sm:text-[30px] md:text-[40px]"
            style={{ color: "#F7F6F4", lineHeight: 1.3, maxWidth: 960, letterSpacing: "-0.01em" }}>
            "A Newe não acredita em fórmulas. Acredita em projeto — com método, estética e responsabilidade."
          </p>
          <p className="font-body font-light mt-4" style={{ fontSize: 13, color: "#6B6B6B" }}>
            Nosso Jeito de Ser · Hyndra Group
          </p>
          <div className="mt-8 md:mt-10">
            <GreenSideButton href="https://newemanifesto.lovable.app" label="Ler o Nosso Jeito de Ser ↗" external />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <ProductsFooter />
    </div>
  );
}

/* ── Botões verdes com barra lateral ── */
function GreenSideButton({ href, label, external = false }: { href: string; label: string; external?: boolean }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group relative inline-flex items-center gap-3 pl-5 pr-7 py-4 font-mono-newe text-[11px] tracking-[0.3em] uppercase transition-all hover:bg-[#9DCA79] hover:text-[#0A0A0A]"
      style={{ backgroundColor: "#111110", color: "#F7F6F4", border: "1px solid #2E2E2E", borderRadius: 2 }}
    >
      <span aria-hidden style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, backgroundColor: "#9DCA79" }} />
      {label}
    </a>
  );
}
function GreenOutlineButton({ href, label, external = false }: { href: string; label: string; external?: boolean }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group relative inline-flex items-center gap-3 pl-5 pr-7 py-4 font-mono-newe text-[11px] tracking-[0.3em] uppercase transition-all hover:bg-[#9DCA79] hover:text-[#0A0A0A]"
      style={{ color: "#9DCA79", border: "1px solid #9DCA79", borderRadius: 2 }}
    >
      <span aria-hidden style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, backgroundColor: "#9DCA79" }} />
      {label}
    </a>
  );
}


function ModuleShape({ shape }: { shape: ModuleEntry["shape"] }) {
  const common = {
    width: 28,
    height: 28,
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

function ModuleBlock({
  module: m,
  isOpen,
  onToggle,
}: { module: ModuleEntry; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className="group relative"
      style={{
        backgroundColor: isOpen ? "#0F0F0E" : "#111110",
        border: "1px solid #1C1C1C",
        borderLeft: isOpen ? "3px solid #9DCA79" : "3px solid #2E2E2E",
        borderRadius: 2,
        transition: "all 0.25s ease",
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center gap-4 sm:gap-6 p-5 sm:p-7 md:p-8 text-left hover:bg-[#161614] transition-colors"
      >
        <div
          className="shrink-0 flex items-center justify-center"
          style={{
            width: 56,
            height: 56,
            border: `1px solid ${isOpen ? "#9DCA79" : "#2E2E2E"}`,
            borderRadius: 2,
            color: isOpen ? "#9DCA79" : "#9A9A9A",
            backgroundColor: isOpen ? "rgba(157,202,121,0.08)" : "transparent",
            transition: "all 0.25s ease",
          }}
        >
          <ModuleShape shape={m.shape} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-mono-newe text-[9px] sm:text-[10px] tracking-[0.35em] uppercase mb-2" style={{ color: "#9DCA79" }}>
            {m.tag}
          </p>
          <h3
            className="font-display font-light text-[22px] sm:text-[28px] md:text-[36px] leading-tight tracking-[-0.01em]"
            style={{ color: "#F7F6F4" }}
          >
            {m.title}
          </h3>
          <p className="hidden sm:block font-body font-extralight text-[14px] md:text-[16px] mt-2 leading-relaxed" style={{ color: "#7A7268" }}>
            {m.desc}
          </p>
        </div>
        <div className="shrink-0 flex flex-col items-end gap-2">
          <span
            className="font-mono-newe text-[9px] sm:text-[10px] tracking-[0.3em] uppercase"
            style={{ color: "#6B6B6B" }}
          >
            {m.count}
          </span>
          <span
            className="inline-flex items-center justify-center font-mono-newe text-[14px] transition-all"
            style={{
              width: 32,
              height: 32,
              borderRadius: 2,
              border: `1px solid ${isOpen ? "#9DCA79" : "#2E2E2E"}`,
              color: isOpen ? "#0A0A0A" : "#9DCA79",
              backgroundColor: isOpen ? "#9DCA79" : "transparent",
              transform: isOpen ? "rotate(90deg)" : "none",
            }}
          >
            →
          </span>
        </div>
      </button>

      {isOpen && (
        <div
          className="px-5 sm:px-7 md:px-8 pb-6 sm:pb-8 pt-2"
          style={{ borderTop: "1px solid #1C1C1C" }}
        >
          {m.products.length === 0 ? (
            <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase py-6" style={{ color: "#6B6B6B" }}>
              Em construção · Em breve
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-4">
              {m.products.map((p) => (
                <ProductTile key={p.url} product={p} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ProductTile({ product: p }: { product: Product }) {
  const isPlaceholder = p.url === "#";
  return (
    <a
      href={p.url}
      target={isPlaceholder ? undefined : "_blank"}
      rel={isPlaceholder ? undefined : "noopener noreferrer"}
      onClick={isPlaceholder ? (e) => e.preventDefault() : undefined}
      className="group relative flex flex-col overflow-hidden transition-all hover:-translate-y-0.5"
      style={{
        backgroundColor: "#0A0A0A",
        border: "1px solid #2E2E2E",
        borderRadius: 2,
        opacity: isPlaceholder ? 0.6 : 1,
        cursor: isPlaceholder ? "default" : "pointer",
      }}
    >
      <span
        aria-hidden
        className="opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, backgroundColor: "#9DCA79" }}
      />
      <div
        className="flex items-center justify-center px-4 relative"
        style={{ backgroundColor: p.logoBg ?? "#1C1C1C", height: 140, borderBottom: "1px solid #2E2E2E", overflow: "hidden" }}
      >
        {p.logoImg ? (
          <img
            src={p.logoImg}
            alt={p.name}
            className="w-full h-full object-contain"
            style={{ padding: 12 }}
            loading="lazy"
          />
        ) : (
        <div className="text-center px-2">
          <p
            className="font-display font-extralight leading-tight"
            style={{ fontSize: p.logoText && p.logoText.length > 16 ? 14 : 18, color: p.logoTextColor ?? "#FFFFFF", letterSpacing: "-0.02em" }}
          >
            {p.logoText}
          </p>
          {p.logoSub && (
            <p
              className="font-mono-newe mt-1"
              style={{ fontSize: 7, letterSpacing: "0.2em", textTransform: "uppercase", color: p.logoTextColor === "#0A0A0A" ? "#6B6B6B" : "rgba(255,255,255,0.4)" }}
            >
              {p.logoSub}
            </p>
          )}
        </div>
        )}
      </div>
      <div className="px-5 py-4 flex-1 flex flex-col">
        <p className="font-body font-light text-[14px]" style={{ color: "#F7F6F4" }}>{p.name}</p>
        <p className="mt-1 font-mono-newe text-[8px] tracking-[0.22em] uppercase" style={{ color: "#6B6B6B" }}>{p.tagline}</p>
        <p className="mt-3 font-mono-newe text-[9px] tracking-[0.3em] uppercase transition-colors" style={{ color: "#9DCA79" }}>
          {isPlaceholder ? "Em breve" : "Acessar →"}
        </p>
      </div>
    </a>
  );
}

function ProductsFooter() {
  const all = MODULES.flatMap((m) => m.products);
  return (
    <footer
      className="px-5 sm:px-8 md:px-16 lg:px-24 pt-12 pb-10"
      style={{ backgroundColor: "#0A0A0A", borderTop: "1px solid #1C1C1C" }}
    >
      <div className="flex items-center gap-3 mb-6">
        <span style={{ display: "block", width: 24, height: 1, backgroundColor: "#9DCA79" }} />
        <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase" style={{ color: "#9DCA79" }}>
          Produtos · ecossistema Nexus
        </p>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
        {all.map((p) => {
          const isPlaceholder = p.url === "#";
          return (
            <a
              key={p.name}
              href={p.url}
              target={isPlaceholder ? undefined : "_blank"}
              rel={isPlaceholder ? undefined : "noopener noreferrer"}
              onClick={isPlaceholder ? (e) => e.preventDefault() : undefined}
              title={p.name}
              className="group relative flex items-center justify-center transition-all hover:-translate-y-0.5"
              style={{
                backgroundColor: p.logoBg ?? "#111110",
                border: "1px solid #2E2E2E",
                borderRadius: 2,
                height: 64,
                opacity: isPlaceholder ? 0.45 : 0.85,
                cursor: isPlaceholder ? "default" : "pointer",
              }}
            >
              <span
                aria-hidden
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, backgroundColor: "#9DCA79" }}
              />
              {p.logoImg ? (
                <img
                  src={p.logoImg}
                  alt={p.name}
                  className="w-full h-full object-contain"
                  style={{ padding: 6 }}
                  loading="lazy"
                />
              ) : (
                <span
                  className="font-mono-newe text-[8px] tracking-[0.2em] uppercase text-center px-1"
                  style={{ color: p.logoTextColor ?? "#F7F6F4" }}
                >
                  {p.logoText}
                </span>
              )}
            </a>
          );
        })}
      </div>
      <div className="mt-10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3" style={{ borderTop: "1px solid #1C1C1C" }}>
        <p className="font-mono-newe text-[9px] tracking-[0.3em] uppercase" style={{ color: "#6B6B6B" }}>
          Nexus · Sistema Operacional da Cultura · Hyndra Group
        </p>
        <a
          href="https://newemanifesto.lovable.app"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono-newe text-[9px] tracking-[0.3em] uppercase hover:opacity-80"
          style={{ color: "#9DCA79" }}
        >
          Nosso Jeito de Ser ↗
        </a>
      </div>
    </footer>
  );
}

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
        logoImg: nossoJeitoLogo,
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
        logoImg: allAboardLogo,
        logoText: "all aboard",
        logoSub: "PLATAFORMA DE EMBARQUE",
        logoBg: "#1C1C1C",
        logoTextColor: "#FFFFFF",
      },
      {
        name: "PAR 2026",
        tagline: "Participação Anual nos Resultados",
        url: "https://par-nexus.lovable.app",
        logoImg: par2026Logo,
        logoText: "PAR 2026",
        logoSub: "Programa de Participação Anual",
        logoBg: "#111111",
        logoTextColor: "#FFFFFF",
      },
      {
        name: "Decidir com Intenção",
        tagline: "Ferramenta de decisão estratégica",
        url: "https://choice-compass-suite.lovable.app",
        logoImg: decidirIntencaoLogo,
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
        logoImg: academiaLideresLogo,
        logoText: "academia de líderes",
        logoSub: "NEWE · BY HYNDRA",
        logoBg: "#FAFAFA",
        logoTextColor: "#0A0A0A",
      },
      {
        name: "Academia de Vendas Newe",
        tagline: "Formação em venda consultiva · by Hyndra",
        url: "https://elevate-newe-forge.lovable.app",
        logoImg: academiaVendasLogo,
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
        logoImg: habitarEstruturaLogo,
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
    count: "2 produtos",
    shape: "square",
    products: [
      {
        name: "Plataforma de Marca",
        tagline: "Brand Book · Toolkit · Artefatos",
        url: "https://newebrandingac.lovable.app",
        logoImg: plataformaMarcaLogo,
        logoBg: "#0A0A0A",
        logoTextColor: "#FFFFFF",
      },
      {
        name: "HUB Hyndra",
        tagline: "Políticas e procedimentos do grupo",
        url: "https://hyndra-hub-core.lovable.app",
        logoImg: hubHyndraLogo,
        logoText: "HUB Hyndra",
        logoSub: "POLÍTICAS & PROCEDIMENTOS",
        logoBg: "#F7F6F4",
        logoTextColor: "#0A0A0A",
      },
    ],
  },
];
