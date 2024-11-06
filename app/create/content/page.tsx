"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SURPRISE_CATEGORIES, SURPRISE_CONTENTS } from "@/lib/constants";
import { CategoryTab } from "@/components/category-tab";
import { SurpriseContentCard } from "@/components/surprise-content-card";

export default function ContentSelectPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const metaImageId = searchParams.get("image");

  const [selectedCategory, setSelectedCategory] = useState("jumpscare");
  const [selectedContent, setSelectedContent] = useState<string | null>(null);

  useEffect(() => {
    if (!metaImageId) {
      router.push("/create");
    }
  }, [metaImageId, router]);

  const filteredContents = SURPRISE_CONTENTS.filter(
    (content) => content.category === selectedCategory
  );

  return (
    <main className="min-h-screen p-4 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Select Surprise Content
          </h1>
          <p className="text-gray-600 mt-2">
            Choose content that will surprise your friends
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex gap-2 overflow-x-auto pb-4">
            {SURPRISE_CATEGORIES.map((category) => (
              <CategoryTab
                key={category.id}
                category={category}
                isSelected={selectedCategory === category.id}
                onClick={() => {
                  if (category.id === "jumpscare") {
                    setSelectedCategory(category.id);
                  }
                }}
                disabled={category.id !== "jumpscare"}
                comingSoon={category.id !== "jumpscare"}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {filteredContents.map((content) => (
              <SurpriseContentCard
                key={content.id}
                content={content}
                isSelected={selectedContent === content.id}
                onSelect={() => setSelectedContent(content.id)}
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
            disabled={!selectedContent}
            onClick={() =>
              router.push(
                `/create/preview?image=${metaImageId}&content=${selectedContent}`
              )
            }
          >
            Preview
          </Button>
        </div>
      </div>
    </main>
  );
}
