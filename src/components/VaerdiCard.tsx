import { storyblokEditable } from "@storyblok/react";
import { FiHome } from "react-icons/fi";
import { GiTrowel } from "react-icons/gi";
import { PiMedalThin } from "react-icons/pi"; // ← tilføjet

const getIcon = (title?: string) => {
  if (title?.toLowerCase() === "håndværk") {
    return GiTrowel;
  }

  if (title?.toLowerCase() === "kvalitet") {
    return PiMedalThin; // ← brug rosette/medalje ikon til kvalitet
  }

  return FiHome;
};

export default function VaerdiCard({ blok }: { blok: any }) {
  const Icon = getIcon(blok.title);

  return (
    <article {...storyblokEditable(blok)} className="flex flex-col items-center text-center">
      <div className="mb-7 flex h-28 w-28 items-center justify-center rounded bg-[#50543B] text-[#F5EDE0]">
        <Icon className="text-6xl" />
      </div>

      <h3 className="mb-5 font-serif text-3xl font-bold text-[#282828]">{blok.title}</h3>

      <p className="whitespace-pre-line text-xl leading-snug text-[#282828]">{blok.text}</p>
    </article>
  );
}
