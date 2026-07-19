import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#eef0f3",
          borderRadius: 40,
        }}
      >
        <div
          style={{
            width: 150,
            height: 150,
            borderRadius: 75,
            border: "6px solid #1c5fb8",
            background:
              "linear-gradient(180deg, #b9dcff 0%, #6cb0f7 42%, #2f7de0 50%, #4d9cf2 78%, #9fd7ff 100%)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 100,
              height: 60,
              marginTop: 10,
              borderRadius: 50,
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
