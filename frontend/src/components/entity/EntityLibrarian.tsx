export default function EntityLibrarian() {
  return (
    <section
      style={{
        marginTop: "3rem",
        paddingTop: "2rem",
        borderTop: "1px solid #e5e7eb"
      }}
    >
<h3>
Explore Further
</h3>

<p>
Ask Afriseek Librarian to expand
this article with additional
context and historical detail.
</p>

      <textarea
        rows={4}
        placeholder="Example: Expand Oranmiyan's role in Yoruba history..."
        style={{
          width: "100%",
          resize: "vertical",
          padding: "1rem",
          border: "1px solid #d1d5db",
          borderRadius: "6px",
          fontSize: ".95rem",
          fontFamily: "inherit",
          outline: "none",
          boxSizing: "border-box"
        }}
      />

      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "flex-end"
        }}
      >
        <button
          style={{
            border: "none",
            background: "#d4af37",
            color: "#111827",
            fontWeight: 700,
            padding: ".85rem 1.25rem",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Continue Research
        </button>
      </div>
    </section>
  );
}
