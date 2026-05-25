import { storyblokEditable } from "@storyblok/react";

type FaqItemProps = {
  blok: any;
  isOpen?: boolean;
  onToggle?: () => void;
};

export default function FaqItem({
  blok,
  isOpen = false,
  onToggle,
}: FaqItemProps) {
  return (
    <div {...storyblokEditable(blok)} className="border border-[#50543B]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 px-6 py-4 text-left"
      >
        <span className="font-serif text-xl font-bold text-[#282828]">
          {blok.question}
        </span>
        <svg
          aria-hidden="true"
          className={`h-5 w-5 shrink-0 text-[#50543B] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m6 9 6 6 6-6"
          />
        </svg>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 pt-1 text-lg leading-relaxed text-[#282828]">
            {blok.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
