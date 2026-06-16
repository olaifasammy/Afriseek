import { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {

  const navigate = useNavigate();

  const [query,setQuery] = useState("");

  const searches = [
    "Yoruba",
    "Benin Empire",
    "Timbuktu",
    "Nile River"
  ];

  const handleSearchAction = (
    searchQuery:string
  ) => {

    if (!searchQuery.trim()) return;

    navigate(
      `/search?q=${encodeURIComponent(
        searchQuery.trim()
      )}`
    );
  };

  return (
    <section
      style={{
        position:"relative",
        overflow:"hidden",
        padding:"4rem 1rem",
        color:"white",
        backgroundImage:
          "linear-gradient(rgba(4,17,31,.82), rgba(4,17,31,.82)), url('/images/Afh.jpg')",
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat"
      }}
    >
      <div
        style={{
          maxWidth:"1200px",
          margin:"0 auto"
        }}
      >
        <div
          style={{
            maxWidth:"700px"
          }}
        >
          <div
            style={{
              color:"var(--afri-gold)",
              fontWeight:700,
              letterSpacing:"2px",
              marginBottom:"1rem"
            }}
          >
            AFRICA'S LIVING KNOWLEDGE GRAPH
          </div>

          <h1
            style={{
              margin:0,
              fontSize:"3.4rem",
              lineHeight:1.05,
              fontWeight:800
            }}
          >
            Explore
            <br />

            <span
              style={{
                color:"var(--afri-gold)"
              }}
            >
              Africa's
            </span>

            <br />

            Knowledge Network
          </h1>

          <p
            style={{
              marginTop:"1.5rem",
              maxWidth:"650px",
              lineHeight:1.8,
              color:"rgba(255,255,255,.85)",
              fontSize:"1.05rem"
            }}
          >
            Discover interconnected
            knowledge about African
            history, kingdoms, cultures,
            languages, people, places,
            traditions and civilizations.
          </p>
        </div>

        <form
          onSubmit={(e)=>{
            e.preventDefault();
            handleSearchAction(query);
          }}
          style={{
            marginTop:"2rem",
            maxWidth:"850px",
            display:"flex",
            background:"rgba(255,255,255,.96)",
            borderRadius:"16px",
            overflow:"hidden",
            boxShadow:
              "0 12px 30px rgba(0,0,0,.25)"
          }}
        >
          <input
            value={query}
            onChange={(e)=>
              setQuery(e.target.value)
            }
            placeholder="Search people, kingdoms, languages, cultures..."
            style={{
              flex:1,
              border:"none",
              outline:"none",
              padding:"1.15rem",
              fontSize:"1rem",
              color:"#111827"
            }}
          />

          <button
            type="submit"
            style={{
              background:
                "var(--afri-gold)",
              border:"none",
              width:"72px",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              cursor:"pointer"
            }}
          >
            <Search
              size={22}
              color="#04111f"
            />
          </button>
        </form>

        <div
          style={{
            marginTop:"1.5rem"
          }}
        >
          <div
            style={{
              color:
                "rgba(255,255,255,.7)",
              fontSize:".9rem",
              marginBottom:".8rem"
            }}
          >
            Popular searches
          </div>

          <div
            style={{
              display:"flex",
              gap:".6rem",
              flexWrap:"wrap"
            }}
          >
            {searches.map((item)=>(
              <button
                key={item}
                onClick={() =>
                  handleSearchAction(item)
                }
                style={{
                  border:
                    "1px solid rgba(255,255,255,.18)",
                  background:
                    "rgba(255,255,255,.08)",
                  color:"white",
                  borderRadius:"999px",
                  padding:
                    ".65rem 1rem",
                  cursor:"pointer",
                  backdropFilter:
                    "blur(6px)"
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
