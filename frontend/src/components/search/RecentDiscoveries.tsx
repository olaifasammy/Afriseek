const items = [
  "New Article: Timbuktu Libraries",
  "New Entity: Queen Amina",
  "New Knowledge Path: West African Kingdoms"
];

export default function RecentDiscoveries() {
  return (
    <section style={{padding:"1rem 1rem 3rem"}}>
      <h2>Recent Discoveries</h2>

      <div
        style={{
          display:"grid",
          gap:"1rem"
        }}
      >
        {items.map((item)=>(
          <div
            key={item}
            style={{
              background:"var(--afri-surface)",
              border:"1px solid var(--afri-border)",
              borderRadius:"18px",
              padding:"1rem"
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
