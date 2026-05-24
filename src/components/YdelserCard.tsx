import Link from "next/link";
import { storyblokEditable } from "@storyblok/react";

const serviceLinks: Record<string, string> = {
  "badeværelser": "/badevaerelse",
  "badevaerelser": "/badevaerelse",
  "badeværelse": "/badevaerelse",
  "badevaerelse": "/badevaerelse",
  renovering: "/renovering",
  restaurering: "/restaurering",
  facade: "/facade",
};

const getServiceHref = (title?: string) => {
  const key = title?.trim().toLowerCase();

  if (!key) {
    return "#";
  }

  return serviceLinks[key] || "#";
};

export default function YdelserCard({ blok }: { blok: any }) {
  const href = getServiceHref(blok.sectiontitle);

  return (
    <Link
      href={href}
      {...storyblokEditable(blok)}
      className="group relative aspect-[290/391] cursor-pointer overflow-hidden rounded text-left"
      style={{ cursor: "pointer" }}
    >
      {blok.image?.filename && <img src={blok.image.filename} alt={blok.image.alt || blok.sectiontitle || ""} className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />}

      <div className="absolute inset-0 bg-black/35 transition-colors duration-300 group-hover:bg-black/50" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 text-center">
        <h3 className="font-serif text-2xl font-bold text-white">{blok.sectiontitle}</h3>

        <span
          className="cursor-pointer rounded bg-[#F5EDE0] px-6 py-2 text-base font-semibold text-[#282828] opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100"
          style={{ cursor: "pointer" }}
        >
          Læs mere
        </span>
      </div>
    </Link>
  );
}
