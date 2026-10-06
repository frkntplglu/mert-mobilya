"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { easeOutExpo } from "@/components/motion/easing";
import { navigation, site } from "@/lib/site";

const normalize = (path: string) => path.replace(/\/+$/, "") || "/";

export function Header() {
  const pathname = normalize(usePathname());
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(y > 400 && y > previous);
  });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled && !open;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: hidden && !open ? -100 : 0 }}
        transition={{ duration: 0.6, ease: easeOutExpo }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          solid ? "border-b border-line bg-cream/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <Container className="flex h-20 items-center justify-between md:h-24">
          <Logo tone={solid ? "dark" : "light"} />

          <nav aria-label="Ana menü" className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {navigation.map((item) => {
                const active = pathname === normalize(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative py-2 text-sm font-medium tracking-wide transition-colors ${
                        solid
                          ? active
                            ? "text-ink"
                            : "text-muted hover:text-ink"
                          : active
                            ? "text-white"
                            : "text-white/70 hover:text-white"
                      }`}
                    >
                      {item.label}
                      {active && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute inset-x-0 -bottom-0.5 h-px bg-wood"
                          transition={{ duration: 0.5, ease: easeOutExpo }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={site.phoneHref}
              className={`hidden items-center gap-2 text-sm font-semibold transition-colors xl:flex ${
                solid ? "text-ink" : "text-white"
              }`}
            >
              <Phone aria-hidden className="size-4 text-wood" />
              {site.phone}
            </a>
            <Link
              href="/iletisim/"
              className="hidden bg-wood px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-wood-dark md:inline-flex"
            >
              Teklif Alın
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
              className={`grid size-11 place-items-center lg:hidden ${
                solid ? "text-ink" : "text-white"
              }`}
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </Container>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
            className="fixed inset-0 z-40 flex flex-col bg-ink pt-28 pb-10 text-cream lg:hidden"
          >
            <Container className="flex flex-1 flex-col justify-between">
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
                }}
                className="flex flex-col"
              >
                {navigation.map((item, i) => (
                  <motion.li
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, y: 32 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutExpo } },
                    }}
                    className="border-b border-cream/10"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 py-5 font-serif text-4xl font-medium"
                    >
                      <span className="font-sans text-xs text-wood-light">0{i + 1}</span>
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.6 } }}
                className="space-y-2 text-sm text-cream/70"
              >
                <a href={site.phoneHref} className="block text-lg text-cream">
                  {site.phone}
                </a>
                <a href={`mailto:${site.email}`} className="block">
                  {site.email}
                </a>
                <p>
                  {site.address.district} / {site.address.city}
                </p>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
