import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { Stats } from "@/components/home/Stats";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { Marquee } from "@/components/home/Marquee";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Process } from "@/components/home/Process";
import { CtaBand } from "@/components/home/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Stats />
      <ServicesPreview />
      <Marquee />
      <FeaturedProducts />
      <Process />
      <CtaBand />
    </>
  );
}
