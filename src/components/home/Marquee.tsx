"use client";

import { motion } from "motion/react";
import { materials } from "@/lib/data";

export function Marquee() {
  const row = [...materials, ...materials];

  return (
    <section aria-label="Çalıştığımız malzemeler" className="overflow-hidden bg-ink py-8 text-cream md:py-10">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        {row.map((material, i) => (
          <span
            key={`${material}-${i}`}
            aria-hidden={i >= materials.length}
            className="flex items-center font-serif text-3xl whitespace-nowrap italic md:text-5xl"
          >
            <span className="px-8 md:px-12">{material}</span>
            <span aria-hidden className="text-xl text-wood-light md:text-2xl">✦</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
