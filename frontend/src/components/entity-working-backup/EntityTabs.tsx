interface Props {
  active: string;
  onChange: (tab: string) => void;
}

const tabs = [
  "Overview",
  "Traits",
  "Facts",
  "Timeline"
];

export default function EntityTabs({
  active,
  onChange
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        borderBottom: "1px solid #e5e7eb",
        marginBottom: "2rem",
        overflowX: "auto"
      }}
    >
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          style={{
            border: "none",
            background: "none",
            cursor: "pointer",
            padding: "0 0 1rem",
            fontWeight: 700,
            fontSize: ".95rem",
            color:
              active === tab
                ? "#111827"
                : "#6b7280",
            borderBottom:
              active === tab
                ? "2px solid #d4af37"
                : "2px solid transparent"
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
