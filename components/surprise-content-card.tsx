import { SurpriseContent } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Zap } from "lucide-react";

interface SurpriseContentCardProps {
  content: SurpriseContent;
  isSelected: boolean;
  onSelect: () => void;
}

export function SurpriseContentCard({
  content,
  isSelected,
  onSelect,
}: SurpriseContentCardProps) {
  return (
    <motion.div
      onClick={onSelect}
      className={cn(
        "cursor-pointer rounded-lg border-4 p-4 transition-all duration-300 transform hover:scale-105",
        isSelected
          ? "border-yellow-400 bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900 dark:to-yellow-800 shadow-lg"
          : "border-transparent bg-white dark:bg-zinc-800 hover:border-pink-300 dark:hover:border-pink-700 hover:shadow-md"
      )}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="aspect-video relative rounded-md overflow-hidden mb-4 shadow-inner">
        <Image
          src={content.thumbnail}
          alt={content.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
          quality={75}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <Play className="w-12 h-12 text-white" />
        </div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
          {content.contentType === "youtube-shorts" ? (
            <Zap className="w-3 h-3" />
          ) : (
            <Play className="w-3 h-3" />
          )}
          <span>
            {content.contentType === "youtube-shorts" ? "Shorts" : "Video"}
          </span>
        </div>
      </div>
      <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">
        {content.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
        {content.description}
      </p>
    </motion.div>
  );
}
