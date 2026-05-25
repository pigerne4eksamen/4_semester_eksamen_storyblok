"use client";

import { useState } from "react";
import { storyblokEditable } from "@storyblok/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type GalleryImage = {
  _uid: string;
  image?: {
    filename?: string;
    alt?: string;
  };
  label?: string;
};

const getIndex = (index: number, length: number) => {
  return ((index % length) + length) % length;
};

export default function Galleri({ blok }: { blok: any }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const billeder = (blok.images || []).filter(
    (item: GalleryImage) => item.image?.filename,
  );

  if (billeder.length === 0) {
    return null;
  }

  const currentIndex = getIndex(activeIndex, billeder.length);
  const prevIndex = getIndex(currentIndex - 1, billeder.length);
  const nextIndex = getIndex(currentIndex + 1, billeder.length);
  const activeImage = billeder[currentIndex];
  const prevImage = billeder[prevIndex];
  const nextImage = billeder[nextIndex];

  return (
    <section
      {...storyblokEditable(blok)}
      className="bg-[#DADCCE] px-0 py-4 md:px-0"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden px-4 pt-0 md:px-0 md:pt-1">
          <div className="relative h-[520px] md:h-[620px]">
            <div className="absolute left-[3%] top-[54%] z-10 hidden h-[82%] w-[25%] translate-y-[-54%] overflow-hidden rounded-xl md:block">
              <img
                src={prevImage.image.filename}
                alt={prevImage.image.alt || prevImage.label || ""}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute right-[3%] top-[54%] z-10 hidden h-[82%] w-[25%] translate-y-[-54%] overflow-hidden rounded-xl md:block">
              <img
                src={nextImage.image.filename}
                alt={nextImage.image.alt || nextImage.label || ""}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute left-1/2 top-1/2 z-20 h-[94%] w-[82%] max-w-[44rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl md:w-[46%]">
              <img
                src={activeImage.image.filename}
                alt={activeImage.image.alt || activeImage.label || ""}
                className="h-full w-full object-cover"
              />
              {activeImage.label && (
                <div className="absolute inset-x-0 bottom-6 mx-auto flex w-[calc(100%-2rem)] max-w-[22rem] items-center justify-center rounded-lg bg-[#111111]/70 px-6 py-3 text-center font-serif text-lg font-bold text-white shadow-xl shadow-black/30 sm:text-xl">
                  {activeImage.label}
                </div>
              )}
            </div>

            <button
              type="button"
              aria-label="Forrige billede"
              onClick={() => setActiveIndex(getIndex(currentIndex - 1, billeder.length))}
              className="absolute left-4 top-1/2 z-30 flex h-12 w-14 -translate-y-1/2 items-center justify-center rounded-md bg-[#C44931] text-white shadow-lg shadow-black/20 transition hover:bg-[#A93B27] md:left-[15.5%] md:h-14 md:w-16"
            >
              <IoIosArrowBack className="text-3xl md:text-4xl" />
            </button>

            <button
              type="button"
              aria-label="Næste billede"
              onClick={() => setActiveIndex(getIndex(currentIndex + 1, billeder.length))}
              className="absolute right-4 top-1/2 z-30 flex h-12 w-14 -translate-y-1/2 items-center justify-center rounded-md bg-[#C44931] text-white shadow-lg shadow-black/20 transition hover:bg-[#A93B27] md:right-[15.5%] md:h-14 md:w-16"
            >
              <IoIosArrowForward className="text-3xl md:text-4xl" />
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-3 px-4 sm:grid-cols-4 md:grid-cols-6 md:px-0 lg:grid-cols-8">
          {billeder.map((billede: GalleryImage, index: number) => (
            <button
              key={billede._uid}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`overflow-hidden rounded-2xl border-2 transition ${
                index === currentIndex
                  ? "border-[#C44931]"
                  : "border-transparent hover:border-[#C44931]/60"
              }`}
            >
              <img
                src={billede.image?.filename}
                alt={billede.image?.alt || billede.label || ""}
                className="h-24 w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
