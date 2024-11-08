import { MetaImage } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { memo } from "react";

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
    <div
      onClick={onSelect}
      className={cn(
        "cursor-pointer rounded-lg border-2 p-4 transition-all",
        isSelected
          ? "border-blue-600 bg-blue-50"
          : "border-transparent bg-white hover:border-gray-200"
      )}
    >
      <div className="aspect-video relative rounded-md overflow-hidden mb-4">
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
      </div>
      <h3 className="font-semibold text-gray-900">{image.title}</h3>
      <p className="text-sm text-gray-500 mt-1">{image.description}</p>
    </div>
  );
});

// 이미지 로딩 중 표시될 shimmer 효과
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
