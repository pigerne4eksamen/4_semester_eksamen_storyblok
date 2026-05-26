import { storyblokEditable } from "@storyblok/react";

export default function ProcesYdelseCard({ blok }: { blok: any }) {
  return (
    <div className="bg-tertiary rounded-md shadow-xl p-10 mx-10 md:p-6" {...storyblokEditable(blok)}>
      <div className="flex flex-row gap-4">
        <h1 className="title text-secondary">{blok.number}</h1>
        <div>
          <h3 className="sectiontitle text-secondary">{blok.subtitle}</h3>
          <p className="bodytext text-tekst1">{blok.text}</p>
        </div>
      </div>
    </div>
  );
}
