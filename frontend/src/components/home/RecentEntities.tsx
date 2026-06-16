import {
  Building2,
  Users,
  Landmark,
  ChevronRight
} from "lucide-react";

const entities = [
  {
    name:"Misrata",
    type:"City • Libya",
    icon:Building2,
    color:"#4F7EF7"
  },
  {
    name:"Amazigh",
    type:"Ethnic Group",
    icon:Users,
    color:"#57C785"
  },
  {
    name:"Oyo Empire",
    type:"Historical Kingdom",
    icon:Landmark,
    color:"var(--afri-gold)"
  }
];

export default function RecentEntities() {
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
          marginBottom:"1rem"
        }}
      >
        <h2
          style={{
            margin:0,
            color:"var(--afri-text)"
          }}
        >
          Recently Added
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
          display:"flex",
          flexDirection:"column",
          gap:"1rem"
        }}
      >
        {entities.map((item)=>{

          const Icon = item.icon;

          return (
            <div
              key={item.name}
              style={{
                background:"var(--afri-surface)",
                border:"1px solid var(--afri-border)",
                borderRadius:"18px",
                padding:"1rem",
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between",
                boxShadow:
                  "0 8px 20px rgba(0,0,0,.04)"
              }}
            >
              <div
                style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"1rem"
                }}
              >
                <div
                  style={{
                    width:"52px",
                    height:"52px",
                    borderRadius:"14px",
                    background:
                      `${item.color}15`,
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                  }}
                >
                  <Icon
                    size={24}
                    color={item.color}
                  />
                </div>

                <div>
                  <div
                    style={{
                      fontWeight:700,
                      color:"var(--afri-text)"
                    }}
                  >
                    {item.name}
                  </div>

                  <div
                    style={{
                      color:"var(--afri-text-muted)",
                      marginTop:"0.2rem",
                      fontSize:"0.9rem"
                    }}
                  >
                    {item.type}
                  </div>
                </div>
              </div>

              <ChevronRight
                size={20}
                color="#9ca3af"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
