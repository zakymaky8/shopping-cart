import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import FetchError from "./FetchError";
import Loading from "./Loading";

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
            <div>
                <img style={{width:"200px"}} src={data.image} alt={data.title} />
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <div>
                    <p>rating: {data.rating.rate}</p>
                    <p>count: {data.rating.count}</p>
                </div>
            </div>
        )
    }
}

export default DetailCard
