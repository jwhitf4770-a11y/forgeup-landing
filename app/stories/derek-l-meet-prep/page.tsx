import { StoryTemplate } from "@/components/StoryTemplate";
import { getStoryBySlug } from "@/lib/stories";

export const metadata = {
  title: "Derek L. — The Meet Competitor | ForgeUp",
  description:
    "Eight weeks to first meet. More training backfired. Milo's peaking block landed three PRs.",
  openGraph: {
    title: "Derek L. — The Meet Competitor",
    description:
      "Powerlifting meet prep. Thought harder meant stronger. Learned that peaking beats grinding.",
    type: "article",
  },
};

export default function Page() {
  const story = getStoryBySlug("derek-l-meet-prep");
  if (!story) return null;
  return <StoryTemplate story={story} />;
}
