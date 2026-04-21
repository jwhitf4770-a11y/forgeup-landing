import { StoryTemplate } from "@/components/StoryTemplate";
import { getCompetitorBySlug } from "@/lib/stories";

export const metadata = {
  title: "Amara K. — Weightlifting Competition | ForgeUp",
  description:
    "Six months to nationals. Snatch stalled. Milo cut volume, fixed shoulders, added 30 pounds.",
  openGraph: {
    title: "Amara K. — Weightlifting Competition",
    description:
      "Olympic lifter. Stuck at 235 snatch. Learned that recovery beats volume.",
    type: "article",
  },
};

export default function Page() {
  const story = getCompetitorBySlug("amara-k-weightlifting");
  if (!story) return null;
  return <StoryTemplate story={story} />;
}
