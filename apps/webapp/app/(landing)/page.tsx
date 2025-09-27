import HeroHeader from "@/components/home/hero-header";
import HeroLanding from "@/components/home/hero-landing";
import SetupLanding from "@/components/home/setup-landing";

export default function LandingPage() {
  return (
    <main>
      <HeroHeader />
      <HeroLanding />
      <SetupLanding />
    </main>
  );
}
