import { useState } from "react";

const Counter = () => {
    //let count = 0;
    const [count, setCount] = useState(0);
    const handleDecrement = () => {
        //alert ("decrement");

        setCount(count - 1);

    }
    const handleIncrement = () => {
        //alert ("increment");
        setCount(count + 1);
    }       
    const handleResetCounter = () => {
        //alert ("reset counter")

        setCount(0)
    }
    return (
        <div style={{
            display: "flex",
            gap: "10px",

        }} >
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleResetCounter}>Reset Counter</button>
        </div>
    )
}
export default Counter;