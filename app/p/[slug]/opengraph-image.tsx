import { ImageResponse } from "next/og";
import { META_IMAGES } from "@/lib/constants";
import Image from "next/image";

export const runtime = "edge";

export const alt = "Preview image";
export const size = {
  width: 1200,
  height: 630,
};

export default async function generateImage({
  params,
}: {
  params: { slug: string };
}) {
  const [metaImageId] = params.slug.split(/-(?=[^-]+-[^-]+$)/);
  const metaImage = META_IMAGES.find((img) => img.id === metaImageId);

  if (!metaImage) {
    throw new Error("Image not found");
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Image
            src={metaImage.thumbnail || ""}
            alt={metaImage.title || "Image"}
            layout="fill"
            objectFit="cover"
            style={{
              borderRadius: "12px",
            }}
          />
        </div>
      </div>
    ),
    size
  );
}
