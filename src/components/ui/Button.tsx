import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-sans uppercase tracking-wide2 text-xs font-medium transition-all duration-400 ease-luxe select-none min-h-[44px] px-6";

const variants: Record<Variant, string> = {
  primary:
    "bg-champagne text-black hover:bg-champagne-soft active:translate-y-px",
  outline:
    "border border-line text-warm-white hover:border-champagne hover:text-champagne",
  ghost: "text-warm-white hover:text-champagne",
};

const sizes: Record<Size, string> = {
  md: "h-11",
  lg: "h-14 px-8 text-[13px]",
};

export function buttonClass(variant: Variant = "primary", size: Size = "md", className = "") {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

/** Internal link styled as a button. */
export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className">) {
  return (
    <Link href={href} className={buttonClass(variant, size, className)} {...rest}>
      {children}
    </Link>
  );
}

/** External / action anchor styled as a button. */
export function ButtonAnchor({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"a">, "href" | "className">) {
  return (
    <a href={href} className={buttonClass(variant, size, className)} {...rest}>
      {children}
    </a>
  );
}
