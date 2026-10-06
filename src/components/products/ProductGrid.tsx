"use client";

import Image from "next/image";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { useState } from "react";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { easeOutExpo } from "@/components/motion/easing";
import { productCategories, products, type ProductCategory } from "@/lib/data";
import { whatsappLink } from "@/lib/site";

type Filter = "Tümü" | ProductCategory;
const filters: Filter[] = ["Tümü", ...productCategories];

export function ProductGrid() {
  const [active, setActive] = useState<Filter>("Tümü");
  const visible = active === "Tümü" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      <LayoutGroup>
        <div
          role="tablist"
          aria-label="Ürün kategorileri"
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:px-0"
        >
          {filters.map((filter) => {
            const selected = filter === active;
            const count =
              filter === "Tümü" ? products.length : products.filter((p) => p.category === filter).length;
            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(filter)}
                className={`relative shrink-0 border px-5 py-3 text-sm font-medium transition-colors duration-300 ${
                  selected ? "border-ink text-cream" : "border-line text-muted hover:border-ink/40 hover:text-ink"
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="product-filter"
                    className="absolute inset-0 bg-ink"
                    transition={{ duration: 0.5, ease: easeOutExpo }}
                  />
                )}
                <span className="relative">
                  {filter}
                  <span className={`ml-2 text-xs ${selected ? "text-wood-light" : "text-muted/70"}`}>
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </LayoutGroup>

      <motion.ul layout className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((product) => (
            <motion.li
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.6, ease: easeOutExpo }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-line">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-cream/90 px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.2em] text-ink uppercase backdrop-blur">
                  {product.category}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-4 transition-transform duration-500 ease-out-expo [@media(hover:hover)]:translate-y-full [@media(hover:hover)]:group-focus-within:translate-y-0 [@media(hover:hover)]:group-hover:translate-y-0">
                  <a
                    href={whatsappLink(`Merhaba, "${product.name}" hakkında bilgi almak istiyorum.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 bg-ink py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-wood"
                  >
                    <WhatsAppIcon className="size-4" />
                    Bilgi Al
                  </a>
                </div>
              </div>
              <h3 className="mt-5 font-serif text-2xl font-medium">{product.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{product.description}</p>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
