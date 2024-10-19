// import imgthing from "../assets/images/carousel-images/electronics.jpg"
import Counter from "./Counter"
import style from "../styles/Cart.module.css";
import PropTypes from "prop-types";
import { CartContext } from "../App";
import { useContext, useState } from "react";

export default function ItemInCart({ title, url, count, price }) {
  const cartInfo = useContext(CartContext);
  const [cartItem, setCartItem, , , handleAddingProduct] = cartInfo;

  const [amt, setAmt] = useState(count)

  function handleRemovingItem() {
    const copied = cartItem.slice();
    for (let item of copied) {
      if (item.title === title) {
        copied.splice(copied.indexOf(item), 1);
        setCartItem(copied)
      }
    }
  }
  return (
    <div className={style.itemInCart}>
      <div>
        <p className={style.title}>{title}</p>
        <img src={url} alt={title} />
      </div>
      <div>
        <div>
          <Counter count={amt} setCount={setAmt}/>
          <button onClick={()=>handleAddingProduct(amt, title, url, price)}>Reset Amount</button>
        </div>
        <div className={style.priceDetail}>
          <p>Price: <span>$ {price}</span></p>
          <p>Amount: <span>{count}</span></p>
          <p>Total: <span>$ {+price * +count}</span></p>
        </div>
        <button onClick={handleRemovingItem}>❌ Remove</button>
      </div>

    </div>
  )
}

ItemInCart.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  // setCount: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,

}