import { useEffect, useState } from "react"
import Sort from "./Sort"

import styles from "../styles/Category.module.css"
import activeStyle from "../styles/Header.module.css"
import FetchError from "./FetchError"
import Loading from "./Loading"
import PropTypes from "prop-types"

export default function Category({ setCategory, category }) {

  const [categories, setCategories] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await fetch ("https://fakestoreapi.com/products/categories");
        const json = await response.json()
        setCategories(json)
      } catch(err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    getCategories()
  }, [])

  function getUrl(categoType) {
    const baseUrl = "https://fakestoreapi.com/products/"
    switch (categoType) {
      case "electronics":
        return baseUrl + "category/electronics";
      case "jewelery":
        return baseUrl + "category/jewelery";
      case "men's clothing":
        return baseUrl + "category/men's%20clothing"
      case "women's clothing":
        return baseUrl + "category/women's%20clothing";
      default:
        return baseUrl;
    }
  }
  if (error) {
    return <FetchError message={error}/>
  } else if (loading) return <Loading />

  return (
    <div className={styles.container}>
      <ul className={styles.categories}>
          <li>
            <button className={category.type === "all" ? activeStyle.activeSty : null} onClick={()=>setCategory({...category, type: "all", url: getUrl("all")})}>all</button>
          </li>
          {categories.map((catego, index)=> {
              return (
                <li key={index}>
                  <button className={category.type === catego ? activeStyle.activeSty : null} onClick={()=>setCategory({...category, type: catego, url: getUrl(catego)})}>{catego}</button>
                </li>
              )
            })}
          <li><Sort setCategory={setCategory} category={category}/></li>
        </ul>
    </div>
  )
}

Category.propTypes = {
  category: PropTypes.shape({
    type: PropTypes.string.isRequired,
    sort: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }),
  setCategory: PropTypes.func.isRequired
}
