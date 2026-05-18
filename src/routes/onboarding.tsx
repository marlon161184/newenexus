import { createFileRoute } from "@tanstack/react-router";
import { InstitutionalSlides } from "@/components/newe/InstitutionalSlides";
import { Hero } from "@/components/sections/Hero";
import { NewLovers } from "@/components/sections/NewLovers";
import { Projects } from "@/components/sections/Projects";
import { Fitwel } from "@/components/sections/Fitwel";
import { Buddy } from "@/components/sections/Buddy";
import { UNewe } from "@/components/sections/UNewe";
import { Policies } from "@/components/sections/Policies";
import { OrgDesign } from "@/components/sections/OrgDesign";
import { Culture } from "@/components/sections/Culture";
import { BrandBook } from "@/components/sections/BrandBook";
import { Par2026 } from "@/components/sections/Par2026";
import { BrandJourney } from "@/components/sections/BrandJourney";
import { MktSalesTeam } from "@/components/sections/MktSalesTeam";
import { BrandingStatus } from "@/components/sections/BrandingStatus";
import { VivaEngage } from "@/components/sections/VivaEngage";

export const Route = createFileRoute("/onboarding")({
  head: () => ({
    meta: [
      { title: "Chegada · Newe Lovers — Nexus" },
      {
        name: "description",
        content:
          "A chegada de cada pessoa ao grupo Hyndra | Newe — um ritual, não um onboarding.",
      },
    ],
  }),
  component: OnboardingPage,
});

function OnboardingPage() {
  return (
    <main className="bg-[#F7F6F4] text-[#0A0A0A]">
      <InstitutionalSlides />
      <Hero />
      <NewLovers />
      <Projects />
      <Fitwel />
      <Buddy />
      <UNewe />
      <Policies />
      <OrgDesign />
      <Culture />
      <BrandBook />
      <Par2026 />
      <BrandJourney />
      <MktSalesTeam />
      <BrandingStatus />
      <VivaEngage />
      <footer className="bg-[#0A0A0A] text-[#9A9A9A] py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <div>
            <p className="font-mono-newe text-[10px] tracking-[0.3em] uppercase text-[#C0C0C0]">
              NEWE URBANISMO INTEGRATIVO
            </p>
            <p className="font-body font-light text-[12px] mt-3">© 2025 · Plataforma de Marca</p>
          </div>
          <p className="font-body font-light italic text-[12px] max-w-sm">
            "Habitar com intenção é o começo de tudo."
          </p>
        </div>
      </footer>
    </main>
  );
}