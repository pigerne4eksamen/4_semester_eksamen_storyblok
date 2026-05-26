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
      {Icon && <Icon className="h-8 w-8 shrink-0 text-[#B64430]" />}

      <div className="flex flex-col">
        <h3 className="font-serif text-xl font-bold leading-none text-[#282828]">{blok.sectiontitle}</h3>
        <p className="text-sm leading-tight text-[#282828]">{blok.text}</p>
      </div>
    </div>
  );
}
