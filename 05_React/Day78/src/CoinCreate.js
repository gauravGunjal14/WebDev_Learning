import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "../Slice1";

function CoinCreate() {

    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) => state.slice1);

    useEffect(() => {
        dispatch(FetchData(10));
    });
    
    // display information of 10 users
    if(loading){
        return <h2>Loading...</h2>;
    }
    if(error){
        return <h2>{error}</h2>;
    }

    return (
        <>
        <div>
            {
                data.map((item) => {})
            }
        </div>
        </>
    )
}

export default CoinCreate;