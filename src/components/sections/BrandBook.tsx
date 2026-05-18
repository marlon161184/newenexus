import { OutlineCard, Section } from "../newe/Section";
import { ResourceButton } from "../newe/ResourceButton";

const ITEMS: [string, string][] = [
  ["IDENTIDADE VISUAL", "Logo, símbolo, cores e aplicações"],
  ["TOM DE VOZ", "Como falamos e o que transmitimos"],
  ["TIPOGRAFIA", "Fontes, hierarquia e uso correto"],
  ["CORES E APLICAÇÕES", "Paleta primária, secundária e neutros"],
  ["FOTOGRAFIAS E IMAGENS", "Estilo, curadoria e diretrizes"],
  ["APLICAÇÕES PROIBIDAS", "O que nunca fazer com a marca"],
];

export function BrandBook() {
  return (
    <Section
      label="IDENTIDADE DE MARCA"
      title="Brand Book — A Alma da Nossa Marca"
      intro="Nossa marca não é só estética — é estratégia. O Brand Book reúne tudo que orienta como a Newe se apresenta ao mundo: do logotipo ao tom de voz, da paleta ao posicionamento."
    >
      {/* Régua de chegada — verde como gesto */}
      <div className="flex items-center gap-4 mb-12">
        <div className="h-px flex-1" style={{ backgroundColor: "#9DCA79" }} />
        <span
          className="font-mono-newe text-[10px] tracking-[0.3em] uppercase"
          style={{ color: "#9DCA79" }}
        >
          CHEGADA · BRAND BOOK
        </span>
        <div className="h-px flex-1" style={{ backgroundColor: "#9DCA79" }} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {ITEMS.map(([t, d]) => (
          <div
            key={t}
            className="relative pl-5 p-6 md:p-8 transition-colors duration-200"
            style={{ border: "1px solid #D8D8D8", borderRadius: 2 }}
          >
            <span
              aria-hidden
              className="absolute left-0 top-4 bottom-4 w-[2px]"
              style={{ backgroundColor: "#9DCA79" }}
            />
            <div className="mb-5 text-[#6B6B6B]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth="1">
                <path d="M4 4h16v16H4zM4 12h16M12 4v16" />
              </svg>
            </div>
            <h3 className="font-display font-light text-base md:text-[18px] mb-3 text-[#0A0A0A]">
              {t}
            </h3>
            <p className="font-body font-light text-[12px] leading-relaxed text-[#6B6B6B]">
              {d}
            </p>
          </div>
        ))}
      </div>

      {/* Amostra da paleta — destaque para Verde Newe */}
      <div className="mb-12">
        <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#6B6B6B] mb-4">
          PALETA · ACENTO DE CHEGADA
        </p>
        <div className="flex flex-wrap items-end gap-4">
          {[
            { name: "PRETO", hex: "#0A0A0A" },
            { name: "GRAFITE", hex: "#2E2E2E" },
            { name: "PRATA", hex: "#C0C0C0" },
            { name: "PLATINA", hex: "#E5E4E2" },
            { name: "BRANCO QUENTE", hex: "#F7F6F4" },
          ].map((c) => (
            <div key={c.hex} className="flex flex-col gap-2">
              <div
                className="w-16 h-16"
                style={{ backgroundColor: c.hex, border: "1px solid #D8D8D8" }}
              />
              <p className="font-mono-newe text-[9px] tracking-[0.2em] uppercase text-[#6B6B6B]">
                {c.name}
              </p>
              <p className="font-mono-newe text-[9px] text-[#9A9A9A]">{c.hex}</p>
            </div>
          ))}
          {/* Verde Newe — destacado */}
          <div className="flex flex-col gap-2 pl-4 ml-2 border-l border-dashed border-[#D8D8D8]">
            <div
              className="w-16 h-16"
              style={{ backgroundColor: "#9DCA79" }}
            />
            <p className="font-mono-newe text-[9px] tracking-[0.2em] uppercase" style={{ color: "#9DCA79" }}>
              VERDE NEWE
            </p>
            <p className="font-mono-newe text-[9px] text-[#9A9A9A]">#9DCA79</p>
          </div>
        </div>
        <p className="font-body font-light italic text-[12px] text-[#6B6B6B] mt-5 max-w-2xl leading-relaxed">
          Verde como gesto, nunca como preenchimento. Aparece em réguas, barras verticais e labels de "chegada" — os mesmos momentos em que o logo usa a cor. Nenhum slide é dominado pelo verde; ele só acende nos pontos certos.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <ResourceButton label="ACESSAR BRAND BOOK COMPLETO" />
        <ResourceButton label="DOWNLOAD DO BRAND BOOK" />
      </div>
    </Section>
  );
}