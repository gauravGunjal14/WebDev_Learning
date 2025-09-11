import Header from "./Header";
import Card from "./Card";
import items from "./Items";
import Holding from "./holding";

export default function App() {
  return (
    <>
      <Header />
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