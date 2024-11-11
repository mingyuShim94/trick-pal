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

    // 이미지 URL 생성
    // const imageUrl = new URL(
    //   `images/meta/${metaImageId}.webp`,
    //   baseUrl.replace(/\/$/, "")
    // ).toString();
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

    // return {
    //   metadataBase: new URL(baseUrl.replace(/\/$/, "")),
    //   title: metaImage.title,
    //   description: metaImage.description,
    //   openGraph: {
    //     title: metaImage.title,
    //     description: metaImage.description,
    //     images: [
    //       {
    //         url: metaImage.thumbnail,
    //         width: 1200,
    //         height: 630,
    //         alt: metaImage.title,
    //       },
    //     ],
    //     type: "website",
    //     siteName: "TrickPal",
    //   },
    //   twitter: {
    //     card: "summary_large_image",
    //     title: metaImage.title,
    //     description: metaImage.description,
    //     images: [
    //       {
    //         url: metaImage.thumbnail,
    //         width: 1200,
    //         height: 630,
    //         alt: metaImage.title,
    //       },
    //     ],
    //   },
    //   icons: { icon: "/favicon.webp" },
    // };

    return {
      metadataBase: new URL(baseUrl),
      // 제목: 핵심 키워드를 앞에 배치
      title: `${metaImage.title} | TrickPal`,
      // 설명: 명확하고 구체적으로
      description: `${metaImage.description}. Share surprising moments with TrickPal - Fun and unexpected content sharing platform.`,
      openGraph: {
        // 소셜 미디어용 제목: 더 매력적이고 클릭을 유도하는 형태
        title: `${metaImage.title} 👀 | TrickPal`,
        // 소셜 미디어용 설명: 행동을 유도하는 문구 포함
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
        // 트위터용 제목도 동일하게 최적화
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
