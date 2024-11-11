import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  title: "재미있는 깜짝 링크를 공유해보세요 | TrickPal",
  description:
    "친구들과 함께 즐거운 순간을 공유하세요. 깜짝 놀라게 할 수 있는 재미있는 컨텐츠가 준비되어 있습니다.",
  openGraph: {
    title: "재미있는 깜짝 링크를 공유해보세요 👀 | TrickPal",
    description:
      "친구들과 함께 즐거운 순간을 공유하세요. 어떤 재미있는 컨텐츠가 숨겨져 있을까요?",
    images: [
      {
        url: "/root_metaImage.png",
        width: 1200,
        height: 630,
        alt: "TrickPal - 깜짝 링크 공유 서비스",
      },
    ],
    type: "website",
    siteName: "TrickPal",
  },
  twitter: {
    card: "summary_large_image",
    title: "재미있는 깜짝 링크를 공유해보세요 👀 | TrickPal",
    description:
      "친구들과 함께 즐거운 순간을 공유하세요. 어떤 재미있는 컨텐츠가 숨겨져 있을까요?",
    images: ["/root_metaImage.png"],
  },
  icons: { icon: "/favicon.webp" },
};

// 기존의 generateMetadata 함수는 주석 처리
/*
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // ... (기존 코드)
}
*/

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
