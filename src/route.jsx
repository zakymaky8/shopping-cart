import App from "./App"
import Cart from "./components/Cart"
import Ceckout from "./components/Ceckout"
import DetailCard from "./components/DetailCard"
import DisplayImages from "./components/DisplayImages"
import Error from "./components/Error"
import FeaturedProducts from "./components/FeaturedProducts"
import Login from "./components/Login"
import Shop from "./components/Shop"

const route = [
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element:
                        <div>
                            <DisplayImages />
                            <FeaturedProducts />
                        </div>,
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/log-in",
                element: <Login />
            },
            {
                path: "/shop/product-detail/:productId",
                element: <DetailCard />
            },
            {
                path: "/shop/cart",
                element: <Cart />
            },
            {
                path: "/shop/cart/checkout",
                element: <Ceckout />
            }
        ]
    }
]

export default route