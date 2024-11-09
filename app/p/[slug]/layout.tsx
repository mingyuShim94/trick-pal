import { META_IMAGES } from "@/lib/constants";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const [metaImageId] = params.slug.split(/-(?=[^-]+-[^-]+$)/);
  console.log("metaImageId", metaImageId);
  const metaImage = META_IMAGES.find((img) => img.id === metaImageId);

  if (!metaImage) {
    return {
      title: "TrickPal",
      description: "Fun surprise link sharing service",
    };
  }

  return {
    title: metaImage.title,
    description: metaImage.description,
    openGraph: {
      title: metaImage.title,
      description: metaImage.description,
      images: [`/images/meta/${metaImageId}.webp`],
    },
    twitter: {
      card: "summary_large_image",
      title: metaImage.title,
      description: metaImage.description,
      images: [`/images/meta/${metaImageId}.webp`],
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
