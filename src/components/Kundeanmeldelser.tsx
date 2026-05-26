import { storyblokEditable } from "@storyblok/react";
import KundeanmeldelserCard from "./KundeanmeldelserCard";

export default function Kundeanmeldelser({ blok }: { blok: any }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="bg-tertiary px-8 py-16 md:px-20 md:py-20 lg:px-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-md text-center">
          <h2 className="subtitle mb-4 text-tekst1">
            {blok.subtitle}
          </h2>
          <p className="bodytext whitespace-pre-line text-tekst1/80">
            {blok.text}
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3 md:gap-16">
          {blok.reviews?.map((review: any) => (
            <KundeanmeldelserCard key={review._uid} blok={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
