const searches = [
  "Yoruba",
  "Hausa",
  "Swahili",
  "Timbuktu",
  "Nile River",
  "Songhai Empire"
];

export default function PopularSearches() {
  return (
    <section style={{padding:"1rem"}}>
      <h2>Popular Searches</h2>

      <div
        style={{
          display:"flex",
          flexWrap:"wrap",
          gap:"0.75rem"
        }}
      >
        {searches.map((item)=>(
          <button
            key={item}
            style={{
              border:"1px solid var(--afri-border)",
              background:"var(--afri-surface)",
              padding:"0.75rem 1rem",
              borderRadius:"999px"
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}
