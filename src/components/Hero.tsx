import { storyblokEditable, StoryblokComponent } from "@storyblok/react";


export default function Hero({ blok }: { blok: any }) {
  if (blok?.title?.toLowerCase() === "galleri") {
    return (
      <section
        {...storyblokEditable(blok)}
        className="bg-[#F5EDE0] px-8 py-14 md:px-20 md:py-20 lg:px-36"
      >
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-6 font-serif text-4xl font-bold text-[#282828] md:text-5xl">
            {blok.title}
          </h1>
          <div className="max-w-3xl space-y-6 text-[#505050]">
            {blok.text
              ?.split(/\n\s*\n/)
              .map((paragraph: string) => (
                <p
                  key={paragraph}
                  className="text-lg leading-relaxed md:text-xl"
                >
                  {paragraph}
                </p>
              ))}
          </div>
        </div>
      </section>
    );
  }

  switch (blok?.variant) {
    case "home":
      return (
        <section {...storyblokEditable(blok)}>
          <h1>{blok.title}</h1>
          <h2>{blok.subtitle}</h2>
          {/* IMAGE */}
          {blok.image?.filename && <img src={blok.image.filename} alt={blok.image.alt || ""} />}

          {blok.buttons?.map((button: any) => (
            <StoryblokComponent blok={button} key={button._uid} />
          ))}
        </section>
      );

    case "ydelser":
      return (
        <section {...storyblokEditable(blok)}>
          <h1>{blok.title}</h1>
          <h2>{blok.subtitle}</h2>
          <p>{blok.text}</p>
          {blok.image?.filename && <img src={blok.image.filename} alt={blok.image.alt || ""} />}
          {blok.buttons?.map((button: any) => (
            <StoryblokComponent blok={button} key={button._uid} />
          ))}
        </section>
      );

    case "omos":
      return (
        <section
          {...storyblokEditable(blok)}
          className="relative overflow-hidden bg-[#F5EDE0]"
        >
          <div className="mx-auto max-w-7xl px-10 pb-2 pt-2 md:px-28 md:pb-14 md:pt-16">
            <h1 className="font-serif text-3xl font-bold text-[#282828] md:text-6xl">
              {blok.title}
            </h1>
          </div>

          {blok.image?.filename && (
            <div className="mx-auto flex max-w-7xl justify-center px-8 md:hidden">
              <img
                src={blok.image.filename}
                alt={blok.image.alt || ""}
                className="relative z-10 -mb-16 w-full max-w-[340px] object-contain"
              />
            </div>
          )}

          <div className="relative rounded-t bg-[#50543B] px-10 pb-10 pt-28 md:rounded-none md:px-10 md:py-0 lg:px-24 xl:px-36">
            <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[minmax(0,1fr)_minmax(300px,0.9fr)] md:items-end lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1fr)] lg:gap-10">
              <div className="max-w-2xl pb-0 md:pb-14">
                <h2 className="mb-6 font-serif text-2xl font-bold text-white md:mb-10 md:mt-10 md:text-4xl">
                  {blok.subtitle}
                </h2>

                <div className="space-y-6 text-lg leading-snug text-white md:space-y-7">
                  {blok.text
                    ?.split(/\n\s*\n/)
                    .map((paragraph: string) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>

                {blok.primary_button_text && (
                  <a
                    href={blok.primary_button_link?.url}
                    className="mx-auto mt-8 block w-fit rounded bg-[#C84732] px-9 py-3 font-serif text-xl font-bold text-white md:mx-0 md:mt-12 md:px-10 md:py-4 md:font-sans md:font-semibold"
                  >
                    {blok.primary_button_text}
                  </a>
                )}
              </div>

              {blok.image?.filename && (
                <div className="hidden justify-center md:flex md:-mt-40 md:justify-end lg:-mt-56">
                  <img
                    src={blok.image.filename}
                    alt={blok.image.alt || ""}
                    className="w-full max-w-[470px] object-contain lg:max-w-[600px] xl:max-w-[660px]"
                  />
                </div>
              )}
            </div>
          </div>
        <section {...storyblokEditable(blok)}>
          <h1>{blok.title}</h1>
          <h2>{blok.subtitle}</h2>
          <p>{blok.text}</p>
          {blok.image?.filename && <img src={blok.image.filename} alt={blok.image.alt || ""} />}
          {blok.buttons?.map((button: any) => (
            <StoryblokComponent blok={button} key={button._uid} />
          ))}
        </section>
      );

    case "kontakt":
      return (
        <section
          {...storyblokEditable(blok)}
          className="bg-[#F5EDE0] px-8 py-16 md:px-20 lg:px-36"
        >
          <div className="mx-auto max-w-7xl">
            <h1 className="mb-6 font-serif text-4xl font-bold text-[#282828] md:text-5xl">
              {blok.title}
            </h1>
            <div className="max-w-3xl space-y-6 text-[#505050]">
              {blok.text
                ?.split(/\n\s*\n/)
                .map((paragraph: string) => (
                  <p
                    key={paragraph}
                    className="text-lg leading-relaxed md:text-xl"
                  >
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>
        </section>
      );

    case "galleri":
      return (
        <section
          {...storyblokEditable(blok)}
          className="bg-[#F5EDE0] px-8 py-14 md:px-20 md:py-20 lg:px-36"
        >
          <div className="mx-auto max-w-5xl">
            <h1 className="mb-6 font-serif text-4xl font-bold text-[#282828] md:text-5xl">
              {blok.title}
            </h1>
            <div className="max-w-3xl space-y-6 text-[#505050]">
              {blok.text
                ?.split(/\n\s*\n/)
                .map((paragraph: string) => (
                  <p
                    key={paragraph}
                    className="text-lg leading-relaxed md:text-xl"
                  >
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>
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
