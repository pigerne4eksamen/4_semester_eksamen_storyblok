import Link from "next/link";
import { storyblokEditable } from "@storyblok/react";

const variants = {
  primary: "bg-[#B64430] text-white w-fit px-6 py-3 text-lg font-medium",
  secondary: "rounded border border-[#A0522D] bg-[#F5EDE0] px-6 py-3 text-lg font-medium text-[#A0522D] transition hover:bg-[#EDE3D4]",
  outline: "border border-[#B64430] text-[#B64430]",
};

export default function Button({ blok }: { blok: any }) {
  return (
    <Link
      {...storyblokEditable(blok)}
      href={blok.link?.cached_url || "/"}
      className={`
        px-6 py-3 rounded-md
        ${variants[blok.variant as keyof typeof variants] || variants.primary}
      `}
    >
      {blok.text}
    </Link>
  );
}
