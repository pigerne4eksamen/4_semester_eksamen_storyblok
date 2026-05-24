import { storyblokEditable } from "@storyblok/react";
import KundeanmeldelserCard from "./KundeanmeldelserCard";

export default function Kundeanmeldelser({ blok }: { blok: any }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="bg-[#DDE0D3] px-8 py-16 md:px-20 md:py-20 lg:px-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-md text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-[#282828] md:text-4xl">
            {blok.subtitle}
          </h2>
          <p className="whitespace-pre-line text-base leading-tight text-[#505050] md:text-lg">
            {blok.text}
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3 md:gap-16">
          {blok.reviews?.map((review: any) => (
            <KundeanmeldelserCard key={review._uid} blok={review} />
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
