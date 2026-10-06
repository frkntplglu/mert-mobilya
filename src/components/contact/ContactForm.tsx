"use client";

import { AnimatePresence, motion } from "motion/react";
import { Send } from "lucide-react";
import { useState } from "react";
import { services } from "@/lib/data";
import { whatsappLink } from "@/lib/site";

const fieldClass =
  "peer w-full border-0 border-b border-line bg-transparent px-0 pt-6 pb-3 text-base text-ink placeholder-transparent transition-colors focus:border-wood focus:ring-0 focus:outline-none";
const labelClass =
  "pointer-events-none absolute top-0 left-0 text-xs font-semibold tracking-[0.15em] text-muted uppercase transition-colors peer-focus:text-wood";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      "Merhaba, web siteniz üzerinden ulaşıyorum.",
      "",
      `Ad Soyad: ${data.get("name")}`,
      `Telefon: ${data.get("phone")}`,
      `Konu: ${data.get("subject")}`,
      "",
      String(data.get("message") ?? ""),
    ];
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-8 sm:grid-cols-2">
      <div className="relative">
        <input id="name" name="name" required autoComplete="name" placeholder="Ad Soyad" className={fieldClass} />
        <label htmlFor="name" className={labelClass}>
          Ad Soyad *
        </label>
      </div>
      <div className="relative">
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="Telefon"
          className={fieldClass}
        />
        <label htmlFor="phone" className={labelClass}>
          Telefon *
        </label>
      </div>
      <div className="relative sm:col-span-2">
        <select id="subject" name="subject" defaultValue="Genel bilgi" className={`${fieldClass} cursor-pointer`}>
          <option>Genel bilgi</option>
          {services.map((service) => (
            <option key={service.slug}>{service.title}</option>
          ))}
        </select>
        <label htmlFor="subject" className={labelClass}>
          Konu
        </label>
      </div>
      <div className="relative sm:col-span-2">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Mesajınız"
          className={`${fieldClass} resize-none`}
        />
        <label htmlFor="message" className={labelClass}>
          Mesajınız *
        </label>
      </div>
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-muted">
          Gönder&apos;e bastığınızda mesajınız WhatsApp üzerinden bize iletilmek üzere hazırlanır.
        </p>
        <motion.button
          type="submit"
          whileTap={{ scale: 0.97 }}
          className="group inline-flex shrink-0 items-center justify-center gap-3 bg-ink px-8 py-4 text-sm font-semibold text-cream transition-colors hover:bg-wood"
        >
          Mesajı Gönder
          <Send aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.button>
      </div>
      <AnimatePresence>
        {sent && (
          <motion.p
            role="status"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="border-l-2 border-wood bg-sand px-4 py-3 text-sm sm:col-span-2"
          >
            Teşekkürler! WhatsApp penceresi açıldı; mesajınızı göndererek bize ulaşabilirsiniz.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
