import {useSelector} from "react-redux";

export default function Header() {

    const count = useSelector((state) => state.slice1.count);
    return (
        <div style={{backgroundColor: "rgba(244, 121, 121, 1)", padding: "20px", textAlign: "center", color: "white", margin: "0" }}>
            <h1>Foodie's Hub</h1>
            <h2>Cart: ({count})</h2>
        </div>
    );
}