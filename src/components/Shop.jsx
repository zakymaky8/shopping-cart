import { useState } from "react"
import Category from "./Category";

import styles from "../styles//Shop.module.css"
import Products from "./Products";


export default function Shop() {

  const [category, setCategory] = useState({
    type: "all",
    sort: "shuffled",
    url: "https://fakestoreapi.com/products"
  })

  const [serkey, setSerkey ] = useState("")
  const [value, setValue] = useState("")

  return (
    <div className={styles.shopContainer}>
      <div className={styles.search}>
        <input
          type="search"
          placeholder="search in products"
          value={value}
          onChange={(e)=>setValue(e.target.value)}
          />
        <button onClick={() => setSerkey(value)}>🔍</button>
      </div>
      <Category
          setCategory={setCategory}
          category={category}/>

      <Products
        setCategory={setCategory}
        category={category}
        serkey={serkey}
        setSerkey={ setSerkey }
      />
    </div>
  )
}
