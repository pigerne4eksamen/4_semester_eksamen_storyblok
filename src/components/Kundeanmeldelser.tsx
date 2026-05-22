import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default function Kundeanmeldelser({ blok }: { blok: any }) {
  return (
    <section className="w-full" {...storyblokEditable(blok)}>
      <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
        <h2>{blok.subtitle}</h2>
        <p>{blok.text}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blok.reviews?.map((review: any) => (
            <StoryblokComponent key={review._uid} blok={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
