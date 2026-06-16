import {
  BookOpen,
  Sparkles,
  Clock3,
  Info
} from "lucide-react";

interface Props {
  active: string;
  onChange: (tab: string) => void;
}

const tabs = [
  {
    name: "Overview",
    icon: BookOpen
  },
  {
    name: "Traits",
    icon: Sparkles
  },
  {
    name: "Timeline",
    icon: Clock3
  },
  {
    name: "Facts",
    icon: Info
  }
];

export default function EntityTabs({
  active,
  onChange
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".75rem",
        overflowX: "auto",
        marginBottom: "2rem",
        paddingBottom: ".5rem"
      }}
    >
      {tabs.map(tab => {
        const Icon = tab.icon;

        return (
          <button
            key={tab.name}
            onClick={() =>
              onChange(tab.name)
            }
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".5rem",
              padding: ".8rem 1rem",
              border:
                active === tab.name
                  ? "1px solid #d4af37"
                  : "1px solid #e5e7eb",
              background:
                active === tab.name
                  ? "#fff8e1"
                  : "#fff",
              color:
                active === tab.name
                  ? "#111827"
                  : "#6b7280",
              borderRadius: "8px",
              cursor: "pointer",
              whiteSpace: "nowrap",
              fontWeight: 600
            }}
          >
            <Icon size={16} />
            {tab.name}
          </button>
        );
      })}
    </div>
  );
}
