import { StoryTemplate } from "@/components/StoryTemplate";
import { getStoryBySlug } from "@/lib/stories";

export const metadata = {
  title: "Priya S. — The Race Convert | ForgeUp",
  description:
    "Signed up for Spartan Sprint with 6 weeks left. Milo didn't start over—he redirected.",
  openGraph: {
    title: "Priya S. — The Race Convert",
    description:
      "Six weeks to race. Good strength base. Milo just pointed it at obstacle racing.",
    type: "article",
  },
};

export default function Page() {
  const story = getStoryBySlug("priya-s-race-convert");
  if (!story) return null;
  return <StoryTemplate story={story} />;
}
