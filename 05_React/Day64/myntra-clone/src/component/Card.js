export default function Card({ name, discount, image, price }) {
  return (
    <div id="card">
      <img src= {image} alt={name}/>
      <h1>{name}</h1>
      <h2>{discount}</h2>
      <h3>{price}</h3>
    </div>
  );
}