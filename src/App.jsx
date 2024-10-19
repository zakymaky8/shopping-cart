// import { Fragment } from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import style from "./styles/App.module.css"
import { createContext, useState } from 'react'

export const CartContext = createContext()

function App() {
  // const [count, setCount] = useState(1);
  const [cartItem, setCartItem] = useState([]);
  const [total, setTotal] = useState(0)

  function handleAddingProduct(ct, tit, url, price) {
    if (cartItem.length && cartItem.some(item=>item.title === tit)) {
      const copied = cartItem.slice();
      for (let item of copied) {
        if (item.title === tit && item.quantity !== ct) {
          item.quantity = ct
        } else continue
      }
      setCartItem(copied)

    } else {
      setCartItem([...cartItem,
        {
            title: tit,
            url: url,
            quantity: ct,
            price: price
        }
      ])
  }
}

  return (
    <div className={style.container}>
        <CartContext.Provider value={[cartItem, setCartItem, total, setTotal, handleAddingProduct]}>
            <Header />
            <Outlet />
        </CartContext.Provider>
    </div>
  )
}

export default App
