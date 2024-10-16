import PropTypes from "prop-types"
import styles from "../styles/Category.module.css"


export default function Sort({ category, setCategory }) {
  return (
        <div className={styles.sort}>
          <label htmlFor="sort">Sort By </label>
          <select name="sorts" id="sort" onChange={(e)=>setCategory({...category, sort: e.target.value})}>
            <option value="shuffled">shuffled</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="lowest price">lowest price</option>
            <option value="highest price">highest price</option>
          </select>
        </div>
  )
}


Sort.propTypes = {
  category: PropTypes.shape({
    type: PropTypes.string.isRequired,
    sort: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }),
  setCategory: PropTypes.func.isRequired
}
