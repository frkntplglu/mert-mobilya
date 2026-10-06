import type { Metadata } from "next";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ContactForm } from "@/components/contact/ContactForm";
import { images } from "@/lib/data";
import { fullAddress, site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description: `Mert Mobilya Edirne iletişim bilgileri: adres, telefon, e-posta ve çalışma saatleri. Projeniz için hemen teklif alın.`,
  alternates: { canonical: "/iletisim/" },
};

const contactItems = [
  { icon: MapPin, label: "Adres", value: fullAddress, href: site.mapLink, external: true },
  { icon: Phone, label: "Telefon", value: site.phone, href: site.phoneHref },
  { icon: Mail, label: "E-posta", value: site.email, href: `mailto:${site.email}` },
  { icon: WhatsAppIcon, label: "WhatsApp", value: "Hemen yazın", href: whatsappLink(), external: true },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Projenizi dinlemeye hazırız."
        description="Atölyemizi ziyaret edebilir, bizi arayabilir ya da WhatsApp üzerinden yazabilirsiniz. Size en kısa sürede dönüş yapıyoruz."
        image={images.contactHero}
      />

      <section className="py-24 md:py-32">
        <Container>
          <Stagger className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {contactItems.map(({ icon: Icon, label, value, href, external }) => (
              <StaggerItem key={label} className="h-full">
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex h-full flex-col bg-cream p-8 transition-colors duration-500 hover:bg-ink"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="size-6 text-wood transition-colors duration-500 group-hover:text-wood-light" />
                    <ArrowUpRight
                      aria-hidden
                      className="size-4 text-muted transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cream"
                    />
                  </div>
                  <p className="eyebrow mt-10 text-muted transition-colors duration-500 group-hover:text-cream/60">
                    {label}
                  </p>
                  <p className="mt-3 font-medium transition-colors duration-500 group-hover:text-cream">
                    {value}
                  </p>
                </a>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-24 grid gap-16 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Bize yazın"
                title="Teklif ve bilgi talebi."
                description="Formu doldurun; mesajınız WhatsApp üzerinden doğrudan ekibimize ulaşsın."
              />
              <Reveal delay={0.2} className="mt-12 border-t border-line pt-8">
                <p className="flex items-center gap-3 text-sm font-semibold">
                  <Clock aria-hidden className="size-4 text-wood" />
                  Çalışma Saatleri
                </p>
                <dl className="mt-5 space-y-3 text-sm">
                  {site.hours.map((row) => (
                    <div key={row.days} className="flex justify-between gap-4 border-b border-line/70 pb-3">
                      <dt className="text-muted">{row.days}</dt>
                      <dd className="font-medium">{row.time}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
            <Reveal className="lg:col-span-7 lg:col-start-6" delay={0.1}>
              <div className="bg-white/60 p-8 md:p-12">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Reveal direction="none" duration={1.2}>
        <section aria-label="Konum haritası" className="relative h-[28rem] bg-sand md:h-[34rem]">
          <iframe
            title={`${site.name} konumu — ${site.address.city}`}
            src={site.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 size-full border-0 grayscale-[0.85] contrast-[1.05]"
          />
        </section>
      </Reveal>
    </>
  );
}
