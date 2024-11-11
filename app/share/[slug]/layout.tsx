import { META_IMAGES } from "@/lib/constants";
import { Metadata } from "next";

// 기본 메타데이터 정의
const defaultMetadata: Metadata = {
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
  icons: { icon: "/favicon.webp" },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    // slug가 없는 경우 처리
    if (!params.slug) {
      console.error("No slug provided");
      return defaultMetadata;
    }

    // slug 파싱
    let metaImageId;
    try {
      [metaImageId] = params.slug.split(/-(?=[^-]+-[^-]+$)/);
    } catch (e) {
      console.error("Error parsing slug:", e);
      return defaultMetadata;
    }

    // 메타 이미지 찾기
    const metaImage = META_IMAGES.find((img) => img.id === metaImageId);
    if (!metaImage) {
      console.warn(`Meta image not found for id: ${metaImageId}`);
      return defaultMetadata;
    }

    // 기본 URL 확인
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    if (!baseUrl) {
      console.error("NEXT_PUBLIC_BASE_URL is not defined");
      return defaultMetadata;
    }

    const imageUrl = new URL(
      `/images/meta/${metaImageId}.webp`,
      baseUrl
    ).toString();

    console.log("Generated Image URL:", imageUrl);
    console.log("Base URL:", baseUrl);
    console.log(
      "MetadataBase:",
      new URL(baseUrl.replace(/\/$/, "")).toString()
    );

    // 절대 URL로 이미지 경로 생성
    const absoluteImageUrl = new URL(metaImage.thumbnail, baseUrl).toString();

    return {
      metadataBase: new URL(baseUrl),
      title: `${metaImage.title} | TrickPal`,
      description: `${metaImage.description}. Share surprising moments with TrickPal - Fun and unexpected content sharing platform.`,
      openGraph: {
        title: `${metaImage.title} 👀 | TrickPal`,
        description: `${metaImage.description}. Click to discover what your friend wants to share with you!`,
        images: [
          {
            url: absoluteImageUrl,
            width: 1200,
            height: 630,
            alt: metaImage.title,
          },
        ],
        type: "website",
        siteName: "TrickPal",
      },
      twitter: {
        card: "summary_large_image",
        title: `${metaImage.title} 👀 | TrickPal`,
        description: `${metaImage.description}. Click to see what's waiting for you!`,
        images: [absoluteImageUrl],
      },
      icons: { icon: "/favicon.webp" },
    };
  } catch (error) {
    console.error("Error in generateMetadata:", error);
    return defaultMetadata;
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
