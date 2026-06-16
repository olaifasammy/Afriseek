import { useState, useEffect } from "react";
import {
  useNavigate,
  useSearchParams
} from "react-router-dom";

import { Search } from "lucide-react";

const suggestions = [
  "Yoruba People",
  "Yorubaland",
  "Yoruba Religion",
  "Benin Empire",
  "Kingdom of Aksum",
  "Swahili Coast",
  "Fulani People",
  "Timbuktu",
  "Nile River",
  "Great Zimbabwe"
];

export default function SearchHero() {

  const navigate = useNavigate();

  const [params] = useSearchParams();

  const [query,setQuery] = useState("");

  useEffect(()=>{
    setQuery(
      params.get("q") || ""
    );
  },[params]);

  const filtered =
    query.length > 1
      ? suggestions.filter(item =>
          item
            .toLowerCase()
            .includes(
              query.toLowerCase()
            )
        )
      : [];

  const search = (value:string) => {

    navigate(
      `/search?q=${encodeURIComponent(value)}`
    );
  };

  return (
    <section
      style={{
        padding:"2rem 1rem"
      }}
    >
      <div
        style={{
          maxWidth:"900px",
          margin:"0 auto"
        }}
      >
        <h1
          style={{
            fontSize:"2.5rem",
            marginBottom:"0.5rem"
          }}
        >
          Africa's Living Knowledge Graph
        </h1>

        <p
          style={{
            color:"var(--afri-text-muted)",
            marginBottom:"1.5rem"
          }}
        >
          Explore people, cultures,
          kingdoms, languages and history.
        </p>

        <div
          style={{
            position:"relative"
          }}
        >
          <div
            style={{
              display:"flex",
              background:
                "var(--afri-surface)",
              border:
                "1px solid var(--afri-border)",
              borderRadius:"18px",
              overflow:"hidden"
            }}
          >
            <input
              value={query}
              onChange={(e)=>
                setQuery(e.target.value)
              }
              placeholder="Search Afriseek..."
              style={{
                flex:1,
                border:"none",
                outline:"none",
                padding:"1rem"
              }}
            />

            <button
              onClick={() => search(query)}
              style={{
                background:
                  "var(--afri-gold)",
                border:"none",
                padding:"0 1.2rem"
              }}
            >
              <Search size={20}/>
            </button>
          </div>

          {filtered.length > 0 && (
            <div
              style={{
                marginTop:"0.5rem",
                background:
                  "var(--afri-surface)",
                border:
                  "1px solid var(--afri-border)",
                borderRadius:"18px",
                overflow:"hidden"
              }}
            >
              {filtered.slice(0,5).map(item => (
                <button
                  key={item}
                  onClick={() => search(item)}
                  style={{
                    width:"100%",
                    textAlign:"left",
                    padding:"0.9rem 1rem",
                    border:"none",
                    background:"transparent",
                    cursor:"pointer"
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
