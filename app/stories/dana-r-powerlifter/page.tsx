import { StoryTemplate } from "@/components/StoryTemplate";
import { getStoryBySlug } from "@/lib/stories";

export const metadata = {
  title: "Dana R. — The Competitive Lifter | ForgeUp",
  description:
    "Squat stalled at 295. Dana wanted more volume. Milo optimized her recovery instead.",
  openGraph: {
    title: "Dana R. — The Competitive Lifter",
    description:
      "Stuck at 295 for six weeks. One schedule change. 315 three weeks later.",
    type: "article",
  },
};

export default function Page() {
  const story = getStoryBySlug("dana-r-powerlifter");
  if (!story) return null;
  return <StoryTemplate story={story} />;
}
