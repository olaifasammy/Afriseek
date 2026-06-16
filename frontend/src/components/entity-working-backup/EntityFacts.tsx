interface Fact {
  label: string;
  value: string;
}

interface Props {
  facts: Fact[];
}

export default function EntityFacts({
  facts
}: Props) {
  if (!facts?.length) {
    return (
      <p
        style={{
          color: "#6b7280"
        }}
      >
        No facts available yet.
      </p>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gap: "1rem"
      }}
    >
      {facts.map(item => (
        <div
          key={item.label}
          style={{
            padding: "1rem",
            border: "1px solid #e5e7eb"
          }}
        >
          <div
            style={{
              color: "#d4af37",
              fontWeight: 700
            }}
          >
            {item.label}
          </div>

          <div
            style={{
              marginTop: ".5rem"
            }}
          >
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
}
