import { useState } from "react";

import {
  Globe,
  Languages,
  Landmark,
  Users,
  BookOpen,
  ScrollText,
  User,
  Shapes,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const categories = [
  { name:"Countries", icon:Globe },
  { name:"Languages", icon:Languages },
  { name:"Kingdoms", icon:Landmark },
  { name:"Ethnic Groups", icon:Users },
  { name:"Religions", icon:BookOpen },
  { name:"Cultures", icon:Shapes },
  { name:"Historical Events", icon:ScrollText },
  { name:"People", icon:User }
];

export default function CategoryFilters() {
  const [open,setOpen] = useState(false);

  return (
    <section style={{padding:"1rem"}}>
      <button
        onClick={()=>setOpen(!open)}
        style={{
          width:"100%",
          border:"none",
          background:"transparent",
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          fontSize:"1.2rem",
          fontWeight:700,
          cursor:"pointer"
        }}
      >
        Browse Categories

        {open
          ? <ChevronUp size={20}/>
          : <ChevronDown size={20}/>
        }
      </button>

      {open && (
        <div
          style={{
            display:"grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(150px,1fr))",
            gap:"1rem",
            marginTop:"1rem"
          }}
        >
          {categories.map((item)=>{

            const Icon = item.icon;

            return (
              <div
                key={item.name}
                style={{
                  background:"var(--afri-surface)",
                  border:"1px solid var(--afri-border)",
                  borderRadius:"18px",
                  padding:"1.25rem",
                  textAlign:"center"
                }}
              >
                <Icon
                  size={28}
                  color="var(--afri-gold)"
                />

                <div
                  style={{
                    marginTop:"0.75rem",
                    fontWeight:600
                  }}
                >
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
