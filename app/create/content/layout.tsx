import { Metadata } from "next";

export const metadata: Metadata = {
  title: "콘텐츠 선택 | Surprise Me",
  description: "친구들을 놀라게 할 재미있는 콘텐츠를 선택해보세요",
  openGraph: {
    title: "콘텐츠 선택 | Surprise Me",
    description: "친구들을 놀라게 할 재미있는 콘텐츠를 선택해보세요",
    images: [
      {
        url: "/curiosity-1.webp",
        width: 1200,
        height: 630,
        alt: "Surprise Me - 콘텐츠 선택 페이지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "콘텐츠 선택 | Surprise Me",
    description: "친구들을 놀라게 할 재미있는 콘텐츠를 선택해보세요",
    images: ["/curiosity-1.webp"],
  },
};

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
