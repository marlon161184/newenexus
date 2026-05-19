import { createFileRoute } from "@tanstack/react-router";
import { ResourceButton } from "@/components/newe/ResourceButton";

export const Route = createFileRoute("/pessoas")({
  head: () => ({
    meta: [
      { title: "Pessoas · Nexus | Hyndra" },
      {
        name: "description",
        content:
          "Módulo Pessoas — desenvolvimento, jornada e remuneração no grupo Hyndra | Newe.",
      },
    ],
  }),
  component: PessoasPage,
});

function PessoasPage() {
  return (
    <div className="px-6 md:px-12 py-12 md:py-16 max-w-[1280px]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12">
        <main>
          {/* HERO */}
          <section className="pb-12 border-b border-[#D8D8D8]">
            <div className="flex items-start gap-6">
              <ModuleIcon />
              <div className="flex-1">
                <p className="font-mono-newe text-[10px] tracking-[0.35em] uppercase text-[#6B6B6B]">
                  Módulo · 03
                </p>
                <h1 className="mt-3 font-display font-light text-[56px] leading-[1] text-[#0A0A0A]">
                  Pessoas
                </h1>
                <p className="mt-4 font-mono-newe text-[10px] tracking-[0.35em] uppercase text-[#6B6B6B]">
                  Trajetória · Desenvolvimento · Reconhecimento
                </p>
              </div>
            </div>

            <p
              className="mt-8 pl-6 py-2 max-w-2xl font-display font-light italic text-[20px] text-[#1C1C1C] leading-snug"
              style={{ borderLeft: "2px solid #9DCA79" }}
            >
              “Cada pessoa do grupo carrega uma parte do que somos. Cuidamos da
              sua jornada com a mesma intenção com que construímos bairros.”
            </p>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-px bg-[#D8D8D8]" style={{ border: "1px solid #D8D8D8" }}>
              {[
                ["Pessoas", "47"],
                ["Trilhas PDI", "09"],
                ["Programas", "06"],
                ["Mentorias", "14"],
                ["Atualizado", "Hoje"],
              ].map(([l, v]) => (
                <div key={l} className="bg-[#FAFAFA] p-5">
                  <p className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#9A9A9A]">
                    {l}
                  </p>
                  <p className="mt-3 font-display font-extralight text-[28px] text-[#0A0A0A] leading-none">
                    {v}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <ResourceButton label="Favoritar módulo" />
              <ResourceButton label="+ Contribuir" variant="filled" />
            </div>
          </section>

          {/* TABS */}
          <nav className="sticky top-0 z-10 -mx-6 md:-mx-12 px-6 md:px-12 py-4 bg-[#FAFAFA] border-b border-[#EBEBEB] flex gap-8 overflow-x-auto">
            {[
              "Visão Geral",
              "Jornada",
              "Desenvolvimento",
              "Programas",
              "Remuneração",
              "Reconhecimento",
            ].map((t, i) => (
              <a
                key={t}
                href="#"
                className={`font-mono-newe text-[10px] tracking-[0.3em] uppercase whitespace-nowrap ${
                  i === 0 ? "text-[#0A0A0A] border-b border-[#0A0A0A] pb-1" : "text-[#9A9A9A] hover:text-[#0A0A0A]"
                }`}
              >
                {t}
              </a>
            ))}
          </nav>

          {/* JORNADA NEWE LOVER */}
          <section id="jornada" className="py-14">
            <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#6B6B6B]">
              Jornada · Newe Lover
            </p>
            <h2 className="mt-2 mb-10 font-display font-light text-[28px] text-[#0A0A0A]">
              Os cinco momentos da sua trajetória
            </h2>

            <ol className="relative pl-8 border-l border-[#D8D8D8] space-y-10">
              {JOURNEY.map((j, i) => {
                const isCurrent = i === 1;
                return (
                  <li key={j.title} className="relative">
                    <span
                      className="absolute -left-[37px] top-1 w-3 h-3"
                      style={{
                        backgroundColor: isCurrent ? "#9DCA79" : "#FAFAFA",
                        border: isCurrent ? "none" : "1px solid #C0C0C0",
                        borderRadius: "50%",
                      }}
                    />
                    <p className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#9A9A9A]">
                      Etapa · 0{i + 1}
                      {isCurrent && (
                        <span
                          className="ml-3 px-2 py-0.5 text-[8px]"
                          style={{ backgroundColor: "#9DCA79", color: "#0A0A0A", borderRadius: 2 }}
                        >
                          Chegada
                        </span>
                      )}
                    </p>
                    <h3 className="mt-2 font-display font-light text-[22px] text-[#0A0A0A] leading-tight">
                      {j.title}
                    </h3>
                    <p className="mt-2 font-body font-extralight text-[14px] text-[#6B6B6B] leading-relaxed max-w-xl">
                      {j.desc}
                    </p>
                    <p className="mt-3 font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#9A9A9A]">
                      {j.duration}
                    </p>
                  </li>
                );
              })}
            </ol>
          </section>

          {/* DESENVOLVIMENTO · TRILHAS */}
          <section id="trilhas" className="py-14 border-t border-[#EBEBEB]">
            <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#6B6B6B]">
              Desenvolvimento
            </p>
            <h2 className="mt-2 mb-8 font-display font-light text-[28px] text-[#0A0A0A]">
              Trilhas e planos individuais
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#D8D8D8]" style={{ border: "1px solid #D8D8D8" }}>
              {TRACKS.map((t, i) => (
                <div key={t.title} className="bg-[#FAFAFA] p-7 flex flex-col gap-3">
                  <p className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#9A9A9A]">
                    Trilha · 0{i + 1} · {t.tag}
                  </p>
                  <h3 className="font-display font-light text-[22px] text-[#0A0A0A] leading-tight">
                    {t.title}
                  </h3>
                  <p className="font-body font-extralight text-[13px] text-[#6B6B6B] leading-relaxed">
                    {t.desc}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#9A9A9A]">
                      {t.modules}
                    </span>
                    <span className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#0A0A0A]">
                      Acessar →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PROGRAMAS */}
          <section id="programas" className="py-14 border-t border-[#EBEBEB]">
            <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#6B6B6B]">
              Programas
            </p>
            <h2 className="mt-2 mb-8 font-display font-light text-[28px] text-[#0A0A0A]">
              Iniciativas vivas no grupo
            </h2>

            <ul className="divide-y divide-[#EBEBEB]" style={{ border: "1px solid #D8D8D8", borderRadius: 2 }}>
              {PROGRAMS.map((p, i) => (
                <li key={p.title} className="p-6 md:p-7 flex items-start gap-6 bg-[#FAFAFA]">
                  <span className="font-display font-extralight text-[36px] text-[#C0C0C0] leading-none w-12 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display font-light text-[20px] text-[#0A0A0A] leading-tight">
                      {p.title}
                    </h3>
                    <p className="mt-2 font-body font-extralight text-[13px] text-[#6B6B6B] leading-relaxed max-w-2xl">
                      {p.desc}
                    </p>
                  </div>
                  <span
                    className="font-mono-newe text-[8.5px] tracking-[0.3em] uppercase px-3 py-1.5 shrink-0"
                    style={{ border: "1px solid #D8D8D8", color: "#6B6B6B", borderRadius: 2 }}
                  >
                    {p.scope}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* REMUNERAÇÃO */}
          <section id="remuneracao" className="py-14 border-t border-[#EBEBEB]">
            <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#6B6B6B]">
              Remuneração & Benefícios
            </p>
            <h2 className="mt-2 mb-8 font-display font-light text-[28px] text-[#0A0A0A]">
              Como cuidamos do todo
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#D8D8D8]" style={{ border: "1px solid #D8D8D8" }}>
              {COMP.map((c) => (
                <div key={c.title} className="bg-[#FAFAFA] p-7">
                  <p className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#9A9A9A]">
                    {c.tag}
                  </p>
                  <h3 className="mt-3 font-display font-light text-[20px] text-[#0A0A0A] leading-tight">
                    {c.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {c.items.map((it) => (
                      <li key={it} className="font-body font-extralight text-[13px] text-[#2E2E2E] leading-relaxed">
                        — {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* RECONHECIMENTO */}
          <section id="reconhecimento" className="py-14 border-t border-[#EBEBEB]">
            <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#6B6B6B]">
              Reconhecimento
            </p>
            <h2 className="mt-2 mb-8 font-display font-light text-[28px] text-[#0A0A0A]">
              Pessoas em destaque · ciclo atual
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SPOTLIGHT.map((s) => (
                <div
                  key={s.name}
                  className="p-6 bg-[#FAFAFA] flex flex-col gap-3"
                  style={{ border: "1px solid #D8D8D8", borderRadius: 2 }}
                >
                  <span
                    className="font-mono-newe text-[8.5px] tracking-[0.3em] uppercase px-2 py-1 self-start"
                    style={{ backgroundColor: "#9DCA79", color: "#0A0A0A", borderRadius: 2 }}
                  >
                    {s.badge}
                  </span>
                  <h3 className="font-display font-light text-[20px] text-[#0A0A0A] leading-tight">
                    {s.name}
                  </h3>
                  <p className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#9A9A9A]">
                    {s.role}
                  </p>
                  <p className="font-body font-extralight text-[13px] text-[#6B6B6B] leading-relaxed">
                    {s.note}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-10 flex flex-wrap gap-3">
            <ResourceButton label="Acessar Cultura →" href="/cultura" />
            <ResourceButton label="Acessar Conhecimento →" href="/conhecimento" />
            <ResourceButton label="Chegada · Newe Lovers →" href="/onboarding" />
          </div>
        </main>

        {/* ASIDE */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-10">
            <div>
              <p className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#9A9A9A]">
                Nesta página
              </p>
              <ul className="mt-4 space-y-2.5">
                {[
                  ["Jornada", "#jornada"],
                  ["Desenvolvimento", "#trilhas"],
                  ["Programas", "#programas"],
                  ["Remuneração", "#remuneracao"],
                  ["Reconhecimento", "#reconhecimento"],
                ].map(([l, h]) => (
                  <li key={l}>
                    <a
                      href={h}
                      className="font-body font-light text-[12px] text-[#6B6B6B] hover:text-[#0A0A0A]"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#9A9A9A]">
                Curadoria
              </p>
              <ul className="mt-4 space-y-2.5 font-body font-light text-[12px] text-[#2E2E2E]">
                <li>Camila Aires · Head de Gente</li>
                <li>Marcos Vinhas · PDI</li>
                <li>Renata Lobo · Remuneração</li>
              </ul>
            </div>
            <div className="pt-6 border-t border-[#EBEBEB]">
              <p className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#9A9A9A]">
                Módulo · 03 · Pessoas
              </p>
              <p className="mt-2 font-body font-light text-[11px] text-[#9A9A9A]">
                v1.2 · atualizado hoje
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function ModuleIcon() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" className="shrink-0 text-[#0A0A0A]">
      <path d="M3 60 L36 12 L69 60 Z" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M22 60 L36 36 L50 60 Z" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}

const JOURNEY = [
  {
    title: "Chegada · Newe Lover",
    desc: "Onboarding editorial, imersão na cultura, kit de chegada e Programa Buddy. O primeiro mês como rito de pertencimento.",
    duration: "0 — 30 dias",
  },
  {
    title: "Enraizamento",
    desc: "Imersão nas empresas do grupo, mentoria por par sênior e primeiras entregas com acompanhamento próximo.",
    duration: "1 — 6 meses",
  },
  {
    title: "Contribuição plena",
    desc: "Atuação autônoma, participação ativa em rituais e contribuição ao Conhecimento e à Cultura do grupo.",
    duration: "6 — 24 meses",
  },
  {
    title: "Maestria & multiplicação",
    desc: "Liderança técnica, mentoria de novos Lovers, curadoria de conteúdo e participação em decisões estratégicas.",
    duration: "2 — 5 anos",
  },
  {
    title: "Legado",
    desc: "Construção de novos capítulos, idealização de projetos próprios dentro do grupo, transmissão de cultura.",
    duration: "5+ anos",
  },
];

const TRACKS = [
  {
    tag: "Liderança",
    title: "Trilha de Liderança Hyndra",
    desc: "Formação de líderes que cultivam contexto, decidem com clareza e cuidam de pessoas.",
    modules: "12 módulos",
  },
  {
    tag: "Negócio",
    title: "Trilha Comercial & Marketing",
    desc: "Visão integrada de produto, marca, vendas e relacionamento — específica para Newe.",
    modules: "9 módulos",
  },
  {
    tag: "Urbanismo",
    title: "Trilha de Urbanismo Integrativo",
    desc: "Princípios, métricas e estudos de caso do método Hyndra de fazer bairros.",
    modules: "14 módulos",
  },
  {
    tag: "Gestão",
    title: "Trilha de Gestão & Processos",
    desc: "Operação, governança, indicadores e o ciclo PAR aplicado ao dia a dia.",
    modules: "8 módulos",
  },
];

const PROGRAMS = [
  {
    title: "Programa Buddy",
    desc: "Cada novo Lover ganha um par sênior nos primeiros 90 dias. Acolhe, traduz contexto e apresenta o grupo.",
    scope: "Todos · 90d",
  },
  {
    title: "Mentoria Cruzada",
    desc: "Mentorias entre áreas e empresas do grupo. Quebra silos e fortalece a visão sistêmica.",
    scope: "Voluntário",
  },
  {
    title: "PAR · Plano de Ação & Resultado",
    desc: "Ciclo anual de objetivos, acompanhamento e avaliação — alinhado a Cultura e Estratégia.",
    scope: "Todos · Anual",
  },
  {
    title: "U.Newe",
    desc: "Universidade interna do grupo. Trilhas, jornadas e encontros formativos abertos a todos.",
    scope: "Todos · Contínuo",
  },
  {
    title: "Programa de Liderança",
    desc: "Formação intensiva para líderes atuais e em desenvolvimento. Convite curatorial.",
    scope: "Liderança · Anual",
  },
];

const COMP = [
  {
    tag: "Remuneração",
    title: "Remuneração competitiva",
    items: [
      "Salário-base ancorado em pesquisa anual",
      "Bandas claras por nível e função",
      "Revisão por ciclo PAR",
      "PLR vinculada a resultados do grupo",
    ],
  },
  {
    tag: "Saúde & bem-estar",
    title: "Cuidado integral",
    items: [
      "Plano de saúde e odontológico",
      "Auxílio terapia e saúde mental",
      "Ambientes Fitwel certificados",
      "Day-off de aniversário",
    ],
  },
  {
    tag: "Vida & desenvolvimento",
    title: "Tempo, estudo e família",
    items: [
      "Vale-alimentação e refeição",
      "Auxílio educação e cursos",
      "Licença parental estendida",
      "Modelo híbrido com home-office estruturado",
    ],
  },
];

const SPOTLIGHT = [
  {
    badge: "Chegada",
    name: "Rafael Salomão",
    role: "Diretor Comercial & Marketing",
    note: "Acaba de chegar trazendo experiência sólida em real estate e visão de marca.",
  },
  {
    badge: "Chegada",
    name: "Leandro Gonçalves",
    role: "Head Comercial",
    note: "Reforça a liderança comercial da Newe com bagagem em incorporação de alto padrão.",
  },
  {
    badge: "Trajetória",
    name: "Camila Aires",
    role: "Head de Gente · 5 anos",
    note: "Cinco anos construindo a cultura de cuidado e desenvolvimento do grupo.",
  },
];