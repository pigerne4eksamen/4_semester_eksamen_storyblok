import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default function Page({ blok }: { blok: any }) {
  console.log("PAGE BLOK:", blok);

  return (
    <main {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
