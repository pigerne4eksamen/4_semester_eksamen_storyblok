import Link from "next/link";
import { storyblokEditable } from "@storyblok/react";

const variants = {
  primary: "bg-[#B64430] text-white",
  secondary: "bg-black text-white",
  outline: "border border-[#B64430] text-[#B64430]",
};

export default function Button({ blok }: { blok: any }) {
  return (
    <Link
      {...storyblokEditable(blok)}
      href={blok.link?.cached_url || "/"}
      className={`
        px-6 py-3 rounded-md
        ${variants[blok.variant as keyof typeof variants]}
      `}
    >
      {blok.text}
    </Link>
  );
}
