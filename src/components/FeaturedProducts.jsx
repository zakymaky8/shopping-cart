import ProductCard from "./ProductCard"
import styles from "../styles/FeaturedProducts.module.css"
import { Link } from "react-router-dom"


export default function FeaturedProducts() {
  return (
    <div className={styles.container}>
      <h1>Featured Products</h1>
      <div  className={styles.products}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Link to="/shop"><button className={styles.cta}>Shop Now 👉</button></Link>
    </div>
  )
}
