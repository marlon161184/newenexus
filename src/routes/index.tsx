import { useEffect, useRef, useState } from "react";
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
import hynstaneweLogo from "@/assets/products/hynstanewe.png";

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

      <ParallaxHero />

      {/* ── MÓDULOS — accordion vertical ── */}
      <section
        id="modulos"
        className="px-5 sm:px-8 md:px-16 lg:px-24 pt-16 md:pt-24 pb-16 md:pb-24"
        style={{ backgroundColor: "#0A0A0A", borderTop: "1px solid #1C1C1C" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1rem" }}>
          <span style={{ display: "block", width: 24, height: 1, backgroundColor: "#9DCA79" }} />
          <p className="font-mono-newe text-[10px] sm:text-[11px] tracking-[0.3em] uppercase" style={{ color: "#9DCA79" }}>
            Módulos · 5 territórios · 12 produtos
          </p>
        </div>
        <h2 className="font-display font-extralight text-[22px] sm:text-[28px] md:text-[34px] mb-10 md:mb-14 leading-[1.1] tracking-[-0.01em]" style={{ color: "#F7F6F4" }}>
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
            <GreenSideButton href="https://cultura-nossojeitodeser.lovable.app" label="Ler o Nosso Jeito de Ser ↗" external />
          </div>
        </div>
      </section>

      <BrandSection />

      {/* ── FOOTER ── */}
      <ProductsFooter />
    </div>
  );
}

