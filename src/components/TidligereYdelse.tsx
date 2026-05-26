"use client";

import dynamic from "next/dynamic";
import { storyblokEditable } from "@storyblok/react";

const ReactCompareSlider = dynamic(() => import("react-compare-slider").then((mod) => mod.ReactCompareSlider), { ssr: false });

const ReactCompareSliderImage = dynamic(() => import("react-compare-slider").then((mod) => mod.ReactCompareSliderImage), { ssr: false });

type BeforeAfterPair = {
  _uid: string;
  before: { filename: string };
  after: { filename: string };
};

type TidligereYdelseBlok = {
  before_after_pair?: BeforeAfterPair[];
};

export default function TidligereYdelse({ blok }: { blok: TidligereYdelseBlok }) {
  return (
    <section  {...storyblokEditable(blok)} className="pb-12">
      <div className="mx-auto px-4 md:px-[155px] py-8 md:py-10">
        {/* WRAPPER MED ÉN BAGGRUNDSBOKS */}
        <div className="relative">
          {/* ÉN samlet baggrundsboks bag begge billeder */}
          <div
            className=" absolute -left-3 top-6 w-full h-full bg-tertiary rounded-xl -z-10 md:-left-10 md:top-10"
          ></div>

          {/* GRID MED SLIDERS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
            {blok.before_after_pair?.map((pair: BeforeAfterPair) => (
              <ReactCompareSlider
                key={pair._uid}
                itemOne={<ReactCompareSliderImage src={pair.before.filename} alt="Før" />}
                itemTwo={<ReactCompareSliderImage src={pair.after.filename} alt="Efter" />}
                className="image-radius w-full aspect-square overflow-hidden shadow-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
