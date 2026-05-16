import { ProjectDeck } from "../newe/ProjectDeck";
import { ResourceButton } from "../newe/ResourceButton";
import { Section } from "../newe/Section";

const PROJECTS = [
  {
    projectName: "NEWE ATMA",
    description: "Bem-estar integrativo em meio à natureza.",
    images: ["/images/atma1.png", "/images/atma2.png", "/images/atma3.png", "/images/atma4.png"],
  },
  {
    projectName: "NEWE DISTRICT",
    description: "Um bairro inteiro pensado para a vida plena.",
    images: ["/images/club1.png", "/images/club2.png", "/images/club3.png", "/images/club4.png"],
  },
  {
    projectName: "NEWE MARKET",
    description: "O coração comercial e social do ecossistema Newe.",
    images: ["/images/spa1.png", "/images/spa2.png"],
  },
  {
    projectName: "NEWE CLUB",
    description: "Lazer, esporte e convivência em alto padrão.",
    images: ["/images/club1.png", "/images/club2.png", "/images/club3.png", "/images/club4.png"],
  },
];

export function Projects() {
  return (
    <Section
      label="PORTFÓLIO"
      title="Nossos projetos"
      intro="Cada empreendimento Newe é um capítulo do mesmo manifesto urbano."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
        {PROJECTS.map((p) => (
          <ProjectDeck key={p.projectName} {...p} />
        ))}
      </div>
      <div className="mt-16">
        <ResourceButton label="VER PORTFÓLIO COMPLETO" />
      </div>
    </Section>
  );
}