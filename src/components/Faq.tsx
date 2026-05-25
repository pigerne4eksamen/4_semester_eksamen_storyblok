"use client";

import { useState } from "react";
import { storyblokEditable } from "@storyblok/react";
import FaqItem from "./FaqItem";

export default function Faq({ blok }: { blok: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      {...storyblokEditable(blok)}
      className="bg-[#F5EDE0] px-8 py-20 md:px-20 lg:px-36"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 font-serif text-4xl font-bold text-[#282828]">
          {blok.subtitle}
        </h2>

        <div className="flex flex-col gap-6">
          {blok.items?.map((item: any, index: number) => {
            const isOpen = openIndex === index;

            return (
              <FaqItem
                key={item._uid}
                blok={item}
                isOpen={isOpen}
                onToggle={() => setOpenIndex(isOpen ? null : index)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
