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
  
  // useEffect( () => {
  //   async function getProducts() {
  //     const url = category.url
  //     try {
  //       const response = await fetch(url, {mode: "cors"})
  //       const json = await response.json()
  //       console.log(json)
  //     }
  //     catch (err) {
  //       console.log(err.message)
  //     }
  //   }
  //   getProducts("")
  // }, [category])
  return (
    <div className={styles.shopContainer}>
      <div className={styles.search}>
        <input type="search"  placeholder="search in products"/>
        <button>🔍</button>
      </div>
      <Category setCategory={setCategory} category={category}/>
      <Products setCategory={setCategory} category={category}/>
    </div>
  )
}
