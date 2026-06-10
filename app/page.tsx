export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui" }}>
      <div style={{
        minHeight: "100vh",
        background: "#F8FAFC",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px"
      }}>
        
        <h1 style={{
          fontSize: "48px",
          fontWeight: "700",
          color: "#0F3D91",
          marginBottom: "20px",
          textAlign: "center"
        }}>
          Invoice Hub
        </h1>

        <p style={{
          fontSize: "20px",
          color: "#333",
          marginBottom: "30px",
          textAlign: "center"
        }}>
          Create. Send. Get Paid.
        </p>

        <div style={{
          display: "flex",
          gap: "12px"
        }}>
          <button style={{
            background: "#0F3D91",
            color: "white",
            padding: "12px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer"
          }}>
            Get Started
          </button>

          <button style={{
            background: "#22C55E",
            color: "white",
            padding: "12px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer"
          }}>
            View Pricing
          </button>
        </div>

        <p style={{
          marginTop: "40px",
          color: "#666",
          fontSize: "14px"
        }}>
          Built for Australian small businesses 🇦🇺
        </p>

      </div>
    </main>
  );
}
