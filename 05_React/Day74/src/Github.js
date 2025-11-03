import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function Github() {

    // const data = useParams();
    const {name} = useParams();
    // console.log(name);

    const [ Profile, setProfile ] = useState(null);

    async function fetchUser() {
        const res = await fetch(`https://api.github.com/users/${name}`)
        const data = await res.json();
        setProfile(data);
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div>
            <h1>My Github Profile</h1>
            <div>
                <img src={Profile?.avatar_url} alt="profile pic" width="200px" />
                <h2>{Profile?.name}</h2>
                <h3>{Profile?.bio}</h3>
            </div>
        </div>
    );
}