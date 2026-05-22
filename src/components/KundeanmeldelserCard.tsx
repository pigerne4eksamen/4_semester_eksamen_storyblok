import { storyblokEditable } from "@storyblok/react";
import { HiStar } from "react-icons/hi";

export default function KundeanmeldelserCard({ blok }: { blok: any }) {
  const rating = Number(blok.rating); // 🔥 vigtigt

  return (
    <div {...storyblokEditable(blok)}>
      <img src={blok.image?.filename} alt="image" />
      <h3>{blok.name}</h3>
      <p>{blok.text}</p>

      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <HiStar key={i} className="text-yellow-400" />
        ))}
      </div>
    </div>
  );
}
