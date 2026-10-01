import { stats } from "../data.js";

export default function Stats() {
  return (
    <div className="stats">
      {stats.map(([big, label]) => (
        <div key={label}>
          <strong>{big}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
