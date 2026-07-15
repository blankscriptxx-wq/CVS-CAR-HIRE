import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as = "h2",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  children?: ReactNode;
}) {
  const Tag = as;
  return (
    <Reveal
      className={`flex flex-col ${align === "center" ? "items-center text-center" : "items-start"}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag className="mt-4 text-display-sm font-display text-warm-white">{title}</Tag>
      {intro && (
        <p
          className={`mt-5 text-base leading-relaxed text-silver ${
            align === "center" ? "max-w-2xl" : "max-w-xl"
          }`}
        >
          {intro}
        </p>
      )}
      {children}
    </Reveal>
  );
}
