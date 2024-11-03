import { Category, MetaImage } from "@/lib/types";

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
