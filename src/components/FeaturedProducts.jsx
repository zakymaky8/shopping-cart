import ProductCard from "./ProductCard"
import styles from "../styles/FeaturedProducts.module.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import FetchError from "./FetchError";
import Loading from "./Loading";


export default function FeaturedProducts() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products/", {mode: "cors"})
        const json = await response.json()
        const filteredData = filterData(json)
        setProducts(filteredData)
      } catch(err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    getProducts()
  }, [])

  function filterData(data) {
    const indices = [Math.floor(Math.random()*20), Math.floor(Math.random()*20), Math.floor(Math.random()*20)]
    return indices.map(ind => data[ind])
  }

  if (error) {
    return <FetchError message={error}/>
  } else if (loading) {
    return <Loading />
  }
  return (
    <div className={styles.container}>
      <h1>Featured Products</h1>
      <div  className={styles.products}>
        {
          products.map(product=>{
            return <ProductCard
              key={product.id}
              id={product.id}
              price={product.price}
              url={product.image}
              title={product.title}
              />
          })
        }

      </div>
      <Link to="/shop"><button className={styles.cta}>Shop Now 👉</button></Link>
    </div>
  )
}
