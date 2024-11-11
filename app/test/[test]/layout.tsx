import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { test: string };
}): Promise<Metadata> {
  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    ),
    title: `${params.test} 테스트 | TrickPal`,
    description: `${params.test} 파라미터로 생성된 테스트 페이지입니다.`,
    openGraph: {
      title: `${params.test} 테스트 🧪 | TrickPal`,
      description: `${params.test} 파라미터로 생성된 테스트 페이지입니다. TrickPal의 테스트를 확인해보세요!`,
      images: [
        {
          url: `/test-${params.test}.png`, // 동적 이미지 URL
          width: 1200,
          height: 630,
          alt: `TrickPal - ${params.test} 테스트`,
        },
      ],
      type: "website",
      siteName: "TrickPal",
    },
    twitter: {
      card: "summary_large_image",
      title: `${params.test} 테스트 🧪 | TrickPal`,
      description: `${params.test} 파라미터로 생성된 테스트 페이지입니다. TrickPal의 테스트를 확인해보세요!`,
      images: [`/test-${params.test}.png`],
    },
    icons: { icon: "/favicon.webp" },
  };
}

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
