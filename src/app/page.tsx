import { getStoryblokApi, StoryblokComponent } from "@storyblok/react";

export default async function Home() {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories/home", {
    version: "draft",
  });


  return (
    <main>
      <StoryblokComponent blok={data.story.content} />
    </main>
  );
}
