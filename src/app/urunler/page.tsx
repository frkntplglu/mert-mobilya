import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductGrid } from "@/components/products/ProductGrid";
import { CtaBand } from "@/components/home/CtaBand";
import { images } from "@/lib/data";

export const metadata: Metadata = {
  title: "Ürünler",
  description:
    "Mert Mobilya atölyesinde üretilen mutfak, yatak odası, oturma odası, ofis ve banyo mobilyalarından örnekler.",
  alternates: { canonical: "/urunler/" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Ürünler"
        title="Her biri, bir mekâna özel."
        description="Aşağıdaki ürünler, atölyemizde ürettiğimiz işlerden örneklerdir. Tüm modeller ölçünüze, renk ve malzeme tercihinize göre yeniden üretilebilir."
        image={images.productsHero}
      />
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Koleksiyon"
            title="İlham alın, size özel üretelim."
            description="Beğendiğiniz ürün için 'Bilgi Al' butonuyla doğrudan WhatsApp üzerinden bize ulaşabilirsiniz."
            className="mb-14"
          />
          <ProductGrid />
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
