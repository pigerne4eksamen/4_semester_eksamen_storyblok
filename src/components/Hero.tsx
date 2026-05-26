import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default function Hero({ blok }: { blok: any }) {
  if (blok?.title?.toLowerCase() === "galleri") {
    return (
      <section {...storyblokEditable(blok)} className="bg-primary px-8 py-14 md:px-20 md:py-20 lg:px-36">
        <div className="mx-auto max-w-5xl">
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
  }

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
        <section {...storyblokEditable(blok)} className="bg-primary px-6 py-10 md:px-0 md:py-[52px]">
          <div className="mx-auto flex max-w-[1010px] flex-col gap-8 md:h-[523px] md:flex-row md:items-stretch md:justify-between md:gap-16">
            {/* Venstre kolonne */}
            <div className="flex flex-col md:w-[490px] md:justify-between">
              <div>
                {/* H1 + H2 */}
                <div className="md:flex md:flex-col">
                  <h2 className="subtitle mb-5 text-center font-light uppercase tracking-[0.16em] text-secondary md:text-left">{blok.subtitle}</h2>

                  <h1 className="title mb-14 text-center text-tekst1 md:text-left">
                    {titleLines.length > 0
                      ? titleLines.map((line: string) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))
                      : blok.title}
                  </h1>
                </div>

                {/* Billede på mobil */}
                {blok.image?.filename && (
                  <div className="mb-8 flex justify-center md:hidden">
                    <img src={blok.image.filename} alt={blok.image.alt || ""} className="h-[500px] w-full object-cover" />
                  </div>
                )}

                {/* Knapper */}
                <div className="mb-10 flex justify-center gap-6 md:mb-0 md:justify-start [&_a]:min-w-[177px] [&_a]:px-5 [&_a]:py-3 [&_a]:text-center [&_a]:text-lg">
                  {blok.button?.map((button: any) => (
                    <StoryblokComponent blok={button} key={button._uid} />
                  ))}
                </div>
              </div>

              {/* Cards / ikoner */}
              <div className="flex flex-row justify-center gap-12 text-tekst1 md:justify-start md:gap-20">
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
          <div className="mx-auto max-w-7xl px-10 pb-2 pt-2 md:px-28 md:pb-14 md:pt-16">
            <h1 className="title text-tekst1">{blok.title}</h1>
          </div>

          {blok.image?.filename && (
            <div className="mx-auto flex max-w-7xl justify-center px-8 md:hidden">
              <img src={blok.image.filename} alt={blok.image.alt || ""} className="relative z-10 -mb-16 w-full max-w-[340px] object-contain" />
            </div>
          )}

          <div className="relative rounded-t bg-secondary px-10 pb-10 pt-28 md:rounded-none md:px-10 md:py-0 lg:px-24 xl:px-36">
            <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[minmax(0,1fr)_minmax(300px,0.9fr)] md:items-end lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1fr)] lg:gap-10">
              <div className="max-w-2xl pb-0 md:pb-14">
                <h2 className="subtitle mb-6 text-tekst2 md:mb-10 md:mt-10">{blok.subtitle}</h2>

                <div className="space-y-6 text-tekst2 md:space-y-7">
                  {blok.text?.split(/\n\s*\n/).map((paragraph: string) => (
                    <p key={paragraph} className="bodytext">{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 flex justify-center md:justify-start">
                  {blok.button?.map((button: any) => (
                    <StoryblokComponent blok={button} key={button._uid} />
                  ))}
                </div>
              </div>

              {blok.image?.filename && (
                <div className="hidden justify-center md:flex md:-mt-40 md:justify-end lg:-mt-56">
                  <img src={blok.image.filename} alt={blok.image.alt || ""} className="w-full max-w-[470px] object-contain lg:max-w-[600px] xl:max-w-[660px]" />
                </div>
              )}
            </div>
          </div>
        </section>
      );

    case "kontakt":
      return (
        <section {...storyblokEditable(blok)} className="bg-primary px-8 py-16 md:px-20 lg:px-36">
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

    case "galleri":
      return (
        <section {...storyblokEditable(blok)} className="bg-primary px-8 py-14 md:px-20 md:py-20 lg:px-36">
          <div className="mx-auto max-w-5xl">
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