/* ── HERO PARALLAX ── */
function ParallaxHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const notesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sec = sectionRef.current;
    if (!sec) return;
    let raf = 0;
    let mx = 0, my = 0;
    const onMove = (e: MouseEvent) => {
      const r = sec.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width - 0.5;
      my = (e.clientY - r.top) / r.height - 0.5;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        if (gridRef.current)
          gridRef.current.style.transform = `translate3d(${mx * 24}px, ${my * 18}px, 0)`;
        if (wordRef.current)
          wordRef.current.style.transform = `translate3d(${mx * -40}px, ${my * -26}px, 0)`;
        if (notesRef.current)
          notesRef.current.style.transform = `translate3d(${mx * 100}px, ${my * 70}px, 0)`;
        raf = 0;
      });
    };
    sec.addEventListener("mousemove", onMove);
    return () => sec.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-5 sm:px-8 md:px-16 lg:px-24 pt-24 sm:pt-32 md:pt-40 pb-24 md:pb-36 min-h-[92vh] flex flex-col justify-center"
      style={{
        backgroundColor: "#15140F",
        backgroundImage:
          "radial-gradient(ellipse at 50% 100%, rgba(157,202,121,0.16), transparent 65%),radial-gradient(ellipse at 20% 10%, rgba(80,120,200,0.10), transparent 60%)",
      }}
    >
      <Starfield />

      {/* L1 — grade sutil */}
      <div
        ref={gridRef}
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          zIndex: 1,
          willChange: "transform",
          backgroundImage:
            "linear-gradient(rgba(192,192,192,0.09) 1px, transparent 1px),linear-gradient(90deg, rgba(192,192,192,0.09) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, #000 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, #000 40%, transparent 80%)",
        }}
      />

      {/* L3 — anotações tipográficas + cruzes de medida (atrás do wordmark) */}
      <div
        ref={notesRef}
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ zIndex: 2, willChange: "transform" }}
      >
        <MeasureCross top="14%" left="6%" />
        <MeasureCross top="18%" left="92%" />
        <MeasureCross top="82%" left="8%" />
        <MeasureCross top="86%" left="94%" />
        <Annotation top="22%" left="6%">Plus Jakarta Sans · 200</Annotation>
        <Annotation top="22%" left="78%">Space Mono · 0.3em</Annotation>
        <Annotation top="76%" left="6%">Régua de chegada · Verde + Prata</Annotation>
        <Annotation top="76%" left="74%">N · E · X · U · S</Annotation>
      </div>

      {/* L2 — wordmark NEXUS */}
      <div
        ref={wordRef}
        className="relative z-10 flex flex-col items-center text-center w-full"
        style={{ willChange: "transform" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "2.5rem" }}>
          <span style={{ display: "block", width: 32, height: 1, backgroundColor: "#9DCA79" }} />
          <p className="font-mono-newe text-[10px] sm:text-[11px] tracking-[0.35em] uppercase" style={{ color: "#9DCA79" }}>
            Sistema Operacional da Cultura
          </p>
          <span style={{ display: "block", width: 32, height: 1, backgroundColor: "#9DCA79" }} />
        </div>

        <h1 className="relative">
          <span className="sr-only">Nexus</span>
          <span
            aria-hidden
            className="font-display inline-flex items-stretch leading-[0.85] nexus-wordmark"
            style={{
              fontWeight: 200,
              fontSize: "clamp(96px, 22vw, 360px)",
              letterSpacing: "-0.04em",
              color: "#F7F6F4",
              textShadow: "0 0 80px rgba(157,202,121,0.15)",
              position: "relative",
              paddingLeft: "0",
            }}
          >
            <span
              aria-hidden
              className="nexus-bar"
              style={{
                position: "absolute",
                left: "0.07em",
                top: "0.16em",
                height: "0.68em",
                width: "0.05em",
                backgroundColor: "#9DCA79",
              }}
            />
            <span className="nexus-letter" style={{ ["--i" as any]: 0 }}>N</span>
            <span className="nexus-letter" style={{ ["--i" as any]: 1 }}>E</span>
            <span className="nexus-letter" style={{ ["--i" as any]: 2, color: "#9DCA79" }}>X</span>
            <span className="nexus-letter" style={{ ["--i" as any]: 3 }}>U</span>
            <span className="nexus-letter" style={{ ["--i" as any]: 4 }}>S</span>
            <span className="nexus-spark" aria-hidden />
          </span>
        </h1>

        <div className="mt-8 flex items-center gap-4">
          <span style={{ display: "block", width: 48, height: 1, backgroundColor: "#2E2E2E" }} />
          <p className="font-mono-newe text-[10px] sm:text-[11px] tracking-[0.45em] uppercase" style={{ color: "#6B6B6B" }}>
            Nosso Jeito de Ser · Hyndra · Newe
          </p>
          <span style={{ display: "block", width: 48, height: 1, backgroundColor: "#2E2E2E" }} />
        </div>
      </div>

      {/* L4 — vinheta radial */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          zIndex: 3,
          background:
            "radial-gradient(ellipse at center, transparent 45%, rgba(10,10,10,0.55) 80%, rgba(10,10,10,0.9) 100%)",
        }}
      />

      <style>{`
        .nexus-bar {
          box-shadow: 0 0 18px rgba(157,202,121,0.55);
          animation: nexusBarGlow 5s ease-in-out infinite;
        }
        @keyframes nexusBarGlow {
          0%   { box-shadow: 0 0 12px rgba(157,202,121,0.35); background-color: #7AAE58; }
          14%  { box-shadow: 0 0 34px rgba(157,202,121,0.95); background-color: #C8F09A; }
          28%  { box-shadow: 0 0 14px rgba(157,202,121,0.4);  background-color: #9DCA79; }
          100% { box-shadow: 0 0 12px rgba(157,202,121,0.35); background-color: #9DCA79; }
        }
        .nexus-letter {
          display: inline-block;
          animation: nexusLetterGlow 5s ease-in-out infinite;
          animation-delay: calc(0.35s + var(--i) * 0.35s);
        }
        @keyframes nexusLetterGlow {
          0%, 60%, 100% { text-shadow: 0 0 80px rgba(157,202,121,0.15); filter: brightness(1); }
          8%  { text-shadow: 0 0 60px rgba(157,202,121,0.95), 0 0 16px rgba(200,240,154,0.7); filter: brightness(1.18); }
          18% { text-shadow: 0 0 80px rgba(157,202,121,0.15); filter: brightness(1); }
        }
        .nexus-spark {
          position: absolute;
          right: -0.08em;
          top: 0.18em;
          width: 0.08em;
          height: 0.08em;
          border-radius: 50%;
          background: #FFFFFF;
          opacity: 0;
          animation: nexusSpark 5s ease-out infinite;
          animation-delay: 2.55s;
        }
        @keyframes nexusSpark {
          0%   { opacity: 0; transform: scale(0.4); box-shadow: 0 0 0 rgba(255,255,255,0); }
          3%   { opacity: 1; transform: scale(1);   box-shadow: 0 0 28px 6px rgba(200,240,154,0.9), 0 0 60px 10px rgba(157,202,121,0.6); }
          12%  { opacity: 0; transform: scale(1.8); box-shadow: 0 0 0 rgba(255,255,255,0); }
          100% { opacity: 0; }
        }
        .nexus-icon-glow {
          animation: nexusIconGlow 4.5s ease-in-out infinite;
        }
        .nexus-icon-stroke {
          animation: nexusIconStroke 4.5s ease-in-out infinite;
        }
        @keyframes nexusIconGlow {
          0%, 100% { box-shadow: 0 0 0 rgba(157,202,121,0); }
          50%      { box-shadow: 0 0 18px rgba(157,202,121,0.55), 0 0 32px rgba(200,240,154,0.25); }
        }
        @keyframes nexusIconStroke {
          0%, 100% { color: #9A9A9A; filter: drop-shadow(0 0 0 rgba(157,202,121,0)); }
          50%      { color: #C8F09A; filter: drop-shadow(0 0 6px rgba(157,202,121,0.9)); }
        }
      `}</style>
    </section>
  );
}

