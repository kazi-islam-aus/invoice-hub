export default function Dashboard() {
  return (
    <main style={{ fontFamily: "system-ui", background: "#F8FAFC", minHeight: "100vh" }}>

      {/* HEADER */}
      <div style={{
        background: "white",
        padding: "20px 40px",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h1 style={{ color: "#0F3D91", fontSize: "20px", fontWeight: "bold" }}>
          Invoice Hub Dashboard
        </h1>

        <button style={{
          background: "#22C55E",
          color: "white",
          padding: "8px 14px",
          borderRadius: "6px",
          border: "none"
        }}>
          + New Invoice
        </button>
      </div>

      {/* STATS */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        padding: "40px"
      }}>

        {[
          { label: "Total Invoices", value: "12" },
          { label: "Paid", value: "8" },
          { label: "Pending", value: "3" },
          { label: "Overdue", value: "1" }
        ].map((item, i) => (
          <div key={i} style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            border: "1px solid #e5e7eb"
          }}>
            <p style={{ color: "gray" }}>{item.label}</p>
            <h2 style={{ fontSize: "28px", color: "#0F3D91" }}>
              {item.value}
            </h2>
          </div>
        ))}

      </section>

      {/* RECENT ACTIVITY */}
      <section style={{ padding: "0 40px 40px" }}>
        <h2 style={{ marginBottom: "20px" }}>Recent Invoices</h2>

        <div style={{ background: "white", padding: "20px", borderRadius: "10px", border: "1px solid #e5e7eb" }}>
          <p>No invoices created yet.</p>
        </div>
      </section>

    </main>
  );
}