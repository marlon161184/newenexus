import { ResourceButton } from "../newe/ResourceButton";

export function Hero() {
  return (
    <section className="w-full bg-[#F7F6F4] px-6 md:px-12 py-32 md:py-48 border-b border-[#D8D8D8]">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#6B6B6B] mb-8">
          WELCOME JOURNEY · NEWE LOVERS
        </p>
        <h1 className="font-display font-extralight text-5xl md:text-7xl lg:text-8xl text-[#0A0A0A] leading-[1.05] max-w-4xl mb-10">
          Habitar com intenção.
        </h1>
        <p className="font-body font-light text-lg md:text-xl text-[#6B6B6B] max-w-2xl mb-12 leading-relaxed">
          Urbanismo que transforma a forma como as pessoas vivem. Bem-vindo ao ecossistema Hyndra | Newe — uma jornada que começa por dentro.
        </p>
        <div className="flex flex-wrap gap-3">
          <ResourceButton label="COMEÇAR A JORNADA" variant="filled" />
          <ResourceButton label="BAIXAR GUIA DO NEWE LOVER" />
        </div>
      </div>
    </section>
  );
}