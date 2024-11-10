import { META_IMAGES } from "@/lib/constants";
import { Metadata } from "next";

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

    // slug 파싱 에러 처리
    let metaImageId;
    try {
      [metaImageId] = params.slug.split(/-(?=[^-]+-[^-]+$)/);
    } catch (e) {
      console.error("Error parsing slug:", e);
      return defaultMetadata;
    }

    console.log("Parsed metaImageId:", metaImageId); // 디버깅용

    const metaImage = META_IMAGES.find((img) => img.id === metaImageId);
    console.log("Found metaImage:", metaImage); // 디버깅용

    if (!metaImage) {
      console.warn(`Meta image not found for id: ${metaImageId}`);
      return defaultMetadata;
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    if (!baseUrl) {
      console.error("NEXT_PUBLIC_BASE_URL is not defined");
      return defaultMetadata;
    }

    const imageUrl = new URL(
      `/images/meta/${metaImageId}.webp`,
      baseUrl
    ).toString();
    console.log("Generated imageUrl:", imageUrl); // 디버깅용

    return {
      metadataBase: new URL(baseUrl),
      title: metaImage.title,
      description: metaImage.description,
      openGraph: {
        title: metaImage.title,
        description: metaImage.description,
        images: [imageUrl],
        type: "website",
        siteName: "TrickPal",
      },
      twitter: {
        card: "summary_large_image",
        title: metaImage.title,
        description: metaImage.description,
        images: [imageUrl],
      },
      icons: { icon: "/favicon.webp" },
    };
  } catch (error) {
    console.error("Error in generateMetadata:", error);
    return defaultMetadata;
  }
}

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

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
