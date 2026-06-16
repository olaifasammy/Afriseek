interface Item {
  label: string;
  value: string;
}

interface Props {
  items: Item[];
}

export default function EntityMetadataBar({
  items
}: Props) {
  return (
    <section
      style={{
        background: "#fff",
        border: "1px solid #e5e7eb",
        boxShadow: "0 4px 12px rgba(0,0,0,.04)"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(120px,1fr))"
        }}
      >
        {items.map(item => (
          <div
            key={item.label}
            style={{
              padding: ".9rem",
              textAlign: "center",
              borderRight: "1px solid #f3f4f6"
            }}
          >
            <div
              style={{
                fontSize: ".75rem",
                color: "#d4af37",
                fontWeight: 700,
                marginBottom: ".35rem"
              }}
            >
              {item.label}
            </div>

            <div
              style={{
                fontWeight: 700,
                fontSize: ".9rem"
              }}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
