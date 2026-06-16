import { useState } from "react";

import {
  Landmark,
  Castle,
  BookOpen,
  Users,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const items = [
  {
    title:"Kingdom of Aksum",
    desc:"Ancient Ethiopian civilization",
    icon:Landmark
  },
  {
    title:"Great Zimbabwe",
    desc:"Stone city of Southern Africa",
    icon:Castle
  },
  {
    title:"Benin Empire",
    desc:"Renowned for bronze artistry",
    icon:BookOpen
  },
  {
    title:"Fulani People",
    desc:"One of Africa's largest ethnic groups",
    icon:Users
  }
];

export default function TrendingKnowledge() {

  const [open,setOpen] = useState(false);

  return (
    <section
      style={{
        padding:"1rem 1rem 3rem"
      }}
    >
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
          cursor:"pointer",
          marginBottom:"1rem"
        }}
      >
        Trending Knowledge

        {open
          ? <ChevronUp size={20}/>
          : <ChevronDown size={20}/>
        }
      </button>

      {open && (
        <div
          style={{
            display:"grid",
            gap:"1rem"
          }}
        >
          {items.map((item)=>{

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                style={{
                  background:"var(--afri-surface)",
                  border:"1px solid var(--afri-border)",
                  borderRadius:"20px",
                  padding:"1rem",
                  display:"flex",
                  gap:"1rem",
                  alignItems:"center"
                }}
              >
                <div
                  style={{
                    width:"52px",
                    height:"52px",
                    borderRadius:"14px",
                    background:"rgba(212,165,74,.12)",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                  }}
                >
                  <Icon
                    size={24}
                    color="var(--afri-gold)"
                  />
                </div>

                <div>
                  <div
                    style={{
                      fontWeight:700
                    }}
                  >
                    {item.title}
                  </div>

                  <div
                    style={{
                      color:"var(--afri-text-muted)",
                      marginTop:"0.25rem"
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
