import { Category } from "@/lib/types";
import { cn } from "@/lib/utils";

interface CategoryTabProps {
  category: Category;
  isSelected: boolean;
  onClick: () => void;
  disabled?: boolean;
  comingSoon?: boolean;
}

export function CategoryTab({
  category,
  isSelected,
  onClick,
  disabled,
  comingSoon,
}: CategoryTabProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "px-4 py-2 rounded-full whitespace-nowrap transition-colors relative mt-3",
        isSelected
          ? "bg-blue-600 text-white"
          : disabled
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      )}
    >
      {category.name}
      {comingSoon && (
        <span className="absolute -top-3 -right-2 bg-yellow-500 text-white text-xs px-2 py-0.5 rounded-full whitespace-nowrap">
          Coming Soon
        </span>
      )}
    </button>
  );
}
