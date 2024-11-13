"use client";

import { Suspense, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { META_IMAGES, SURPRISE_CONTENTS } from "@/lib/constants";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Copy, Share2, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SharePage() {
  const router = useRouter();

  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
          <Loader2 className="w-12 h-12 text-white animate-spin" />
        </div>
      }
    >
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
  const [isCopied, setIsCopied] = useState(false);

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
    setShareUrl(`${baseUrl}/p/${metaImageId}-${contentId}`);
  }, [metaImageId, contentId, router]);

  if (!metaImageId || !contentId || !metaImage || !surpriseContent) {
    return null;
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
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
    <main className="min-h-screen p-4 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <Card className="max-w-4xl mx-auto border-4 border-yellow-400 shadow-[0_0_20px_rgba(255,255,0,0.5)] bg-white/90 backdrop-blur-sm dark:bg-zinc-900/90">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-4xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Share Your Trick
            </span>
          </CardTitle>
          <p className="text-xl font-bold text-purple-600 dark:text-purple-400">
            Your surprise link is ready to blow minds! 🎉💥
          </p>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center">
              <Share2 className="w-6 h-6 mr-2 text-blue-500" />
              Preview
            </h2>
            <div className="aspect-video relative rounded-lg overflow-hidden border-4 border-blue-500 shadow-lg transition-transform duration-300 hover:scale-105">
              <Image
                src={metaImage.thumbnail}
                alt={metaImage.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <Input
                type="text"
                value={shareUrl}
                readOnly
                className="flex-1 bg-transparent border-none focus:outline-none text-gray-600 dark:text-gray-300"
              />
              <Button
                variant="outline"
                onClick={copyToClipboard}
                className="font-bold transition-all duration-300 hover:scale-105"
              >
                {isCopied ? "Copied!" : "Copy"}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                variant="default"
                className="w-full font-bold text-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                onClick={copyToClipboard}
              >
                <Copy className="w-5 h-5 mr-2" />
                Copy Link
              </Button>
              <Button
                variant="outline"
                className="w-full font-bold text-lg border-4 border-pink-500 text-pink-600 hover:bg-pink-100 dark:hover:bg-pink-900 transition-all duration-300 transform hover:scale-105"
                onClick={shareLink}
              >
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </Button>
            </div>
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
              onClick={() => router.push("/")}
              className="font-bold text-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:translate-x-2"
            >
              Create Another
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
