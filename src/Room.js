import { useState } from "react";
import './Room.css';

function Room() {
    const [isLit, setLit] = useState(true);
    const [temp, setTemp] = useState(22);
    return (
        <div className={`room ${isLit ? "lit" : "dark"}`}>
            the room is {isLit ? "lit" : "dark"}
            <br />
      temperature is {temp}°C
            <br />
            <button onClick={() => setLit(!isLit)}>Flip</button>
            <button onClick={() => setLit(true)}>On</button>
            <button onClick={() => setLit(false)}>Off</button>
            <button onClick={() => setTemp(temp + 1)}>+</button>
            <button onClick={() => setTemp(temp - 1)}>-</button>
        </div>
    );
}

export default Room;