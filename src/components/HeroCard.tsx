import { storyblokEditable } from "@storyblok/react";
import { HiPhone, HiMail } from "react-icons/hi";

const icons = {
  phone: HiPhone,
  mail: HiMail,
};

export default function HeroCard({ blok }: { blok: any }) {
  const Icon = icons[blok.icon as keyof typeof icons];

  return (
    <div
      {...storyblokEditable(blok)}
      className="flex items-center gap-4"
    >
      {Icon && <Icon className="h-8 w-8 shrink-0 text-cta" />}

      <div className="flex flex-col">
        <h3 className="sectiontitle text-tekst1">{blok.sectiontitle}</h3>
        <p className="bodytext text-tekst1">{blok.text}</p>
      </div>
    </div>
  );
}
