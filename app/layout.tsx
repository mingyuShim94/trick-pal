import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TrickPal",
  description:
    "TrickPal - Share surprising links with your friends! Create fun moments by sharing unexpected videos and sounds. Choose from intriguing meta images and prank your friends with entertaining content. Make memorable moments together with this easy-to-use surprise link sharing app.",
  icons: { icon: "/favicon.webp" },
  openGraph: {
    images: ["/root_metaImage.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/root_metaImage.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
