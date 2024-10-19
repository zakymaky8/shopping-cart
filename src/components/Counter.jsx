// import { useState } from "react";

import style from  "../styles/ProductCard.module.css"


// eslint-disable-next-line react/prop-types
export default function Counter({count, setCount}) {
    // const [count, setCount] = useState(1)
    return (
        <div className={style.counter}>
            <button onClick={() => setCount(count <= 1 ? 1 : count - 1)}>-</button>
            <input min={1} max={100} value={count} onChange={ (e) =>setCount((count >=100 || count <=0) ? count : parseInt(e.target.value))}  type="number" name="amount" id="amt" />
            <button onClick={()=>setCount(count >= 100 ? 100 : count + 1)}>+</button>
        </div>
    )
}