import { useEffect, useState } from "react";

export default function useFetch() {
    const [Profile, setProfile] = useState([]);
    const [Novari, setNoVari] = useState("");

    async function generateProfile(count) {
        const random = Math.floor(Math.random()*10000);
        
        const response = await fetch(`https://api.github.com/users?since=${random})}&per_page=${count}`);
        const data = await response.json();

        setProfile(data);
    }

    useEffect(() => {
        generateProfile(10);
    }, []);

    return {Profile, setProfile, Novari, setNoVari, generateProfile};
}