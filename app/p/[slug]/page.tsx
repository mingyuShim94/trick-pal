import { META_IMAGES, SURPRISE_CONTENTS } from "@/lib/constants";
import { SurpriseContent } from "@/components/surprise-content";

export const runtime = "edge";

export default function SurprisePage({ params }: { params: { slug: string } }) {
  const [metaImageId, contentId] = params.slug.split(/-(?=[^-]+-[^-]+$)/);

  const metaImage = META_IMAGES.find((img) => img.id === metaImageId);
  const surpriseContent = SURPRISE_CONTENTS.find(
    (content) => content.id === contentId
  );

  if (!metaImage || !surpriseContent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Invalid link</p>
      </div>
    );
  }

  const revengeMessages = [
    "Get revenge on your friend 😈",
    "Surprise another friend 🤭",
    "I want to prank too! 😎",
    "Revenge is mine 🔥",
  ];

  const randomMessage =
    revengeMessages[Math.floor(Math.random() * revengeMessages.length)];

  return (
    <main className="fixed inset-0 bg-black">
      <SurpriseContent
        content={surpriseContent}
        randomMessage={randomMessage}
      />
    </main>
  );
}
