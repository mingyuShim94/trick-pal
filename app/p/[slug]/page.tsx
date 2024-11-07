"use client";

import { META_IMAGES, SURPRISE_CONTENTS } from "@/lib/constants";
import { PreviewPlayer } from "@/components/preview-player";

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

  return (
    <main className="fixed inset-0 bg-black">
      <div className="w-full h-full">
        <PreviewPlayer content={surpriseContent} onPlayComplete={() => {}} />
      </div>
    </main>
  );
}
