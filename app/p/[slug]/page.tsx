import { META_IMAGES, SURPRISE_CONTENTS } from "@/lib/constants";
import dynamic from "next/dynamic";
import type { SurpriseContent } from "@/lib/types";

// Props 타입 정의
type SurpriseContentProps = {
  surpriseContent: SurpriseContent;
};

// 클라이언트 컴포넌트를 동적으로 임포트하면서 타입 지정
const SurpriseContent = dynamic<SurpriseContentProps>(
  () => import("@/components/surprise-content"),
  {
    ssr: false,
  }
);

export const runtime = "edge";

export default function SurprisePage({ params }: { params: { slug: string } }) {
  const [metaImageId, contentId] = params.slug.split(/-(?=[^-]+-[^-]+$)/);

  const metaImage = META_IMAGES.find((img) => img.id === metaImageId);
  const surpriseContent = SURPRISE_CONTENTS.find(
    (content) => content.id === contentId
  );

  if (!metaImage || !surpriseContent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Invalid link</p>
      </div>
    );
  }

  return <SurpriseContent surpriseContent={surpriseContent} />;
}
