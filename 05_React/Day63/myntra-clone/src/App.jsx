import Header from "./utils/Header.jsx";
import Card from "./utils/Card.jsx";
import items from "./utils/Items.jsx";
import Holding from "./utils/holding.jsx";

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