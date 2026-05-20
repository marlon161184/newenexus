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

export function Topbar() {
  const crumbs = useCrumbs();

  return (
    <header
      className="sticky top-0 z-30 flex items-center gap-5 px-5 lg:px-8 h-16"
      style={{
        backgroundColor: "#F7F6F4",
        borderBottom: "1px solid #D8D8D8",
      }}
    >
      <Link to="/" aria-label="Nexus · Início" className="shrink-0">
        <NexusLogo variant="positive" size="sm" withDescriptor />
      </Link>
      <span aria-hidden className="h-7 w-px shrink-0" style={{ backgroundColor: "#D8D8D8" }} />
      <nav aria-label="Breadcrumb" className="min-w-0 flex-1">
        <ol className="flex items-center gap-2 overflow-hidden">
          {crumbs.map((c, i) => (
            <li
              key={`${c}-${i}`}
              className="font-mono-newe text-[10px] tracking-[0.3em] uppercase truncate"
              style={{ color: i === crumbs.length - 1 ? "#2E2E2E" : "#6B6B6B" }}
            >
              {i > 0 && <span className="mr-2 text-[#9A9A9A]">/</span>}
              {c}
            </li>
          ))}
        </ol>
      </nav>

      <label
        className="hidden md:flex items-center gap-3 px-3 h-9 w-[320px]"
        style={{
          backgroundColor: "#FAFAFA",
          border: "1px solid #D8D8D8",
          borderRadius: 2,
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth="1.2">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
        <input
          type="search"
          placeholder="Buscar no Nexus..."
          aria-label="Buscar no Nexus"
          className="flex-1 bg-transparent outline-none font-body font-light text-[12px] text-[#2E2E2E] placeholder:text-[#9A9A9A]"
        />
        <kbd
          className="font-mono-newe text-[9px] tracking-[0.2em] uppercase px-1.5 py-0.5"
          style={{ color: "#6B6B6B", border: "1px solid #D8D8D8", borderRadius: 2 }}
        >
          ⌘K
        </kbd>
      </label>

      <a
        href="#"
        aria-label="Contribuir com o Nexus"
        className="inline-flex items-center gap-2 px-4 h-9 transition-colors hover:bg-[#0A0A0A] hover:text-[#FAFAFA]"
        style={{
          border: "1px solid #0A0A0A",
          color: "#0A0A0A",
          borderRadius: 2,
        }}
      >
        <span className="font-mono-newe text-[9px] tracking-[0.3em] uppercase">+ Contribuir</span>
      </a>

      <button
        aria-label="Notificações"
        className="hidden md:inline-flex items-center justify-center w-9 h-9 transition-colors hover:bg-[#EBEBEB]"
        style={{ border: "1px solid #D8D8D8", borderRadius: 2, color: "#2E2E2E" }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9z" />
          <path d="M10 21a2 2 0 004 0" />
        </svg>
      </button>
    </header>
  );
}