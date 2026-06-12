import { FileText } from "lucide-react";
import { useArticles } from "../../hooks/useArticles";

export default function RecentArticles() {

  const articles = useArticles();

  return (
    <section style={{ padding:"1rem" }}>

      <div
        style={{
          display:"flex",
          justifyContent:"space-between",
          marginBottom:"1rem"
        }}
      >
        <h2>Recent Articles</h2>

        <span
          style={{
            color:"#d4a54a"
          }}
        >
          View all
        </span>
      </div>

      <div
        style={{
          display:"grid",
          gap:"0.75rem"
        }}
      >
        {articles.slice(0,3).map((article:any) => (

          <div
            key={article.id}
            className="card"
          >
            <div
              style={{
                display:"flex",
                gap:"0.75rem",
                alignItems:"center"
              }}
            >
              <FileText size={20} />

              <div>
                <strong>
                  {article.title}
                </strong>
              </div>
            </div>
          </div>

        ))}
      </div>

    </section>
  );
}
