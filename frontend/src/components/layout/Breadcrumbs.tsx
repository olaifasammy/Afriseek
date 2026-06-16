import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs({
  items
}:{
  items:{
    label:string;
    href?:string;
  }[];
}) {
  return (
    <div
      style={{
        padding:"1rem",
        borderBottom:
          "1px solid var(--afri-border)"
      }}
    >
      <div
        style={{
          display:"flex",
          alignItems:"center",
          gap:"0.5rem",
          flexWrap:"wrap"
        }}
      >
        {items.map((item,index)=>{

          const isLast =
            index === items.length - 1;

          return (
            <div
              key={item.label}
              style={{
                display:"flex",
                alignItems:"center",
                gap:"0.5rem"
              }}
            >
              {isLast ? (
                <span
                  style={{
                    background:
                      "rgba(212,165,74,.12)",
                    color:
                      "var(--afri-gold)",
                    border:
                      "1px solid var(--afri-gold)",
                    borderRadius:"999px",
                    padding:
                      "0.25rem 0.75rem",
                    fontWeight:600
                  }}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href || "#"}
                  style={{
                    color:
                      "var(--afri-text-muted)"
                  }}
                >
                  {item.label}
                </Link>
              )}

              {!isLast && (
                <ChevronRight
                  size={14}
                  color="var(--afri-text-muted)"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
