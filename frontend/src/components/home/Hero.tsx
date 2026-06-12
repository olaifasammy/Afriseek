import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!query.trim()) return;

    navigate(
      `/search?q=${encodeURIComponent(query.trim())}`
    );
  };

  return (
    <section
      style={{
        padding: "3rem 1rem",
        maxWidth: "900px",
        margin: "0 auto"
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          lineHeight: 1.1,
          fontWeight: 800,
          marginBottom: "1rem"
        }}
      >
        Africa's Living
        <br />
        Knowledge Graph
      </h1>

      <p
        style={{
          color: "#a1a1aa",
          fontSize: "1.1rem",
          maxWidth: "700px",
          marginBottom: "2rem"
        }}
      >
        Explore African countries, cultures, languages,
        histories, cities, people, kingdoms and modern
        institutions through connected knowledge.
      </p>

      <button
        onClick={() => navigate("/search")}
        style={{
          background: "#16a34a",
          color: "#ffffff",
          border: "none",
          padding: "0.9rem 1.4rem",
          borderRadius: "12px",
          fontWeight: 700,
          fontSize: "1rem",
          cursor: "pointer",
          marginBottom: "2rem"
        }}
      >
        Explore Knowledge
      </button>

      <div
        style={{
          display: "flex",
          gap: "0.75rem",
          flexWrap: "wrap"
        }}
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder="Search Africa..."
          style={{
            flex: 1,
            minWidth: "250px",
            padding: "1rem",
            borderRadius: "12px",
            border: "1px solid #27272a",
            background: "#111111",
            color: "#ffffff",
            fontSize: "1rem",
            outline: "none"
          }}
        />

        <button
          onClick={handleSearch}
          style={{
            background: "#16a34a",
            color: "#ffffff",
            border: "none",
            padding: "0 1.5rem",
            borderRadius: "12px",
            fontWeight: 700,
            fontSize: "1rem",
            cursor: "pointer",
            minHeight: "56px"
          }}
        >
          Search
        </button>
      </div>
    </section>
  );
}