function Annotation({ top, left, children }: { top: string; left: string; children: React.ReactNode }) {
  return (
    <p
      className="font-mono-newe absolute"
      style={{
        top, left,
        fontSize: 9,
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        color: "rgba(192,192,192,0.32)",
      }}
    >
      {children}
    </p>
  );
}

function MeasureCross({ top, left }: { top: string; left: string }) {
  return (
    <span
      aria-hidden
      className="absolute"
      style={{ top, left, width: 14, height: 14, transform: "translate(-50%,-50%)" }}
    >
      <span style={{ position: "absolute", left: 0, right: 0, top: "50%", height: 1, backgroundColor: "rgba(157,202,121,0.45)" }} />
      <span style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: 1, backgroundColor: "rgba(157,202,121,0.45)" }} />
    </span>
  );
}

/* ── Botões verdes com barra lateral ── */
function Starfield() {
  const ref = useRef<HTMLDivElement>(null);

  // Generate stable star layers once
  const layers = useRef(
    [
      { count: 80, size: 1, opacity: 0.6, speed: 0.15 },
      { count: 50, size: 1.5, opacity: 0.8, speed: 0.3 },
      { count: 25, size: 2.2, opacity: 1, speed: 0.5 },
    ].map((l) => {
      const shadows = Array.from({ length: l.count }, () => {
        const x = Math.random() * 100;
        const y = Math.random() * 200;
        return `${x}vw ${y}vh 0 rgba(255,255,255,${l.opacity * (0.4 + Math.random() * 0.6)})`;
      }).join(",");
      return { ...l, shadows };
    }),
  ).current;

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const el = ref.current;
        if (el) {
          const children = el.children;
          for (let i = 0; i < children.length; i++) {
            const child = children[i] as HTMLDivElement;
            const speed = layers[i].speed;
            child.style.transform = `translate3d(0, ${-y * speed}px, 0)`;
          }
        }
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [layers]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {layers.map((l, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1,
            height: 1,
            borderRadius: "50%",
            backgroundColor: "transparent",
            boxShadow: l.shadows,
            willChange: "transform",
            animation: `nexusTwinkle${i} ${4 + i}s ease-in-out infinite alternate`,
          }}
        />
      ))}
      <style>{`
        @keyframes nexusTwinkle0 { from { opacity: 0.5 } to { opacity: 1 } }
        @keyframes nexusTwinkle1 { from { opacity: 0.7 } to { opacity: 1 } }
        @keyframes nexusTwinkle2 { from { opacity: 0.6 } to { opacity: 1 } }
      `}</style>
    </div>
  );
}

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
    className: "nexus-icon-stroke",
  };
  switch (shape) {
    case "circle":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case "circle-small":
      return (
        <svg {...common}>
          <path d="M12 3l8 4.5v5L12 17l-8-4.5v-5L12 3z" />
          <path d="M12 3v14" />
          <path d="M4 7.5l8 4.5 8-4.5" />
        </svg>
      );
    case "triangle":
      return (
        <svg {...common}>
          <circle cx="9" cy="7" r="2.5" />
          <path d="M4 20c0-3.5 2.2-5 5-5s5 1.5 5 5" />
          <circle cx="16" cy="7" r="2" />
          <path d="M14.5 15c1-.4 2.1-.5 2.5-.5 2.5 0 4.5 1.3 4.5 4.5" />
        </svg>
      );
    case "square":
      return (
        <svg {...common} viewBox="0 0 64 64">
          <path d="M32 10 L52 18 L52 32 C 52 44, 42 52, 32 56 C 22 52, 12 44, 12 32 L12 18 Z" />
          <path d="M22 32 L30 40 L44 24" />
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
        <svg {...common}>
          <circle cx="12" cy="5" r="2" />
          <circle cx="5" cy="19" r="2" />
          <circle cx="19" cy="19" r="2" />
          <line x1="12" y1="7" x2="5" y2="17" />
          <line x1="12" y1="7" x2="19" y2="17" />
          <line x1="5" y1="19" x2="19" y2="19" />
        </svg>
      );
  }
}

