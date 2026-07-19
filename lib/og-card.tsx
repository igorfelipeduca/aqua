export const OG_SIZE = { width: 1200, height: 630 }

export function OgCard({
  title,
  description,
  install,
}: {
  title: string
  description: string
  install?: string
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #dfe6ef 0%, #eef0f3 55%, #d8dde4 100%)",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          width: 1080,
          height: 510,
          display: "flex",
          flexDirection: "column",
          borderRadius: 18,
          border: "1px solid #8b909a",
          background: "#f4f5f8",
          boxShadow: "0 30px 70px rgba(20,30,50,0.35)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "16px 22px",
            background: "linear-gradient(180deg, #fbfcfd 0%, #e8ebef 55%, #dcdfe4 100%)",
            borderBottom: "1px solid #aeb3bc",
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 9,
              background: "linear-gradient(180deg, #ffb2ac 0%, #ee6a5f 55%, #d5443c 100%)",
              border: "1px solid #b8382f",
            }}
          />
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 9,
              background: "linear-gradient(180deg, #ffe9a8 0%, #f6bf4f 55%, #dd9e2c 100%)",
              border: "1px solid #c08e24",
            }}
          />
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 9,
              background: "linear-gradient(180deg, #c4efb2 0%, #7ed060 55%, #58a838 100%)",
              border: "1px solid #4d9331",
            }}
          />
          <div
            style={{
              display: "flex",
              marginLeft: 16,
              fontSize: 24,
              color: "#5a6069",
            }}
          >
            aqua.duca.dev
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            padding: "44px 64px 40px",
            gap: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#2f7de0",
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Aqua · a shadcn/ui registry
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 800,
              color: "#2c3138",
              letterSpacing: -3,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 29,
              lineHeight: 1.35,
              color: "#5a6069",
              maxWidth: 900,
            }}
          >
            {description}
          </div>
          {install ? (
            <div style={{ display: "flex", marginTop: "auto" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "13px 32px",
                  borderRadius: 999,
                  border: "2px solid #1c5fb8",
                  background:
                    "linear-gradient(180deg, #b9dcff 0%, #6cb0f7 42%, #2f7de0 50%, #4d9cf2 78%, #9fd7ff 100%)",
                  color: "white",
                  fontSize: 30,
                  fontWeight: 700,
                }}
              >
                {install}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
