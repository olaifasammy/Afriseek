export default function EntityLibrarian() {
  return (
    <section>
      <h3
        style={{
          marginBottom: ".5rem"
        }}
      >
        Curious to know more?
      </h3>

      <p
        style={{
          color: "#6b7280",
          marginBottom: "1rem"
        }}
      >
        Ask the Afriseek Librarian to expand this topic.
      </p>

      <div
        style={{
          display: "flex",
          gap: ".75rem",
          flexWrap: "wrap"
        }}
      >
        <input
          placeholder="Explore this topic further..."
          style={{
            flex: 1,
            minWidth: "220px",
            padding: ".9rem",
            border: "1px solid #d1d5db",
            outline: "none"
          }}
        />

        <button
          style={{
            border: "none",
            background: "#d4af37",
            padding: "0 1.25rem",
            fontWeight: 700,
            cursor: "pointer"
          }}
        >
          Explore
        </button>
      </div>

      <div
        id="afriseek-librarian-results"
        style={{
          marginTop: "2rem"
        }}
      />
    </section>
  );
}
