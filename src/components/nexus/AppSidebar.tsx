import { Link, useRouterState } from "@tanstack/react-router";
import { NexusLogo } from "@/components/nexus/NexusLogo";

type NavItem = {
  label: string;
  to: string;
  shape: "home" | "circle" | "circle-small" | "triangle" | "square" | "diamond" | "circle-dashed" | "user" | "star";
};

const MAIN: NavItem[] = [
  { label: "Início", to: "/", shape: "home" },
];

const MODULES: NavItem[] = [
  { label: "Cultura", to: "/cultura", shape: "circle" },
  { label: "Pessoas", to: "/pessoas", shape: "triangle" },
  { label: "Conhecimento", to: "/conhecimento", shape: "circle-small" },
  { label: "Comunidade", to: "/comunidade", shape: "circle-dashed" },
  { label: "Governança", to: "/governanca", shape: "square" },
];

const PERSONAL: NavItem[] = [
  { label: "Meu Perfil", to: "/perfil", shape: "user" },
  { label: "Favoritos", to: "/favoritos", shape: "star" },
];

function ShapeIcon({ shape }: { shape: NavItem["shape"] }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (shape) {
    case "home":
      return (
        <svg {...common}>
          <path d="M4 11l8-7 8 7v9H4z" />
        </svg>
      );
    case "circle":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
    case "circle-small":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="6" />
        </svg>
      );
    case "triangle":
      return (
        <svg {...common}>
          <path d="M12 4l9 16H3z" />
        </svg>
      );
    case "square":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" />
        </svg>
      );
    case "diamond":
      return (
        <svg {...common}>
          <path d="M12 3l9 9-9 9-9-9z" />
        </svg>
      );
    case "circle-dashed":
      return (
        <svg {...common} strokeDasharray="3 3">
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
    case "user":
      return (
        <svg {...common}>
          <circle cx="12" cy="9" r="4" />
          <path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6" />
        </svg>
      );
    case "star":
      return (
        <svg {...common}>
          <path d="M12 4l2.4 5 5.6.8-4 3.9 1 5.6L12 16.8 6.9 19.3l1-5.6-4-3.9 5.6-.8z" />
        </svg>
      );
  }
}

function NavLink({ item, active }: { item: NavItem; active: boolean }) {
  return (
    <Link
      to={item.to}
      aria-label={item.label}
      className="group relative flex items-center gap-3 px-5 py-2.5 text-[12px] transition-colors duration-200"
      style={{
        backgroundColor: active ? "#1E1C1A" : "transparent",
        color: active ? "#E8E2D9" : "#7A7268",
      }}
    >
      {active && (
        <span
          aria-hidden
          className="absolute left-0 top-2 bottom-2 w-[2px]"
          style={{ backgroundColor: "#C0C0C0" }}
        />
      )}
      <span
        className="transition-colors"
        style={{ color: active ? "#C0C0C0" : "#6B6B6B" }}
      >
        <ShapeIcon shape={item.shape} />
      </span>
      <span className="font-body font-light">{item.label}</span>
    </Link>
  );
}

function Divider() {
  return <div className="my-3 h-px mx-5" style={{ backgroundColor: "#2E2E2E" }} />;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="px-5 pt-4 pb-2 font-mono-newe text-[9px] tracking-[0.3em] uppercase"
      style={{ color: "#6B6B6B" }}
    >
      {children}
    </p>
  );
}

export function AppSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(to + "/");

  return (
    <aside
      className="hidden lg:flex flex-col w-[240px] shrink-0 sticky top-0 h-screen"
      style={{
        backgroundColor: "#111110",
        borderRight: "1px solid #2E2E2E",
      }}
    >
      {/* Logo / brand */}
      <div className="px-5 pt-7 pb-5">
        <NexusLogo variant="negative" size="sm" withDescriptor={false} />
      </div>

      {/* User block */}
      <div className="mx-5 mb-2 pb-4" style={{ borderBottom: "1px solid #2E2E2E" }}>
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 flex items-center justify-center font-mono-newe text-[11px]"
            style={{
              border: "1px solid #2E2E2E",
              backgroundColor: "#1C1C1C",
              color: "#C0C0C0",
              borderRadius: 2,
            }}
            aria-hidden
          >
            N
          </div>
          <div className="min-w-0">
            <p className="font-body font-light text-[12px] truncate" style={{ color: "#E8E2D9" }}>
              [Nome do colaborador]
            </p>
            <p
              className="font-mono-newe text-[8.5px] tracking-[0.3em] uppercase truncate"
              style={{ color: "#6B6B6B" }}
            >
              [Cargo] · Online
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-2">
        {MAIN.map((item) => (
          <NavLink key={item.to} item={item} active={isActive(item.to)} />
        ))}
        <Divider />
        <SectionLabel>Módulos</SectionLabel>
        {MODULES.map((item) => (
          <NavLink key={item.to} item={item} active={isActive(item.to)} />
        ))}
        <Divider />
        <SectionLabel>Meu Espaço</SectionLabel>
        {PERSONAL.map((item) => (
          <NavLink key={item.to} item={item} active={isActive(item.to)} />
        ))}
      </nav>

      <div
        className="px-5 py-4"
        style={{ borderTop: "1px solid #2E2E2E" }}
      >
        <p
          className="font-mono-newe text-[8.5px] tracking-[0.3em] uppercase"
          style={{ color: "#6B6B6B" }}
        >
          Nexus v1.0
        </p>
        <p
          className="mt-1 font-mono-newe text-[8.5px] tracking-[0.25em] uppercase"
          style={{ color: "#4A4A4A" }}
        >
          Hyndra | Newe
        </p>
        <a
          href="https://newemanifesto.lovable.app"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center gap-2 group"
        >
          <span style={{ display: "block", width: 2, height: 18, backgroundColor: "#9DCA79", flexShrink: 0 }} />
          <p
            className="font-mono-newe text-[8px] tracking-[0.22em] uppercase transition-colors group-hover:text-white"
            style={{ color: "#6B6B6B" }}
          >
            Nosso Jeito de Ser ↗
          </p>
        </a>
      </div>
    </aside>
  );
}