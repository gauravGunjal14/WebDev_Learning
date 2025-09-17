import Header from "./Header.jsx";
import Card from "./Card.jsx";
import items from "./Items.jsx";
import Holding from "./holding.jsx";

export default function App() {
  return (
    <>
      <Header/>
      <div className="main">
        <Holding />
        <div className="card-container">
          {items.map((value, index) => (
            <Card key={index} name={value.name} discount={value.discount} image={value.image} />
          ))}
        </div>
      </div>
    </>
  );
}