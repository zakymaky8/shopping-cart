// import img from"../assets/images/carousel-images/electronics.jpg"
import Counter from "./Counter";
import style from "../styles/ProductCard.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ProductCard({id, url, title, price}) {

  return (
    <div className={style.container}>

      <img className={style.img} src={url} alt="img"/>

      <h2 className={style.productName}>{title}</h2>

      <div className={style.amountAdjustment}>
        <span>${price}</span>
        <Counter />
      </div>

      <div className={style.btns}>
        <Link to={"/product-detail/"+id} ><button>See Detail</button></Link>
        <button>Add To Cart 🛒</button>
      </div>

    </div>
  )
}

ProductCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
}
