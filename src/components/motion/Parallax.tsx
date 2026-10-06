"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

// Kapsayıcı içindeki içeriği scroll'a bağlı olarak dikeyde hafifçe kaydırır.
// İçerik, kayma payı için kapsayıcıdan biraz daha uzun tutulur.
export function Parallax({
  children,
  className,
  offset = 80,
}: {
  children: React.ReactNode;
  className?: string;
  offset?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.div
        style={{ y, top: -offset, bottom: -offset }}
        className="absolute inset-x-0"
      >
        {children}
      </motion.div>
    </div>
  );
}
