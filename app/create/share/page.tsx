"use client";

import { Suspense, useState, useEffect } from "react";
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

  const [shareUrl, setShareUrl] = useState<string>("");

  console.log(metaImageId, contentId);

  const metaImage = META_IMAGES.find((img) => img.id === metaImageId);
  const surpriseContent = SURPRISE_CONTENTS.find(
    (content) => content.id === contentId
  );

  useEffect(() => {
    if (!metaImageId || !contentId) {
      router.push("/create");
      return;
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
    setShareUrl(`${baseUrl}/share/${metaImageId}-${contentId}`);
  }, [metaImageId, contentId, router]);

  if (!metaImageId || !contentId) {
    router.push("/create");
    return null;
  }

  if (!metaImage || !surpriseContent) {
    return null;
  }
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(shareUrl);
  };
  const shareLink = async () => {
    if (navigator.share) {
      await navigator.share({
        title: metaImage.title,
        text: metaImage.description,
        url: shareUrl,
      });
    } else {
      copyToClipboard();
    }
  };
  return (
    <main className="min-h-screen p-4 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Share Your Link</h1>
          <p className="text-gray-600 mt-2">
            Your surprise link is ready to share!
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Preview</h2>
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
            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="flex-1 bg-transparent border-none focus:outline-none text-gray-600"
              />
              <Button variant="outline" onClick={copyToClipboard}>
                Copy
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                variant="default"
                className="w-full"
                onClick={copyToClipboard}
              >
                Copy Link
              </Button>
              <Button variant="outline" className="w-full" onClick={shareLink}>
                Share
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={() => window.history.back()}>
            Previous
          </Button>
          <Button variant="default" onClick={() => router.push("/")}>
            Create Another
          </Button>
        </div>
      </div>
    </main>
  );
}
