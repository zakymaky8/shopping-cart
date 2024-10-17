import { useEffect, useState } from "react";
import styles from "../styles/Shop.module.css";
import ProductCard from "./ProductCard";
import FetchError from "./FetchError";
import Loading from "./Loading";
import PropTypes from "prop-types";


export default function Products({ category, serkey }) {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(category.url, {mode: "cors"})
        const json = await response.json()
        const sortedData = sortData(serkey ? searchResult(json) : json)
        console.log(sortedData)
        setProducts(sortedData)
      } catch(err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    getProducts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, serkey]) // set search param change as refresher

  function searchResult(data) {
    const searchResults = data.map(d=>(serkey.toLowerCase().split("").every(l => d.title.toLowerCase().includes(l))) ? d : null)
    return searchResults.filter(e => e!=null)
  }


  function sortData(data) {
    if (category.sort === "Z-A") {
      return data.sort((a, b)=> a.title < b.title ? 1 : a.title > b.title ? -1 : 0)
    } else if (category.sort === "A-Z") {
      return data.sort((a, b)=> a.title < b.title ? -1 : a.title > b.title ? 1 : 0)
    } else if (category.sort === "lowest price") {
      return data.sort((a, b)=> +a.price - +b.price)
    } else if (category.sort === "highest price") {
      return data.sort((a, b)=> +b.price - +a.price)
    } else {
      return data
    }
  }


  if (error) {
    return <FetchError message={error}/>
  } else if (loading) {
    return <Loading />
  }
  return (
    <div className={styles.products}>
      {
        products.length &&
        products.map(product=> <ProductCard
                id={product.id}
                key={product.id}
                url={product.image}
                title={product.title}
                price={parseInt(product.price)}/>) || <h1> No result!</h1>
      }
    </div>
  )
}



Products.propTypes = {
  category: PropTypes.shape({
    type: PropTypes.string.isRequired,
    sort: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }),
  setCategory: PropTypes.func.isRequired,
  serkey: PropTypes.string.isRequired
}