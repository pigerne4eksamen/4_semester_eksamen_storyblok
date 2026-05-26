import Link from "next/link";
import { storyblokEditable } from "@storyblok/react";

export default function YdelserCard({ blok }: { blok: any }) {
  const href = blok.link?.url || "#";

  return (
    <Link
      href={href}
      {...storyblokEditable(blok)}
      className="image-radius group relative aspect-[290/391] cursor-pointer overflow-hidden text-left"
    >
      {blok.image?.filename && (
        <img
          src={blok.image.filename}
          alt={blok.image.alt || blok.sectiontitle || ""}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      )}

      <div className="absolute inset-0 bg-tekst1/35 transition-colors duration-300 group-hover:bg-tekst1/50" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 text-center">
        <h3 className="sectiontitle text-tekst2">
          {blok.sectiontitle}
        </h3>

        <span className="rounded bg-primary px-6 py-2 text-base font-semibold text-tekst1 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
          Læs mere
        </span>
      </div>
    </Link>
  );
}
