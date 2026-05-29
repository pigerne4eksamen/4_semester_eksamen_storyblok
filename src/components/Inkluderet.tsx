import { storyblokEditable } from "@storyblok/react";

export default function Inkluderet({ blok }: { blok: any }) {
  // Splitter teksten ved linjeskift og fjerner tomme linjer
  const listItems = blok.text ? blok.text.split("\n").filter((item: string) => item.trim() !== "") : [];

  return (
    <section {...storyblokEditable(blok)} className="md:bg-tertiary rounded-l-lg md:p-6 -mr-8 md:-mr-[155px] pr-4 md:pr-[155px] mb-6">
      <h2 className="subtitle mb-4">{blok.subtitle}</h2>

      {/* Erstatter <p> med en stylet liste */}
      <ul className="list-disc pl-5 space-y-2 bodytext">
        {listItems.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
