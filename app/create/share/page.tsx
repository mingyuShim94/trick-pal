"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { META_IMAGES, SURPRISE_CONTENTS } from "@/lib/constants";
import Image from "next/image";

export default function SharePage() {
  const router = useRouter();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SharePageContent router={router} />
    </Suspense>
  );
}

function SharePageContent({
  router,
}: {
  router: ReturnType<typeof useRouter>;
}) {
  const searchParams = useSearchParams();
  const metaImageId = searchParams.get("image");
  const contentId = searchParams.get("content");

  const metaImage = META_IMAGES.find((img) => img.id === metaImageId);
  const surpriseContent = SURPRISE_CONTENTS.find(
    (content) => content.id === contentId
  );

  if (!metaImageId || !contentId) {
    router.push("/create");
    return null;
  }

  if (!metaImage || !surpriseContent) {
    return null;
  }

  return (
    <main className="min-h-screen p-4 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Share</h1>
          <p className="text-gray-600 mt-2">
            Share your surprise link with friends
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Meta Image</h2>
            <div className="aspect-video relative rounded-lg overflow-hidden border">
              <Image
                src={metaImage.thumbnail}
                alt={metaImage.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Surprise Content</h2>
            <div className="aspect-video relative rounded-lg overflow-hidden border bg-black">
              {/* 여기에 SurpriseContent 컴포넌트를 추가하세요 */}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={() => window.history.back()}>
            Previous
          </Button>
          <Button
            variant="default"
            onClick={() =>
              router.push(
                `/create/complete?image=${metaImageId}&content=${contentId}`
              )
            }
          >
            Complete
          </Button>
        </div>
      </div>
    </main>
  );
}
