import { META_IMAGES } from "@/lib/constants";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const [metaImageId] = params.slug.split(/-(?=[^-]+-[^-]+$)/);

  // 에러 처리 추가
  if (!params.slug) {
    return getDefaultMetadata();
  }

  const metaImage = META_IMAGES.find((img) => img.id === metaImageId);

  if (!metaImage) {
    return getDefaultMetadata();
  }

  // 이미지 URL 생성을 함수로 분리
  const imageUrl = getMetaImageUrl(metaImageId);

  return {
    title: metaImage.title,
    description: metaImage.description,

    openGraph: {
      title: metaImage.title,
      description: metaImage.description,
      images: [imageUrl],
      type: "website",
      siteName: "TrickPal",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/p/${params.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: metaImage.title,
      description: metaImage.description,
      images: [imageUrl],
      // 추가 twitter 속성
      site: "@TrickPal", // 만약 트위터 계정이 있다면
    },
    // 기본 메타데이터 추가
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || ""),
    robots: {
      index: true,
      follow: true,
    },
  };
}

// 기본 메타데이터를 반환하는 함수
function getDefaultMetadata(): Metadata {
  return {
    title: "TrickPal",
    description: "Fun surprise link sharing service",
    openGraph: {
      title: "TrickPal",
      description: "Fun surprise link sharing service",
      type: "website",
      siteName: "TrickPal",
    },
    twitter: {
      card: "summary_large_image",
      title: "TrickPal",
      description: "Fun surprise link sharing service",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// 이미지 URL 생성 함수
function getMetaImageUrl(imageId: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) {
    console.error("NEXT_PUBLIC_BASE_URL is not defined");
    return "/default-image.webp"; // 기본 이미지 경로
  }
  const imageUrl = `${baseUrl}/images/meta/${imageId}.webp`;
  return imageUrl;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
