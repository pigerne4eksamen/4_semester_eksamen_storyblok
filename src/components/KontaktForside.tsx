
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";



export default function KontaktForside({ blok }: { blok: any }) {

  return (
    <section
      {...storyblokEditable(blok)}
      className="bg-[#F5EDE0] px-8 py-24 md:px-20 md:py-32 lg:px-36"
    >
      <div className="mx-auto flex max-w-sm flex-col items-center text-center">
        <h2 className="mb-4 font-serif text-3xl font-bold text-[#282828]">
          {blok.subtitle}
        </h2>

        <p className="mb-7 whitespace-pre-line text-base leading-tight text-[#505050]">
          {blok.text}
        </p>

       <div className="mt-8 flex justify-center md:justify-start">
{blok.button?.map((button: any) => (
 <StoryblokComponent blok={button} key={button._uid} />
    ))}
 </div>
      </div>
    </section>
  );
}
