import {
  Network,
  FileText,
  Calendar,
  Users
} from "lucide-react";

export default function StatsSection() {

  const stats = [
    {
      icon: Network,
      value:"5,200+",
      label:"Entities"
    },
    {
      icon: FileText,
      value:"1,200+",
      label:"Articles"
    },
    {
      icon: Calendar,
      value:"850+",
      label:"Events"
    },
    {
      icon: Users,
      value:"50+",
      label:"Categories"
    }
  ];

  return (
    <section
      style={{
        padding:"1rem"
      }}
    >
      <div
        style={{
          display:"grid",
          gridTemplateColumns:"1fr 1fr",
          gap:"1rem"
        }}
      >
        {stats.map(item => {

          const Icon =
            item.icon;

          return (

            <div
              key={item.label}
              className="card"
            >
              <Icon
                size={24}
              />

              <h3
                style={{
                  marginTop:"0.75rem"
                }}
              >
                {item.value}
              </h3>

              <p
                style={{
                  opacity:.7
                }}
              >
                {item.label}
              </p>

            </div>

          );
        })}
      </div>
    </section>
  );
}
