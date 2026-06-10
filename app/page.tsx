export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui", background: "#F8FAFC" }}>

      {/* NAVBAR */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 40px",
        borderBottom: "1px solid #e5e7eb",
        background: "white"
      }}>
        <div style={{ fontWeight: "bold", color: "#0F3D91", fontSize: "20px" }}>
          Invoice Hub
        </div>

        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Login</a>
          <button style={{
            background: "#0F3D91",
            color: "white",
            padding: "8px 14px",
            borderRadius: "6px",
            border: "none"
          }}>
            Get Started
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        textAlign: "center",
        padding: "80px 20px"
      }}>
        <h1 style={{ fontSize: "56px", color: "#0F3D91" }}>
          Invoice Hub
        </h1>

        <p style={{ fontSize: "22px", marginTop: "10px" }}>
          Create. Send. Get Paid.
        </p>

        <div style={{ marginTop: "30px" }}>
          <button style={{
            background: "#0F3D91",
            color: "white",
            padding: "12px 20px",
            borderRadius: "8px",
            marginRight: "10px"
          }}>
            Get Started
          </button>

          <button style={{
            background: "#22C55E",
            color: "white",
            padding: "12px 20px",
            borderRadius: "8px"
          }}>
            View Pricing
          </button>
        </div>

        <p style={{ marginTop: "20px", color: "gray" }}>
          Built for Australian small businesses 🇦🇺
        </p>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "60px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>
          Features
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px"
        }}>

          {[
            "Create invoices in seconds",
            "Product & service catalog",
            "Recurring invoices",
            "Australian GST support",
            "Stripe payments",
            "Email invoicing"
          ].map((f, i) => (
            <div key={i} style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              border: "1px solid #e5e7eb"
            }}>
              {f}
            </div>
          ))}

        </div>
      </section>

      {/* PRICING */}
      <section style={{ padding: "60px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>
          Pricing
        </h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap"
        }}>

          {[
            { name: "Starter", price: "$9" },
            { name: "Pro", price: "$19" },
            { name: "Business", price: "$39" }
          ].map((p, i) => (
            <div key={i} style={{
              background: "white",
              padding: "30px",
              borderRadius: "10px",
              width: "200px",
              border: "1px solid #e5e7eb"
            }}>
              <h3>{p.name}</h3>
              <p style={{ fontSize: "24px", color: "#0F3D91" }}>{p.price}</p>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}