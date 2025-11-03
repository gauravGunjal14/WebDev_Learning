import { Link, Outlet } from "react-router";

function Details() {
    return (
        <>
        <nav>
            <Link to="/details/hii">Hii</Link>
            <Link to="/details/hello">Hello</Link>
        </nav>
            <h1>Welcome to Details Page</h1>
            <Outlet></Outlet>
        </>
    );
};

export default Details;