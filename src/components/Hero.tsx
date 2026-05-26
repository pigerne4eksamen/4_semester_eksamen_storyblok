import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default function Hero({ blok }: { blok: any }) {
  switch (blok?.variant) {
    case "home":
      const titleLines =
        typeof blok.title === "string"
          ? blok.title
              .toUpperCase()
              .replace(/\s*&\s*/, "\n&")
              .split("\n")
          : [];

      return (
        <section {...storyblokEditable(blok)} className="bg-primary px-6 py-10 md:px-5 lg:px-45 md:py-[42px]">
          <div className="mx-auto flex max-w-[90%] flex-col gap-8 md:h-[523px] md:flex-row md:items-stretch md:justify-between md:gap-6">
            {/* Venstre kolonne */}
            <div className="flex flex-col md:w-[490px] md:justify-between">
              <div>
                {/* H1 + H2 */}
                <div className="md:flex md:flex-col">
                  <p className="text mb-0 text-center font-light uppercase tracking-[0.16em] text-secondary md:text-left">{blok.text}</p>

                  {blok.logoimg?.filename && (
                    <div className="mb-8 flex justify-center md:justify-start">
                      <img src={blok.logoimg.filename} alt={blok.logoimg.alt || ""} className="h-[150px] object-fit" />
                    </div>
                  )}
                </div>

                {/* Billede på mobil */}
                {blok.image?.filename && (
                  <div className="mb-8 -mt-1 flex justify-center md:hidden">
                    <img src={blok.image.filename} alt={blok.image.alt || ""} className="h-[340px] w-full object-cover object-center" />
                  </div>
                )}
              </div>

              {/* Knapper */}
              <div className="order-2 mb-10 flex flex-col items-center justify-center gap-4 md:order-none md:mb-0 md:flex-row md:items-stretch md:justify-start md:gap-6 [&_a]:w-full [&_a]:max-w-[260px] [&_a]:px-5 [&_a]:py-3 [&_a]:text-center [&_a]:text-lg md:[&_a]:min-w-[177px] md:[&_a]:w-auto">
                {blok.button?.map((button: any) => (
                  <StoryblokComponent blok={button} key={button._uid} />
                ))}
              </div>
              {/* Cards / ikoner */}
              <div className="order-1 mb-10 flex flex-col justify-center gap-10 text-tekst1 md:order-none md:mb-0 md:flex-row md:justify-start md:gap-20">
                {blok.cards?.map((card: any) => (
                  <StoryblokComponent blok={card} key={card._uid} />
                ))}
              </div>
            </div>

            {/* Desktop billede */}
            {blok.image?.filename && (
              <div className="hidden md:flex md:w-[455px]">
                <img src={blok.image.filename} alt={blok.image.alt || ""} className="h-full w-full object-cover" />
              </div>
            )}
          </div>
        </section>
      );

    case "ydelser":
      return (
        <section {...storyblokEditable(blok)} className="bg-primary">
          <div className="mx-auto px-4 md:px-[155px] py-10">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* VENSTRE SIDE */}
              <div className="flex-1 flex flex-col justify-between self-stretch">
                {/* TOP CONTENT */}
                <div className="max-w-xl">
                  {/* H1 */}
                  <h1 className="title bg-secondary text-tekst2 p-6 rounded-r-lg drop-shadow-md max-w-[250px] md:max-w-[700px] -ml-4 md:-ml-[155px] pl-4 md:pl-[155px] mb-6">{blok.title}</h1>

                  {/* MOBILE IMAGE */}
                  {blok.image?.filename && <img src={blok.image.filename} alt={blok.image.alt || ""} className="w-full h-auto object-cover mb-6 md:hidden" />}

                  <h2 className="subtitle text-tekst1 mb-4">{blok.subtitle}</h2>

                  <p className="bodytext text-tekst1 mb-7">{blok.text}</p>
                </div>

                {/* BUTTON */}
                <div className="mt-8 flex justify-center md:justify-start">
                  {blok.button?.map((button: any) => (
                    <StoryblokComponent blok={button} key={button._uid} />
                  ))}
                </div>
              </div>

              {/* DESKTOP IMAGE */}
              <div className="hidden md:block self-stretch">{blok.image?.filename && <img src={blok.image.filename} alt={blok.image.alt || ""} className="w-[360px] h-full object-cover" />}</div>
            </div>
          </div>
        </section>
      );

    case "omos":
      return (
        <section {...storyblokEditable(blok)} className="relative overflow-hidden bg-primary">
          <div className="mx-auto flex max-w-[1300px] px-10 pt-10 md:h-[110px] md:items-center md:px-12 md:py-0 lg:px-16 xl:px-20">
            <h1 className="title text-tekst1">{blok.title}</h1>
          </div>

          {blok.image?.filename && (
            <div className="mx-auto flex max-w-4xl justify-center px-8 md:hidden">
              <div className="image-radius relative z-10 -mb-12 h-[260px] w-full max-w-[360px] overflow-hidden">
                <img src={blok.image.filename} alt={blok.image.alt || ""} className="h-full w-full object-cover object-top" />
              </div>
            </div>
          )}

          <div className="relative rounded-t bg-secondary px-10 pb-12 pt-15 md:min-h-[455px] md:rounded-none md:px-0 md:py-10 md:pb-14">
            {blok.image?.filename && <img src={blok.image.filename} alt={blok.image.alt || ""} className="pointer-events-none absolute bottom-0 right-[-6%] hidden h-[390px] max-w-none object-contain md:block lg:right-[2%] lg:h-[500px] xl:right-[5%] xl:h-[540px]" />}

            <div className="relative mx-auto max-w-[1300px] px-10 md:px-12 lg:px-16 xl:px-20">
              <div className="relative z-10 max-w-[600px] md:max-w-[calc(100%-280px)] lg:max-w-[calc(100%-560px)] xl:max-w-[600px]">
                <h2 className="subtitle mb-6 text-tekst2 md:mb-8">{blok.subtitle}</h2>

                <div className="space-y-6 text-tekst2">
                  {blok.text?.split(/\n\s*\n/).map((paragraph: string) => (
                    <p key={paragraph} className="bodytext">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-8 flex justify-center md:justify-start">
                  {blok.button?.map((button: any) => (
                    <StoryblokComponent blok={button} key={button._uid} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      );

    case "kontakt":
      return (
        <section {...storyblokEditable(blok)} className="bg-primary px-8 pt-16 pb-10 md:px-20 lg:px-36">
          <div className="mx-auto max-w-7xl">
            <h1 className="title mb-6 text-tekst1">{blok.title}</h1>
            <div className="max-w-3xl space-y-6 text-tekst1/80">
              {blok.text?.split(/\n\s*\n/).map((paragraph: string) => (
                <p key={paragraph} className="bodytext">
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
          <h1 className="title">{blok?.title || "Hero (no variant)"}</h1>
        </section>
      );
  }
}
