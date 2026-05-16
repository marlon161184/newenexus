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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {ITEMS.map(([t, d]) => (
          <OutlineCard
            key={t}
            title={t}
            description={d}
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth="1">
                <path d="M4 4h16v16H4zM4 12h16M12 4v16" />
              </svg>
            }
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <ResourceButton label="ACESSAR BRAND BOOK COMPLETO" />
        <ResourceButton label="DOWNLOAD DO BRAND BOOK" />
      </div>
    </Section>
  );
}