import { storyblokEditable } from "@storyblok/react";
import KontaktInfoCard from "./KontaktInfoCard";

export default function KontaktInfo({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)} className="flex flex-col gap-6">
      <h2 className="subtitle">{blok.subtitle}</h2>

      <div className="flex flex-col gap-4">
        {blok.items?.map((item: any) => (
          <KontaktInfoCard key={item._uid} blok={item} />
        ))}
      </div>
    </section>
  );
}
