import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header
      style={{
        position:"sticky",
        top:0,
        zIndex:100,
        background:"#04111f",
        borderBottom:
          "3px solid var(--afri-gold)"
      }}
    >
      <div
        style={{
          padding:"1rem 1.25rem",
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center"
        }}
      >
        <div>
          <div
  style={{
    display:"flex",
    alignItems:"center",
    gap:"0.75rem"
  }}
>
  <img
    src="/images/africa.svg"
    alt="Afriseek"
    style={{
      width:"36px",
      height:"36px",
      objectFit:"contain",
      flexShrink:0
    }}
  />

  <div>
    <div
      style={{
        color:"var(--afri-gold)",
        fontWeight:800,
        letterSpacing:"1px",
        fontSize:"1.1rem",
        lineHeight:1
      }}
    >
      AFRISEEK
    </div>

<div
  style={{
    color:"var(--afri-gold)",
    fontSize:"0.65rem",
    letterSpacing:"3px",
    textTransform:"uppercase",
    marginTop:"0.3rem",
    opacity:.85
  }}
>
  Knowledge • Heritage • Discovery
</div>
  </div>
</div>

        </div>

        <button
          style={{
            background:"none",
            border:"none",
            color:"#ffffff"
          }}
        >
          <Menu size={22}/>
        </button>
      </div>
    </header>
  );
}

