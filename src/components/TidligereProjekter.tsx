"use client";

import { useState, useEffect } from "react";
import { storyblokEditable } from "@storyblok/react";

const TidligereProjekter = ({ blok }: any) => {
  const [index, setIndex] = useState(0);
  const total = blok.images?.length || 0;

  // Autoplay
  useEffect(() => {
    if (!total) return;

    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 3000);

    return () => clearInterval(interval);
  }, [total]);

  if (!total) return null;

  return (
    <section {...storyblokEditable(blok)} className="bg-[#F5EDE0] py-10 md:py-14 overflow-hidden">
      <div className="mx-auto px-4 md:px-[155px] text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#282828] mb-8 md:mb-12">{blok.subtitle}</h2>

        {/* Stage */}
        <div className="relative flex justify-center items-center h-[360px] md:h-[520px]">
          {blok.images.map((img: any, i: number) => {
            const isActive = i === index;
            const isPrev = i === (index - 1 + total) % total;
            const isNext = i === (index + 1) % total;

            return (
              <img
                key={img.id}
                src={img.filename}
                alt={img.alt || ""}
                className={`
                  absolute
                  transition-all
                  duration-700
                  ease-out
                  rounded-2xl
                  overflow-hidden
                  object-cover

                  w-[50%]
                  md:w-[30%]

                  h-[300px]
                  md:h-[450px]

                  ${
                    isActive
                      ? `
                        z-30
                        scale-110
                        md:scale-125
                        opacity-100
                        translate-x-0
                      `
                      : ""
                  }

                  ${
                    isPrev
                      ? `
                        z-20
                        scale-90
                        md:scale-95
                        opacity-40
                        md:opacity-50
                        -translate-x-[45%]
                        md:-translate-x-[70%]
                      `
                      : ""
                  }

                  ${
                    isNext
                      ? `
                        z-20
                        scale-90
                        md:scale-95
                        opacity-40
                        md:opacity-50
                        translate-x-[45%]
                        md:translate-x-[70%]
                      `
                      : ""
                  }

                  ${
                    !isActive && !isPrev && !isNext
                      ? `
                        opacity-0
                        scale-75
                      `
                      : ""
                  }
                `}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TidligereProjekter;
