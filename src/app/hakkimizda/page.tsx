import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Stats } from "@/components/home/Stats";
import { CtaBand } from "@/components/home/CtaBand";
import { images, values } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: `${site.foundedYear} yılından bu yana Edirne'de ölçüye özel mobilya üreten Mert Mobilya'nın hikâyesi, değerleri ve çalışma anlayışı.`,
  alternates: { canonical: "/hakkimizda/" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="Ahşaba duyduğumuz saygıyla."
        description="Edirne'de bir marangoz atölyesinde başlayan hikâyemiz, bugün yüzlerce eve ve iş yerine değer katan projelerle sürüyor."
        image={images.aboutHero}
      />

      <section className="py-24 md:py-36">
        <Container className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Hikâyemiz" title="Bir atölyeden, güvenilir bir markaya." />
          </div>
          <div className="space-y-6 leading-relaxed text-muted lg:col-span-6 lg:col-start-7 lg:pt-14">
            <Reveal>
              <p className="font-serif text-2xl leading-snug text-ink md:text-3xl">
                Mert Mobilya, {site.foundedYear} yılında Edirne&apos;de, iyi işçiliğin her zaman
                fark yaratacağı inancıyla kuruldu.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                İlk günlerimizde birkaç tezgâh ve el aletiyle başladığımız üretimimizi; bugün CNC
                ve ebatlama makineleriyle donatılmış atölyemizde, alanında deneyimli ustalardan
                oluşan ekibimizle sürdürüyoruz. Değişmeyen tek şey, her işe gösterdiğimiz özen.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Mutfak dolaplarından gardıroplara, iç kapılardan ofis mobilyalarına kadar her
                projeyi yerinde ölçüyle başlatıyor, müşterimizin ihtiyacını dinleyerek
                tasarlıyor ve kendi atölyemizde üretiyoruz. Böylece kalite kontrolü baştan sona
                elimizde tutuyor, söz verdiğimiz tarihte teslim ediyoruz.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid gap-6 md:grid-cols-12">
            <Reveal className="md:col-span-7" direction="none" duration={1.2}>
              <Parallax className="aspect-[4/3]" offset={50}>
                <Image src={images.saw} alt="Atölyede ahşap kesimi" fill sizes="(min-width: 768px) 58vw, 100vw" className="object-cover" />
              </Parallax>
            </Reveal>
            <Reveal className="md:col-span-5 md:mt-24" delay={0.15} direction="none" duration={1.2}>
              <Parallax className="aspect-[4/5]" offset={70}>
                <Image src={images.lathe} alt="Torna tezgâhında ahşap işleme" fill sizes="(min-width: 768px) 42vw, 100vw" className="object-cover" />
              </Parallax>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-36">
        <Container className="grid gap-px border border-line bg-line md:grid-cols-2">
          <Reveal className="bg-cream p-10 md:p-14">
            <p className="eyebrow text-wood">Misyonumuz</p>
            <p className="mt-6 font-serif text-2xl leading-snug md:text-3xl">
              Yaşam ve çalışma alanlarına, işlevi ve estetiği bir araya getiren, uzun ömürlü
              mobilyalar kazandırmak.
            </p>
          </Reveal>
          <Reveal className="bg-cream p-10 md:p-14" delay={0.1}>
            <p className="eyebrow text-wood">Vizyonumuz</p>
            <p className="mt-6 font-serif text-2xl leading-snug md:text-3xl">
              Trakya&apos;da ölçüye özel mobilya denildiğinde akla gelen ilk ve en güvenilir marka
              olmak.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-sand py-24 md:py-36">
        <Container>
          <SectionHeading
            eyebrow="Değerlerimiz"
            title="Bizi biz yapan ilkeler."
            align="center"
          />
          <Stagger className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {values.map((value, i) => (
              <StaggerItem key={value.title} className="border-t border-ink/15 pt-8">
                <p className="font-serif text-xl text-wood">0{i + 1}</p>
                <h3 className="mt-4 font-serif text-2xl font-medium">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{value.description}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <div className="py-24 md:py-32">
        <Stats />
      </div>

      <CtaBand />
    </>
  );
}
