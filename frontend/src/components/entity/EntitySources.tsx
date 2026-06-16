import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  BookOpen
} from "lucide-react";

interface Source {
  title: string;
}

interface Props {
  sources: Source[];
}

export default function EntitySources({
  sources
}: Props) {
  const [open, setOpen] =
    useState(false);

  return (
    <section
      style={{
        marginTop: "2rem",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        background: "#fff",
        overflow: "hidden"
      }}
    >
      <button
        onClick={() =>
          setOpen(!open)
        }
        style={{
          width: "100%",
          border: "none",
          background: "#fff",
          cursor: "pointer",
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent:
            "space-between"
        }}
      >
        <div
          style={{
            display: "flex",
            gap: ".75rem",
            alignItems: "center",
            fontWeight: 700
          }}
        >
          <BookOpen size={18} />
          Sources
        </div>

        {open ? (
          <ChevronUp size={18} />
        ) : (
          <ChevronDown size={18} />
        )}
      </button>

      {open && (
        <div
          style={{
            padding: "1rem",
            borderTop:
              "1px solid #e5e7eb"
          }}
        >
          {sources.map(source => (
            <div
              key={source.title}
              style={{
                padding: ".5rem 0"
              }}
            >
              {source.title}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
