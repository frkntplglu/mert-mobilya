import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "dark" | "outline-light" | "outline-dark";

const variants: Record<Variant, string> = {
  primary: "bg-wood text-white hover:bg-wood-dark",
  dark: "bg-ink text-cream hover:bg-ink-soft",
  "outline-light": "border border-white/40 text-white hover:bg-white hover:text-ink",
  "outline-dark": "border border-ink/25 text-ink hover:bg-ink hover:text-cream",
};

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  icon?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  icon = true,
}: ButtonProps) {
  const classes = `group inline-flex items-center justify-center gap-3 px-7 py-4 text-sm font-semibold tracking-wide transition-colors duration-300 ${variants[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          aria-hidden
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
