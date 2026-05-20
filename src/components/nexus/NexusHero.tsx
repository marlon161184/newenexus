import { useEffect, useState, useRef } from "react";
import { NexusLogo } from "@/components/nexus/NexusLogo";
import {
  Flame,
  Users,
  GraduationCap,
  Network,
  ShieldCheck,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

type Phase = {
  key: string;
  label: string;
  products: string[];
};

const PHASES: Phase[] = [
  { key: "atracao", label: "Atração", products: ["Employer Brand Newe", "Vitrine Cultural"] },
  { key: "selecao", label: "Seleção", products: ["Assessment Cultural", "Painel de Talentos"] },
  {
    key: "integracao",
    label: "Integração",
    products: [
      "All Aboard",
      "Nosso Jeito de Ser",
      "Plataforma de Marca",
      "Jornada da Máquina de Vendas",
      "Benefícios",
    ],
  },
  {
    key: "desenvolvimento",
    label: "Desenvolvimento",
    products: ["Academia Newe by Hyndra", "Academia de Vendas"],
  },
  {
    key: "engajamento",
    label: "Engajamento",
    products: ["HYNstaNewe", "Hub Hyndra", "Org & Design"],
  },
  { key: "performance", label: "Performance", products: ["PAR"] },
  {
    key: "transicao",
    label: "Transição",
    products: ["Offboarding Humanizado", "Alumni Newe"],
  },
];

const PING_DELAYS = ["0s", "0.5s", "1s", "1.5s", "2s", "2.5s", "3s"];

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
        tagline: "Plataforma de Marca",
        url: "https://newebrandingac.lovable.app",
        logoType: "text",
        logoText: "Nosso Jeito de Ser",
        logoSub: "Plataforma de Marca · Newe",
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
        url: "https://newe-welcome-journey.lovable.app",
        logoType: "text",
        logoText: "all aboard",
        logoSub: "PLATAFORMA DE EMBARQUE",
        logoBg: "#1C1C1C",
        logoTextColor: "#FFFFFF",
      },
      {
        name: "PAR 2026",
        tagline: "Programa de Participação Anual nos Resultados",
        url: "https://par-nexus.lovable.app",
        logoType: "text",
        logoText: "PAR 2026",
        logoSub: "Participação Anual nos Resultados",
        logoBg: "#1A1A1A",
        logoTextColor: "#FFFFFF",
      },
      {
        name: "Decidir com Intenção",
        tagline: "Ferramenta de decisão estratégica",
        url: "https://choice-compass-suite.lovable.app",
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
        url: "https://kindred-prompter.lovable.app",
        logoType: "text",
        logoText: "academia de líderes",
        logoSub: "newe · by hyndra",
        logoBg: "#FFFFFF",
        logoTextColor: "#0A0A0A",
      },
      {
        name: "Academia de Vendas Newe",
        tagline: "Formação em venda consultiva · by Hyndra",
        url: "https://elevate-newe-forge.lovable.app",
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
        url: "https://hyndra-animated-core.lovable.app",
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
        url: "https://hyndra-hub-core.lovable.app",
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
    count: "0 produtos",
    icon: Briefcase,
    products: [],
  },
];

type Star = { left: string; top: string; size: number; opacity: number; duration: string };

