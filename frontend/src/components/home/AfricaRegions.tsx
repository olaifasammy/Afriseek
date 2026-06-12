export default function AfricaRegions() {
  return (
    <section style={{ padding: "1rem" }}>
      <h2>Explore By Region</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          marginTop: "1rem"
        }}
      >
        <div className="card">North Africa</div>
        <div className="card">West Africa</div>
        <div className="card">East Africa</div>
        <div className="card">Central Africa</div>
        <div className="card">Southern Africa</div>
      </div>
    </section>
  );
}
