// import img from"../assets/images/carousel-images/electronics.jpg"
import Counter from "./Counter";
import style from "../styles/ProductCard.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";
// import { useState } from "react";

export default function ProductCard({id, url, title, price}) {
  const cartInfo = useContext(CartContext);
  const [cartItem, , , setTotal, handleAddingProduct] = cartInfo;

  useEffect(()=> {
    const newTotal = cartItem.length ? cartItem.reduce((acc, item) =>acc + +item.quantity , 0) : 0;
    setTotal(newTotal)

// eslint-disable-next-line react-hooks/exhaustive-deps
},[cartItem] )

  // const [amt, setAmt] = useState(+cartItem.some(item=>item.title === title) ? cartItem.filter(item => item.title===title)[0].quantity : 1);
  const [amt, setAmt] = useState(1)

  return (
    <div className={style.container}>

      <img className={style.img} src={url} alt="img"/>

      <h2 className={style.productName}>{title}</h2>

      <div className={style.amountAdjustment}>
        <span>${price}</span>
        {/* {cartItem.some(item=>item.title === title) ? <Counter count={+cartItem.filter(item => item.title===title)[0].quantity} setCount={setAmt}/> : <Counter count={amt} setCount={setAmt}/>} */}
        <Counter count={amt} setCount={setAmt}/>
      </div>

      <div className={style.btns}>
        <Link to={"/shop/product-detail/"+id} ><button>See Detail 📝</button></Link>
        <button onClick={() => handleAddingProduct(amt, title, url, price)}>Add To Cart 🛒</button>
      </div>

    </div>
  )
}
// item.title === title && item.quantity !== amt
ProductCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
}
