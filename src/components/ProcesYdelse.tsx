import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default function ProcesYdelse({ blok }: { blok: any }) {
  return (
    <section className="px-8 md:px-[155px]" {...storyblokEditable(blok)}>
      <div className="flex flex-col gap-6">
        <h2 className="subtitle text-tekst1">{blok.subtitle}</h2>
        <p className="bodytext text-tekst1">{blok.text}</p>
        <div className="grid lg:grid-cols-3 gap-10">
          {blok.steps?.map((step: any) => (
            <StoryblokComponent key={step._uid} blok={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
