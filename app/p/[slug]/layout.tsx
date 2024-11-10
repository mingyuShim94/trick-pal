import { META_IMAGES } from "@/lib/constants";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const [metaImageId] = params.slug.split(/-(?=[^-]+-[^-]+$)/);
  const metaImage = META_IMAGES.find((img) => img.id === metaImageId);

  if (!metaImage) {
    return {
      title: "TrickPal",
      description: "Fun surprise link sharing service",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) {
    console.error("NEXT_PUBLIC_BASE_URL is not defined");
    return {
      title: "TrickPal",
      description: "Fun surprise link sharing service",
    };
  }

  const imageUrl = `${baseUrl}/images/meta/${metaImageId}.webp`;

  return {
    metadataBase: new URL(baseUrl),
    title: metaImage.title,
    description: metaImage.description,
    openGraph: {
      title: metaImage.title,
      description: metaImage.description,
      images: [imageUrl],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metaImage.title,
      description: metaImage.description,
      images: [imageUrl],
    },
    icons: { icon: "/favicon.webp" },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
