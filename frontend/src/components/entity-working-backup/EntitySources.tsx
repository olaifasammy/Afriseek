import { useState } from "react";

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
        background: "#fff",
        border: "1px solid #e5e7eb",
borderRadius: "8px"
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          padding: "1rem",
          background: "none",
          border: "none",
          textAlign: "left",
          fontWeight: 700,
          cursor: "pointer"
        }}
      >
        Sources
      </button>

      {open && (
        <div
          style={{
            padding: "1rem"
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
