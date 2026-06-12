import { useParams } from "react-router-dom";

export default function EntityPage() {
  const { slug } = useParams();

  return (
    <main
      style={{
        padding:"1rem",
        maxWidth:"900px",
        margin:"0 auto"
      }}
    >
      <h1
        style={{
          fontSize:"2rem",
          fontWeight:"700"
        }}
      >
        {slug}
      </h1>

      <p
        style={{
          opacity:.7,
          marginTop:"1rem"
        }}
      >
        Entity details page.
      </p>
    </main>
  );
}