export function NexusHero() {
  const [openModule, setOpenModule] = useState<string | null>(null);
  const [stars, setStars] = useState<Star[]>([]);
  const [hoveredPhase, setHoveredPhase] = useState<string | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const arr: Star[] = Array.from({ length: 70 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: 0.3 + Math.random() * 1.5,
      opacity: 0.2 + Math.random() * 0.8,
      duration: `${2 + Math.random() * 4}s`,
    }));
    setStars(arr);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!cursorRef.current || !wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      cursorRef.current.style.opacity = inside ? "1" : "0";
      cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const handleModuleClick = (slug: string) =>
    setOpenModule(openModule === slug ? null : slug);
  const row1 = MODULES.slice(0, 3);
  const row2 = MODULES.slice(3, 6);
  const openInRow1 = row1.find((m) => m.slug === openModule);
  const openInRow2 = row2.find((m) => m.slug === openModule);

  return (
    <section
      ref={wrapperRef}
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#0A0A0A",
        borderRadius: 2,
        backgroundImage:
          "linear-gradient(rgba(192,192,192,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(192,192,192,0.03) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }}
    >
      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              backgroundColor: "rgba(192,192,192,0.5)",
              opacity: s.opacity,
              animation: `newe-pulse ${s.duration} ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none opacity-0 transition-opacity duration-150"
        style={{ zIndex: 9999, transform: "translate(-100px,-100px)" }}
      >
        <svg
          width="34"
          height="44"
          viewBox="0 0 34 44"
          fill="none"
          style={{
            transform: "translate(-6px, -4px) rotate(-22deg)",
            filter: "drop-shadow(0 0 10px rgba(157,202,121,0.55))",
          }}
        >
          {/* leaf body */}
          <path
            d="M17 2 C7 6 2 14 2 24 C2 33 9 40 17 40 C25 40 32 33 32 24 C32 14 27 6 17 2 Z"
            fill="#9DCA79"
          />
          {/* leaf tip curl */}
          <path
            d="M17 2 C19 6 21 10 22 14"
            stroke="#0A0A0A"
            strokeOpacity="0.25"
            strokeWidth="0.8"
            strokeLinecap="round"
            fill="none"
          />
          {/* main vein */}
          <path
            d="M17 3 L17 40"
            stroke="#0A0A0A"
            strokeOpacity="0.35"
            strokeWidth="0.9"
            strokeLinecap="round"
          />
          {/* side veins */}
          <path d="M17 12 L9 16" stroke="#0A0A0A" strokeOpacity="0.22" strokeWidth="0.7" strokeLinecap="round" />
          <path d="M17 12 L25 16" stroke="#0A0A0A" strokeOpacity="0.22" strokeWidth="0.7" strokeLinecap="round" />
          <path d="M17 20 L7 24" stroke="#0A0A0A" strokeOpacity="0.22" strokeWidth="0.7" strokeLinecap="round" />
          <path d="M17 20 L27 24" stroke="#0A0A0A" strokeOpacity="0.22" strokeWidth="0.7" strokeLinecap="round" />
          <path d="M17 28 L9 32" stroke="#0A0A0A" strokeOpacity="0.22" strokeWidth="0.7" strokeLinecap="round" />
          <path d="M17 28 L25 32" stroke="#0A0A0A" strokeOpacity="0.22" strokeWidth="0.7" strokeLinecap="round" />
          {/* stem */}
          <path d="M17 40 L17 44" stroke="#5C7A47" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </div>

      {/* HEADER */}
      <div
        className="relative flex flex-col items-center text-center"
        style={{ padding: "5rem 2.5rem 2rem" }}
      >
        <div className="flex items-center gap-3">
          <span style={{ width: 36, height: 1, backgroundColor: "#9DCA79" }} />
          <p
            className="font-mono-newe uppercase"
            style={{ fontSize: 11, letterSpacing: "0.45em", color: "#9DCA79" }}
          >
            Ecossistema de Cultura · Hyndra Group
          </p>
          <span style={{ width: 36, height: 1, backgroundColor: "#9DCA79" }} />
        </div>
        <h1 className="sr-only">Nexus · Nosso Jeito de Ser</h1>
        <div
          aria-hidden
          style={{
            marginTop: "1.5rem",
            width: "min(960px, 88vw)",
            filter: "drop-shadow(0 0 60px rgba(157,202,121,0.18))",
          }}
        >
          <NexusLogo variant="negative" size="lg" withDescriptor={false} markOnly />
        </div>
        <p
          className="font-display"
          style={{
            fontStyle: "italic",
            fontWeight: 200,
            fontSize: "clamp(20px, 2.4vw, 30px)",
            color: "#C0C0C0",
            marginTop: "0.75rem",
            letterSpacing: "-0.01em",
          }}
        >
          Nosso Jeito de Ser
        </p>
        <p
          className="font-body"
          style={{
            fontWeight: 300,
            fontSize: 15,
            color: "#9A9A9A",
            maxWidth: 560,
            marginTop: "1.5rem",
            lineHeight: 1.55,
          }}
        >
          O sistema operacional cultural do grupo. Cultura, conhecimento e pessoas
          conectados em uma única jornada.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative" style={{ padding: "3rem 4rem 0" }}>
        <p
          className="font-mono-newe uppercase mb-10 text-center"
          style={{ fontSize: 11, letterSpacing: "0.35em", color: "#6B6B6B" }}
        >
          Employee Experience Journey
        </p>
        <div className="relative" style={{ height: 1, backgroundColor: "#2E2E2E" }}>
          <span
            className="absolute"
            style={{
              left: 0,
              top: 0,
              width: 60,
              height: 1,
              backgroundColor: "#9DCA79",
              boxShadow: "0 0 8px rgba(157,202,121,0.35)",
            }}
          />
          <div
            className="absolute left-0 right-0 flex justify-between"
            style={{ top: "-5px" }}
          >
            {PHASES.map((phase, i) => (
              <PhaseNode
                key={phase.key}
                phase={phase}
                delay={PING_DELAYS[i]}
                hovered={hoveredPhase === phase.key}
                onHover={(v) => setHoveredPhase(v ? phase.key : null)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div
        style={{
          margin: "3.5rem 2.5rem 0",
          height: 1,
          background:
            "linear-gradient(90deg, transparent, #2E2E2E 20%, #2E2E2E 80%, transparent)",
        }}
      />

      {/* MODULE GRID */}
      <div style={{ padding: "2.5rem 4rem 4rem" }}>
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
            marginTop: openInRow1 ? 0 : 0,
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
      </div>
    </section>
  );
}

function PhaseNode({
  phase,
  delay,
  hovered,
  onHover,
}: {
  phase: Phase;
  delay: string;
  hovered: boolean;
  onHover: (v: boolean) => void;
}) {
  return (
    <div
      className="relative flex flex-col items-center"
      style={{ width: 62 }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <div className="relative" style={{ width: 10, height: 10 }}>
        <span
          className="absolute inset-0 rounded-full transition-all duration-200"
          style={{
            border: hovered ? "1px solid #9DCA79" : "1px solid #6B6B6B",
            backgroundColor: hovered ? "#9DCA79" : "#0A0A0A",
            transform: hovered ? "scale(1.8)" : "scale(1)",
            boxShadow: hovered ? "0 0 10px rgba(157,202,121,0.45)" : "none",
          }}
        />
        <span
          className="absolute inset-0 rounded-full newe-ping"
          style={{
            border: "1px solid #9DCA79",
            opacity: 0,
            animationDelay: delay,
          }}
        />
      </div>
      <span
        className="font-mono-newe uppercase mt-3 text-center transition-colors"
        style={{
          fontSize: 8,
          letterSpacing: "0.06em",
          color: hovered ? "#9DCA79" : "#6B6B6B",
          maxWidth: 62,
        }}
      >
        {phase.label}
      </span>
      {hovered && (
        <div
          className="absolute"
          style={{
            bottom: "calc(100% + 2rem)",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#1C1C1C",
            border: "1px solid rgba(157,202,121,0.3)",
            borderTop: "2px solid #9DCA79",
            padding: "0.85rem 1rem",
            minWidth: 180,
            zIndex: 20,
          }}
        >
          <p
            className="font-mono-newe uppercase mb-2"
            style={{ fontSize: 8, letterSpacing: "0.18em", color: "#9DCA79" }}
          >
            {phase.label}
          </p>
          <ul className="space-y-1">
            {phase.products.map((p) => (
              <li
                key={p}
                className="font-body whitespace-nowrap"
                style={{ fontSize: 11, fontWeight: 300, color: "rgba(255,255,255,0.65)" }}
              >
                <span style={{ color: "#9DCA79", marginRight: 6 }}>·</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
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
        style={{
          fontSize: 9,
          letterSpacing: "0.35em",
          color: "#9A9A9A",
        }}
      >
        {mod.tag}
      </span>
      <span
        className="font-mono-newe uppercase"
        style={{
          fontSize: 12,
          letterSpacing: "0.2em",
          color: active ? "#FFFFFF" : "#C0C0C0",
        }}
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
          style={{
            marginTop: 6,
            fontSize: 8.5,
            letterSpacing: "0.25em",
            color: "#6B6B6B",
          }}
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