interface Relationship {
  title: string;
  subtitle: string;
}

interface Props {
  relationships: Relationship[];
}

export default function EntityRelated({
  relationships
}: Props) {
  return (
    <section
      style={{
        marginTop: "2rem"
      }}
    >
      <h3
        style={{
          marginBottom: "1rem"
        }}
      >
        Related
      </h3>

      <div
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))"
        }}
      >
        {relationships.map(item => (
          <div
            key={item.title}
            style={{
              background: "#fff",
              border: "1px solid #e5e7eb",
              padding: "1rem",
borderRadius: "8px"
            }}
          >
            <strong>
              {item.title}
            </strong>

            <div
              style={{
                color: "#6b7280",
                marginTop: ".35rem"
              }}
            >
              {item.subtitle}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
