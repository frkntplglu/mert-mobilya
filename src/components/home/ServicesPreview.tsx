import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { services } from "@/lib/data";

export function ServicesPreview() {
  return (
    <section className="py-24 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Hizmetlerimiz"
          title="Mekânınızın her köşesi için ahşap çözümler."
          description="Tek bir dolaptan anahtar teslim projelere kadar; tasarım, üretim ve montajı aynı çatı altında yürütüyoruz."
        />
        <Stagger className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {services.map((service, i) => (
            <StaggerItem key={service.slug} className="h-full">
              <Link
                href={`/hizmetlerimiz/#${service.slug}`}
                className="group relative flex h-full min-h-80 flex-col overflow-hidden bg-cream p-8 md:p-10"
              >
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="scale-110 object-cover opacity-0 transition-all duration-700 ease-out-expo group-hover:scale-100 group-hover:opacity-100"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-ink/80 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />
                <div className="relative flex items-start justify-between">
                  <ServiceIcon
                    name={service.icon}
                    className="size-10 text-wood transition-colors duration-500 group-hover:text-wood-light"
                  />
                  <span className="font-serif text-lg text-muted transition-colors duration-500 group-hover:text-cream/60">
                    0{i + 1}
                  </span>
                </div>
                <div className="relative mt-auto pt-12">
                  <h3 className="font-serif text-3xl font-medium transition-colors duration-500 group-hover:text-cream">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted transition-colors duration-500 group-hover:text-cream/75">
                    {service.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-wood transition-colors duration-500 group-hover:text-wood-light">
                    Detaylı bilgi
                    <ArrowRight aria-hidden className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
