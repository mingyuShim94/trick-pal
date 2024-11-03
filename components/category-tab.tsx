import { Category } from "@/lib/types";
import { cn } from "@/lib/utils";

interface CategoryTabProps {
  category: Category;
  isSelected: boolean;
  onClick: () => void;
}

export function CategoryTab({ category, isSelected, onClick }: CategoryTabProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-full whitespace-nowrap transition-colors",
        isSelected
          ? "bg-blue-600 text-white"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      )}
    >
      {category.name}
    </button>
  );
} 