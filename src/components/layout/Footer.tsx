import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { FacebookIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import { services } from "@/lib/data";
import { fullAddress, navigation, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream">
      <Container className="grid gap-14 py-20 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <Logo tone="light" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/60">
            {site.foundedYear} yılından bu yana Edirne&apos;de, ölçüye özel mobilya ve
            marangozluk çözümleri üretiyoruz.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid size-10 place-items-center border border-cream/15 transition-colors hover:border-wood hover:bg-wood"
            >
              <InstagramIcon className="size-4" />
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid size-10 place-items-center border border-cream/15 transition-colors hover:border-wood hover:bg-wood"
            >
              <FacebookIcon className="size-4" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="eyebrow text-wood-light">Kurumsal</h3>
          <ul className="mt-6 space-y-3 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-cream/70 transition-colors hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="eyebrow text-wood-light">Hizmetlerimiz</h3>
          <ul className="mt-6 space-y-3 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/hizmetlerimiz/#${service.slug}`}
                  className="text-cream/70 transition-colors hover:text-cream"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="eyebrow text-wood-light">İletişim</h3>
          <ul className="mt-6 space-y-4 text-sm text-cream/70">
            <li className="flex gap-3">
              <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-wood-light" />
              <span>{fullAddress}</span>
            </li>
            <li>
              <a href={site.phoneHref} className="flex gap-3 transition-colors hover:text-cream">
                <Phone aria-hidden className="mt-0.5 size-4 shrink-0 text-wood-light" />
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex gap-3 transition-colors hover:text-cream">
                <Mail aria-hidden className="mt-0.5 size-4 shrink-0 text-wood-light" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-cream/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-cream/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. Tüm hakları saklıdır.
          </p>
          <p>Edirne · Ölçüye özel mobilya ve marangozluk</p>
        </Container>
      </div>
    </footer>
  );
}
