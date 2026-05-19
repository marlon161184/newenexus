import { createFileRoute } from "@tanstack/react-router";
import { ResourceButton } from "@/components/newe/ResourceButton";

export const Route = createFileRoute("/conhecimento")({
  head: () => ({
    meta: [
      { title: "Conhecimento · Base do Grupo — Nexus" },
      {
        name: "description",
        content:
          "Base de conhecimento do grupo Hyndra | Newe: documentos, aprendizados, frameworks e referências que sustentam nossas decisões.",
      },
    ],
  }),
  component: ConhecimentoPage,
});

function ConhecimentoPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12 px-6 md:px-12 py-12 md:py-16 max-w-[1280px]">
      <div className="min-w-0">
        <Hero />
        <Tabs />
        <Search />
        <Categories />
        <Featured />
        <Recent />
        <Frameworks />
        <div className="mt-10">
          <ResourceButton label="Contribuir com um Documento" />
        </div>
      </div>
      <Aside />
    </div>
  );
}

/* ------------------------------- HERO ------------------------------- */

function Hero() {
  return (
    <header className="pb-12 border-b border-[#D8D8D8]">
      <div className="flex items-start gap-6">
        <div className="text-[#6B6B6B] shrink-0">
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="36" cy="36" r="18" />
            <circle cx="36" cy="36" r="2" fill="currentColor" />
          </svg>
        </div>
        <div className="min-w-0">
          <p className="font-mono-newe text-[10px] tracking-[0.35em] uppercase text-[#6B6B6B]">
            Módulo · Base do Grupo
          </p>
          <h1 className="mt-3 font-display font-light text-[40px] text-[#0A0A0A] leading-[1.05]">
            Conhecimento
          </h1>
          <p className="mt-3 font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#9A9A9A]">
            Núcleo · Memória · Referência
          </p>
        </div>
      </div>

      <div
        className="mt-10 pl-6 max-w-2xl"
        style={{ borderLeft: "2px solid #C0C0C0" }}
      >
        <p className="font-display font-light italic text-[20px] text-[#1C1C1C] leading-snug">
          Tudo que o grupo já aprendeu — organizado para você encontrar quando precisar.
        </p>
      </div>

      <dl className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-px bg-[#D8D8D8]" style={{ border: "1px solid #D8D8D8" }}>
        {[
          ["Documentos", "84"],
          ["Frameworks", "12"],
          ["Coleções", "07"],
          ["Autores", "23"],
          ["Atualizado", "Hoje"],
        ].map(([k, v]) => (
          <div key={k} className="bg-[#FAFAFA] p-4">
            <dt className="font-mono-newe text-[8.5px] tracking-[0.3em] uppercase text-[#9A9A9A]">{k}</dt>
            <dd className="mt-2 font-display font-light text-[22px] text-[#0A0A0A] leading-none">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 flex gap-3">
        <button
          aria-label="Favoritar módulo"
          className="inline-flex items-center gap-2 px-5 py-2.5 font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#0A0A0A] hover:bg-[#F7F6F4] transition-colors"
          style={{ border: "1px solid #D8D8D8", borderRadius: 2 }}
        >
          ☆ Favoritar
        </button>
        <button
          aria-label="Contribuir com um documento"
          className="inline-flex items-center gap-2 px-5 py-2.5 font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#FAFAFA] hover:bg-[#2E2E2E] transition-colors"
          style={{ backgroundColor: "#0A0A0A", borderRadius: 2 }}
        >
          + Contribuir
        </button>
      </div>
    </header>
  );
}

/* ------------------------------- TABS ------------------------------- */

function Tabs() {
  const items = ["Visão Geral", "Categorias", "Coleções", "Frameworks", "Recentes", "Contribuições"];
  return (
    <nav
      className="sticky top-0 z-10 -mx-6 md:-mx-12 px-6 md:px-12 py-4 mt-10 bg-[#FAFAFA]/95 backdrop-blur"
      style={{ borderBottom: "1px solid #D8D8D8" }}
    >
      <ul className="flex gap-6 overflow-x-auto">
        {items.map((label, i) => (
          <li key={label}>
            <a
              href="#"
              className={`font-mono-newe text-[10px] tracking-[0.3em] uppercase whitespace-nowrap pb-1 ${
                i === 0 ? "text-[#0A0A0A] border-b border-[#0A0A0A]" : "text-[#6B6B6B] hover:text-[#0A0A0A]"
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ------------------------------ SEARCH ------------------------------ */

function Search() {
  return (
    <section className="mt-12">
      <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#6B6B6B]">
        Buscar na base
      </p>
      <div
        className="mt-4 flex items-center gap-3 px-5 py-4"
        style={{ border: "1px solid #D8D8D8", borderRadius: 2, backgroundColor: "#FAFAFA" }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-[#6B6B6B]">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <input
          type="text"
          placeholder="Buscar documentos, frameworks, autores..."
          className="flex-1 bg-transparent font-body font-light text-[14px] text-[#0A0A0A] placeholder:text-[#9A9A9A] outline-none"
        />
        <span className="font-mono-newe text-[8.5px] tracking-[0.3em] uppercase text-[#9A9A9A]">
          ⌘ K
        </span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {["Estratégia", "Urbanismo", "Marca", "Gente", "Processos", "Bem-estar"].map((t) => (
          <span
            key={t}
            className="font-mono-newe text-[8.5px] tracking-[0.3em] uppercase px-3 py-1.5 text-[#6B6B6B]"
            style={{ border: "1px solid #D8D8D8", borderRadius: 2 }}
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------- CATEGORIES ---------------------------- */

const CATEGORIES = [
  { tag: "01", title: "Estratégia & Negócio", desc: "PAR, planos, OKRs e direcionamento.", count: "18 docs" },
  { tag: "02", title: "Urbanismo Integrativo", desc: "Método, projetos e referências de campo.", count: "22 docs" },
  { tag: "03", title: "Marca & Comunicação", desc: "Brand Book, narrativa e diretrizes editoriais.", count: "14 docs" },
  { tag: "04", title: "Gente & Cultura", desc: "Trilhas, desenvolvimento, jornada do colaborador.", count: "12 docs" },
  { tag: "05", title: "Processos & Operação", desc: "Fluxos internos, checklists e SOPs.", count: "11 docs" },
  { tag: "06", title: "Bem-estar & Fitwel", desc: "Saúde, ambiente e qualidade de vida no trabalho.", count: "07 docs" },
];

function Categories() {
  return (
    <section className="mt-16">
      <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#6B6B6B]">
        Categorias
      </p>
      <h2 className="mt-2 mb-8 font-display font-light text-[26px] text-[#0A0A0A]">
        Como o conhecimento se organiza
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#D8D8D8]" style={{ border: "1px solid #D8D8D8" }}>
        {CATEGORIES.map((c) => (
          <a key={c.tag} href="#" className="group bg-[#FAFAFA] p-6 hover:bg-[#F7F6F4] transition-colors">
            <div className="flex items-baseline gap-4">
              <span className="font-display font-extralight text-[32px] text-[#C0C0C0] leading-none">
                {c.tag}
              </span>
              <div className="min-w-0">
                <h3 className="font-display font-light text-[18px] text-[#0A0A0A]">{c.title}</h3>
                <p className="mt-2 font-body font-extralight text-[13px] text-[#6B6B6B] leading-relaxed">
                  {c.desc}
                </p>
                <p className="mt-3 font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#9A9A9A]">
                  {c.count} · Explorar →
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- FEATURED ----------------------------- */

function Featured() {
  return (
    <section className="mt-16">
      <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#6B6B6B]">
        Em destaque
      </p>
      <h2 className="mt-2 mb-8 font-display font-light text-[26px] text-[#0A0A0A]">
        Leituras essenciais do mês
      </h2>
      <div
        className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-end"
        style={{ backgroundColor: "#0A0A0A", borderRadius: 2 }}
      >
        <div>
          <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#C0C0C0]">
            Coleção · Estratégia 2026
          </p>
          <h3 className="mt-4 font-display font-light text-[28px] text-[#F7F6F4] leading-tight">
            Plano Anual de Resultados — PAR 2026
          </h3>
          <p className="mt-4 font-body font-extralight text-[14px] text-[#9A9A9A] max-w-xl leading-relaxed">
            Os cinco pilares estratégicos, metas por empresa e o método de acompanhamento trimestral.
          </p>
          <div className="mt-5 flex items-center gap-4 font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#9A9A9A]">
            <span>06 documentos</span>
            <span>·</span>
            <span>Atualizado há 2 dias</span>
          </div>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 px-5 py-2.5 font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#F7F6F4] hover:bg-[#FAFAFA] hover:text-[#0A0A0A] transition-colors"
          style={{ border: "1px solid #C0C0C0", borderRadius: 2 }}
        >
          Abrir coleção →
        </a>
      </div>
    </section>
  );
}

/* ------------------------------ RECENT ------------------------------ */

const RECENT = [
  { title: "Diretrizes editoriais para apresentações executivas", cat: "Marca & Comunicação", author: "Ana M.", time: "Hoje" },
  { title: "Método Urbanismo Integrativo · v2.3", cat: "Urbanismo Integrativo", author: "Time de Projetos", time: "Ontem" },
  { title: "Política de remuneração variável 2026", cat: "Gente & Cultura", author: "RH", time: "3 dias" },
  { title: "Checklist de kickoff de obra", cat: "Processos & Operação", author: "Eng. Civil", time: "1 semana" },
  { title: "Estudo: bem-estar e produtividade no escritório", cat: "Bem-estar & Fitwel", author: "Fitwel", time: "2 semanas" },
];

function Recent() {
  return (
    <section className="mt-16">
      <div className="flex items-end justify-between mb-6">
        <div>
          <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#6B6B6B]">
            Atualizações
          </p>
          <h2 className="mt-2 font-display font-light text-[26px] text-[#0A0A0A]">
            Adicionado recentemente
          </h2>
        </div>
        <a href="#" className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#6B6B6B] hover:text-[#0A0A0A]">
          Ver tudo →
        </a>
      </div>
      <ul style={{ border: "1px solid #D8D8D8", borderRadius: 2, backgroundColor: "#FAFAFA" }}>
        {RECENT.map((r, i) => (
          <li
            key={i}
            className="px-6 py-5 grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b last:border-b-0 border-[#EBEBEB] hover:bg-[#F7F6F4] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-[#6B6B6B]">
              <path d="M6 3h9l3 3v15H6z" />
              <path d="M9 10h6M9 14h6M9 18h4" />
            </svg>
            <div className="min-w-0">
              <p className="font-body font-light text-[14px] text-[#0A0A0A]">{r.title}</p>
              <p className="mt-1 font-mono-newe text-[8.5px] tracking-[0.3em] uppercase text-[#9A9A9A]">
                {r.cat} · {r.author}
              </p>
            </div>
            <span className="font-mono-newe text-[8.5px] tracking-[0.25em] uppercase text-[#9A9A9A] shrink-0">
              {r.time}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------------------------- FRAMEWORKS ---------------------------- */

const FRAMEWORKS = [
  { num: "01", title: "Método Hyndra de Decisão", desc: "Estrutura de 5 passos para decisões estratégicas em projeto e operação." },
  { num: "02", title: "Mapa de Pertencimento", desc: "Ferramenta para diagnosticar e fortalecer vínculos em comunidades urbanas." },
  { num: "03", title: "Ciclo PAR", desc: "Cadência trimestral de planejamento, execução e revisão de resultados." },
  { num: "04", title: "Framework de Marca · Newe", desc: "Como expressar a marca em qualquer ponto de contato — interno ou externo." },
];

function Frameworks() {
  return (
    <section className="mt-16">
      <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#6B6B6B]">
        Frameworks proprietários
      </p>
      <h2 className="mt-2 mb-8 font-display font-light text-[26px] text-[#0A0A0A]">
        Como pensamos e operamos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FRAMEWORKS.map((f) => (
          <article
            key={f.num}
            className="p-6 bg-[#FAFAFA] flex gap-5"
            style={{ border: "1px solid #D8D8D8", borderRadius: 2 }}
          >
            <span className="font-display font-extralight text-[40px] text-[#C0C0C0] leading-none">
              {f.num}
            </span>
            <div>
              <h3 className="font-display font-light text-[18px] text-[#0A0A0A]">{f.title}</h3>
              <p className="mt-2 font-body font-extralight text-[13px] text-[#6B6B6B] leading-relaxed">
                {f.desc}
              </p>
              <a href="#" className="mt-3 inline-block font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#0A0A0A] hover:text-[#6B6B6B]">
                Abrir →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------- ASIDE ------------------------------ */

function Aside() {
  return (
    <aside className="hidden lg:block sticky top-24 self-start">
      <p className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#9A9A9A]">
        Nesta página
      </p>
      <ul className="mt-4 space-y-3">
        {["Buscar na base", "Categorias", "Em destaque", "Recentes", "Frameworks"].map((s) => (
          <li key={s}>
            <a href="#" className="font-body font-light text-[13px] text-[#6B6B6B] hover:text-[#0A0A0A]">
              {s}
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-10 font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#9A9A9A]">
        Principais autores
      </p>
      <ul className="mt-4 space-y-3">
        {["Time de Projetos", "RH · Gente", "Marca · Newe", "Fitwel", "Diretoria"].map((s) => (
          <li key={s} className="font-body font-light text-[13px] text-[#0A0A0A]">
            {s}
          </li>
        ))}
      </ul>

      <div className="mt-10 pt-6 border-t border-[#D8D8D8]">
        <p className="font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#9A9A9A]">
          Módulo · 02
        </p>
        <p className="mt-2 font-body font-light text-[12px] text-[#6B6B6B]">
          Atualizado hoje · Curadoria: Diretoria · Acesso: todos
        </p>
      </div>
    </aside>
  );
}