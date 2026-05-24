import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { renderRichText } from "@storyblok/react";


export default function Hero({ blok }: { blok: any }) {
  switch (blok?.variant) {
    case "home":
      return (
        <section {...storyblokEditable(blok)}>
          <h1>{blok.title}</h1>
          <h2>{blok.subtitle}</h2>
          {/* IMAGE */}
          {blok.image?.filename && <img src={blok.image.filename} alt={blok.image.alt || ""} />}

          {blok.button?.map((button: any) => (
            <StoryblokComponent blok={button} key={button._uid} />
          ))}
        </section>
      );

    case "ydelser":
      return (
        <section {...storyblokEditable(blok)} className="bg-[#F5EDE0]">
          <div className="mx-auto px-4 md:px-[155px] py-10">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* VENSTRE SIDE */}
              <div className="flex-1 flex flex-col justify-between self-stretch">
                {/* TOP CONTENT */}
                <div className="max-w-xl">
                  {/* H1 */}
                  <h1 className="bg-[#50543B] text-3xl md:text-5xl text-white font-bold p-6 rounded-r-lg drop-shadow-md max-w-[250px] md:max-w-[700px] -ml-4 md:-ml-[155px] pl-4 md:pl-[155px] mb-6">{blok.title}</h1>

                  {/* MOBILE IMAGE */}
                  {blok.image?.filename && <img src={blok.image.filename} alt={blok.image.alt || ""} className="w-full h-auto object-cover mb-6 md:hidden rounded-md" />}

                  <h2 className="text-2xl md:text-3xl font-bold text-[#282828] mb-4">{blok.subtitle}</h2>

                  <p className="text-base md:text-lg text-[#282828] mb-7">{blok.text}</p>
                </div>

                {/* BUTTON */}
                <div className="mt-8 flex justify-center md:justify-start">
                  {blok.button?.map((button: any) => (
                    <StoryblokComponent blok={button} key={button._uid} />
                  ))}
                </div>
              </div>

              {/* DESKTOP IMAGE */}
              <div className="hidden md:block self-stretch">{blok.image?.filename && <img src={blok.image.filename} alt={blok.image.alt || ""} className="w-[360px] h-full object-cover rounded-md" />}</div>
            </div>
          </div>
        </section>
      );

    case "omos":
      return (
        <section {...storyblokEditable(blok)}>
          <h1>{blok.title}</h1>
          <h2>{blok.subtitle}</h2>
          <p>{blok.text}</p>
          {blok.image?.filename && <img src={blok.image.filename} alt={blok.image.alt || ""} />}
          {blok.button?.map((button: any) => (
            <StoryblokComponent blok={button} key={button._uid} />
          ))}
        </section>
      );

    case "kontakt":
      return (
        <section {...storyblokEditable(blok)}>
          <h1>{blok.title}</h1>
          <p>{blok.text}</p>
        </section>
      );

    default:
      return (
        <section {...storyblokEditable(blok)}>
          <h1>{blok?.title || "Hero (no variant)"}</h1>
        </section>
      );
  }
}
