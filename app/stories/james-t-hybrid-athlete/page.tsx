import { StoryTemplate } from "@/components/StoryTemplate";
import { getStoryBySlug } from "@/lib/stories";

export const metadata = {
  title: "James T. — The Hybrid Athlete | ForgeUp",
  description:
    "16-mile long run + leg day same weekend? Milo taught him sequencing beats volume.",
  openGraph: {
    title: "James T. — The Hybrid Athlete",
    description:
      "Marathon runner and lifter. Wanted both. Milo showed him how to thread recovery.",
    type: "article",
  },
};

export default function Page() {
  const story = getStoryBySlug("james-t-hybrid-athlete");
  if (!story) return null;
  return <StoryTemplate story={story} />;
}
