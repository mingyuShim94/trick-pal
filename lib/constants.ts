import { Category, MetaImage, SurpriseContent } from "@/lib/types";

export const CATEGORIES: Category[] = [
  {
    id: "urgent",
    name: "Urgent Messages",
    description: "Images disguised as urgent or important messages",
  },
  {
    id: "fomo",
    name: "FOMO Triggers",
    description: "Images that trigger curiosity and fear of missing out",
  },
  {
    id: "curiosity",
    name: "Curiosity Hooks",
    description: "Images you can't resist clicking",
  },
  {
    id: "luck",
    name: "Luck & Superstition",
    description: "Images related to luck or superstitious beliefs",
  },
];

export const META_IMAGES: MetaImage[] = [
  // Urgent Messages Category
  {
    id: "urgent-1",
    category: "urgent",
    title: "Urgent Message from Work",
    description: "Disguised as an urgent work notification",
    thumbnail: "/images/meta/urgent-1.webp",
  },
  {
    id: "urgent-2",
    category: "urgent",
    title: "[Unread Message] Mom: Check Now",
    description: "Disguised as an urgent message from parents",
    thumbnail: "/images/meta/urgent-2.webp",
  },
  // FOMO 유발 카테고리
  {
    id: "fomo-1",
    category: "fomo",
    title: "Special Event Invitation Just for You",
    description: "Miss out on this special event and you'll regret it",
    thumbnail: "/images/meta/fomo-1.webp",
  },
  {
    id: "fomo-2",
    category: "fomo",
    title: "Your Friend Shared Their TMI with You",
    description: "They've shared their secrets with you",
    thumbnail: "/images/meta/fomo-2.webp",
  },
  // 호기심 자극 카테고리
  {
    id: "curiosity-1",
    category: "curiosity",
    title: "Your Instagram Account Might Have Been Hacked",
    description: "Security alert due to suspicious activity",
    thumbnail: "/images/meta/curiosity-1.webp",
  },
  {
    id: "curiosity-2",
    category: "curiosity",
    title: "Someone Secretly Likes You",
    description: "They've sent you a secret message",
    thumbnail: "/images/meta/curiosity-2.webp",
  },
  {
    id: "curiosity-3",
    category: "curiosity",
    title: "Your Past Life Results Have Arrived",
    description: "Results from your past life test",
    thumbnail: "/images/meta/curiosity-3.webp",
  },
  // 미신/행운 카테고리
  {
    id: "luck-1",
    category: "luck",
    title: "Luck's Letter: Share in 1 Minute or...",
    description: "Chain message related to luck",
    thumbnail: "/images/meta/luck-1.webp",
  },
  {
    id: "luck-2",
    category: "luck",
    title: "Your Daily Fortune: Click to Find Out",
    description: "Daily fortune results",
    thumbnail: "/images/meta/luck-2.webp",
  },
];

export const SURPRISE_CATEGORIES = [
  {
    id: "jumpscare",
    name: "Jump Scares",
    description: "Sudden scary surprises",
  },
  {
    id: "humor",
    name: "Humor",
    description: "Funny and unexpected content",
  },
  {
    id: "trending",
    name: "Trending",
    description: "Popular memes and trends",
  },
];

export const SURPRISE_CONTENTS: SurpriseContent[] = [
  {
    id: "jump-1",
    category: "jumpscare",
    title: "Baseball Surprise",
    description: "A baseball suddenly flies toward the screen",
    thumbnail: "/images/surprises/1.webp",
    contentUrl: "https://www.youtube.com/shorts/ANzkrSzpkgk",
    contentType: "youtube-shorts",
  },
  {
    id: "jump-2",
    category: "jumpscare",
    title: "Basement Creature",
    description:
      "A creature crawls slowly in the basement, then suddenly appears from the side",
    thumbnail: "/images/surprises/2.webp",
    contentUrl: "https://www.youtube.com/shorts/ZvptCPrknP8",
    contentType: "youtube-shorts",
  },
  {
    id: "jump-3",
    category: "jumpscare",
    title: "Peaceful Drive",
    description:
      "A peaceful drive through the mountains turns into a sudden zombie encounter",
    thumbnail: "/images/surprises/3.webp",
    contentUrl: "https://www.youtube.com/watch?v=HqGsT6VM8Vg",
    contentType: "youtube",
  },
  {
    id: "jump-4",
    category: "jumpscare",
    title: "Snowy Drive",
    description:
      "A peaceful drive in black and white snowy road turns terrifying when a ghost in white dress suddenly appears",
    thumbnail: "/images/surprises/4.webp",
    contentUrl: "https://www.youtube.com/watch?v=54U6BgYuJMY",
    contentType: "youtube",
  },
  {
    id: "jump-5",
    category: "jumpscare",
    title: "Spider Surprise",
    description:
      "A spider creeps along quietly before suddenly crashing into the screen",
    thumbnail: "/images/surprises/5.webp",
    contentUrl: "https://www.youtube.com/watch?v=uV_k8yK92dI",
    contentType: "youtube",
  },
  {
    id: "jump-6",
    category: "jumpscare",
    title: "Forest Walk Surprise",
    description:
      "A peaceful walk in the forest turns shocking when Koyote suddenly appears",
    thumbnail: "/images/surprises/6.webp",
    contentUrl: "https://www.youtube.com/watch?v=Zyc3C1kB0Tg",
    contentType: "youtube",
  },
];
