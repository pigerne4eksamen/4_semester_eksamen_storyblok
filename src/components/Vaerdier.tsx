import { storyblokEditable } from "@storyblok/react";
import VaerdiCard from "./VaerdiCard";

export default function Vaerdier({ blok }: { blok: any }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="bg-[#F5EDE0] px-8 py-16 md:px-20 md:py-20 lg:px-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-20 max-w-xl text-center">
          <h2 className="mb-6 font-serif text-4xl font-bold text-[#282828]">
            {blok.subtitle}
          </h2>
          <p className="whitespace-pre-line text-xl leading-snug text-[#505050]">
            {blok.text}
          </p>
        </div>

        <div className="grid gap-14 md:grid-cols-3 md:gap-20">
          {blok.cards?.map((card: any) => (
            <VaerdiCard key={card._uid} blok={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
