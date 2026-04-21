import { StoryTemplate } from "@/components/StoryTemplate";
import { getCompetitorBySlug } from "@/lib/stories";

export const metadata = {
  title: "Jackson W. — CrossFit Games | ForgeUp",
  description:
    "First time Games qualifier. Thought two-a-days were the answer. Milo said sleep and food came first.",
  openGraph: {
    title: "Jackson W. — CrossFit Games",
    description:
      "CrossFit Games athlete. Overtrained on the way. Learned that recovery beats volume at the highest level.",
    type: "article",
  },
};

export default function Page() {
  const story = getCompetitorBySlug("jackson-w-crossfit-games");
  if (!story) return null;
  return <StoryTemplate story={story} />;
}
