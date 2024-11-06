"use client";

import { useState, useRef } from "react";
import { SurpriseContent } from "@/lib/types";
import YouTube, { YouTubeEvent, YouTubePlayer } from "react-youtube";

interface PreviewPlayerProps {
  content: SurpriseContent;
  onPlayComplete: () => void;
}

export function PreviewPlayer({ content, onPlayComplete }: PreviewPlayerProps) {
  const playerRef = useRef<YouTubePlayer | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const getVideoId = (url: string) => {
    if (content.contentType === "youtube-shorts") {
      return url.split("/shorts/")[1];
    }
    return url.split("v=")[1];
  };

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
      rel: 0,
      mute: 1,
    },
  };

  const onReady = (event: YouTubeEvent) => {
    playerRef.current = event.target;
    event.target.playVideo();
  };

  const onEnd = () => {
    onPlayComplete();
  };

  const handleClick = () => {
    if (playerRef.current && isMuted) {
      playerRef.current.unMute();
      playerRef.current.playVideo();
      setIsMuted(false);
    }
  };

  return (
    <div
      className="relative w-full h-full cursor-pointer"
      onClick={handleClick}
    >
      <div className="absolute inset-0">
        <YouTube
          videoId={getVideoId(content.contentUrl)}
          opts={opts}
          onReady={onReady}
          onEnd={onEnd}
          className="w-full h-full"
          iframeClassName="w-full h-full"
        />
      </div>
      {isMuted && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
          Click to unmute
        </div>
      )}
    </div>
  );
}
