import { ImageResponse } from "next/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            border: "1.5px solid #1c5fb8",
            background:
              "linear-gradient(180deg, #b9dcff 0%, #6cb0f7 42%, #2f7de0 50%, #4d9cf2 78%, #9fd7ff 100%)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 20,
              height: 12,
              marginTop: 2,
              borderRadius: 10,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 100%)",
            }}
          />
        </div>
      </div>
    ),
    size
  )
}
