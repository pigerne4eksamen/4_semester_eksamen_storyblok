import { storyblokEditable } from "@storyblok/react";
import YdelserCard from "./YdelserCard";

export default function Ydelser({ blok }: { blok: any }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="bg-[#F5EDE0] px-8 py-14 md:px-20 lg:px-36"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-7 font-serif text-4xl font-bold text-[#282828]">
          {blok.subtitle}
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {blok.services?.map((service: any) => (
            <YdelserCard key={service._uid} blok={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
