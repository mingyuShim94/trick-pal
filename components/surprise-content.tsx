"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PreviewPlayer } from "@/components/preview-player";
import type { SurpriseContent } from "@/lib/types";

interface SurpriseContentProps {
  content: SurpriseContent;
  randomMessage: string;
}

export function SurpriseContent({
  content,
  randomMessage,
}: SurpriseContentProps) {
  const [isVideoComplete, setIsVideoComplete] = useState(false);

  return (
    <div className="w-full h-full">
      <PreviewPlayer
        content={content}
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
  );
}
