import { Category } from "@/lib/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

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
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 relative mt-3",
        "font-bold text-sm shadow-md",
        isSelected
          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white transform scale-105"
          : disabled
          ? "bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500"
          : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500",
        "dark:focus:ring-offset-gray-900"
      )}
      whileHover={!disabled && !isSelected ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      {category.name}
      {comingSoon && (
        <motion.span
          className="absolute -top-3 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Clock className="w-3 h-3 inline-block mr-1" />
          Coming Soon
        </motion.span>
      )}
    </motion.button>
  );
}
