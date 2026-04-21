import { StoryTemplate } from "@/components/StoryTemplate";
import { getStoryBySlug } from "@/lib/stories";

export const metadata = {
  title: "Troy M. — The Ex-Athlete | ForgeUp",
  description:
    "Used to run a 4.7 forty. Milo didn't chase ghosts. He built from now.",
  openGraph: {
    title: "Troy M. — The Ex-Athlete",
    description:
      "D2 football. Twelve years later. Milo measured 68-second 400m. Eleven weeks later: 58.",
    type: "article",
  },
};

export default function Page() {
  const story = getStoryBySlug("troy-m-ex-athlete");
  if (!story) return null;
  return <StoryTemplate story={story} />;
}
