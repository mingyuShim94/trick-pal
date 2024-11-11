"use client";

import { PreviewPlayer } from "@/components/preview-player";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { SurpriseContent } from "@/lib/types";

export default function SurpriseContent({
  surpriseContent,
}: {
  surpriseContent: SurpriseContent;
}) {
  const [isVideoComplete, setIsVideoComplete] = useState(false);

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
      <div className="w-full h-full">
        <PreviewPlayer
          content={surpriseContent}
          onPlayComplete={() => setIsVideoComplete(true)}
        />
        <Link
          href="/"
          className={cn(
            "fixed left-1/2 bottom-8 -translate-x-1/2 bg-white text-black px-6 py-3 rounded-full font-bold shadow-lg transition-all duration-500 hover:scale-105 hover:bg-blue-50",
            "opacity-0 translate-y-full pointer-events-none",
            isVideoComplete && "opacity-100 translate-y-0 pointer-events-auto"
          )}
        >
          {randomMessage}
        </Link>
      </div>
    </main>
  );
}
