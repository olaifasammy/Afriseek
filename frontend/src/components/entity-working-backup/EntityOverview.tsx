interface Props {
  summary: string;
}

export default function EntityOverview({
  summary
}: Props) {
  return (
    <article
      style={{
        maxWidth: "850px"
      }}
    >
      <h2
        style={{
          marginTop: 0,
          marginBottom: "1rem",
          fontSize: "2rem"
        }}
      >
        Overview
      </h2>

      <p
        style={{
          lineHeight: 1.9,
          fontSize: "1.05rem",
          color: "#374151"
        }}
      >
        {summary}
      </p>
    </article>
  );
}
