import { storyblokEditable } from "@storyblok/react";

export default function KontaktInfoCard({ blok }: { blok: any }) {
  return (
    <div {...storyblokEditable(blok)}>
      <img src={blok.icon?.filename} alt="icon" />
      <h3>{blok.sectiontitle}</h3>
      <p>{blok.text}</p>
    </div>
  );
}
