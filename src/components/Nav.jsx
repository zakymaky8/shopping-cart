// import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import navStyle from "../styles/Header.module.css"
import { useContext, useEffect } from "react";
import { CartContext } from "../App";
import cartImg from"../../src/assets/images/cart.png"
export default function Nav() {

  const cartInfo = useContext(CartContext);
  const [cartItem, , total, setTotal] = cartInfo;

  useEffect(()=> {
    const newTotal = cartItem.length ? cartItem.reduce((acc, item) =>acc + +item.quantity , 0) : 0;
    setTotal(newTotal)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[cartItem] )
  return (
    <div>
      <ul className={navStyle.navStyles} data-testid = "navs-test">
        <NavLink className={({isActive}) => isActive ? navStyle.active : ""} to="/">🏠︎Home</NavLink>
        <NavLink className={({isActive}) => isActive ? navStyle.active : ""} to="/shop">🛍️Shop</NavLink>
        <NavLink className={({isActive}) => isActive ? navStyle.active : ""} to="/log-in">🔑Log in</NavLink>
        <NavLink className={({isActive}) => isActive ? navStyle.active : ""} to="/shop/cart">
            <div className={navStyle.cart}>
              <img className={navStyle.imgStyle} src={cartImg} alt="cart" />
              {total !==0 &&  <span className={navStyle.cartCount}>{total}</span>}
            </div>
        </NavLink>
      </ul>
    </div>
  )
}
// setTotal(cartItem.length ? cartItem.reduce((item, acc) => +item.quantity + acc, 0) : 0)