import React, {useCallback, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";

function Passgenerator() {
    const [password, setPassword] = useState("");
    const [lenght, setLenght] = useState(10);
    const [number, setNumber] = useState(true);
    const [character, setCharacter] = useState(false);

    // function generatePassword() {
    //     let str= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXIYZ"
    //     if(number)
    //         str += "0123456789"
    //     if(character)
    //         str += `!@#$%^&*(){}[];':<>?,./"`

    //      let pass = ""
    //     for (let i = 0; i < lenght; i++) {
    //         pass += str[Math.floor(Math.random()*str.length)]
    //     }
    //     setPassword(pass);
    // }

    const generatePassword = useCallback(()=>{
        let str= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXIYZ"
        if(number)
            str += "0123456789"
        if(character)
            str += `!@#$%^&*(){}[];':<>?,./"`

         let pass = ""
        for (let i = 0; i < lenght; i++) {
            pass += str[Math.floor(Math.random()*str.length)]
        }
        setPassword(pass);
    },[lenght,number,character]);

    useEffect(()=>{
        generatePassword();
    },
    // [lenght,number,character])
    [generatePassword]);

    return(
        <div className="container">
            <h1>Password is: {password}</h1>
            <div className="generator">
                <input className="range" type="range" min={5} max={50} value={lenght} onChange={(e)=>setLenght(e.target.value)}/>
                <span>Length:{lenght}</span>
                <span>
                    <input type="checkbox" id="number" defaultChecked={number} onChange={()=>setNumber(!number)}/>
                    <label htmlFor="number">Number</label>
                </span>
                <span>
                    <input type="checkbox" id="character" defaultChecked={character} onChange={()=>setCharacter(!character)}/>
                    <label htmlFor="character">Character</label>
                    </span>
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Passgenerator />);