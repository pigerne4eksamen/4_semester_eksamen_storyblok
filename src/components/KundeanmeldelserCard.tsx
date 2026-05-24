import { storyblokEditable } from "@storyblok/react";
import { IoStarSharp } from "react-icons/io5";

export default function KundeanmeldelserCard({ blok }: { blok: any }) {
  const rating = Number(blok.rating) || 5;

  return (
    <article
      {...storyblokEditable(blok)}
      className="flex min-h-[255px] flex-col items-center rounded bg-[#282828] px-8 py-7 text-center text-white"
    >
      {blok.image?.filename && (
        <img
          src={blok.image.filename}
          alt={blok.image.alt || ""}
          className="mb-4 h-24 w-24 rounded-full object-cover"
        />
      )}

      <h3 className="mb-3 font-serif text-2xl font-bold">{blok.name}</h3>

      <p className="mb-5 max-w-[230px] text-base leading-tight text-[#d8d8d8]">
        “{blok.text}”
      </p>

      <div className="mt-auto flex gap-2 text-3xl text-[#FFF47A]">
        {Array.from({ length: rating }).map((_, starIndex) => (
          <IoStarSharp key={starIndex} />
        ))}
      </div>
    </article>
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
