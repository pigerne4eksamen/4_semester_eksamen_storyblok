
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";



export default function KontaktForside({ blok }: { blok: any }) {

  return (
    <section
      {...storyblokEditable(blok)}
      className="bg-primary px-8 py-24 md:px-20 md:py-32 lg:px-36"
    >
      <div className="mx-auto flex max-w-sm flex-col items-center text-center">
        <h2 className="subtitle mb-4 text-tekst1">
          {blok.subtitle}
        </h2>

        <p className="bodytext mb-7 whitespace-pre-line text-tekst1/80">
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
