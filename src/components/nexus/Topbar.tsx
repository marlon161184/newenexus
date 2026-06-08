import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { NexusLogo } from "@/components/nexus/NexusLogo";

const LABELS: Record<string, string> = {
  "": "Início",
  onboarding: "Chegada · Newe Lovers",
  cultura: "Cultura",
  conhecimento: "Conhecimento",
  pessoas: "Pessoas",
  governanca: "Governança",
  workspace: "Workspace",
  comunidade: "Comunidade",
  perfil: "Meu Perfil",
  favoritos: "Favoritos",
};

function useCrumbs(): string[] {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname === "/") return ["Nexus", "Início"];
  const parts = pathname.split("/").filter(Boolean);
  return ["Nexus", ...parts.map((p) => LABELS[p] ?? p)];
}

type SearchItem = {
  name: string;
  kind: "Produto" | "Módulo";
  url?: string;
  anchor?: string;
};

const SEARCH_ITEMS: SearchItem[] = [
  { name: "Nosso Jeito de Ser", kind: "Produto", url: "https://cultura-nossojeitodeser.lovable.app" },
  { name: "All Aboard", kind: "Produto", url: "https://allaboardnewe.lovable.app" },
  { name: "PAR 2026", kind: "Produto", url: "https://par-hyndra-newe.lovable.app" },
  { name: "Decidir com Intenção", kind: "Produto", url: "https://decidircomintencao.lovable.app" },
  { name: "Academia de Líderes Newe", kind: "Produto", url: "https://academiadelideresnewe.lovable.app" },
  { name: "Academia de Vendas Newe", kind: "Produto", url: "https://academiadevendasnewe.lovable.app" },
  { name: "HYNstaNewe", kind: "Produto", url: "https://hynstanewe.lovable.app" },
  { name: "Habitar a Estrutura", kind: "Produto", url: "https://habitaraestrutura.lovable.app" },
  { name: "Plataforma de Marca", kind: "Produto", url: "https://brandbook-newe.lovable.app" },
  { name: "HUB Hyndra", kind: "Produto", url: "https://hub-hyndra.lovable.app" },
  { name: "Ciclo de Gente", kind: "Produto", url: "https://ciclodegentenexus.lovable.app/" },
  { name: "OKRs 2026", kind: "Produto", url: "https://okr-hyndra.lovable.app" },
  { name: "Cultura", kind: "Módulo", anchor: "modulos" },
  { name: "Pessoas", kind: "Módulo", anchor: "modulos" },
  { name: "Conhecimento", kind: "Módulo", anchor: "modulos" },
  { name: "Comunidade", kind: "Módulo", anchor: "modulos" },
  { name: "Governança", kind: "Módulo", anchor: "modulos" },
];

const MODULE_OPTIONS = ["Cultura", "Pessoas", "Conhecimento", "Comunidade", "Governança"];

function normalize(s: string) {
  return s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
}

