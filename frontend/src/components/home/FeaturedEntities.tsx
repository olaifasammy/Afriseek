import { useEntities } from "../../hooks/useEntities";

export default function FeaturedEntities() {
  const { entities, loading } = useEntities();

  console.log("ENTITIES:", entities);

  return (
    <section style={{ padding: "1rem" }}>
      <h2>Recently Added Entities</h2>

      {loading && <p>Loading...</p>}

      {!loading && (
        <pre
          style={{
            color: "lime",
            whiteSpace: "pre-wrap"
          }}
        >
          {JSON.stringify(entities, null, 2)}
        </pre>
      )}
    </section>
  );
}
