import {
  Globe,
  Users,
  Languages,
  MapPinned,
  Landmark,
  ShieldCheck
} from "lucide-react";

interface Item {
  label: string;
  value: string;
}

interface Props {
  items: Item[];
}

const icons: Record<string, any> = {
  Region: Globe,
  Population: Users,
  Language: Languages,
  Countries: MapPinned,
  Religion: Landmark,
  Importance: ShieldCheck
};

export default function EntityMetadataBar({
  items
}: Props) {
  return (
    <section
      style={{
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow:
          "0 4px 12px rgba(0,0,0,.05)"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(140px,1fr))"
        }}
      >
        {items.map((item, index) => {
          const Icon =
            icons[item.label] ||
            ShieldCheck;

          return (
            <div
              key={item.label}
              style={{
                padding: "1rem",
                textAlign: "center",
                borderRight:
                  index !==
                  items.length - 1
                    ? "1px solid #eee"
                    : "none"
              }}
            >
              <Icon
                size={22}
                color="#d4af37"
                style={{
                  marginBottom: ".75rem"
                }}
              />

              <div
                style={{
                  color: "#9ca3af",
                  fontSize: ".75rem",
                  textTransform:
                    "uppercase",
                  fontWeight: 700,
                  marginBottom: ".5rem"
                }}
              >
                {item.label}
              </div>

              <div
                style={{
                  fontWeight: 700,
                  color: "#111827"
                }}
              >
                {item.value}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
