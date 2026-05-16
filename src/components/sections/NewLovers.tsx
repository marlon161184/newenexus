import { NewLoverCard } from "../newe/NewLoverCard";
import { Section } from "../newe/Section";

export function NewLovers() {
  return (
    <Section
      label="QUEM CHEGOU"
      title="Boas-vindas aos novos Newe Lovers"
      intro="Conheça quem está começando a jornada com a gente."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <NewLoverCard
          delayMs={0}
          name="Rafael Salomão"
          role="Diretor Comercial & Marketing"
          area="Comercial · Marketing"
          teamTag="DIRETORIA"
          bio={[
            "[Trajetória — a preencher com Rafael]",
            "[Expertise principal — a preencher]",
            "[Formação ou diferencial — a preencher]",
            "[Algo sobre sua visão ou motivação — a preencher]",
          ]}
        />
        <NewLoverCard
          delayMs={100}
          name="Leandro Gonçalves"
          role="Head Comercial"
          area="Comercial"
          teamTag="LIDERANÇA COMERCIAL"
          bio={[
            "[Trajetória — a preencher com Leandro]",
            "[Expertise principal — a preencher]",
            "[Formação ou diferencial — a preencher]",
            "[Algo sobre sua visão ou motivação — a preencher]",
          ]}
        />
      </div>
    </Section>
  );
}