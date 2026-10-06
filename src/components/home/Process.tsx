"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { easeOutExpo } from "@/components/motion/easing";
import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <section className="bg-ink py-24 text-cream md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Çalışma Sürecimiz"
          title="Fikirden montaja, dört net adım."
          description="Her projede aynı disiplinle ilerliyor, sizi her aşamada bilgilendiriyoruz."
          tone="light"
        />
        <ol className="mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {processSteps.map((step, i) => (
            <motion.li
              key={step.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delayChildren: i * 0.15 }}
              className="relative"
            >
              <motion.span
                aria-hidden
                variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
                transition={{ duration: 1.2, ease: easeOutExpo, delay: i * 0.15 }}
                className="block h-px origin-left bg-cream/20"
              />
              <motion.div
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.2 + i * 0.15 }}
              >
                <p className="mt-8 font-serif text-6xl font-medium text-wood-light">0{i + 1}</p>
                <h3 className="mt-6 font-serif text-2xl font-medium">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">{step.description}</p>
              </motion.div>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
