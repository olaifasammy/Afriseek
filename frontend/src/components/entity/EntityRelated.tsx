import {
  Globe,
  Landmark,
  MapPin
} from "lucide-react";

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
  if (!relationships?.length) {
    return null;
  }

  return (
    <section
      style={{
        marginTop: "2rem"
      }}
    >
      <h2
        style={{
          marginBottom: "1rem",
          fontSize: "1.4rem"
        }}
      >
        Related
      </h2>

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
              borderRadius: "8px",
              padding: "1rem",
              display: "flex",
              gap: ".75rem",
              alignItems: "flex-start"
            }}
          >
            <div
              style={{
                color: "#d4af37"
              }}
            >
              <Landmark size={20} />
            </div>

            <div>
              <div
                style={{
                  fontWeight: 700,
                  color: "#111827"
                }}
              >
                {item.title}
              </div>

              <div
                style={{
                  color: "#6b7280",
                  marginTop: ".25rem",
                  fontSize: ".9rem"
                }}
              >
                {item.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
