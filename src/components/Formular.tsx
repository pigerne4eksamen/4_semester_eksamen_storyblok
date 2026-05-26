"use client";

import { storyblokEditable } from "@storyblok/react";
import Form from "./Form";
import KontaktInfo from "./KontaktInfo";
import Inkluderet from "./Inkluderet";

export default function Formular({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)} className="grid grid-cols-1 md:grid-cols-2">
      {/* Venstre side */}
      <div className="bg-[#545943] text-white px-8 py-16 md:px-20 lg:px-36">
        <h2 className="mb-4 text-3xl font-bold">Send os en besked</h2>
        <Form />
      </div>

      {/* Højre side */}
      <div
        className="flex flex-col gap-8 md:ml-[159px] overflow-hidden "
      >
        {/* Kontaktinfo */}
        {blok.kontaktinfo?.map((item: any) => (
          <KontaktInfo key={item._uid} blok={item} />
        ))}

        {/* Inkluderet */}
        {blok.inkluderet?.map((item: any) => (
          <Inkluderet key={item._uid} blok={item} />
        ))}
      </div>
    </section>
  );
}
