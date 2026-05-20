import { useEffect, useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import {
  Flame,
  Users,
  GraduationCap,
  Network,
  ShieldCheck,
  ArrowLeft,
  Compass,
  Heart,
  Target,
  BookOpen,
  Briefcase,
  Sparkles,
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

type ModuleProduct = {
  name: string;
  phase: string;
  icon: LucideIcon;
};

type ModuleEntry = {
  key: string;
  name: string;
  icon: LucideIcon;
  route: string;
  products: ModuleProduct[];
};

const MODULES: ModuleEntry[] = [
  {
    key: "cultura",
    name: "Cultura",
    icon: Flame,
    route: "/cultura",
    products: [
      { name: "Nosso Jeito de Ser", phase: "Integração", icon: Heart },
      { name: "Plataforma de Marca", phase: "Integração", icon: Sparkles },
    ],
  },
  {
    key: "pessoas",
    name: "Pessoas",
    icon: Users,
    route: "/pessoas",
    products: [
      { name: "All Aboard", phase: "Integração", icon: Compass },
      { name: "PAR", phase: "Performance", icon: Target },
      { name: "Benefícios", phase: "Integração", icon: Heart },
    ],
  },
  {
    key: "conhecimento",
    name: "Conhecimento",
    icon: GraduationCap,
    route: "/conhecimento",
    products: [
      { name: "Academia Newe by Hyndra", phase: "Desenvolvimento", icon: BookOpen },
      { name: "Academia de Vendas", phase: "Desenvolvimento", icon: BookOpen },
      { name: "Jornada da Máquina de Vendas", phase: "Integração", icon: Briefcase },
    ],
  },
  {
    key: "comunidade",
    name: "Comunidade",
    icon: Network,
    route: "/pessoas",
    products: [
      { name: "HYNstaNewe", phase: "Engajamento", icon: Network },
      { name: "Org & Design", phase: "Engajamento", icon: Briefcase },
    ],
  },
  {
    key: "governanca",
    name: "Governança",
    icon: ShieldCheck,
    route: "/conhecimento",
    products: [{ name: "Hub Hyndra", phase: "Engajamento", icon: ShieldCheck }],
  },
];

type Star = { left: string; top: string; size: number; opacity: number; duration: string };

export function NexusHero() {
  const [activeModule, setActiveModule] = useState<string | null>(null);
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

  const activeModuleData = MODULES.find((m) => m.key === activeModule) ?? null;

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
        <h1
          className="font-display"
          style={{
            fontWeight: 200,
            fontSize: "clamp(96px, 14vw, 200px)",
            letterSpacing: "-0.04em",
            marginTop: "1.5rem",
            lineHeight: 0.9,
            color: "#FFFFFF",
            textShadow: "0 0 60px rgba(157,202,121,0.18)",
          }}
        >
          NEXUS
        </h1>
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
      <div
        style={{
          padding: "2.5rem 4rem 4rem",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 16,
        }}
      >
        {MODULES.map((m) => (
          <ModuleButton key={m.key} mod={m} onClick={() => setActiveModule(m.key)} />
        ))}
      </div>

      {/* MODULE OVERLAY */}
      {activeModuleData && (
        <div
          className="absolute inset-0 overflow-y-auto"
          style={{
            backgroundColor: "#0A0A0A",
            borderRadius: 2,
            padding: "2.5rem",
            backgroundImage:
              "linear-gradient(rgba(192,192,192,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(192,192,192,0.03) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            animation: "newe-fade-up 0.3s ease forwards",
          }}
        >
          <button
            onClick={() => setActiveModule(null)}
            className="flex items-center gap-2 group"
          >
            <ArrowLeft size={13} className="text-[#6B6B6B] group-hover:text-[#9DCA79] transition-colors" />
            <span
              className="font-mono-newe uppercase text-[#6B6B6B] group-hover:text-[#9DCA79] transition-colors"
              style={{ fontSize: 9, letterSpacing: "0.2em" }}
            >
              Voltar ao Nexus
            </span>
          </button>

          <div className="mt-8 flex items-center gap-2">
            <span style={{ width: 20, height: 1, backgroundColor: "#9DCA79" }} />
            <p
              className="font-mono-newe uppercase"
              style={{ fontSize: 9, letterSpacing: "0.3em", color: "#6B6B6B" }}
            >
              Módulo · {activeModuleData.name}
            </p>
          </div>
          <h2
            className="font-display"
            style={{ fontWeight: 200, fontSize: 36, color: "#FFFFFF", marginTop: "1rem" }}
          >
            {activeModuleData.name}
          </h2>
          <hr
            style={{
              height: 1,
              border: "none",
              width: "100%",
              margin: "1.5rem 0 2rem",
              background:
                "linear-gradient(90deg, #9DCA79 0px, #9DCA79 60px, #C0C0C0 60px, #C0C0C0 200px, transparent 200px)",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
              gap: 1,
              backgroundColor: "#1C1C1C",
            }}
          >
            {activeModuleData.products.map((p) => (
              <ProductCard key={p.name} product={p} route={activeModuleData.route} />
            ))}
          </div>
        </div>
      )}
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

function ModuleButton({ mod, onClick }: { mod: ModuleEntry; onClick: () => void }) {
  const [hover, setHover] = useState(false);
  const Icon = mod.icon;
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex flex-col items-center transition-all"
      style={{
        background: "transparent",
        border: "1px solid rgba(192,192,192,0.10)",
        borderTop: hover ? "2px solid #9DCA79" : "2px solid transparent",
        padding: "0.9rem 0.5rem 0.8rem",
        gap: 8,
        transition: "all 0.25s",
      }}
    >
      <Icon size={18} color={hover ? "#9DCA79" : "#6B6B6B"} />
      <span
        className="font-mono-newe uppercase"
        style={{
          fontSize: 9,
          letterSpacing: "0.1em",
          color: hover ? "#FFFFFF" : "#6B6B6B",
        }}
      >
        {mod.name}
      </span>
      <span
        className="font-body"
        style={{ fontSize: 9, fontWeight: 300, color: "#6B6B6B" }}
      >
        {mod.products.length} produtos
      </span>
    </button>
  );
}

function ProductCard({ product, route }: { product: ModuleProduct; route: string }) {
  const [hover, setHover] = useState(false);
  const Icon = product.icon;
  return (
    <Link
      to={route}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative block transition-colors"
      style={{
        backgroundColor: hover ? "#1C1C1C" : "#0A0A0A",
        padding: "1.25rem 1.25rem 1.25rem 1.5rem",
      }}
    >
      <span
        className="absolute"
        style={{
          left: 0,
          top: 0,
          bottom: 0,
          width: 2,
          backgroundColor: hover ? "#9DCA79" : "transparent",
          transition: "background-color 0.2s",
        }}
      />
      <Icon
        size={15}
        color={hover ? "#9DCA79" : "#6B6B6B"}
        style={{ marginBottom: "0.65rem" }}
      />
      <p
        className="font-display"
        style={{ fontSize: 14, fontWeight: 400, color: "#FFFFFF" }}
      >
        {product.name}
      </p>
      <p
        className="font-mono-newe uppercase mt-2"
        style={{ fontSize: 9, letterSpacing: "0.1em" }}
      >
        <span style={{ color: "#6B6B6B" }}>Fase EE · </span>
        <span style={{ color: "#9DCA79" }}>{product.phase}</span>
      </p>
    </Link>
  );
}