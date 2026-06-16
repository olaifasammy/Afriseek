import {
  Globe,
  Users,
  Landmark,
  ScrollText,
  CalendarDays,
  FileText,
  ChevronRight
} from "lucide-react";

const categories = [
  {
    name:"Geography",
    count:"532",
    color:"#4F7EF7",
    icon: Globe
  },
  {
    name:"Peoples & Identity",
    count:"432",
    color:"#57C785",
    icon: Users
  },
  {
    name:"Culture",
    count:"423",
    color:"#8B7CFF",
    icon: Landmark
  },
  {
    name:"History",
    count:"412",
    color:"var(--afri-gold)",
    icon: ScrollText
  },
  {
    name:"Events",
    count:"318",
    color:"#F87171",
    icon: CalendarDays
  },
  {
    name:"Articles",
    count:"1243",
    color:"#60A5FA",
    icon: FileText
  }
];

export default function CategoryGrid() {
  return (
    <section
      style={{
        background:"var(--afri-surface)",
        padding:"2rem 1rem"
      }}
    >
      <div
        style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          marginBottom:"1.25rem"
        }}
      >
        <h2
          style={{
            margin:0,
            fontSize:"1.3rem",
            color:"var(--afri-text)"
          }}
        >
          Explore by Category
        </h2>

        <button
          style={{
            background:"none",
            border:"none",
            color:"var(--afri-gold)",
            display:"flex",
            alignItems:"center",
            gap:"0.25rem",
            fontWeight:600
          }}
        >
          View all
          <ChevronRight size={16}/>
        </button>
      </div>

      <div
        style={{
          display:"grid",
          gridTemplateColumns:"1fr 1fr",
          gap:"1rem"
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
                textAlign:"center",
                boxShadow:
                  "0 8px 20px rgba(0,0,0,.04)"
              }}
            >
              <div
                style={{
                  width:"54px",
                  height:"54px",
                  margin:"0 auto",
                  borderRadius:"50%",
                  background:
                    `${item.color}15`,
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center"
                }}
              >
                <Icon
                  size={28}
                  color={item.color}
                />
              </div>

              <div
                style={{
                  marginTop:"0.85rem",
                  fontWeight:700,
                  color:"var(--afri-text)",
                  fontSize:"0.95rem"
                }}
              >
                {item.name}
              </div>

              <div
                style={{
                  marginTop:"0.4rem",
                  color:"var(--afri-text-muted)",
                  fontSize:"0.9rem"
                }}
              >
                {item.count}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
