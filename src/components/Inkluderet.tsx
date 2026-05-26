import { storyblokEditable } from "@storyblok/react";

export default function Inkluderet({ blok }: { blok: any }) {
  return (
    <section className="w-full" {...storyblokEditable(blok)}>
      <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
        <h2 className="subtitle">{blok.subtitle}</h2>
        <p className="bodytext">{blok.text}</p>
      </div>
    </section>
  );
}
