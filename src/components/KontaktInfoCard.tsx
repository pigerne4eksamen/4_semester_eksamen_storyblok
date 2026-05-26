import { storyblokEditable } from "@storyblok/react";

export default function KontaktInfoCard({ blok }: { blok: any }) {
  return (
    <div {...storyblokEditable(blok)}>
      <img src={blok.icon?.filename} alt="icon" />
      <h3 className="sectiontitle">{blok.sectiontitle}</h3>
      <p className="bodytext">{blok.text}</p>
    </div>
  );
}
