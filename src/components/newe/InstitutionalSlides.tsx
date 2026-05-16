import { useState, useEffect } from "react";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { ResourceButton } from "./ResourceButton";

interface Slide {
  image: string;
  overlay: number;
  label: string;
  tagline: string;
  text: string;
  cta: string;
}

const SLIDES: Slide[] = [
  {
    image: "/images/banner_hyndra2_colorida.png",
    overlay: 0.55,
    label: "HYNDRA PARTICIPAÇÕES · HOLDING",
    tagline: "Conectamos o presente a um futuro com propósito.",
    text: "[EDITÁVEL — Texto institucional da Hyndra a confirmar]",
    cta: "SAIBA MAIS SOBRE A HYNDRA",
  },
  {
    image: "/images/atma2.png",
    overlay: 0.45,
    label: "NEWE URBANISMO INTEGRATIVO · 2025",
    tagline: "Urbanismo que transforma a maneira de viver.",
    text: "[EDITÁVEL — Texto institucional da Newe a confirmar]",
    cta: "CONHEÇA A NEWE",
  },
];

export function InstitutionalSlides() {
  const [i, setI] = useState(0);
  const [fading, setFading] = useState(false);

  const go = (n: number) => {
    if (n === i) return;
    setFading(true);
    setTimeout(() => {
      setI((n + SLIDES.length) % SLIDES.length);
      setFading(false);
    }, 200);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(i + 1);
      if (e.key === "ArrowLeft") go(i - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const slide = SLIDES[i];

  return (
    <section className="relative w-full h-screen bg-[#0A0A0A] overflow-hidden">
      <div className="absolute inset-0">
        <ImagePlaceholder src={slide.image} overlay overlayOpacity={slide.overlay} />
      </div>

      <div
        className={`relative z-10 h-full flex flex-col justify-center max-w-5xl mx-auto px-8 md:px-16 transition-opacity duration-400 ${
          fading ? "opacity-0" : "opacity-100"
        }`}
      >
        <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#C0C0C0] mb-8">
          {slide.label}
        </p>
        <h1 className="font-display font-light text-[#FAFAFA] text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 max-w-3xl">
          {slide.tagline}
        </h1>
        <p className="font-body font-light text-[#D8D8D8] text-base md:text-lg max-w-xl mb-12 leading-relaxed">
          {slide.text}
        </p>
        <div>
          <ResourceButton label={slide.cta} variant="filled" />
        </div>
      </div>

      <button
        aria-label="Slide anterior"
        onClick={() => go(i - 1)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-[#6B6B6B] hover:text-[#FAFAFA] transition-colors text-2xl font-light"
      >
        ←
      </button>
      <button
        aria-label="Próximo slide"
        onClick={() => go(i + 1)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-[#6B6B6B] hover:text-[#FAFAFA] transition-colors text-2xl font-light"
      >
        →
      </button>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {SLIDES.map((_, k) => (
          <button
            key={k}
            aria-label={`Ir para slide ${k + 1}`}
            onClick={() => go(k)}
            className="w-2 h-2 transition-all"
            style={{
              backgroundColor: k === i ? "#FAFAFA" : "#6B6B6B",
              width: k === i ? 24 : 8,
            }}
          />
        ))}
      </div>
    </section>
  );
}