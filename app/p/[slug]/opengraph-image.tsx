import { ImageResponse } from "next/og";
import { META_IMAGES } from "@/lib/constants";

export const runtime = "edge";

export const alt = "Preview image";
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image({ params }: { params: { slug: string } }) {
  const parts = params.slug.split("-");
  const metaImageId = parts.slice(0, -1).join("-");
  const metaImage = META_IMAGES.find((img) => img.id === metaImageId);

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
          <img
            src={metaImage?.thumbnail}
            alt={metaImage?.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
        </div>
      </div>
    ),
    size
  );
}
