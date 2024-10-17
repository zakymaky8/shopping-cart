import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import FetchError from "./FetchError";
import Loading from "./Loading";
import style from "../styles/ProductCard.module.css"

function DetailCard() {

    const param = useParams()
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [err, setError] = useState(null);

    useEffect(()=> {
        async function getProduct() {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${parseInt(param.productId)}`)
                const json = await res.json();
                setData(json)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        getProduct()
    }, [param.productId])

    if (err) {
        return <FetchError message={err}/>
    } else if (loading) {
        return <Loading />
    } else {
        return (
            <div className={style.detailCard}>
                <img src={data.image} alt={data.title} />
                <h1>{data.title}</h1>
                <span
                    style={{alignSelf: "flex-start", color: "yellow"}}>
                        Price: {"$ " + data.price}
                </span>

                <div className={style.desc}>
                    <h2>Description</h2>
                    <p>{data.description}</p>
                </div>
                <div>
                    <p className={style.categoName} >{data.category.toUpperCase()}</p>
                </div>
                <div className={style.rating}>
                    <p>Rating: {data.rating.rate}</p>
                    <p>Reviews: {data.rating.count}</p>
                </div>
                <div className={style.cta}>
                    <Link to="/shop"><button>👈 See Others</button></Link>
                    <button>Add To Cart 🛒</button>
                </div>
            </div>
        )
    }
}

export default DetailCard
