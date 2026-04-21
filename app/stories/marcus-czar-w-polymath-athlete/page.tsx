import { StoryTemplate } from "@/components/StoryTemplate";
import { getStoryBySlug } from "@/lib/stories";

export const metadata = {
  title: 'Marcus "Czar" W. — The Polymath Athlete | ForgeUp',
  description:
    "Does five sports equally. Every coach said pick one. Milo made five coexist.",
  openGraph: {
    title: 'Marcus "Czar" W. — The Polymath Athlete',
    description:
      "Lifting, CrossFit, running, climbing, boxing. Same volume. Different structure. Impossible made intelligent.",
    type: "article",
  },
};

export default function Page() {
  const story = getStoryBySlug("marcus-czar-w-polymath-athlete");
  if (!story) return null;
  return <StoryTemplate story={story} />;
}
