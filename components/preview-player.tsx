"use client";

import { useEffect, useRef } from "react";
import { SurpriseContent } from "@/lib/types";
import YouTube, { YouTubeEvent, YouTubePlayer } from "react-youtube";

interface PreviewPlayerProps {
  content: SurpriseContent;
  isPlaying: boolean;
  onPlayComplete: () => void;
}

export function PreviewPlayer({
  content,
  isPlaying,
  onPlayComplete,
}: PreviewPlayerProps) {
  const playerRef = useRef<YouTubePlayer | null>(null);

  // YouTube URL에서 비디오 ID 추출
  const getVideoId = (url: string) => {
    if (content.contentType === "youtube-shorts") {
      return url.split("/shorts/")[1];
    }
    return url.split("v=")[1];
  };

  useEffect(() => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.playVideo();
      } else {
        playerRef.current.stopVideo();
      }
    }
  }, [isPlaying]);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
      controls: 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  const onReady = (event: YouTubeEvent) => {
    playerRef.current = event.target;
  };

  const onEnd = () => {
    onPlayComplete();
  };

  return (
    <div className="aspect-video relative rounded-lg overflow-hidden bg-black">
      <YouTube
        videoId={getVideoId(content.contentUrl)}
        opts={opts}
        onReady={onReady}
        onEnd={onEnd}
        className="w-full h-full"
      />
    </div>
  );
}
