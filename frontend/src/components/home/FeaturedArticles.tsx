export default function FeaturedArticles() {
  return (
    <section style={{ padding: "1rem" }}>
      <h2>Featured Articles</h2>

      <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
        <div className="card">History of Misrata</div>
        <div className="card">Yoruba Civilization</div>
      </div>
    </section>
  );
}
