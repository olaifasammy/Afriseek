import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "#09090b",
          borderBottom: "1px solid #18181b"
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Link
            to="/"
            style={{
              fontSize: "1.25rem",
              fontWeight: 700
            }}
          >
            <div
  style={{
    display:"flex",
    gap:"0.5rem",
    alignItems:"center",
    fontWeight:"700"
  }}
>
  <span
    style={{
      color:"#d4a54a"
    }}
  >
    ◌
  </span>

  Afriseek
</div>
          </Link>

          <button
            onClick={() => setOpen(true)}
            style={{
              background: "none",
              border: "none",
              color: "white"
            }}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "#09090b",
            zIndex: 999
          }}
        >
          <div
            style={{
              padding: "1.5rem"
            }}
          >
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "white",
                marginBottom: "2rem"
              }}
            >
              <X size={24} />
            </button>

            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                fontSize: "1.2rem"
              }}
            >
              <Link to="/" onClick={() => setOpen(false)}>
                Home
              </Link>

              <Link to="/explore" onClick={() => setOpen(false)}>
                Explore
              </Link>

              <Link to="/articles" onClick={() => setOpen(false)}>
                Articles
              </Link>

              <Link to="/about" onClick={() => setOpen(false)}>
                About
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
