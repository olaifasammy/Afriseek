import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Breadcrumbs from "../components/layout/Breadcrumbs";

import EntityContent from "../components/entity/EntityContent";

import { getEntity } from "../services/entity";

export default function EntityPage() {
  const { slug } = useParams();
console.log("PARAM SLUG:", slug);
console.log("PARAM SLUG:", slug);

  const [entity, setEntity] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    if (!slug) return;

    getEntity(slug)
      .then(setEntity)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <>
        <Header />

        <main
          style={{
            padding: "5rem 1rem",
            textAlign: "center"
          }}
        >
          Loading...
        </main>

        <Footer />
      </>
    );
  }

console.log("ENTITY STATE:", entity);
console.log("LOADING:", loading);
console.log("ENTITY STATE:", entity);
console.log("LOADING:", loading);
  if (!entity) {
    return (
      <>
        <Header />

        <main
          style={{
            padding: "5rem 1rem",
            textAlign: "center"
          }}
        >
          Entity not found.
        </main>

        <Footer />
      </>
    );
  }

  const metadataItems = [
    {
      label: "Type",
      value:
        entity.entityType?.replaceAll(
          "_",
          " "
        ) || "-"
    },
    {
      label: "Importance",
      value:
        entity.importance || "-"
    },
    {
      label: "Verified",
      value:
        entity.metadata?.verified
          ? "Yes"
          : "No"
    }
  ];

  return (
    <>
      <Header />

      <Breadcrumbs
        items={[
          {
            label: "Home",
            href: "/"
          },
          {
            label: "Search",
            href: "/search"
          },
          {
            label: entity.name
          }
        ]}
      />

      {/* HERO */}

      <section
        style={{
          position: "relative",
          height: "240px",
          overflow: "hidden"
        }}
      >
        <img
          src={
            entity.heroImage ||
            "/images/Afh.jpg"
          }
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
            bottom: "24px",
            left: "50%",
            transform:
              "translateX(-50%)",
            width: "min(1400px,95%)",
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "flex-end",
            gap: "1rem"
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "flex-end"
            }}
          >
            <img
              src={
                entity.thumbnail ||
                "/images/africa.svg"
              }
              alt=""
              style={{
                width: "90px",
                height: "90px",
                background: "#fff",
                padding: ".75rem",
                borderRadius: "8px",
                objectFit: "contain"
              }}
            />

            <div>
              <div
                style={{
                  color: "#d4af37",
                  fontWeight: 700,
                  textTransform:
                    "uppercase",
                  fontSize: ".8rem",
                  letterSpacing: "1px"
                }}
              >
                {entity.entityType?.replaceAll(
                  "_",
                  " "
                )}
              </div>

              <h1
                style={{
                  margin:
                    ".35rem 0",
                  color: "#fff",
                  fontSize: "3rem",
                  fontWeight: 900,
                  lineHeight: 1
                }}
              >
                {entity.name}
              </h1>

              <div
                style={{
                  color: "#e5e7eb"
                }}
              >
                {entity.importance}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}

      <main
        style={{
          maxWidth: "1400px",
          margin: "-40px auto 0",
          padding:
            "0 1rem 3rem",
          position: "relative",
          zIndex: 5
        }}
      >
        {/* METADATA */}

        <section
          style={{
            background: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            overflow: "hidden",
            marginBottom: "1.5rem",
            boxShadow:
              "0 10px 30px rgba(0,0,0,.05)"
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(140px,1fr))"
            }}
          >
            {metadataItems.map(
              (item, index) => (
                <div
                  key={item.label}
                  style={{
                    padding:
                      "1rem",
                    textAlign:
                      "center",
                    borderRight:
                      index !==
                      metadataItems.length -
                        1
                        ? "1px solid #f3f4f6"
                        : "none"
                  }}
                >
                  <div
                    style={{
                      color:
                        "#d4af37",
                      fontSize:
                        ".75rem",
                      fontWeight:
                        700,
                      textTransform:
                        "uppercase",
                      marginBottom:
                        ".35rem"
                    }}
                  >
                    {item.label}
                  </div>

                  <div
                    style={{
                      fontWeight:
                        700,
                      color:
                        "#111827"
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              )
            )}
          </div>
        </section>

        <EntityContent
          entity={entity}
        />
      </main>

      <Footer />
    </>
  );
}