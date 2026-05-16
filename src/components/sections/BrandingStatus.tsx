import { Section } from "../newe/Section";
import { ResourceButton } from "../newe/ResourceButton";

type Status = "done" | "current" | "pending";

interface Step {
  name: string;
  status: Status;
  note?: string;
}

const STEPS: Step[] = [
  { name: "BRIEFING", status: "done" },
  { name: "IMERSÃO", status: "done", note: "Kickoff com a Rebu: ✓" },
  { name: "NAVEGAÇÃO FUNDADORA", status: "current", note: "Início: segunda-feira [data a inserir]" },
  { name: "DIAGNÓSTICO", status: "pending" },
  { name: "PLATAFORMA COMPARATIVA", status: "pending" },
  { name: "CONCEITO CRIATIVO", status: "pending" },
  { name: "VALIDAÇÃO", status: "pending" },
  { name: "ENTREGA", status: "pending" },
];

function Dot({ status }: { status: Status }) {
  if (status === "done")
    return <div className="w-3 h-3 rounded-full bg-[#0A0A0A]" />;
  if (status === "current")
    return (
      <div className="relative">
        <div className="w-3 h-3 rounded-full bg-[#C0C0C0] newe-pulse" />
      </div>
    );
  return <div className="w-3 h-3 rounded-full border border-[#D8D8D8] bg-transparent" />;
}

export function BrandingStatus() {
  return (
    <Section label="PROJETO BRANDING · STATUS" title="Onde Estamos">
      <div className="mb-12">
        {STEPS.map((s, i) => {
          const next = STEPS[i + 1];
          const lineStyle =
            s.status === "done"
              ? "border-l border-[#C0C0C0]"
              : "border-l border-dashed border-[#D8D8D8]";
          return (
            <div key={s.name} className="grid grid-cols-[24px_1fr] gap-5">
              <div className="flex flex-col items-center">
                <Dot status={s.status} />
                {next && <div className={`flex-1 ${lineStyle} min-h-[40px] my-1`} />}
              </div>
              <div className="pb-8">
                <p
                  className="font-mono-newe text-[10px] tracking-[0.3em] uppercase"
                  style={{
                    color:
                      s.status === "done"
                        ? "#0A0A0A"
                        : s.status === "current"
                          ? "#0A0A0A"
                          : "#9A9A9A",
                  }}
                >
                  {s.name}
                  {s.status === "current" && (
                    <span className="ml-3 px-2 py-0.5 border border-[#0A0A0A] text-[8px]">
                      EM ANDAMENTO
                    </span>
                  )}
                  {s.status === "done" && (
                    <span className="ml-3 text-[#9A9A9A]">· CONCLUÍDO</span>
                  )}
                </p>
                {s.note && (
                  <p className="font-body font-light italic text-[12px] text-[#9A9A9A] mt-2">
                    {s.note}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p className="font-body font-light italic text-[13px] text-[#9A9A9A] mb-8">
        "Este capítulo será atualizado a cada sprint do projeto."
      </p>

      <div className="flex flex-wrap gap-3">
        <ResourceButton label="BRIEFING DE BRANDING" />
        <ResourceButton label="PLATAFORMA COMPARATIVA" />
      </div>
    </Section>
  );
}