"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CATEGORIES, META_IMAGES } from "@/lib/constants";
import { MetaImageCard } from "@/components/meta-image-card";
import { CategoryTab } from "@/components/category-tab";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CreatePage() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0].id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = META_IMAGES.filter(
    (image) => image.category === selectedCategory
  );

  return (
    <main className="min-h-screen p-4 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <Card className="max-w-4xl mx-auto border-4 border-yellow-400 shadow-[0_0_20px_rgba(255,255,0,0.5)] bg-white/90 backdrop-blur-sm dark:bg-zinc-900/90">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-4xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Select Meta Image
            </span>
          </CardTitle>
          <p className="text-xl font-bold text-purple-600 dark:text-purple-400">
            Choose an image that will spark curiosity! 🎭
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-transparent">
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

          <div className="flex justify-between gap-4 mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
              className="font-bold text-lg border-4 border-pink-500 text-pink-600 hover:bg-pink-100 dark:hover:bg-pink-900 transition-all duration-300 transform hover:scale-105 hover:-translate-x-2"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Previous
            </Button>
            <Button
              variant="default"
              size="lg"
              disabled={!selectedImage}
              onClick={() =>
                (window.location.href = `/create/content?image=${selectedImage}`)
              }
              className="font-bold text-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:translate-x-2"
            >
              Next
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
