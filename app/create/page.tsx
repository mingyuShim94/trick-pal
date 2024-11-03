"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CATEGORIES, META_IMAGES } from "@/lib/constants";
import { MetaImageCard } from "@/components/meta-image-card";
import { CategoryTab } from "@/components/category-tab";

export default function CreatePage() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0].id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = META_IMAGES.filter(
    (image) => image.category === selectedCategory
  );

  return (
    <main className="min-h-screen p-4 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Select Meta Image
          </h1>
          <p className="text-gray-600 mt-2">
            Choose a meta image that will spark curiosity
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex gap-2 overflow-x-auto pb-4">
            {CATEGORIES.map((category) => (
              <CategoryTab
                key={category.id}
                category={category}
                isSelected={selectedCategory === category.id}
                onClick={() => setSelectedCategory(category.id)}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {filteredImages.map((image) => (
              <MetaImageCard
                key={image.id}
                image={image}
                isSelected={selectedImage === image.id}
                onSelect={() => setSelectedImage(image.id)}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={() => window.history.back()}>
            Previous
          </Button>
          <Button
            variant="default"
            disabled={!selectedImage}
            onClick={() =>
              (window.location.href = `/create/content?image=${selectedImage}`)
            }
          >
            Next
          </Button>
        </div>
      </div>
    </main>
  );
}
