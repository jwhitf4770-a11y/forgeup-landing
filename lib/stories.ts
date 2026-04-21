import { StoryData } from "@/components/StoryTemplate";

export const stories: Record<string, StoryData> = {
  "marcus-k-returning-lifter": {
    slug: "marcus-k-returning-lifter",
    archetype: "The Returning Lifter",
    name: "Marcus K.",
    age: 42,
    location: "Austin, TX",
    discipline: "Strength Training",
    frequency: "4 days/week",
    imageUrl: "https://images.pexels.com/photos/4720785/pexels-photo-4720785.jpeg",
    pullQuote: "Six years off. I thought I was starting over. Milo said I was starting different.",
    problem:
      "After six years away from the gym—raising kids, life happening—Marcus wanted to jump back in. His benchmark was 225 squat. But his body had adapted. His nervous system had reset. His connective tissue had reorganized around a sedentary life. Every coach he consulted said the same thing: you're starting from scratch. Milo didn't.",
    conversation: [
      {
        from: "user",
        text: "First session back. I want to squat 225 like I left off.",
      },
      {
        from: "milo",
        text: "When?",
      },
      {
        from: "user",
        text: "Six years ago.",
      },
      {
        from: "milo",
        text: "Then 225 isn't where you left off—it's where you're going. We start at 135. Your nervous system has to remember.",
      },
      {
        from: "user",
        text: "That feels wrong.",
      },
      {
        from: "milo",
        text: "It'll feel right in week 8 when you own 225. Stability first, ego later.",
      },
    ],
    outcome:
      "By respecting the reset instead of fighting it, Marcus rebuilt his foundation in half the time most people take. Week 8 he hit 225 for a triple. Week 12 he was at 285. The gap wasn't weakness — it was a mismatch between his goals and his actual starting point. Milo closed that gap by starting honest.",
  },

  "dana-r-powerlifter": {
    slug: "dana-r-powerlifter",
    archetype: "The Competitive Lifter",
    name: "Dana R.",
    age: 28,
    location: "Sacramento, CA",
    discipline: "Powerlifting",
    frequency: "6 days/week",
    imageUrl: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg",
    pullQuote: "My squat was stalled. Milo didn't fix my squat. He fixed my recovery.",
    problem:
      "Dana's squat was stuck at 295 for six weeks. She wanted to add volume. More squat days. Harder sessions. More accessories. The standard move: if something isn't working, attack it harder. But Milo saw something different: a recovery debt from adjacent training.",
    conversation: [
      {
        from: "user",
        text: "Squat stalled at 295 for 6 weeks. Want to add another squat day.",
      },
      {
        from: "milo",
        text: "Your weekly structure?",
      },
      {
        from: "user",
        text: "Squat Mon/Fri, deadlift Wed. Heavy deadlift to heavy squat is 48 hours.",
      },
      {
        from: "milo",
        text: "Your squat isn't the problem. Your Friday squat is running on empty because your CNS hasn't cleared the Wednesday deadlift. Move deadlift to Thursday.",
      },
      {
        from: "user",
        text: "That simple?",
      },
      {
        from: "milo",
        text: "Most stalls are. You don't always need more volume. Sometimes you need better recovery. Give it 3 weeks. I'm betting 315.",
      },
    ],
    outcome:
      "Dana moved deadlift to Thursday. Kept Friday squat unchanged. Three weeks later she hit 315 for a triple. The plateau wasn't a squat plateau—it was a recovery plateau. Most coaches add work. Milo optimizes recovery. Same total volume. Different timing. Completely different outcome.",
  },

  "james-t-hybrid-athlete": {
    slug: "james-t-hybrid-athlete",
    archetype: "The Hybrid Athlete",
    name: "James T.",
    age: 31,
    location: "Boulder, CO",
    discipline: "Run + Lift",
    frequency: "5-6 days/week",
    imageUrl:
      "https://images.pexels.com/photos/35599353/pexels-photo-35599353.jpeg",
    pullQuote: "I wanted to do it all. Milo taught me sequencing beats volume.",
    problem:
      "James runs marathons and lifts heavy. Both equally. The problem: his body can't recover from a 16-mile long run Saturday and a full leg day Sunday. Most coaches make him pick. Milo didn't. He made him sequence.",
    conversation: [
      {
        from: "user",
        text: "16-mile long run Saturday. Still do legs Sunday?",
      },
      {
        from: "milo",
        text: "Squat 4x5 Sunday?",
      },
      {
        from: "user",
        text: "Yeah.",
      },
      {
        from: "milo",
        text: "No. That's a 48-hour lower-body debt. Moving it to Wednesday. The long run IS your Sunday training—don't double it.",
      },
      {
        from: "user",
        text: "Won't my squat drop?",
      },
      {
        from: "milo",
        text: "It'll rise. You'll squat Wednesday fresh instead of Sunday demolished.",
      },
    ],
    outcome:
      "James kept the same volume but spread it across the week. His marathon pace improved. His squat strength didn't drop. Sunday became a true recovery day. He wasn't doing less—he was doing smarter. That's the difference between an athlete and an optimized athlete.",
  },

  "carol-b-strength-seeker": {
    slug: "carol-b-strength-seeker",
    archetype: "The Strength Seeker",
    name: "Carol B.",
    age: 54,
    location: "Portland, OR",
    discipline: "Strength Training",
    frequency: "4 days/week",
    imageUrl:
      "https://images.pexels.com/photos/36917074/pexels-photo-36917074.jpeg",
    pullQuote: "At 54, I finally know what I want. Milo made it possible.",
    problem:
      "Carol is 54 and wants to deadlift 200 pounds. She's been training consistently for two years at 135. A 65-pound jump. Most people would see age and conservative goals. Milo saw a 14-week window and solid foundation.",
    conversation: [
      {
        from: "user",
        text: "Deadlift 200 pounds. I'm 54. Is that realistic?",
      },
      {
        from: "milo",
        text: "What's your current pull?",
      },
      {
        from: "user",
        text: "135. I'm consistent—four days a week for two years.",
      },
      {
        from: "milo",
        text: "14 weeks. Linear progression then peaking. One thing: you cutting right now?",
      },
      {
        from: "user",
        text: "A little.",
      },
      {
        from: "milo",
        text: "Pause it. You can't build 65 pounds of pull strength on a deficit. Eat to perform. Then we move 200.",
      },
    ],
    outcome:
      "Carol hit 200 pounds on week 14. Not once. For a triple. She went from thinking 'maybe I can add 10 pounds' to 'I can add 65 and own it.' Age wasn't a limit. Consistency was the asset. Milo just channeled it right.",
  },

  "troy-m-ex-athlete": {
    slug: "troy-m-ex-athlete",
    archetype: "The Ex-Athlete",
    name: "Troy M.",
    age: 35,
    location: "Charlotte, NC",
    discipline: "Multi-Sport",
    frequency: "3-4 days/week",
    imageUrl:
      "https://images.pexels.com/photos/8820689/pexels-photo-8820689.jpeg",
    pullQuote: "I used to be fast. Milo reminded me that 'used to' doesn't matter. Right now does.",
    problem:
      "Troy played D2 football 12 years ago. Ran a 4.7 forty. He wanted to 'get back to where he was.' But 12 years of different training, different body composition, different neural patterns mean the body he has now isn't a rusty version of the body he had. It's a different body entirely.",
    conversation: [
      {
        from: "user",
        text: "I want to get back to D2 shape. Ran a 4.7 forty in college.",
      },
      {
        from: "milo",
        text: "That was when?",
      },
      {
        from: "user",
        text: "Twelve years ago.",
      },
      {
        from: "milo",
        text: "What's your current 400m time?",
      },
      {
        from: "user",
        text: "No idea.",
      },
      {
        from: "milo",
        text: "Then that's where we start. Not 2012. We build from your actual body. Twelve years of different training. One test. Then we move.",
      },
    ],
    outcome:
      "Troy tested his 400m. 68 seconds. Slow. Milo built a program from there. Eight weeks later: 62 seconds. Three more weeks: 58 seconds. He wasn't chasing a ghost. He was building on what was real. Progress felt different—earned, not nostalgic.",
  },

  "priya-s-race-convert": {
    slug: "priya-s-race-convert",
    archetype: "The Race Convert",
    name: "Priya S.",
    age: 26,
    location: "Denver, CO",
    discipline: "Obstacle Racing",
    frequency: "4 days/week",
    imageUrl:
      "https://images.pexels.com/photos/33638482/pexels-photo-33638482.jpeg",
    pullQuote: "I signed up for a race with six weeks left. Milo didn't start over. He redirected.",
    problem:
      "Priya signed up for a Spartan Sprint with six weeks to go. She'd been doing general strength training—compound lifts, cardio. It's solid. But a Spartan is different. Carries, holds, obstacles, and short-burst conditioning. Her program was good for something else entirely.",
    conversation: [
      {
        from: "user",
        text: "Signed up for Spartan Sprint. Six weeks. Doing general strength training.",
      },
      {
        from: "milo",
        text: "Current program?",
      },
      {
        from: "user",
        text: "Three lifting days, one cardio. Compounds mainly.",
      },
      {
        from: "milo",
        text: "Keep squats, deadlifts, pulls. Add carries, farmer walks, second conditioning day. Week four we do a race simulation.",
      },
      {
        from: "user",
        text: "Start over from scratch?",
      },
      {
        from: "milo",
        text: "No. You have the base. We're just pointing it at obstacles.",
      },
    ],
    outcome:
      "Priya finished the Spartan with a respectable time and zero pain. She had the carry strength. She had the grip. She had the conditioning. She just needed the programming redirected. That's the difference between a program and adaptive coaching.",
  },

  "marcus-czar-w-polymath-athlete": {
    slug: "marcus-czar-w-polymath-athlete",
    archetype: "The Polymath Athlete",
    name: 'Marcus "Czar" W.',
    age: 38,
    location: "Boulder, CO",
    discipline: "5 Disciplines",
    frequency: "10-11 sessions/week",
    imageUrl:
      "https://images.pexels.com/photos/4720777/pexels-photo-4720777.jpeg",
    pullQuote: "Every coach said pick one. Milo made five coexist.",
    problem:
      "Czar does five things: barbell lifting, CrossFit, trail running, rock climbing, boxing. Not hobbies. Equal pursuits. He's genuinely excellent at all of them. And he refuses to pick a primary. Every coach says that's impossible. Milo says it's a math problem.",
    conversation: [
      {
        from: "user",
        text: "I do five things: lifting, CrossFit, running, climbing, boxing. Every coach says pick one.",
      },
      {
        from: "milo",
        text: "How many sessions a week?",
      },
      {
        from: "user",
        text: "About 10. And I'm always sore.",
      },
      {
        from: "milo",
        text: "You're not recovering, you're accumulating fatigue. Heavy lifting and climbing same-day? That's the problem. Running has to live away from leg days.",
      },
      {
        from: "user",
        text: "So I do have to pick one.",
      },
      {
        from: "milo",
        text: "No. You need a recovery budget that threads five. It's harder to program. Not impossible.",
      },
    ],
    outcome:
      "Czar kept all five disciplines. Same volume. Different structure. Intensity was sequenced. Recovery was allocated. Some days were strength-dominant. Some days were conditioning. Some days were skill. Within four weeks, soreness dropped 80%. Performance went up across all five. He wasn't doing less. He was doing impossible—but intelligently.",
  },
};

export function getStoryBySlug(slug: string): StoryData | undefined {
  return stories[slug];
}

export function getAllStorySlugs(): string[] {
  return Object.keys(stories);
}
