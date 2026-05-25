import Link from "next/link";
import { storyblokEditable } from "@storyblok/react";

const getHref = (link: any) => {
  const href = link?.cached_url || link?.url;

  if (!href) {
    return "#";
  }

  if (href.startsWith("/") || href.startsWith("http")) {
    return href;
  }

  return `/${href}`;
};

export default function KontaktForside({ blok }: { blok: any }) {
  const href = getHref(blok.button_link);

  return (
    <section
      {...storyblokEditable(blok)}
      className="bg-[#F5EDE0] px-8 py-24 md:px-20 md:py-32 lg:px-36"
    >
      <div className="mx-auto flex max-w-sm flex-col items-center text-center">
        <h2 className="mb-4 font-serif text-3xl font-bold text-[#282828]">
          {blok.subtitle}
        </h2>

        <p className="mb-7 whitespace-pre-line text-base leading-tight text-[#505050]">
          {blok.text}
        </p>

        {blok.button_text && (
          <Link
            href={href}
            className="cursor-pointer rounded bg-[#C84732] px-8 py-3 text-lg font-semibold text-white shadow-md"
            style={{ cursor: "pointer" }}
          >
            {blok.button_text}
          </Link>
        )}
      </div>
    </section>
  );
}
