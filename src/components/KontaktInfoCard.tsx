import { storyblokEditable } from "@storyblok/react";
import { HiPhone, HiMail, HiClock } from "react-icons/hi";

const icons = {
  phone: HiPhone,
  mail: HiMail,
  clock: HiClock,
}

export default function KontaktInfoCard({ blok }: { blok: any }) {
  const Icon = icons[blok.icon as keyof typeof icons];
  return (
    <div {...storyblokEditable(blok)}>
      {Icon && <Icon className="w-6 h-6 text-[#B64430]" />}
      <h3>{blok.sectiontitle}</h3>
      <p>{blok.text}</p>
    </div>
  );
}
