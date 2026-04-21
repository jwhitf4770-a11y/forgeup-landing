import { StoryTemplate } from "@/components/StoryTemplate";
import { getStoryBySlug } from "@/lib/stories";

export const metadata = {
  title: "Carol B. — The Strength Seeker | ForgeUp",
  description:
    "54 years old. 135 to 200 deadlift. 14 weeks. One pause in her diet.",
  openGraph: {
    title: "Carol B. — The Strength Seeker",
    description:
      "Two years at 135. Wanted 200. At 54, Milo said yes—with actual science.",
    type: "article",
  },
};

export default function Page() {
  const story = getStoryBySlug("carol-b-strength-seeker");
  if (!story) return null;
  return <StoryTemplate story={story} />;
}
