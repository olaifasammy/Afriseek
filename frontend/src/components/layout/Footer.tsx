export default function Footer() {
  return (
    <footer
      style={{
        marginTop:"3rem",
        background:"#050505",
        padding:"1.5rem"
      }}
    >
      <h2
        style={{
          color:"#d4a54a"
        }}
      >
        Afriseek
      </h2>

      <div
        style={{
          marginTop:"2rem",
          display:"grid",
          gap:"1rem"
        }}
      >
        <details>
          <summary>Explore</summary>
        </details>

        <details>
          <summary>Resources</summary>
        </details>

        <details>
          <summary>Legal</summary>
        </details>

        <details>
          <summary>Contact</summary>
        </details>
      </div>
    </footer>
  );
}
