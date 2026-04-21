import { StoryTemplate } from "@/components/StoryTemplate";
import { getCompetitorBySlug } from "@/lib/stories";

export const metadata = {
  title: "Derek L. — Powerlifting Meet | ForgeUp",
  description:
    "Eight weeks to first meet. More training backfired. Milo's peaking block landed three PRs.",
  openGraph: {
    title: "Derek L. — Powerlifting Meet",
    description:
      "Powerlifting meet prep. Thought harder meant stronger. Learned that peaking beats grinding.",
    type: "article",
  },
};

export default function Page() {
  const story = getCompetitorBySlug("derek-l-powerlifting-meet");
  if (!story) return null;
  return <StoryTemplate story={story} />;
}