export function Topbar() {
  const crumbs = useCrumbs();
  const [searchOpen, setSearchOpen] = useState(false);
  const [contribOpen, setContribOpen] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      } else if (e.key === "Escape") {
        setSearchOpen(false);
        setContribOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
    <header
      className="sticky top-0 z-30 flex items-center gap-5 px-5 lg:px-8 h-16"
      style={{
        backgroundColor: "#0A0A0A",
        borderBottom: "1px solid #1C1C1C",
      }}
    >
      <Link to="/" aria-label="Nexus · Início" className="shrink-0">
        <NexusLogo variant="negative" size="sm" withDescriptor={false} />
      </Link>
      <span aria-hidden className="h-7 w-px shrink-0" style={{ backgroundColor: "#2E2E2E" }} />
      <nav aria-label="Breadcrumb" className="min-w-0 flex-1">
        <ol className="flex items-center gap-2 overflow-hidden">
          {crumbs.map((c, i) => (
            <li
              key={`${c}-${i}`}
              className="font-mono-newe text-[10px] tracking-[0.3em] uppercase truncate"
              style={{ color: i === crumbs.length - 1 ? "#9DCA79" : "#6B6B6B" }}
            >
              {i > 0 && <span className="mr-2 text-[#3A3A3A]">/</span>}
              {c}
            </li>
          ))}
        </ol>
      </nav>

      <button
        type="button"
        onClick={() => setSearchOpen(true)}
        className="hidden md:flex items-center gap-3 px-3 h-9 w-[320px]"
        style={{
          backgroundColor: "#111110",
          border: "1px solid #2E2E2E",
          borderRadius: 2,
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9DCA79" strokeWidth="1.2">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
        <span className="flex-1 text-left font-body font-light text-[12px] text-[#6B6B6B]">
          Buscar no Nexus...
        </span>
        <kbd
          className="font-mono-newe text-[9px] tracking-[0.2em] uppercase px-1.5 py-0.5"
          style={{ color: "#9DCA79", border: "1px solid #2E2E2E", borderRadius: 2 }}
        >
          ⌘K
        </kbd>
      </button>

      <button
        type="button"
        onClick={() => setContribOpen(true)}
        aria-label="Contribuir com o Nexus"
        className="inline-flex items-center gap-2 px-4 h-9 transition-colors hover:bg-[#9DCA79] hover:text-[#0A0A0A]"
        style={{
          border: "1px solid #9DCA79",
          color: "#9DCA79",
          borderRadius: 2,
        }}
      >
        <span className="font-mono-newe text-[9px] tracking-[0.3em] uppercase">+ Contribuir</span>
      </button>

    </header>

      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
      {contribOpen && <ContributeModal onClose={() => setContribOpen(false)} />}
    </>
  );
}

function SearchModal({ onClose }: { onClose: () => void }) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const results = useMemo(() => {
    const nq = normalize(q.trim());
    if (!nq) return SEARCH_ITEMS;
    return SEARCH_ITEMS.filter((i) => normalize(i.name).includes(nq));
  }, [q]);

  const handlePick = (item: SearchItem) => {
    if (item.url) {
      window.open(item.url, "_blank", "noopener,noreferrer");
    } else if (item.anchor) {
      const el = document.getElementById(item.anchor);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[12vh] px-4"
      style={{ backgroundColor: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-[560px]"
        style={{ backgroundColor: "#1C1C1C", border: "1px solid #2E2E2E", borderRadius: 2 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 h-12 border-b" style={{ borderColor: "#2E2E2E" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9DCA79" strokeWidth="1.2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Pesquisar módulos, produtos..."
            className="flex-1 bg-transparent outline-none font-body font-light text-[14px] text-[#F7F6F4] placeholder:text-[#6B6B6B]"
          />
          <kbd
            className="font-mono-newe text-[9px] tracking-[0.2em] uppercase px-1.5 py-0.5"
            style={{ color: "#6B6B6B", border: "1px solid #2E2E2E", borderRadius: 2 }}
          >
            ESC
          </kbd>
        </div>
        <ul className="max-h-[50vh] overflow-y-auto py-2">
          {results.length === 0 ? (
            <li className="px-4 py-6 text-center font-body font-light text-[12px]" style={{ color: "#6B6B6B" }}>
              Nenhum resultado.
            </li>
          ) : (
            results.map((r) => (
              <li key={`${r.kind}-${r.name}`}>
                <button
                  onClick={() => handlePick(r)}
                  className="w-full flex items-center justify-between gap-3 px-4 py-2.5 text-left transition-colors hover:bg-[#111110]"
                >
                  <span className="font-body text-[13px]" style={{ color: "#F7F6F4" }}>
                    {r.name}
                  </span>
                  <span
                    className="font-mono-newe text-[8px] tracking-[0.3em] uppercase px-1.5 py-0.5"
                    style={{
                      color: r.kind === "Produto" ? "#9DCA79" : "#6B6B6B",
                      border: "1px solid #2E2E2E",
                      borderRadius: 2,
                    }}
                  >
                    {r.kind}
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

function ContributeModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ nome: "", email: "", area: "", contribuicao: "" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("https://formspree.io/f/mredyagj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: form.nome,
          email: form.email,
          modulo: form.area,
          contribuicao: form.contribuicao,
        }),
      });
      if (!res.ok) throw new Error("fail");
      setSent(true);
      setTimeout(() => onClose(), 3000);
    } catch {
      setError("Algo deu errado. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  };

  const fieldStyle = {
    backgroundColor: "#111110",
    border: "1px solid #2E2E2E",
    borderRadius: 2,
    color: "#F7F6F4",
  } as const;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[8vh] px-4"
      style={{ backgroundColor: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-[520px] p-6"
        style={{ backgroundColor: "#1C1C1C", border: "1px solid #2E2E2E", borderRadius: 2 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-1">
          <p className="font-mono-newe text-[9px] tracking-[0.3em] uppercase" style={{ color: "#9DCA79" }}>
            Nexus
          </p>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="text-[#6B6B6B] hover:text-[#F7F6F4] text-lg leading-none"
          >
            ×
          </button>
        </div>
        <h2 className="font-display font-extralight text-[22px] mb-5" style={{ color: "#F7F6F4" }}>
          Contribuir com o Nexus
        </h2>

        {sent ? (
          <div
            className="px-4 py-6 text-center"
            style={{ border: "1px solid #2E2E2E", borderRadius: 2 }}
          >
            <p className="font-body text-[14px]" style={{ color: "#9DCA79" }}>
              Contribuição recebida. Obrigado por construir o Nexus.
            </p>
          </div>
        ) : (
          <form onSubmit={submit} className="flex flex-col gap-3">
            <input
              required
              placeholder="Nome"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              maxLength={100}
              className="h-10 px-3 outline-none font-body font-light text-[13px] placeholder:text-[#6B6B6B]"
              style={fieldStyle}
            />
            <input
              required
              type="email"
              placeholder="E-mail"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
              className="h-10 px-3 outline-none font-body font-light text-[13px] placeholder:text-[#6B6B6B]"
              style={fieldStyle}
            />
            <select
              required
              value={form.area}
              onChange={(e) => setForm({ ...form, area: e.target.value })}
              className="h-10 px-3 outline-none font-body font-light text-[13px]"
              style={fieldStyle}
            >
              <option value="" disabled>
                Área / Módulo
              </option>
              {MODULE_OPTIONS.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
            <textarea
              required
              placeholder="Sua contribuição (ideia, conteúdo, sugestão)"
              value={form.contribuicao}
              onChange={(e) => setForm({ ...form, contribuicao: e.target.value })}
              maxLength={2000}
              rows={5}
              className="px-3 py-2 outline-none font-body font-light text-[13px] placeholder:text-[#6B6B6B] resize-none"
              style={fieldStyle}
            />
            <button
              type="submit"
              disabled={submitting}
              className="h-10 mt-1 font-mono-newe text-[10px] tracking-[0.3em] uppercase transition-colors disabled:opacity-60"
              style={{
                backgroundColor: "#9DCA79",
                color: "#0A0A0A",
                border: "1px solid #9DCA79",
                borderRadius: 2,
              }}
            >
              {submitting ? "Enviando..." : "Enviar contribuição"}
            </button>
            {error && (
              <p className="font-body font-light text-[12px] text-center" style={{ color: "#c45c5c" }}>
                {error}
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}