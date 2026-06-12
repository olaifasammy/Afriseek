import { useState } from "react";

export default function SearchPage() {
  const [query,setQuery] = useState("");

  return (
    <main
      style={{
        padding:"1rem",
        maxWidth:"900px",
        margin:"0 auto"
      }}
    >
      <h1>Search Afriseek</h1>

      <input
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        placeholder="Search countries, cultures, people..."
        style={{
          width:"100%",
          padding:"1rem",
          marginTop:"1rem",
          borderRadius:"12px"
        }}
      />

      <div
        style={{
          marginTop:"2rem"
        }}
      >
        Search results will appear here.
      </div>
    </main>
  );
}
