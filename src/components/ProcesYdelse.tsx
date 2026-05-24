import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default function ProcesYdelse({ blok }: { blok: any }) {
  return (
    <section className="md:px-25" {...storyblokEditable(blok)}>
      <div className="flex flex-col gap-6">
        <h2 className="text-[#282828] text-2xl font-bold md:text-4xl mx-10">{blok.subtitle}</h2>
        <p className="text-[#282828] font-normal max-w-3xl mx-10">{blok.text}</p>
        <div className="grid lg:grid-cols-3 gap-10">
          {blok.steps?.map((step: any) => (
            <StoryblokComponent key={step._uid} blok={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
