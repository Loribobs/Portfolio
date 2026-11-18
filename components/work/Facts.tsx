/** Role / team / timeline row */
export default function Facts({ facts }: { facts: { label: string; value: string }[] }) {
  return (
    <dl className="wk-facts">
      {facts.map((f, i) => (
        <div key={f.label} data-reveal style={{ "--d": `${0.2 + i * 0.06}s` } as React.CSSProperties}>
          <dt>{f.label}</dt>
          <dd>{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}
