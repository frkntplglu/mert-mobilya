import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-svh items-center bg-ink text-cream">
      <Container className="py-40">
        <p className="eyebrow text-wood-light">Hata 404</p>
        <h1 className="mt-6 font-serif text-6xl font-medium md:text-8xl">Sayfa bulunamadı.</h1>
        <p className="mt-6 max-w-lg text-cream/70">
          Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir. Anasayfaya dönerek devam
          edebilirsiniz.
        </p>
        <Button href="/" className="mt-10">
          Anasayfaya Dön
        </Button>
      </Container>
    </section>
  );
}
