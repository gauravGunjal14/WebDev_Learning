import { useEffect, useState } from "react"

function Body() {

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

    return (
        <div>
            <div className="search-Profile">
                <input type="text" id="no" placeholder="Search here" value={Novari} min={1} max={50} onChange={(e)=>{setNoVari(e.target.value)}}></input>
                <button onClick={()=>generateProfile(Number(Novari))}>Search Profile</button>
            </div>
            <div className="profiles">
                {
                    Profile.map((value) => {
                        return (
                            <div key={value.id} className="cards">
                                <img src={value.avatar_url}></img>
                                <h2>{value.login}</h2>
                                <a href={value.html_url} target="_blank">Profile</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Body;