// "use client";

// import { META_IMAGES, SURPRISE_CONTENTS } from "@/lib/constants";
// import { PreviewPlayer } from "@/components/preview-player";
// import { useState } from "react";
// import Link from "next/link";
// import { cn } from "@/lib/utils";

// export const runtime = "edge";

// export default function SurprisePage({ params }: { params: { slug: string } }) {
//   const [isVideoComplete, setIsVideoComplete] = useState(false);
//   const [metaImageId, contentId] = params.slug.split(/-(?=[^-]+-[^-]+$)/);

//   const metaImage = META_IMAGES.find((img) => img.id === metaImageId);
//   const surpriseContent = SURPRISE_CONTENTS.find(
//     (content) => content.id === contentId
//   );

//   if (!metaImage || !surpriseContent) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-gray-600">Invalid link</p>
//       </div>
//     );
//   }

//   const revengeMessages = [
//     "Get revenge on your friend 😈",
//     "Surprise another friend 🤭",
//     "I want to prank too! 😎",
//     "Revenge is mine 🔥",
//   ];

//   const randomMessage =
//     revengeMessages[Math.floor(Math.random() * revengeMessages.length)];

//   return (
//     <main className="fixed inset-0 bg-black">
//       <div className="w-full h-full">
//         <PreviewPlayer
//           content={surpriseContent}
//           onPlayComplete={() => setIsVideoComplete(true)}
//         />
//         <Link
//           href="/"
//           className={cn(
//             "fixed left-1/2 bottom-8 -translate-x-1/2 bg-white text-black px-6 py-3 rounded-full font-bold shadow-lg transition-all duration-500 hover:scale-105 hover:bg-blue-50",
//             "opacity-0 translate-y-full pointer-events-none",
//             isVideoComplete && "opacity-100 translate-y-0 pointer-events-auto"
//           )}
//         >
//           {randomMessage}
//         </Link>
//       </div>
//     </main>
//   );
// }
import { notFound } from "next/navigation";

export const runtime = "edge";

interface TestPageProps {
  params: {
    test: string;
  };
}

export default function TestPage({ params }: TestPageProps) {
  // test 파라미터가 없거나 유효하지 않은 경우 404
  if (!params.test) {
    notFound();
  }

  return (
    <main className="min-h-screen p-4 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">테스트 페이지</h1>
          <p className="text-gray-600 mt-2">테스트 파라미터: {params.test}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-center">
            <p className="text-lg text-gray-700">
              이 페이지는 테스트 목적으로 만들어졌습니다.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
