import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Add from './Add.js';

function App() {

    const [language, setLanguage] = useState(["TS", "JS", "Java"]);

    return (
        <>
        <div style={{display: "flex", gap: "100px", justifyContent: "center"}}>
            {
                language.map((lang, index) => (
                    <Add key={lang} value ={lang}></Add>
                ))
            }
        </div>

        <button style={{marginTop: "50px", width: "150px", height: "40px"}}
        onClick={() => setLanguage(["Python",...language])}>Add Language</button>
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);