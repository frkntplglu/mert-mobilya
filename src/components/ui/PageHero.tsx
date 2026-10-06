import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { Container } from "./Container";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[72svh] items-end overflow-hidden bg-ink text-cream">
      <Parallax className="absolute inset-0" offset={60}>
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      </Parallax>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30"
      />
      <Container className="relative pt-40 pb-16 md:pb-24">
        <Reveal delay={0.1}>
          <nav aria-label="Sayfa yolu" className="flex items-center gap-2 text-sm text-cream/60">
            <Link href="/" className="transition-colors hover:text-cream">
              Anasayfa
            </Link>
            <ChevronRight aria-hidden className="size-3.5" />
            <span className="text-cream">{eyebrow}</span>
          </nav>
        </Reveal>
        <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.02] font-medium md:text-7xl lg:text-8xl">
          <SplitText text={title} delay={0.2} />
        </h1>
        {description && (
          <Reveal delay={0.5}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream/75 md:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
