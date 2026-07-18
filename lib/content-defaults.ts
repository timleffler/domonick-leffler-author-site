export type SiteSection = {
  id: "book" | "author";
  hero_eyebrow: string;
  hero_title: string;
  hero_intro: string;
  heading: string;
  body: string;
  extra: Record<string, string | number>;
};

export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  published_at: string | null;
  read_minutes: number;
  content: string;
  status: "draft" | "published";
  created_at?: string;
  updated_at?: string;
};

export const defaultSections: Record<SiteSection["id"], SiteSection> = {
  book: {
    id: "book",
    hero_eyebrow: "The Mada Mariner series",
    hero_title: "One pendant. One hidden prophecy.",
    hero_intro: "A magical academy, an ancient secret, and a destiny that refuses to stay buried.",
    heading: "Mada Mariner and the Hidden Prophecy",
    body: "In a world where magic shapes destiny, Mada Mariner is about to learn her future was never truly hers to begin with. When she enters the legendary Velrendor Academy, she expects rules, training, and the challenge of surviving a school built for the magically gifted. What she doesn’t expect is the way the halls seem to recognize her—or the strange pull of the pendant she’s worn her entire life without understanding why.\n\nAs hidden truths begin to unravel, Mada is drawn into a prophecy that reaches far beyond the classroom walls. With forces closing in and her past beginning to fracture, Mada must discover who she truly is before the academy decides for her.",
    extra: { publication_date: "May 8, 2026", kindle_pages: 189, paperback_pages: 208, amazon_url: "https://www.amazon.com/dp/B0GXXDYDF2", hardcopy_note: "Currently in production. Availability details coming soon." },
  },
  author: {
    id: "author",
    hero_eyebrow: "Behind the worlds",
    hero_title: "Meet Domonick.",
    hero_intro: "Magic-minded mischief-maker, lifelong storyteller, and creator of the Mada Mariner series.",
    heading: "Wonder is non-negotiable.",
    body: "Domonick Leffler is a magic-minded mischief-maker in their 30s who believes every great adventure should come with a prophecy, a pendant, and at least one unexpected plot twist. When they’re not spinning tales of wizard academies, ancient legacies, and morally questionable heroes, they’re probably rewatching a favorite cartoon—or imagining how their characters would derail a quiet afternoon in a donut shop.\n\nBorn with Athetoid Cerebral Palsy, Domonick has faced physical and mental challenges, but those experiences have never defined the limits of their imagination. Storytelling, world-building, and creative play have always been places of freedom—spaces where curiosity wins, rules are bendable, and wonder is non-negotiable.\n\nFor Domonick, meaning comes from recognizing the past, acknowledging the present, and looking toward the future. It’s a philosophy summed up by a line they hold close to heart: “Keep moving forward.”\n\nMada Mariner and the Hidden Prophecy is Domonick’s debut novel and a love letter to underdogs, spell-casters, and anyone who has ever wondered if they were destined for something bigger.",
    extra: {},
  },
};

export const defaultPost: Post = {
  id: "welcome-to-velmara",
  slug: "welcome-to-velmara",
  title: "Welcome to Velmara",
  excerpt: "A first look at the magic, mysteries, and mischief behind the Mada Mariner series.",
  category: "Worldbuilding",
  published_at: "2026-05-01",
  read_minutes: 4,
  status: "published",
  content: "Every story starts with a door. Sometimes it is a literal one. Sometimes it is a strange pendant, an impossible prophecy, or the feeling that a hallway already knows your name.\n\nVelmara began with that feeling: a world just beyond sight, waiting for the right character to find the way in. Mada Mariner is that character, although she might not agree that she is ready for everything waiting on the other side.\n\nI wanted Velrendor Academy to feel both wondrous and unsettling—a place where magic is taught, but where the oldest lessons may have been intentionally forgotten. Its corridors hold history. Its rules hold secrets. And beneath all of it, something ancient is beginning to stir.\n\nThis space will be where I share more about the world of Mada Mariner, the process behind the books, and the strange sparks that become stories. Thank you for stepping through the door.\n\nKeep moving forward,\nDomonick",
};
