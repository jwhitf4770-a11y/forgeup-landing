import { StoryTemplate } from "@/components/StoryTemplate";
import { getCompetitorBySlug } from "@/lib/stories";

export const metadata = {
  title: "Priya S. — Spartan Race | ForgeUp",
  description:
    "Signed up for Spartan Sprint with 6 weeks left. Milo didn't start over—he redirected.",
  openGraph: {
    title: "Priya S. — Spartan Race",
    description:
      "Six weeks to race. Good strength base. Milo just pointed it at obstacle racing.",
    type: "article",
  },
};

export default function Page() {
  const story = getCompetitorBySlug("priya-s-spartan-race");
  if (!story) return null;
  return <StoryTemplate story={story} />;
}
