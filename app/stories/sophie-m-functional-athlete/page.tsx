import { StoryTemplate } from "@/components/StoryTemplate";
import { getStoryBySlug } from "@/lib/stories";

export const metadata = {
  title: "Sophie M. — The Functional Athlete | ForgeUp",
  description:
    "Group energy without direction. Sophie traded volume for strategy and found her strength.",
  openGraph: {
    title: "Sophie M. — The Functional Athlete",
    description:
      "CrossFit athlete. Always busy, never getting stronger. Until Milo made her programming intentional.",
    type: "article",
  },
};

export default function Page() {
  const story = getStoryBySlug("sophie-m-functional-athlete");
  if (!story) return null;
  return <StoryTemplate story={story} />;
}
