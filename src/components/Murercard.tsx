import { storyblokEditable } from "@storyblok/react";
import { FaDumbbell, FaPeopleCarry } from "react-icons/fa";
import { LuHandshake } from "react-icons/lu";

const icons = [
  {
    label: "FAMILIE",
    icon: FaPeopleCarry,
  },
  {
    label: "TILLID",
    icon: LuHandshake,
  },
  {
    label: "TRÆNING",
    icon: FaDumbbell,
  },
];

export default function Murercard({ blok }: { blok: any }) {
  const imageSide = blok.title?.toLowerCase() === "jesper" ? "left" : "right";
  const showHeading = imageSide === "right";

  const image = (
    <div
      className={`relative mx-auto w-full max-w-[385px] ${
        imageSide === "right" ? "md:mr-0" : "md:ml-0"
      }`}
    >
      <div
        className={`absolute top-7 h-full w-full rounded bg-[#DDE0D3] ${
          imageSide === "right" ? "left-7" : "-left-7"
        }`}
      />
      {blok.image?.filename && (
        <img
          src={blok.image.filename}
          alt={blok.image.alt || blok.title || ""}
          className="relative z-10 aspect-square w-full rounded object-cover"
        />
      )}
    </div>
  );

  const content = (
    <div className="max-w-3xl">
      <h3 className="mb-4 font-serif text-2xl font-bold text-[#282828]">
        {blok.title}
      </h3>

      <div className="space-y-5 whitespace-pre-line text-lg leading-snug text-[#3f3f3f]">
        {blok.text
          ?.split(/\n\s*\n/)
          .map((paragraph: string) => <p key={paragraph}>{paragraph}</p>)}
      </div>

      <div className="mt-6 flex gap-8 text-[#C84732]">
        {icons.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.label} className="flex flex-col items-center gap-1">
              <Icon className="text-2xl" />
              <span className="text-[10px] uppercase tracking-wide">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section
      {...storyblokEditable(blok)}
      className={`bg-[#F5EDE0] px-8 md:px-20 lg:px-36 ${
        showHeading ? "py-16" : "pb-16"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        {showHeading && (
          <h2 className="mb-16 font-serif text-3xl font-bold text-[#282828] md:text-4xl">
            To fagfolk - én fælles passion
          </h2>
        )}

        <article
          className={`grid items-center gap-12 md:gap-16 lg:gap-20 ${
            imageSide === "left"
              ? "md:grid-cols-[minmax(320px,385px)_minmax(0,1fr)]"
              : "md:grid-cols-[minmax(0,1fr)_minmax(320px,385px)]"
          }`}
        >
          {imageSide === "left" ? (
            <>
              <div className="md:order-1">{image}</div>
              <div className="md:order-2">{content}</div>
            </>
          ) : (
            <>
              <div>{content}</div>
              <div>{image}</div>
            </>
          )}
        </article>
      </div>
    </section>
  );
}
