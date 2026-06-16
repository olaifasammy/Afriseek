interface Trait {
  title: string;
  body: string;
}

interface Props {
  traits: Trait[];
}

export default function EntityTraits({
  traits
}: Props) {
  return (
    <div>
      {traits.map(trait => (
        <section
          key={trait.title}
          style={{
            marginBottom: "1.5rem"
          }}
        >
          <h3>{trait.title}</h3>

          <p
            style={{
              lineHeight: 2,
              color: "#374151"
            }}
          >
            {trait.body}
          </p>
        </section>
      ))}
    </div>
  );
}
