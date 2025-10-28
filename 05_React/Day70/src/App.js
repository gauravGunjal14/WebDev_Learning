import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";

// stopWatch
function App() {
    const [time, setTime] = useState(0);
    const [isRunnig, setIsRunning] = useState(false)
    const intervalRef = useRef(null)


    function start() {
        if (!isRunnig) {
            intervalRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 1);
                console.log(time)
            }, 1000);
            setIsRunning(true);
        }
    }

    function stop() {
        if(isRunnig){
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsRunning(false);
        }
    }

    function reset() {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTime(0);
    }

    return (
        <>
            <h1>StopWatch: {time}</h1>
            <button onClick={start}>Start</button>
            <br></br>
            <button onClick={stop}>Stop</button>
            <br></br>
            <button onClick={reset}>Reset</button>
        </>
    )
}

export default App;