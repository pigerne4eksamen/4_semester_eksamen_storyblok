import Link from "next/link";
import { storyblokEditable } from "@storyblok/react";

const variants = {
  primary: "bg-[var(--cta)] text-[var(--tekst2)] border-[var(--cta)] hover:brightness-90 font-montserrat",
  secondary: "bg-[var(--cta)] text-[var(--tekst2)] border-[var(--cta)] hover:brightness-90 font-montserrat",
  outline: "bg-transparent text-[var(--cta)] border-[var(--cta)] hover:bg-[var(--cta)] hover:text-[var(--tekst2)] font-montserrat",
};

export default function Button({ blok }: { blok: any }) {
  const variant = String(blok.variant || "primary")
    .trim()
    .toLowerCase();
  const variantClass = variants[variant as keyof typeof variants] || variants.primary;

  return (
    <Link
      {...storyblokEditable(blok)}
      href={blok.link?.cached_url || "/"}
      className={`
       relative z-20
        inline-flex w-fit items-center justify-center
        rounded-md border px-6 py-3 text-lg font-medium
        transition hover:brightness-90
        ${variantClass}
      `}
    >
      {blok.text}
    </Link>
  );
}
