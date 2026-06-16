interface Event {
  year: string;
  title: string;
}

interface Props {
  timeline: Event[];
}

export default function EntityTimeline({
  timeline
}: Props) {
  return (
    <div>
      {timeline.map(event => (
        <div
          key={event.year + event.title}
          style={{
            display: "flex",
            gap: "1rem",
            padding: "1rem 0",
            borderBottom: "1px solid #eee"
          }}
        >
          <strong
            style={{
              minWidth: "80px",
              color: "#d4af37"
            }}
          >
            {event.year}
          </strong>

          <div>{event.title}</div>
        </div>
      ))}
    </div>
  );
}
