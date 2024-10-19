import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import FetchError from "./FetchError";
import Loading from "./Loading";
import style from "../styles/ProductCard.module.css"
import { CartContext } from "../App";
import Counter from "./Counter";



export default function DetailCard() {

    const param = useParams()

    // states
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [err, setError] = useState(null);

    const [amt, setAmt] = useState(1);

    // contexts
    const cartInfo = useContext(CartContext);
    const [cartItem, , , setTotal, handleAddingProduct] = cartInfo;

    useEffect(()=> {
        async function getProduct() {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${parseInt(param.productId)}`)
                const json = await res.json();
                cartItem.forEach(i => i.title === json.title ? setAmt(i.quantity) : 0)
                setData(json)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        getProduct()
    }, [cartItem, param.productId])

    useEffect(()=> {
        const newTotal = cartItem.length ? cartItem.reduce((acc, item) =>acc + +item.quantity , 0) : 0;
        setTotal(newTotal)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[cartItem])


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
                    <Counter count={amt} setCount={setAmt}/>
                    <button onClick={()=> handleAddingProduct(amt, data.title, data.image, data.price)}>Add To Cart 🛒</button>
                </div>
            </div>
        )
    }
}

// title, url, quantity, price, isAdded