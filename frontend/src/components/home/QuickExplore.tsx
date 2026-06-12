import {
  Globe,
  Users,
  Landmark,
  Calendar,
  BookOpen,
  MapPin
} from "lucide-react";

const categories = [
  {
    name:"Geography",
    icon: Globe
  },
  {
    name:"People & Identity",
    icon: Users
  },
  {
    name:"Culture",
    icon: Landmark
  },
  {
    name:"History",
    icon: Landmark
  },
  {
    name:"Events",
    icon: Calendar
  },
  {
    name:"Articles",
    icon: BookOpen
  }
];

export default function QuickExplore() {
  return (
    <section
      style={{
        padding:"1rem"
      }}
    >
      <div
        style={{
          display:"flex",
          justifyContent:"space-between",
          marginBottom:"1rem"
        }}
      >
        <h2>
          Explore by Category
        </h2>

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
          gridTemplateColumns:"1fr 1fr",
          gap:"1rem"
        }}
      >
        {categories.map(item => {

          const Icon =
            item.icon;

          return (
            <div
              key={item.name}
              className="card"
            >
              <Icon
                size={32}
                color="#d4a54a"
              />

              <h3
                style={{
                  marginTop:"1rem"
                }}
              >
                {item.name}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
