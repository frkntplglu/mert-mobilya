import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { images } from "@/lib/data";
import { whatsappLink } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 text-cream md:py-40">
      <Parallax className="absolute inset-0" offset={90}>
        <Image src={images.cta} alt="" fill sizes="100vw" className="object-cover" />
      </Parallax>
      <div aria-hidden className="absolute inset-0 bg-ink/75" />
      <Container className="relative text-center">
        <Reveal>
          <p className="eyebrow text-wood-light">Projenizi konuşalım</p>
        </Reveal>
        <h2 className="mx-auto mt-6 max-w-4xl font-serif text-4xl leading-[1.05] font-medium md:text-6xl lg:text-7xl">
          <SplitText text="Hayalinizdeki mobilyayı birlikte tasarlayalım." inView stagger={0.05} />
        </h2>
        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 max-w-xl text-cream/75">
            Ölçü, malzeme ve bütçenize uygun çözümü birlikte belirleyelim. Size en kısa sürede
            dönüş yapalım.
          </p>
        </Reveal>
        <Reveal delay={0.4} className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href={whatsappLink("Merhaba, bir proje için teklif almak istiyorum.")} external>
            WhatsApp ile Yazın
          </Button>
          <Button href="/iletisim/" variant="outline-light">
            İletişim Bilgileri
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
