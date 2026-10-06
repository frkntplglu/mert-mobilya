import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { featuredProductIds, products } from "@/lib/data";

export function FeaturedProducts() {
  const featured = featuredProductIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p) => p !== undefined);

  return (
    <section className="bg-sand py-24 md:py-36">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Ürünlerimiz"
            title="Atölyemizden çıkan seçkin işler."
          />
          <Button href="/urunler/" variant="outline-dark" className="self-start md:self-auto">
            Tüm Ürünler
          </Button>
        </div>
        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
          {featured.map((product, i) => (
            <StaggerItem key={product.id} className={i % 2 === 1 ? "lg:mt-16" : ""}>
              <Link href="/urunler/" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-line">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-105"
                  />
                </div>
                <p className="eyebrow mt-5 text-wood">{product.category}</p>
                <h3 className="mt-2 font-serif text-2xl font-medium">{product.name}</h3>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
