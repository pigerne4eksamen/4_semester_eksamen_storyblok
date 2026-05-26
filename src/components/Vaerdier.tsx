import { storyblokEditable } from "@storyblok/react";
import VaerdiCard from "./VaerdiCard";

export default function Vaerdier({ blok }: { blok: any }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="bg-primary px-8 py-16 md:px-20 md:py-20 lg:px-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-20 max-w-xl text-center">
          <h2 className="subtitle mb-6 text-tekst1">
            {blok.subtitle}
          </h2>
          <p className="bodytext whitespace-pre-line text-tekst1/80">
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
