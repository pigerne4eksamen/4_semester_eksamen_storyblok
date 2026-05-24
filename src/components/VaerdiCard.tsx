import { storyblokEditable } from "@storyblok/react";
import { FiHome } from "react-icons/fi";
import { GiTrowel } from "react-icons/gi";

const getIcon = (title?: string) => {
  if (title?.toLowerCase() === "håndværk") {
    return GiTrowel;
  }

  return FiHome;
};

export default function VaerdiCard({ blok }: { blok: any }) {
  const Icon = getIcon(blok.title);

  return (
    <article
      {...storyblokEditable(blok)}
      className="flex flex-col items-center text-center"
    >
      <div className="mb-7 flex h-28 w-28 items-center justify-center rounded bg-[#50543B] text-[#F5EDE0]">
        <Icon className="text-6xl" />
      </div>

      <h3 className="mb-5 font-serif text-3xl font-bold text-[#282828]">
        {blok.title}
      </h3>

      <p className="whitespace-pre-line text-xl leading-snug text-[#282828]">
        {blok.text}
      </p>
    </article>
import { FaTrowel, FaHouse } from "react-icons/fa6";

const icons = {
  trowel: FaTrowel,
  house: FaHouse,
};

export default function VaerdiCard({ blok }: { blok: any }) {
  const Icon = icons[blok.icon as keyof typeof icons];
  return (
    <div {...storyblokEditable(blok)}>
      {Icon && <Icon className="w-6 h-6 text-[#B64430]" />}
      <h3>{blok.title}</h3>
      <p>{blok.text}</p>
    </div>
  );
}

