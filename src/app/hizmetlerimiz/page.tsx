import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { Process } from "@/components/home/Process";
import { CtaBand } from "@/components/home/CtaBand";
import { images, services } from "@/lib/data";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Edirne'de mutfak dolabı, gardırop, iç kapı, ofis mobilyası, özel tasarım mobilya ve restorasyon hizmetleri.",
  alternates: { canonical: "/hizmetlerimiz/" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetlerimiz"
        title="Ölçüye özel, baştan sona ustalık."
        description="Tasarımdan üretime, teslimattan montaja kadar tüm süreci tek elden yönetiyor; her projeye aynı özeni gösteriyoruz."
        image={images.servicesHero}
      />

      <section className="py-24 md:py-36">
        <Container className="space-y-28 md:space-y-40">
          {services.map((service, i) => {
            const reversed = i % 2 === 1;
            return (
              <article
                key={service.slug}
                id={service.slug}
                className="grid scroll-mt-28 items-center gap-12 lg:grid-cols-12 lg:gap-16"
              >
                <Reveal
                  direction="none"
                  duration={1.2}
                  className={`lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}
                >
                  <Parallax className="aspect-[4/3]" offset={60}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="object-cover"
                    />
                  </Parallax>
                </Reveal>
                <div className={`lg:col-span-5 ${reversed ? "lg:order-1" : ""}`}>
                  <Reveal>
                    <div className="flex items-center gap-4">
                      <ServiceIcon name={service.icon} className="size-9 text-wood" />
                      <span className="font-serif text-lg text-muted">0{i + 1} / 0{services.length}</span>
                    </div>
                  </Reveal>
                  <Reveal delay={0.08}>
                    <h2 className="mt-6 font-serif text-4xl leading-tight font-medium md:text-5xl">
                      {service.title}
                    </h2>
                  </Reveal>
                  <Reveal delay={0.16}>
                    <p className="mt-6 leading-relaxed text-muted">{service.description}</p>
                  </Reveal>
                  <Reveal delay={0.24}>
                    <ul className="mt-8 grid gap-3 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm font-medium">
                          <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-wood" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                  <Reveal delay={0.32}>
                    <Button
                      href={whatsappLink(`Merhaba, ${service.title} hizmetiniz hakkında bilgi almak istiyorum.`)}
                      external
                      variant="outline-dark"
                      className="mt-10"
                    >
                      Teklif İsteyin
                    </Button>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </Container>
      </section>

      <Process />
      <CtaBand />
    </>
  );
}
