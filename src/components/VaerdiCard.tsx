import { storyblokEditable } from "@storyblok/react";
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

