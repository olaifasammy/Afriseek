import { useSearchParams } from "react-router-dom";

export default function SearchResultsPage() {

  const [params] =
    useSearchParams();

  const query =
    params.get("q");

  return (
    <main
      style={{
        padding:"1rem"
      }}
    >
      <h1>
        Search Results
      </h1>

      <p>
        Query:
        {" "}
        {query}
      </p>
    </main>
  );
}