/* Glow contínuo compartilhado pelos ícones (sem faísca final) */
function _NexusIconGlowStyle() { return null; }

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
          className="shrink-0 flex items-center justify-center nexus-icon-glow"
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
          href="https://cultura-nossojeitodeser.lovable.app"
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
        url: "https://cultura-nossojeitodeser.lovable.app",
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
    count: "4 produtos",
    shape: "triangle",
    products: [
      {
        name: "All Aboard",
        tagline: "Plataforma de Embarque",
        url: "https://allaboardnewe.lovable.app",
        logoImg: allAboardLogo,
        logoText: "all aboard",
        logoSub: "PLATAFORMA DE EMBARQUE",
        logoBg: "#1C1C1C",
        logoTextColor: "#FFFFFF",
      },
      {
        name: "PAR 2026",
        tagline: "Participação Anual nos Resultados",
        url: "https://par-hyndra-newe.lovable.app",
        logoImg: par2026Logo,
        logoText: "PAR 2026",
        logoSub: "Programa de Participação Anual",
        logoBg: "#111111",
        logoTextColor: "#FFFFFF",
      },
      {
        name: "Decidir com Intenção",
        tagline: "Ferramenta de decisão estratégica",
        url: "https://decidircomintencao.lovable.app",
        logoImg: decidirIntencaoLogo,
        logoText: "Decidir com intenção.",
        logoBg: "#0A0A0A",
        logoTextColor: "#FFFFFF",
      },
      {
        name: "Ciclo de Gente",
        tagline: "Ciclo de Gente · Nexus",
        url: "https://ciclodegentenexus.lovable.app/",
        logoText: "CICLO DE GENTE",
        logoSub: "PESSOAS · NEXUS",
        logoBg: "#1C1C1C",
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
        url: "https://academiadelideresnewe.lovable.app",
        logoImg: academiaLideresLogo,
        logoText: "academia de líderes",
        logoSub: "NEWE · BY HYNDRA",
        logoBg: "#FAFAFA",
        logoTextColor: "#0A0A0A",
      },
      {
        name: "Academia de Vendas Newe",
        tagline: "Formação em venda consultiva · by Hyndra",
        url: "https://academiadevendasnewe.lovable.app",
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
        url: "https://hynstanewe.lovable.app",
        logoImg: hynstaneweLogo,
        logoText: "HYNstaNewe",
        logoSub: "REDE INTERNA",
        logoBg: "#F7F6F4",
        logoTextColor: "#FFFFFF",
      },
      {
        name: "Habitar a Estrutura",
        tagline: "Quem somos, em camadas",
        url: "https://habitaraestrutura.lovable.app",
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
    count: "3 produtos",
    shape: "square",
    products: [
      {
        name: "Plataforma de Marca",
        tagline: "Brand Book · Toolkit · Artefatos",
        url: "https://brandbook-newe.lovable.app",
        logoImg: plataformaMarcaLogo,
        logoBg: "#0A0A0A",
        logoTextColor: "#FFFFFF",
      },
      {
        name: "HUB Hyndra",
        tagline: "Políticas e procedimentos do grupo",
        url: "https://hub-hyndra.lovable.app",
        logoImg: hubHyndraLogo,
        logoText: "HUB Hyndra",
        logoSub: "POLÍTICAS & PROCEDIMENTOS",
        logoBg: "#F7F6F4",
        logoTextColor: "#0A0A0A",
      },
      {
        name: "OKRs 2026",
        tagline: "Objetivos e Resultados-Chave",
        url: "https://okr-hyndra.lovable.app",
        logoText: "OKRs 2026",
        logoSub: "GOVERNANÇA · HYNDRA",
        logoBg: "#1C1C1C",
        logoTextColor: "#FFFFFF",
      },
    ],
  },
];

