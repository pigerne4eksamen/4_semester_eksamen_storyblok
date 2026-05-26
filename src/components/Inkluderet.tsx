import { storyblokEditable } from "@storyblok/react";

export default function Inkluderet({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)} className="bg-tertiary rounded-l-lg h-[379px] p-6 -mr-8 md:-mr-[155px] pr-4 md:pr-[155px] mb-6">
      <h2 className="subtitle mb-4">{blok.subtitle}</h2>

      <p className="bodytext">{blok.text}</p>
    </section>
  );
}
