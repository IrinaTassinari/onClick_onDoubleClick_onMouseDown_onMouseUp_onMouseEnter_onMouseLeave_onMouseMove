import { useState } from "react";

function ClickCounter(){
    //сост-е для хранения кликов
    const[count,setCount] = useState(0);

    //Обработчик события клик
    const handleClick = () => {
        setCount((prevCount) => prevCount +1);
    }
    return (
        <div>
            <p>кол-во кликов: {count}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
export default ClickCounter;