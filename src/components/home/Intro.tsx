import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CountUp } from "@/components/motion/CountUp";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { images } from "@/lib/data";
import { yearsOfExperience } from "@/lib/site";

const points = [
  "Yerinde ölçü ve birebir ön görüşme",
  "Masif ahşaptan lake yüzeye geniş malzeme seçeneği",
  "Üretimden montaja tek elden süreç yönetimi",
];

export function Intro() {
  return (
    <section className="py-24 md:py-36">
      <Container className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="relative lg:col-span-6">
          <Reveal direction="none" duration={1.2}>
            <Parallax className="aspect-[4/5] w-full md:w-4/5" offset={50}>
              <Image
                src={images.craftsman}
                alt="Atölyede gönye testeresiyle çalışan usta"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </Parallax>
          </Reveal>
          <Reveal
            delay={0.25}
            className="absolute right-0 -bottom-10 hidden w-1/2 border-8 border-cream md:block"
          >
            <div className="relative aspect-square">
              <Image
                src={images.carving}
                alt="Ahşaba el işçiliğiyle oyma yapılması"
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal
            delay={0.4}
            className="absolute top-10 -left-2 bg-wood px-7 py-6 text-white md:-left-6"
          >
            <p className="font-serif text-5xl leading-none font-medium">
              <CountUp to={yearsOfExperience()} suffix="+" />
            </p>
            <p className="mt-2 text-xs font-semibold tracking-[0.2em] uppercase">Yıllık tecrübe</p>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <SectionHeading eyebrow="Hakkımızda" title="Usta ellerden, ömürlük mobilyalar." />
          <Reveal delay={0.2}>
            <p className="mt-8 leading-relaxed text-muted">
              Mert Mobilya, Edirne&apos;de küçük bir marangoz atölyesi olarak başladığı yolculuğuna
              bugün deneyimli ekibi ve modern makine parkuruyla devam ediyor. Her projeye ilk
              günkü heyecanla yaklaşıyor; ahşabın sıcaklığını titiz işçilikle buluşturuyoruz.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <ul className="mt-8 space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-4 text-sm font-medium">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center bg-ink text-cream">
                    <Check aria-hidden className="size-3" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.4}>
            <Button href="/hakkimizda/" variant="outline-dark" className="mt-10">
              Bizi Tanıyın
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
