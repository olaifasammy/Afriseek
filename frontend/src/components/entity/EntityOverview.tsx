interface Props {
  summary: string;
}

export default function EntityOverview({
  summary
}: Props) {
  return (
    <article>
      <h2
        style={{
          marginTop: 0,
          marginBottom: "1.25rem",
          fontSize: "1.8rem",
          color: "#111827"
        }}
      >
        Overview
      </h2>

      <p
        style={{
          lineHeight: 2,
          color: "#374151",
          fontSize: "1.05rem",
          maxWidth: "75ch"
        }}
      >
        {summary}
      </p>
    </article>
  );
}
