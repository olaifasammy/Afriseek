import {
  ChevronRight,
  Landmark,
  Ship,
  Route,
  CalendarDays
} from "lucide-react";

const paths = [
  {
    title:"Kingdoms of West Africa",
    description:
      "From Ghana Empire to Songhai",
    icon:Landmark,
    color:"var(--afri-gold)"
  },
  {
    title:"Origins of the Swahili Coast",
    description:
      "Trade, language and cultural exchange",
    icon:Ship,
    color:"#4F7EF7"
  },
  {
    title:"Ancient African Trade Routes",
    description:
      "The routes that connected empires",
    icon:Route,
    color:"#57C785"
  },
  {
    title:"African Independence Timeline",
    description:
      "A journey through liberation movements",
    icon:CalendarDays,
    color:"#F87171"
  }
];

export default function FeaturedKnowledgePaths() {
  return (
    <section
      style={{
        background:"var(--afri-surface)",
        padding:"2rem 1rem"
      }}
    >
      <h2
        style={{
          marginTop:0,
          marginBottom:"1rem",
          color:"var(--afri-text)"
        }}
      >
        Featured Knowledge Paths
      </h2>

      <div
        style={{
          display:"flex",
          flexDirection:"column",
          gap:"1rem"
        }}
      >
        {paths.map((path)=>{

          const Icon = path.icon;

          return (
            <div
              key={path.title}
              style={{
                border:"1px solid var(--afri-border)",
                borderRadius:"18px",
                padding:"1rem",
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                boxShadow:
                  "0 8px 20px rgba(0,0,0,.04)"
              }}
            >
              <div
                style={{
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
                    background:
                      `${path.color}15`,
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center"
                  }}
                >
                  <Icon
                    size={24}
                    color={path.color}
                  />
                </div>

                <div>
                  <div
                    style={{
                      fontWeight:700,
                      color:"var(--afri-text)"
                    }}
                  >
                    {path.title}
                  </div>

                  <div
                    style={{
                      color:"var(--afri-text-muted)",
                      fontSize:"0.9rem",
                      marginTop:"0.25rem"
                    }}
                  >
                    {path.description}
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
