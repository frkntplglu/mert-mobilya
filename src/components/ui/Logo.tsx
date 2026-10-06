import Link from "next/link";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const text = tone === "light" ? "text-cream" : "text-ink";
  return (
    <Link href="/" aria-label="Mert Mobilya — Anasayfa" className={`group flex items-center gap-3 ${text}`}>
      <span
        aria-hidden
        className="grid size-10 place-items-center border border-current font-serif text-xl font-semibold transition-colors duration-500"
      >
        M
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-2xl font-semibold tracking-wide">Mert</span>
        <span className="mt-1 text-[0.6rem] font-semibold tracking-[0.42em] uppercase opacity-70">
          Mobilya
        </span>
      </span>
    </Link>
  );
}
