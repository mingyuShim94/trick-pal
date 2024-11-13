import { MetaImage } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { memo } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface MetaImageCardProps {
  image: MetaImage;
  isSelected: boolean;
  onSelect: () => void;
}

export const MetaImageCard = memo(function MetaImageCard({
  image,
  isSelected,
  onSelect,
}: MetaImageCardProps) {
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
          src={image.thumbnail}
          alt={image.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
          loading="eager"
          quality={75}
          className="object-cover"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(
            shimmer(700, 475)
          )}`}
          unoptimized={process.env.NODE_ENV === "development"}
          fetchPriority="high"
        />
        {isSelected && (
          <div className="absolute inset-0 bg-yellow-500 bg-opacity-50 flex items-center justify-center">
            <Check className="w-16 h-16 text-white" />
          </div>
        )}
      </div>
      <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">
        {image.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
        {image.description}
      </p>
    </motion.div>
  );
});

// Image loading shimmer effect
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g" gradientTransform="rotate(90)">
      <stop stop-color="#f6f7f8" offset="0%" />
      <stop stop-color="#edeef1" offset="50%" />
      <stop stop-color="#f6f7f8" offset="100%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f6f7f8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
</svg>`;
