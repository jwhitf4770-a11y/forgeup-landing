import { StoryTemplate } from "@/components/StoryTemplate";
import { getCompetitorBySlug } from "@/lib/stories";

export const metadata = {
  title: "Maya B. — Bodybuilding Stage | ForgeUp",
  description:
    "Twenty weeks to show. Thought harder training brought condition. Milo showed her condition lives in the kitchen.",
  openGraph: {
    title: "Maya B. — Bodybuilding Stage",
    description:
      "Bodybuilder. Prepping for stage. Learned that conditioning comes from diet timing, not training volume.",
    type: "article",
  },
};

export default function Page() {
  const story = getCompetitorBySlug("maya-b-bodybuilding");
  if (!story) return null;
  return <StoryTemplate story={story} />;
}
