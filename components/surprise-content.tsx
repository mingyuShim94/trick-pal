"use client";

import { PreviewPlayer } from "@/components/preview-player";
import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { SurpriseContent } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Flame, Ghost } from "lucide-react";

export default function SurpriseContent({
  surpriseContent,
}: {
  surpriseContent: SurpriseContent;
}) {
  const [isVideoComplete, setIsVideoComplete] = useState(false);
  const [randomMessage, setRandomMessage] = useState("");

  const revengeMessages = [
    { text: "Get revenge on your friend", icon: Flame },
    { text: "Surprise another friend", icon: Ghost },
    { text: "I want to prank too!", icon: Sparkles },
    { text: "Revenge is mine", icon: Zap },
  ];

  useEffect(() => {
    const message =
      revengeMessages[Math.floor(Math.random() * revengeMessages.length)];
    setRandomMessage(message.text);
  }, []);

  return (
    <main className="fixed inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-red-900">
      <div className="w-full h-full relative">
        <PreviewPlayer
          content={surpriseContent}
          onPlayComplete={() => setIsVideoComplete(true)}
        />
        <div
          className={cn(
            "fixed left-1/2 bottom-8 -translate-x-1/2 transition-all duration-500",
            "opacity-0 translate-y-full",
            isVideoComplete && "opacity-100 translate-y-0"
          )}
        >
          <Button
            asChild
            size="lg"
            className="font-bold text-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:rotate-1 animate-pulse"
          >
            <Link href="/">
              {randomMessage}{" "}
              {(() => {
                const IconComponent = revengeMessages.find(
                  (m) => m.text === randomMessage
                )?.icon;
                return IconComponent ? (
                  <IconComponent className="w-5 h-5 ml-2 inline-block" />
                ) : null;
              })()}
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
