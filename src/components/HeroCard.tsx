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
      className="flex items-start gap-3" // ikon + tekst side om side
    >
      {Icon && <Icon className="w-6 h-6 text-[#B64430]" />}

      {/* ⭐ Tekstblok der holder h3 og p under hinanden ⭐ */}
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">{blok.sectiontitle}</h3>
        <p className="text-sm text-[#282828]">{blok.text}</p>
      </div>
    </div>
  );
}
