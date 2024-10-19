import { Link } from "react-router-dom";
import style  from "../styles/Cart.module.css"
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";

export default function TotalAndCheckout() {
  const [tot, setTot] = useState(0)
  const cartInfo = useContext(CartContext);
  const [cartItem] = cartInfo;
  useEffect(()=> {
    const totalPrice = cartItem.reduce((acc, item)=> acc + (+item.price * +item.quantity), 0)
    setTot(totalPrice)
  }, [cartItem])
  return (
    <div className={style.totcheckoutbtn}>
      <h1>Overall Price: <span style={{color: "yellowgreen"}}>{"$ " + tot}</span></h1>
      <Link to="/shop/cart/checkout"><button>Checkout ✅</button></Link>
    </div>
  )
}

