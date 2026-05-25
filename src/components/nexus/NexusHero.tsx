import { useState } from "react";
import {
  Flame,
  Users,
  GraduationCap,
  Network,
  ShieldCheck,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

type Product = {
  name: string;
  tagline: string;
  url: string;
  logoType: "text" | "image";
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
  icon: LucideIcon;
  products: Product[];
};

const MODULES: ModuleEntry[] = [
  {
    slug: "cultura",
    tag: "Módulo · 01",
    title: "Cultura",
    desc: "Valores, rituais e a história que nos une como grupo.",
    count: "1 produto",
    icon: Flame,
    products: [
      {
        name: "Nosso Jeito de Ser",
        tagline: "Manifesto e cultura Hyndra · Newe",
        url: "https://cultura-nossojeitodeser.lovable.app",
        logoType: "text",
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
    desc: "Desenvolvimento, remuneração e sua jornada no grupo.",
    count: "3 produtos",
    icon: Users,
    products: [
      {
        name: "All Aboard",
        tagline: "Plataforma de Embarque",
        url: "https://allaboardnewe.lovable.app",
        logoType: "text",
        logoText: "all aboard",
        logoSub: "PLATAFORMA DE EMBARQUE",
        logoBg: "#1C1C1C",
        logoTextColor: "#FFFFFF",
      },
      {
        name: "PAR 2026",
        tagline: "Programa de Participação Anual nos Resultados",
        url: "https://par-hyndra-newe.lovable.app",
        logoType: "text",
        logoText: "PAR 2026",
        logoSub: "Participação Anual nos Resultados",
        logoBg: "#1A1A1A",
        logoTextColor: "#FFFFFF",
      },
      {
        name: "Decidir com Intenção",
        tagline: "Ferramenta de decisão estratégica",
        url: "https://decidircomintencao.lovable.app",
        logoType: "text",
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
    desc: "Base de conhecimento, documentos e aprendizados.",
    count: "2 produtos",
    icon: GraduationCap,
    products: [
      {
        name: "Academia de Líderes Newe",
        tagline: "Formação em quem constrói o urbanismo · by Hyndra",
        url: "https://academiadelideresnewe.lovable.app",
        logoType: "text",
        logoText: "academia de líderes",
        logoSub: "newe · by hyndra",
        logoBg: "#FFFFFF",
        logoTextColor: "#0A0A0A",
      },
      {
        name: "Academia de Vendas Newe",
        tagline: "Formação em venda consultiva · by Hyndra",
        url: "https://academiadevendasnewe.lovable.app",
        logoType: "text",
        logoText: "academia de vendas",
        logoSub: "newe · by hyndra",
        logoBg: "#FFFFFF",
        logoTextColor: "#0A0A0A",
      },
    ],
  },
  {
    slug: "comunidade",
    tag: "Módulo · 04",
    title: "Comunidade",
    desc: "Pessoas, reconhecimento e o que acontece no grupo.",
    count: "1 produto",
    icon: Network,
    products: [
      {
        name: "Habitar a Estrutura",
        tagline: "Quem somos, em camadas",
        url: "https://habitaraestrutura.lovable.app",
        logoType: "text",
        logoText: "Habitar a estrutura",
        logoSub: "— quem somos, em camadas",
        logoBg: "#111111",
        logoTextColor: "#FFFFFF",
      },
    ],
  },
  {
    slug: "governanca",
    tag: "Módulo · 05",
    title: "Governança",
    desc: "Políticas, compliance e como as coisas funcionam.",
    count: "1 produto",
    icon: ShieldCheck,
    products: [
      {
        name: "HUB Hyndra",
        tagline: "Políticas e procedimentos do grupo",
        url: "https://hub-hyndra.lovable.app",
        logoType: "text",
        logoText: "HUB",
        logoSub: "Hyndra",
        logoBg: "#F7F6F4",
        logoTextColor: "#0A0A0A",
      },
    ],
  },
  {
    slug: "workspace",
    tag: "Módulo · 06",
    title: "Workspace",
    desc: "Ferramentas, processos e fluxos do dia a dia.",
    count: "1 produto",
    icon: Briefcase,
    products: [
      {
        name: "Plataforma de Marca",
        tagline: "Brand book · Toolkit · Artefatos estratégicos",
        url: "https://brandbook-newe.lovable.app",
        logoType: "text",
        logoText: "NEWE",
        logoSub: "PLATAFORMA DE MARCA",
        logoBg: "#0A0A0A",
        logoTextColor: "#FFFFFF",
      },
    ],
  },
];

const EE_PHASES: { label: string; products: string[] }[] = [
  { label: "Atração", products: ["Employer Brand", "Vitrine Cultural"] },
  { label: "Seleção", products: ["Assessment Cultural", "Painel de Talentos"] },
  { label: "Integração", products: ["All Aboard", "Nosso Jeito de Ser", "Benefícios"] },
  { label: "Desenvolvimento", products: ["Academia de Líderes", "Academia de Vendas"] },
  { label: "Engajamento", products: ["HYNstaNewe", "Hub Hyndra", "Org & Design"] },
  { label: "Performance", products: ["PAR 2026"] },
  { label: "Transição", products: ["Offboarding", "Alumni Newe"] },
];

export function NexusHero() {
  const [openModule, setOpenModule] = useState<string | null>(null);

  const handleModuleClick = (slug: string) =>
    setOpenModule(openModule === slug ? null : slug);
  const row1 = MODULES.slice(0, 3);
  const row2 = MODULES.slice(3, 6);
  const openInRow1 = row1.find((m) => m.slug === openModule);
  const openInRow2 = row2.find((m) => m.slug === openModule);

  return (
    <>
      {/* HERO ESCURA — full bleed */}
      <section
        className="-mx-6 md:-mx-12 px-8 md:px-14 py-14 mb-16"
        style={{
          backgroundColor: "#0A0A0A",
          backgroundImage:
            "linear-gradient(to right, rgba(192,192,192,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(192,192,192,0.025) 1px, transparent 1px)",
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
          className="font-display font-extralight leading-[1.0] tracking-[-0.03em]"
          style={{ fontSize: "clamp(40px, 7vw, 72px)", color: "#FFFFFF", marginBottom: "1.5rem" }}
        >
          Nosso Jeito
          <br />
          <span style={{ color: "#C0C0C0" }}>de Ser.</span>
        </h1>

        <p
          className="font-body font-light leading-relaxed"
          style={{ fontSize: 17, color: "#9A9A9A", maxWidth: 520, marginBottom: "2.5rem" }}
        >
          O Nexus é o produto digital que materializa nossa cultura.
          Cada módulo, cada produto, cada ritual — tudo começa aqui.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: "3rem" }}>
          <a
            href="/cultura"
            className="font-mono-newe text-[9px] tracking-[0.3em] uppercase px-5 py-3 transition-colors hover:bg-[#9DCA79] hover:text-[#0A0A0A]"
            style={{ border: "1px solid #9DCA79", color: "#9DCA79", borderRadius: 2 }}
          >
            Nosso Jeito de Ser →
          </a>
          <a
            href="#modulos"
            className="font-mono-newe text-[9px] tracking-[0.3em] uppercase px-5 py-3 transition-colors hover:border-[#C0C0C0] hover:text-white"
            style={{ border: "1px solid #2E2E2E", color: "#6B6B6B", borderRadius: 2 }}
          >
            Explorar módulos ↓
          </a>
        </div>

        <div
          style={{
            height: 1,
            background:
              "linear-gradient(90deg, #9DCA79 0px, #9DCA79 60px, #C0C0C0 60px, #C0C0C0 200px, transparent 200px)",
            marginBottom: "2.5rem",
          }}
        />

        <div style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem" }}>
          {[
            { value: "5", label: "Módulos" },
            { value: "11", label: "Produtos digitais" },
            { value: "6", label: "Valores fundadores" },
            { value: "7", label: "Fases da jornada" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="font-display font-extralight" style={{ fontSize: 28, color: "#FFFFFF", lineHeight: 1 }}>
                {value}
              </p>
              <p className="font-mono-newe text-[9px] tracking-[0.25em] uppercase mt-1" style={{ color: "#6B6B6B" }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EE JOURNEY — fundo claro */}
      <section className="pb-14 mb-16 border-b border-[#D8D8D8]" id="jornada">
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.5rem" }}>
          <span style={{ display: "block", width: 16, height: 1, backgroundColor: "#9DCA79" }} />
          <p className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#6B6B6B]">
            Employee Experience Journey
          </p>
        </div>

        <div style={{ position: "relative", paddingTop: "2.5rem" }}>
          <div
            style={{
              position: "absolute",
              top: "2.5rem",
              left: 0,
              right: 0,
              height: 1,
              backgroundColor: "#D8D8D8",
            }}
          >
            <div style={{ width: 60, height: 1, backgroundColor: "#9DCA79" }} />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", position: "relative" }}>
            {EE_PHASES.map(({ label, products }) => (
              <div
                key={label}
                className="group"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flex: 1,
                  position: "relative",
                  cursor: "default",
                }}
              >
                <div
                  className="group-hover:opacity-100"
                  style={{
                    position: "absolute",
                    bottom: "calc(100% + 1rem)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#1C1C1C",
                    border: "1px solid rgba(157,202,121,0.3)",
                    borderTop: "2px solid #9DCA79",
                    padding: "0.6rem 0.9rem",
                    minWidth: 140,
                    opacity: 0,
                    transition: "opacity 0.2s",
                    zIndex: 50,
                    pointerEvents: "none",
                    borderRadius: 2,
                  }}
                >
                  <p className="font-mono-newe text-[8px] tracking-[0.15em] uppercase mb-2" style={{ color: "#9DCA79" }}>
                    {label}
                  </p>
                  {products.map((p) => (
                    <p
                      key={p}
                      className="font-body font-light text-[11px]"
                      style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}
                    >
                      · {p}
                    </p>
                  ))}
                </div>

                <div
                  className="group-hover:scale-150 group-hover:bg-[#9DCA79] group-hover:border-[#9DCA79]"
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    border: "1px solid #C0C0C0",
                    backgroundColor: "#FAFAFA",
                    transition: "all 0.2s",
                    zIndex: 2,
                    marginTop: -4,
                  }}
                />

                <p
                  className="font-mono-newe text-center group-hover:text-[#9DCA79] transition-colors"
                  style={{
                    fontSize: 8,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#9A9A9A",
                    maxWidth: 62,
                    marginTop: 8,
                    lineHeight: 1.4,
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÓDULOS — fundo escuro */}
      <section
        id="modulos"
        className="-mx-6 md:-mx-12 px-8 md:px-14 py-14 mb-16"
        style={{
          backgroundColor: "#0A0A0A",
          backgroundImage:
            "linear-gradient(rgba(192,192,192,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(192,192,192,0.03) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
          <span style={{ display: "block", width: 20, height: 1, backgroundColor: "#9DCA79" }} />
          <p className="font-mono-newe text-[9px] tracking-[0.3em] uppercase" style={{ color: "#9DCA79" }}>
            Módulos do Nexus · Nosso Jeito de Ser em ação
          </p>
        </div>
        <h2
          className="font-display font-extralight leading-[1.05] tracking-[-0.02em]"
          style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "#FFFFFF", marginBottom: "2.5rem" }}
        >
          Cultura que se materializa em produtos.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            border: "1px solid rgba(192,192,192,0.12)",
          }}
        >
          {row1.map((m) => (
            <ModuleButton
              key={m.slug}
              mod={m}
              isOpen={openModule === m.slug}
              onClick={() => handleModuleClick(m.slug)}
            />
          ))}
        </div>
        {openInRow1 && (
          <ProductPanel module={openInRow1} onClose={() => setOpenModule(null)} />
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            border: "1px solid rgba(192,192,192,0.12)",
            borderTop: "none",
          }}
        >
          {row2.map((m) => (
            <ModuleButton
              key={m.slug}
              mod={m}
              isOpen={openModule === m.slug}
              onClick={() => handleModuleClick(m.slug)}
            />
          ))}
        </div>
        {openInRow2 && (
          <ProductPanel module={openInRow2} onClose={() => setOpenModule(null)} />
        )}
      </section>
    </>
  );
}

function ModuleButton({
  mod,
  isOpen,
  onClick,
}: {
  mod: ModuleEntry;
  isOpen: boolean;
  onClick: () => void;
}) {
  const [hover, setHover] = useState(false);
  const Icon = mod.icon;
  const active = isOpen || hover;
  return (
    <button
      onClick={onClick}
      aria-expanded={isOpen}
      aria-label={`Explorar módulo ${mod.title}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative flex flex-col items-start text-left transition-all"
      style={{
        background: isOpen
          ? "rgba(157,202,121,0.08)"
          : hover
            ? "rgba(157,202,121,0.05)"
            : "transparent",
        borderRight: "1px solid rgba(192,192,192,0.12)",
        borderBottom: isOpen
          ? "2px solid #9DCA79"
          : "1px solid rgba(192,192,192,0.12)",
        padding: "2rem 1rem 1.75rem",
        gap: 16,
        transition: "all 0.25s",
      }}
    >
      {isOpen && (
        <span
          aria-hidden
          className="absolute left-0 top-0 bottom-0"
          style={{ width: 2, backgroundColor: "#9DCA79" }}
        />
      )}
      <Icon size={44} color={active ? "#9DCA79" : "#C0C0C0"} strokeWidth={1.2} />
      <span
        className="font-mono-newe uppercase"
        style={{ fontSize: 9, letterSpacing: "0.35em", color: "#9A9A9A" }}
      >
        {mod.tag}
      </span>
      <span
        className="font-mono-newe uppercase"
        style={{ fontSize: 12, letterSpacing: "0.2em", color: active ? "#FFFFFF" : "#C0C0C0" }}
      >
        {mod.title}
      </span>
      <span
        className="font-body"
        style={{ fontSize: 12, fontWeight: 300, color: "#6B6B6B", lineHeight: 1.5 }}
      >
        {mod.desc}
      </span>
      <div className="mt-2 flex w-full items-center justify-between">
        <span
          className="font-mono-newe uppercase"
          style={{ fontSize: 9, letterSpacing: "0.3em", color: "#9A9A9A" }}
        >
          {mod.count}
        </span>
        <span
          className="font-mono-newe uppercase"
          style={{
            fontSize: 9,
            letterSpacing: "0.3em",
            color: active ? "#9DCA79" : "#C0C0C0",
            transform: isOpen ? "rotate(90deg)" : "none",
            transition: "transform 0.3s, color 0.2s",
          }}
        >
          →
        </span>
      </div>
    </button>
  );
}

function ProductPanel({
  module,
  onClose,
}: {
  module: ModuleEntry;
  onClose: () => void;
}) {
  if (!module.products.length) {
    return (
      <div
        className="flex items-center justify-between"
        style={{
          padding: "1.5rem 2rem",
          backgroundColor: "rgba(247,246,244,0.04)",
          borderLeft: "2px solid #9DCA79",
          borderRight: "1px solid rgba(192,192,192,0.12)",
          borderBottom: "1px solid rgba(192,192,192,0.12)",
          animation: "newe-fade-up 0.3s ease forwards",
        }}
      >
        <p
          className="font-mono-newe uppercase"
          style={{ fontSize: 10, letterSpacing: "0.3em", color: "#9A9A9A" }}
        >
          Em construção · Em breve
        </p>
        <button
          onClick={onClose}
          className="font-mono-newe uppercase transition-colors hover:text-white"
          style={{ fontSize: 9, letterSpacing: "0.3em", color: "#6B6B6B" }}
        >
          Fechar ×
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#0A0A0A",
        borderLeft: "1px solid rgba(192,192,192,0.12)",
        borderRight: "1px solid rgba(192,192,192,0.12)",
        borderBottom: "1px solid rgba(192,192,192,0.12)",
        backgroundImage:
          "linear-gradient(rgba(192,192,192,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(192,192,192,0.025) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        animation: "newe-fade-up 0.3s ease forwards",
      }}
    >
      <div className="flex items-center justify-between" style={{ padding: "1.25rem 1.75rem 0.75rem" }}>
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            style={{ display: "block", width: 20, height: 1, backgroundColor: "#9DCA79" }}
          />
          <p
            className="font-mono-newe uppercase"
            style={{ fontSize: 9, letterSpacing: "0.3em", color: "#9DCA79" }}
          >
            {module.title} · {module.products.length} produto
            {module.products.length > 1 ? "s" : ""}
          </p>
        </div>
        <button
          onClick={onClose}
          aria-label="Fechar painel"
          className="font-mono-newe uppercase transition-colors hover:text-white"
          style={{ fontSize: 9, letterSpacing: "0.3em", color: "#6B6B6B" }}
        >
          Fechar ×
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 8,
          padding: "0.75rem 1.25rem 1.5rem",
        }}
      >
        {module.products.map((p) => (
          <ProductExternalCard key={p.url} product={p} />
        ))}
      </div>
    </div>
  );
}

function ProductExternalCard({ product }: { product: Product }) {
  const [hover, setHover] = useState(false);
  const isLight = product.logoTextColor === "#0A0A0A";
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir ${product.name}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative flex flex-col overflow-hidden transition-colors"
      style={{
        backgroundColor: "#111110",
        border: hover ? "1px solid #9DCA79" : "1px solid #2E2E2E",
        borderRadius: 2,
      }}
    >
      <span
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 2,
          backgroundColor: "#9DCA79",
          opacity: hover ? 1 : 0,
          transition: "opacity 0.2s",
        }}
      />
      <div
        className="flex items-center justify-center px-4"
        style={{
          backgroundColor: product.logoBg ?? "#1C1C1C",
          height: 110,
          borderBottom: "1px solid #2E2E2E",
        }}
      >
        <div className="text-center">
          <p
            className="font-display leading-tight"
            style={{
              fontSize: (product.logoText ?? "").length > 15 ? 15 : 20,
              fontWeight: 200,
              color: product.logoTextColor ?? "#FFFFFF",
              letterSpacing: "-0.02em",
            }}
          >
            {product.logoText}
          </p>
          {product.logoSub && (
            <p
              className="font-mono-newe uppercase"
              style={{
                marginTop: 6,
                fontSize: 7,
                letterSpacing: "0.22em",
                color: isLight ? "#6B6B6B" : "rgba(255,255,255,0.45)",
              }}
            >
              {product.logoSub}
            </p>
          )}
        </div>
      </div>
      <div style={{ padding: "0.9rem 1.1rem 1rem" }}>
        <p
          className="font-body"
          style={{ fontSize: 13, fontWeight: 300, color: "#E8E2D9", lineHeight: 1.4 }}
        >
          {product.name}
        </p>
        <p
          className="font-mono-newe uppercase"
          style={{ marginTop: 6, fontSize: 8.5, letterSpacing: "0.25em", color: "#6B6B6B" }}
        >
          {product.tagline}
        </p>
        <span
          className="font-mono-newe uppercase"
          style={{
            display: "inline-block",
            marginTop: 12,
            fontSize: 8,
            letterSpacing: "0.3em",
            color: hover ? "#FFFFFF" : "#9DCA79",
            transition: "color 0.2s",
          }}
        >
          Acessar →
        </span>
      </div>
    </a>
  );
}
