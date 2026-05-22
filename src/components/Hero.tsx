import { storyblokEditable, StoryblokComponent } from "@storyblok/react";


export default function Hero({ blok }: { blok: any }) {
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

