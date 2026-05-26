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
      <div className="mb-7 flex h-28 w-28 items-center justify-center rounded bg-secondary text-primary">
        <Icon className="text-6xl" />
      </div>

      <h3 className="sectiontitle mb-5 text-tekst1">{blok.title}</h3>

      <p className="bodytext whitespace-pre-line text-tekst1">{blok.text}</p>
    </article>
  );
}
