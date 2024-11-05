"use client";

import { useEffect, useState } from "react";
import { META_IMAGES, SURPRISE_CONTENTS } from "@/lib/constants";
import { PreviewPlayer } from "@/components/preview-player";
import Image from "next/image";

export default function SurprisePage({ params }: { params: { slug: string } }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // URL에서 메타이미지 ID와 콘텐츠 ID 추출
  const parts = params.slug.split("-");
  const contentId = parts.pop(); // 마지막 부분이 contentId
  const metaImageId = parts.join("-"); // 나머지를 다시 합쳐서 metaImageId

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

  const handleClick = () => {
    setHasInteracted(true);
    setIsPlaying(true);
  };

  // 초기 화면: 메타이미지와 클릭 유도
  if (!hasInteracted) {
    return (
      <main
        onClick={handleClick}
        className="min-h-screen bg-white flex flex-col items-center justify-center cursor-pointer"
      >
        <div className="max-w-2xl w-full p-4 space-y-4">
          <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src={metaImage.thumbnail}
              alt={metaImage.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center">
            <h1 className="text-xl font-semibold text-gray-900">
              {metaImage.title}
            </h1>
            <p className="text-gray-600 mt-2">{metaImage.description}</p>
            <p className="text-blue-600 mt-4">Click to view content</p>
          </div>
        </div>
      </main>
    );
  }

  // 콘텐츠 재생 화면
  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-4xl aspect-video">
        <PreviewPlayer
          content={surpriseContent}
          isPlaying={isPlaying}
          onPlayComplete={() => setIsPlaying(false)}
        />
      </div>
    </main>
  );
}
