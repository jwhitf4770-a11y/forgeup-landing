import { StoryTemplate } from "@/components/StoryTemplate";
import { getStoryBySlug } from "@/lib/stories";

export const metadata = {
  title: "Marcus K. — The Returning Lifter | ForgeUp",
  description:
    "Six years off. Marcus wanted to jump back to 225. Milo showed him why starting honest beats starting hard.",
  openGraph: {
    title: "Marcus K. — The Returning Lifter",
    description:
      "Six years away from the gym. Milo didn't skip the foundation. Six weeks later, 225.",
    type: "article",
  },
};

export default function Page() {
  const story = getStoryBySlug("marcus-k-returning-lifter");
  if (!story) return null;
  return <StoryTemplate story={story} />;
}
