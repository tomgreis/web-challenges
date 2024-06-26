import "./Card.css";

export default function Card({ name, color }) {
  return (
    // < className="card" style={{ backgroundColor: color }}>
    <p className={`card card--${color}`}>{name}</p>
  );
}
