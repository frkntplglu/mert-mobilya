"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SplitText } from "@/components/motion/SplitText";
import { easeOutExpo } from "@/components/motion/easing";
import { images } from "@/lib/data";
import { site } from "@/lib/site";

const highlights = ["Ölçüye özel üretim", "Kendi atölyemizde", "Yerinde montaj"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-svh flex-col overflow-hidden bg-ink text-cream">
      <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: easeOutExpo }}
          className="absolute inset-0"
        >
          <Image
            src={images.hero}
            alt="Ahşap kapaklı modern mutfak"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/20" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/80 to-transparent" />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative flex flex-1 items-center">
        <Container className="pt-32 pb-16">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: easeOutExpo }}
            className="eyebrow flex items-center gap-3 text-wood-light"
          >
            <span aria-hidden className="h-px w-10 bg-wood-light" />
            Edirne · Kuruluş {site.foundedYear}
          </motion.p>
          <h1 className="mt-8 max-w-4xl font-serif text-5xl leading-[1.02] font-medium sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            <SplitText text="Ahşapta ustalık, yaşamınıza değer katan mobilyalar." delay={0.45} />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: easeOutExpo }}
            className="mt-8 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg"
          >
            Mutfaktan yatak odasına, ofisten iç kapılara kadar; mekânınıza özel tasarlayıp
            kendi atölyemizde ürettiğimiz mobilyalarla yaşam alanlarınızı dönüştürüyoruz.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3, ease: easeOutExpo }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="/urunler/">Ürünleri Keşfedin</Button>
            <Button href="/iletisim/" variant="outline-light">
              Teklif Alın
            </Button>
          </motion.div>
        </Container>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="relative border-t border-cream/15"
      >
        <Container className="flex items-center justify-between py-6">
          <ul className="flex flex-wrap gap-x-10 gap-y-2 text-sm text-cream/70">
            {highlights.map((item, i) => (
              <li key={item} className="flex items-center gap-3">
                <span className="font-serif text-wood-light">0{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
          <div aria-hidden className="hidden items-center gap-3 text-xs tracking-[0.3em] text-cream/60 uppercase md:flex">
            Kaydırın
            <span className="relative block h-10 w-px overflow-hidden bg-cream/20">
              <motion.span
                className="absolute inset-x-0 top-0 h-1/2 bg-wood-light"
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
          </div>
        </Container>
      </motion.div>
    </section>
  );
}
