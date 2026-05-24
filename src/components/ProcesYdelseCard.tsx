import { storyblokEditable } from "@storyblok/react";

export default function ProcesYdelseCard({ blok }: { blok: any }) {
  return (
    <div className="bg-[#dcded1] rounded-md shadow-xl p-10 mx-10 md:p-6" {...storyblokEditable(blok)}>
      <div className="flex flex-row gap-4">
        <h1 className="text-6xl font-bold text-[#50543B]">{blok.number}</h1>
        <div>
          <h3 className="text-[#50543B] text-2xl font-semibold">{blok.subtitle}</h3>
          <p className="text-[#282828] font-normal text-sm">{blok.text}</p>
        </div>
      </div>
    </div>
  );
}
