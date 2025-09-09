export default function Card({ name, discount, image }) {
  return (
    <div id="card">
      <img src={image} alt={name} width="150" />
      <h1>{name}</h1>
      <h2>{discount}</h2>
    </div>
  );
}