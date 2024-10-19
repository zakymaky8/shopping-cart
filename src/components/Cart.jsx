import ItemInCart from "./ItemInCart";
import style from "../styles/Cart.module.css";
import { useContext } from "react";
import { CartContext } from "../App";
import TotalAndCheckout from "./TotalAndCheckout";



export default function Cart() {
  const cartInfo = useContext(CartContext);
  const [cartItem] = cartInfo;

  // console.log(cartItem)

  return (
    <div className={style.container}>
      <h1>What on your cart</h1>
      {
        cartItem.length &&
          cartItem.map((item) => {
            return <ItemInCart key={item.title} title={item.title} url={item.url}  count={item.quantity} price={item.price}/>
          })
         || <h1>Nothing!</h1>
      }
      {cartItem.length > 0 && <TotalAndCheckout />}
    </div>
  )
}

