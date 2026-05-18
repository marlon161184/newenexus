import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexus · Hyndra | Newe" },
      {
        name: "description",
        content:
          "Nexus — o sistema operacional cultural do grupo Hyndra | Newe. Cultura, conhecimento e pessoas em um só lugar.",
      },
    ],
  }),
  component: NexusHome,
});

function NexusHome() {
  return (
    <section className="px-6 md:px-12 py-16 md:py-24 max-w-5xl">
      <p className="font-mono-newe text-[10px] tracking-[0.35em] uppercase text-[#6B6B6B]">
        Bem-vindo de volta
      </p>
      <h1 className="mt-4 font-display font-light text-[44px] leading-[1.1] text-[#0A0A0A]">
        Olá, <span className="newe-placeholder-text">[Nome]</span>.
      </h1>
      <p className="mt-5 font-body font-extralight text-[18px] max-w-xl text-[#2E2E2E] leading-relaxed">
        Hoje é uma boa oportunidade para explorar o que o grupo sabe, faz e é.
      </p>

      <div
        className="mt-12 pl-6 py-6 max-w-2xl"
        style={{ borderLeft: "2px solid #C0C0C0" }}
      >
        <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#6B6B6B]">
          Valor do dia · Nosso Jeito de Ser
        </p>
        <p className="mt-3 font-display font-light italic text-[22px] text-[#1C1C1C] leading-snug">
          “Construímos com intenção. Cada detalhe carrega o propósito de quem somos.”
        </p>
        <p className="mt-3 font-body font-light text-[12px] text-[#6B6B6B]">
          Nosso Jeito de Ser · Hyndra Group
        </p>
      </div>

      <div className="mt-16 flex flex-wrap gap-3">
        <Link
          to="/onboarding"
          className="inline-flex items-center gap-2 px-5 py-2.5 font-mono-newe text-[9px] tracking-[0.3em] uppercase transition-colors hover:bg-[#0A0A0A] hover:text-[#FAFAFA]"
          style={{ border: "1px solid #0A0A0A", color: "#0A0A0A", borderRadius: 2 }}
        >
          Acessar Chegada · Newe Lovers →
        </Link>
      </div>

      <p className="mt-20 font-mono-newe text-[9px] tracking-[0.3em] uppercase text-[#9A9A9A]">
        Homepage do Nexus · Bloco 2 será montado na próxima sessão
      </p>
    </section>
  );
}