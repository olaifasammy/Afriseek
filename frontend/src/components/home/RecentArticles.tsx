import {
  FileText,
  ChevronRight
} from "lucide-react";

const articles = [
  {
    title:"The Legacy of the Benin Empire",
    meta:"History • 5 min read"
  },
  {
    title:"Understanding the Yoruba People",
    meta:"Culture • 7 min read"
  },
  {
    title:"Ancient Trade Routes Across Africa",
    meta:"History • 8 min read"
  }
];

export default function RecentArticles() {
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
          Recent Articles
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
        {articles.map((article)=>(
          <div
            key={article.title}
            style={{
              background:"var(--afri-surface)",
              border:"1px solid var(--afri-border)",
              borderRadius:"18px",
              padding:"1rem",
              boxShadow:
                "0 8px 20px rgba(0,0,0,.04)"
            }}
          >
            <div
              style={{
                display:"flex",
                gap:"1rem",
                alignItems:"flex-start"
              }}
            >
              <div
                style={{
                  width:"50px",
                  height:"50px",
                  borderRadius:"14px",
                  background:"var(--afri-gold)15",
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center"
                }}
              >
                <FileText
                  size={22}
                  color="var(--afri-gold)"
                />
              </div>

              <div>
                <div
                  style={{
                    fontWeight:700,
                    color:"var(--afri-text)",
                    marginBottom:"0.4rem"
                  }}
                >
                  {article.title}
                </div>

                <div
                  style={{
                    color:"var(--afri-text-muted)",
                    fontSize:"0.9rem"
                  }}
                >
                  {article.meta}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
