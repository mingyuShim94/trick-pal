import { SurpriseContent } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
          src={content.thumbnail}
          alt={content.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
          quality={75}
          className="object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
          {content.contentType === "youtube-shorts" ? "Shorts" : "Video"}
        </div>
      </div>
      <h3 className="font-semibold text-gray-900">{content.title}</h3>
      <p className="text-sm text-gray-500 mt-1">{content.description}</p>
    </div>
  );
}
