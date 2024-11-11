import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  title: "테스트 페이지 | TrickPal",
  description: "TrickPal의 테스트 페이지입니다.",
  openGraph: {
    title: "테스트 페이지 🧪 | TrickPal",
    description: "TrickPal의 테스트 페이지입니다.",
    images: [
      {
        url: "/test-meta.png",
        width: 1200,
        height: 630,
        alt: "TrickPal - 테스트 페이지",
      },
    ],
    type: "website",
    siteName: "TrickPal",
  },
  twitter: {
    card: "summary_large_image",
    title: "테스트 페이지 🧪 | TrickPal",
    description: "TrickPal의 테스트 페이지입니다.",
    images: ["/test-meta.png"],
  },
  icons: { icon: "/favicon.webp" },
};

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