function BrandSection() {
  return (
    <section className="px-5 sm:px-8 md:px-16 lg:px-24 pb-20 border-t border-[#D8D8D8] pt-16" style={{ backgroundColor: "#F7F6F4" }}>
      {/* Eyebrow */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "0.75rem" }}>
        <span style={{ display: "block", width: 16, height: 1, backgroundColor: "#9DCA79" }} />
        <p className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#6B6B6B]">
          Sistema de marca · Nexus
        </p>
      </div>
      <h2 className="font-display font-light text-[26px] text-[#0A0A0A] mb-10">
        Gramática visual.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#D8D8D8]" style={{ border: "1px solid #D8D8D8" }}>
        {/* BLOCO 1 — Logo versões */}
        <div className="bg-[#FAFAFA] p-8 flex flex-col gap-6">
          <p className="font-mono-newe text-[8.5px] tracking-[0.3em] uppercase text-[#9A9A9A]">
            Logotipo · Versões
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-center py-8 px-6" style={{ backgroundColor: "#0A0A0A", borderRadius: 2 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ display: "block", width: 2, height: 40, backgroundColor: "#9DCA79", flexShrink: 0 }} />
                <div>
                  <p className="font-display font-extralight" style={{ fontSize: 22, color: "#FFFFFF", letterSpacing: "-0.02em", lineHeight: 1 }}>NEXUS</p>
                  <p className="font-mono-newe" style={{ fontSize: 7, letterSpacing: "0.25em", textTransform: "uppercase", color: "#9DCA79", marginTop: 3 }}>Nosso Jeito de Ser</p>
                  <div style={{ height: 1, marginTop: 5, background: "linear-gradient(90deg,#9DCA79 0,#9DCA79 20px,#C0C0C0 20px,#C0C0C0 60px,transparent 60px)" }} />
                </div>
              </div>
            </div>
            <p className="font-mono-newe text-[8px] tracking-[0.2em] uppercase text-[#9A9A9A]">Negativo · Fundo escuro</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-center py-8 px-6" style={{ backgroundColor: "#F7F6F4", border: "1px solid #EBEBEB", borderRadius: 2 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ display: "block", width: 2, height: 40, backgroundColor: "#9DCA79", flexShrink: 0 }} />
                <div>
                  <p className="font-display font-extralight" style={{ fontSize: 22, color: "#0A0A0A", letterSpacing: "-0.02em", lineHeight: 1 }}>NEXUS</p>
                  <p className="font-mono-newe" style={{ fontSize: 7, letterSpacing: "0.25em", textTransform: "uppercase", color: "#3B6D11", marginTop: 3 }}>Nosso Jeito de Ser</p>
                  <div style={{ height: 1, marginTop: 5, background: "linear-gradient(90deg,#9DCA79 0,#9DCA79 20px,#D8D8D8 20px,#D8D8D8 60px,transparent 60px)" }} />
                </div>
              </div>
            </div>
            <p className="font-mono-newe text-[8px] tracking-[0.2em] uppercase text-[#9A9A9A]">Positivo · Fundo claro</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4 py-6 px-6" style={{ backgroundColor: "#0A0A0A", borderRadius: 2 }}>
              <div className="flex items-center justify-center" style={{ width: 36, height: 36, backgroundColor: "#1C1C1C", borderRadius: 2, position: "relative", flexShrink: 0 }}>
                <span style={{ position: "absolute", left: 3, top: 3, bottom: 3, width: 2, backgroundColor: "#9DCA79", borderRadius: 1 }} />
                <p className="font-display font-extralight" style={{ fontSize: 13, color: "#FFFFFF", letterSpacing: "-0.03em", paddingLeft: 6 }}>NX</p>
              </div>
              <p className="font-mono-newe text-[8px] tracking-[0.2em] uppercase text-[#6B6B6B]">Favicon · App icon</p>
            </div>
            <p className="font-mono-newe text-[8px] tracking-[0.2em] uppercase text-[#9A9A9A]">Ícone reduzido · 32×32px</p>
          </div>
        </div>

        {/* BLOCO 2 — Paleta */}
        <div className="bg-[#FAFAFA] p-8 flex flex-col gap-8">
          <div>
            <p className="font-mono-newe text-[8.5px] tracking-[0.3em] uppercase text-[#9A9A9A] mb-5">Paleta · Tokens</p>
            <div className="flex flex-col gap-px">
              {[
                { hex: "#0A0A0A", name: "Preto", role: "Fundo principal" },
                { hex: "#1C1C1C", name: "Grafite profundo", role: "Superfícies" },
                { hex: "#2E2E2E", name: "Grafite", role: "Bordas" },
                { hex: "#6B6B6B", name: "Prata escura", role: "Textos secundários" },
                { hex: "#C0C0C0", name: "Prata clássica", role: "Detalhes" },
                { hex: "#D8D8D8", name: "Prata clara", role: "Bordas claras" },
                { hex: "#F7F6F4", name: "Branco quente", role: "Fundo da página" },
                { hex: "#9DCA79", name: "Verde Newe", role: "Acento único" },
              ].map(({ hex, name, role }) => (
                <div key={hex} className="flex items-center gap-3 py-2 border-b border-[#EBEBEB] last:border-0">
                  <span style={{ display: "block", width: 20, height: 20, backgroundColor: hex, borderRadius: 2, flexShrink: 0, border: hex === "#F7F6F4" ? "1px solid #D8D8D8" : "none" }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p className="font-body font-light text-[12px] text-[#0A0A0A] truncate">{name}</p>
                    <p className="font-mono-newe text-[8px] tracking-[0.1em] uppercase text-[#9A9A9A]">{role}</p>
                  </div>
                  <p className="font-mono-newe text-[8px] text-[#6B6B6B] shrink-0">{hex}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderLeft: "2px solid #9DCA79", paddingLeft: "1rem" }}>
            <p className="font-mono-newe text-[8px] tracking-[0.2em] uppercase text-[#9DCA79] mb-1">Regra do verde</p>
            <p className="font-body font-light text-[12px] text-[#6B6B6B] leading-relaxed">
              Verde Newe aparece apenas em barras verticais de chegada, réguas horizontais e labels de destaque. Nunca como fundo de área ou preenchimento.
            </p>
          </div>
        </div>

        {/* BLOCO 3 — Tipografia e anatomia */}
        <div className="bg-[#FAFAFA] p-8 flex flex-col gap-8">
          <div>
            <p className="font-mono-newe text-[8.5px] tracking-[0.3em] uppercase text-[#9A9A9A] mb-5">Tipografia · Sistema</p>
            <div className="flex flex-col gap-6">
              <div style={{ borderTop: "2px solid #9DCA79", paddingTop: "1rem" }}>
                <p className="font-display font-extralight text-[28px] text-[#0A0A0A] leading-tight">Display</p>
                <p className="font-mono-newe text-[8px] tracking-[0.2em] uppercase text-[#6B6B6B] mt-1">Plus Jakarta Sans · 200 · Títulos</p>
              </div>
              <div style={{ borderTop: "1px solid #EBEBEB", paddingTop: "1rem" }}>
                <p className="font-body font-light text-[15px] text-[#2E2E2E] leading-relaxed">
                  Corpo e descrições em Outfit. Peso 300 para texto corrido, 400 para ênfase.
                </p>
                <p className="font-mono-newe text-[8px] tracking-[0.2em] uppercase text-[#6B6B6B] mt-1">Outfit · 300–400 · Corpo</p>
              </div>
              <div style={{ borderTop: "1px solid #EBEBEB", paddingTop: "1rem" }}>
                <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#6B6B6B]">LABELS E EYEBROWS</p>
                <p className="font-mono-newe text-[8px] tracking-[0.2em] uppercase text-[#6B6B6B] mt-1">Space Mono · 400 · Labels</p>
              </div>
            </div>
          </div>
          <div>
            <p className="font-mono-newe text-[8.5px] tracking-[0.3em] uppercase text-[#9A9A9A] mb-5">Anatomia do símbolo</p>
            <div className="flex flex-col gap-3 text-[11px] font-body font-light text-[#6B6B6B] leading-relaxed">
              {([
                ["Barra verde", "Gesto de chegada. 2–3px, Verde Newe. Sempre à esquerda."],
                ["Wordmark", "NEXUS em Plus Jakarta Sans 200. Letter-spacing –0.02em."],
                ["Descritor", "Nosso Jeito de Ser em Space Mono 7px. Verde Newe."],
                ["Régua", "Verde 20px → Prata → Transparente. Sinal de encerramento."],
              ] as const).map(([term, desc]) => (
                <div key={term} style={{ borderBottom: "1px solid #EBEBEB", paddingBottom: "0.6rem" }}>
                  <p className="font-mono-newe text-[8px] tracking-[0.15em] uppercase text-[#0A0A0A] mb-1">{term}</p>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
