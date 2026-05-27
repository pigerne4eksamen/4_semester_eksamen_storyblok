"use client";

import { useState } from "react";
import { storyblokEditable } from "@storyblok/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const getIndex = (index: number, length: number) => {
  // Regnestykke som gør at galleriet kan loope fra sidste billede til første billede og omvendt.
  return ((index % length) + length) % length;
};

export default function Galleri({ blok }: { blok: any }) {
  //galleri får et blok-objekt som prop med data fra Storyblok
  // Her gemmes hvilket billede der er aktivt lige nu.
  const [activeIndex, setActiveIndex] = useState(0);

  // Her hentes billederne fra Storyblok.
  const billeder = blok.images || []; //Hvis der ikke er nogen billeder

  // Her finder vi de tre billeder, som skal vises.
  const activeImage = billeder[activeIndex];
  const previousImage = billeder[getIndex(activeIndex - 1, billeder.length)];
  const nextImage = billeder[getIndex(activeIndex + 1, billeder.length)];

  //gør at man kan gå frem og tilbage ved at klikke på knapperne. og viser det rigrige billede i galleriet.
  const showPreviousImage = () => {
    // Viser billedet før det aktive billede.
    setActiveIndex(getIndex(activeIndex - 1, billeder.length)); // getIndex laver loop: går man tilbage fra første billede, vises det sidste billede.
  };

  const showNextImage = () => {
    // Viser billedet efter det aktive billede.
    setActiveIndex(getIndex(activeIndex + 1, billeder.length));
  };

  return ( 
    <section {...storyblokEditable(blok)} className="bg-[#DADCCE] px-0 pb-4 pt-6 md:px-0">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden px-4 pt-0 md:px-0 md:pt-1">
          <div className="relative h-[520px] md:h-[620px]">
            {/* Det forrige billede vises til venstre på større skærme. */}
            <div className="absolute left-[3%] top-[54%] z-10 hidden h-[82%] w-[25%] translate-y-[-54%] overflow-hidden rounded-xl md:block">
              <img src={previousImage.image.filename} alt={previousImage.image.alt || previousImage.label || ""} className="h-full w-full object-cover" />
            </div>

            {/* Det næste billede vises til højre på større skærme. */}
            <div className="absolute right-[3%] top-[54%] z-10 hidden h-[82%] w-[25%] translate-y-[-54%] overflow-hidden rounded-xl md:block">
              <img src={nextImage.image.filename} alt={nextImage.image.alt || nextImage.label || ""} className="h-full w-full object-cover" />
            </div>

            {/* Det aktive billede er det store billede i midten. */}
            <div className="absolute left-1/2 top-1/2 z-20 h-[94%] w-[82%] max-w-[44rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl md:w-[46%]">
              <img src={activeImage.image.filename} alt={activeImage.image.alt || activeImage.label || ""} className="h-full w-full object-cover" />

              {/* Hvis billedet har en label, vises den ovenpå billedet. */}
              {activeImage.label && <div className="absolute inset-x-0 bottom-6 mx-auto flex w-[calc(100%-2rem)] max-w-[22rem] items-center justify-center rounded-lg bg-[#111111]/70 px-6 py-3 text-center font-serif text-lg font-bold text-white shadow-xl shadow-black/30 sm:text-xl">{activeImage.label}</div>}
            </div>

            {/* Knapper til at gå frem og tilbage i galleriet. */}
            <button type="button" aria-label="Forrige billede" onClick={showPreviousImage} className="absolute left-4 top-1/2 z-30 flex h-12 w-14 -translate-y-1/2 items-center justify-center rounded-md bg-[#C44931] text-white shadow-lg shadow-black/20 transition hover:bg-[#A93B27] md:left-[15.5%] md:h-14 md:w-16">
              <IoIosArrowBack className="text-3xl md:text-4xl" />
            </button>

      
            <button type="button" aria-label="Næste billede" onClick={showNextImage} className="absolute right-4 top-1/2 z-30 flex h-12 w-14 -translate-y-1/2 items-center justify-center rounded-md bg-[#C44931] text-white shadow-lg shadow-black/20 transition hover:bg-[#A93B27] md:right-[15.5%] md:h-14 md:w-16">
              <IoIosArrowForward className="text-3xl md:text-4xl" />
            </button>
          </div>
        </div>

        {/* De små billeder nederst bruges til at vælge et bestemt billede. */}
        <div className="mt-10 grid grid-cols-3 gap-3 px-4 sm:grid-cols-4 md:grid-cols-6 md:px-8 md:pb-8 lg:grid-cols-8">
          {billeder.map((billede: any, index: number) => (  //any og number er pga typescript
            <button
              key={billede._uid}
              type="button"
              // Når man klikker på et thumbnail-billede, bliver det det aktive billede.
              onClick={() => setActiveIndex(index)}
              className={`overflow-hidden rounded-2xl border-2 transition ${index === activeIndex ? "border-[#C44931]" : "border-transparent hover:border-[#C44931]/60"}`}
            >
              <img src={billede.image?.filename} alt={billede.image?.alt || billede.label || ""} className="h-24 w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
