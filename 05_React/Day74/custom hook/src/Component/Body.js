import { useEffect, useState } from "react"
import useFetch from "../useFetch"

function Body() {
    const {Profile, setProfile, Novari, setNoVari, generateProfile} = useFetch();
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