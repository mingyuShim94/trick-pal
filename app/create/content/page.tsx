"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SURPRISE_CATEGORIES, SURPRISE_CONTENTS } from "@/lib/constants";
import { CategoryTab } from "@/components/category-tab";
import { SurpriseContentCard } from "@/components/surprise-content-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

export default function ContentSelectPage() {
  const router = useRouter();

  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
          <Loader2 className="w-12 h-12 text-white animate-spin" />
        </div>
      }
    >
      <ContentSelectPageContent router={router} />
    </Suspense>
  );
}

function ContentSelectPageContent({
  router,
}: {
  router: ReturnType<typeof useRouter>;
}) {
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
    <main className="min-h-screen p-4 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <Card className="max-w-4xl mx-auto border-4 border-yellow-400 shadow-[0_0_20px_rgba(255,255,0,0.5)] bg-white/90 backdrop-blur-sm dark:bg-zinc-900/90">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-4xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Select Surprise Content
            </span>
          </CardTitle>
          <p className="text-xl font-bold text-purple-600 dark:text-purple-400">
            Choose content that will shock your friends! 🎭💥
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-transparent">
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
              disabled={!selectedContent}
              onClick={() =>
                router.push(
                  `/create/preview?image=${metaImageId}&content=${selectedContent}`
                )
              }
              className="font-bold text-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:translate-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Preview
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
