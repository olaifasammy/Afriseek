import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Breadcrumbs from "../components/layout/Breadcrumbs";

import { entity } from "../data/entityMock";
import EntityContent from "../components/entity/EntityContent";

export default function EntityPage() {
  return (
    <>
      <Header />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Search", href: "/search" },
          { label: entity.name }
        ]}
      />

      {/* HERO */}

      <section
        style={{
          position: "relative",
          height: "280px",
          overflow: "hidden"
        }}
      >
        <img
          src={entity.heroImage}
          alt={entity.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,.15), rgba(0,0,0,.85))"
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(1400px,95%)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "1rem"
          }}
        >
          {/* LEFT HERO INFO */}

          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "flex-end"
            }}
          >
            <img
              src={entity.thumbnail}
              alt=""
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "20px",
                background: "#fff",
                padding: ".75rem",
                objectFit: "contain",
                boxShadow: "0 10px 25px rgba(0,0,0,.25)"
              }}
            />

            <div>
              <div
                style={{
                  color: "#d4af37",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  fontSize: ".8rem"
                }}
              >
                {entity.entityType.replaceAll("_", " ")}
              </div>

              <h1
                style={{
                  color: "#fff",
                  margin: ".35rem 0",
                  fontSize: "3rem",
                  fontWeight: 900,
                  lineHeight: 1
                }}
              >
                {entity.name}
              </h1>

              <div
                style={{
                  color: "#e5e7eb",
                  fontSize: ".95rem"
                }}
              >
                {entity.location}
              </div>
            </div>
          </div>

          {/* GALLERY */}

          <div
            style={{
              display: "flex",
              gap: ".5rem"
            }}
          >
            {entity.gallery?.map((img) => (
              <img
                key={img}
                src={img}
                alt=""
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "14px",
                  objectFit: "cover",
                  border: "2px solid rgba(255,255,255,.25)"
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}

      <main
        style={{
          maxWidth: "1400px",
          margin: "-40px auto 0",
          padding: "0 1rem 3rem",
          position: "relative",
          zIndex: 5
        }}
      >
        {/* METADATA CARD */}

        <section
          style={{
            background: "#fff",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,.08)",
            marginBottom: "1.5rem"
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(120px,1fr))"
            }}
          >
            {entity.metadata.map((item, index) => (
              <div
                key={item.label}
                style={{
                  padding: ".9rem",
                  textAlign: "center",
                  borderRight:
                    index !== entity.metadata.length - 1
                      ? "1px solid #e5e7eb"
                      : "none"
                }}
              >
                <div
                  style={{
                    color: "#d4af37",
                    fontSize: ".75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    marginBottom: ".35rem"
                  }}
                >
                  {item.label}
                </div>

                <div
                  style={{
                    fontWeight: 700,
                      fontSize: ".9rem",
                    fontSize: ".95rem",
                    color: "#111827"
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        <EntityContent />
      </main>

      <Footer />
    </>
  );
}