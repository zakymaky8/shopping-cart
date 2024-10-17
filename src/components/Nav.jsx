// import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import navStyle from "../styles/Header.module.css"

export default function Nav() {

  return (
    <div>
      <ul className={navStyle.navStyles} data-testid = "navs-test">
        <NavLink className={({isActive}) => isActive ? navStyle.active : ""} to="/">Home</NavLink>
        <NavLink className={({isActive}) => isActive ? navStyle.active : ""} to="/shop">Shop</NavLink>
        <NavLink className={({isActive}) => isActive ? navStyle.active : ""} to="/log-in">Log in</NavLink>
        <NavLink className={({isActive}) => isActive ? navStyle.active : ""} to="/">
            <div className={navStyle.cart}>
              <img className={navStyle.imgStyle} src="../../src/assets/images/cart.png" alt="cart" />
              <span className={navStyle.cartCount}>99</span>
            </div>
        </NavLink>
      </ul>
    </div>
  )
}
// <NavLink to="/">Log in</NavLink>
// <NavLink to="/name">Home</NavLink>
// <NavLink to="/nn">Shop</NavLink>
// <NavLink to="/"><img className={navStyle.imgStyle} src="../../src/assets/images/cart.png" alt="cart" /></NavLink>
// {<li>Log in</li> || <h2 style={{border: "1px solid yellow",height: "30px", borderRadius: "50%", background: "green", width: "40px", textAlign: "center"}}>M</h2>}
// <li>Home</li>
// <li>Shop</li>
// <li><img className={navStyle.imgStyle} src="../../src/assets/images/cart.png" alt="cart" /></li>

// export default function Nav() {
//     const [categories, setCategories] = useState([]);
//     const sortMethods = ["A-Z", "Z-A", "Lowest Price", "Highest Price"]
//     const [index, setIndex] = useState(0)
    

//     useEffect( () => {
//         async function getCategories() {
//             const response = await fetch("https://fakestoreapi.com/products/category/jewelery", {
//                 mode: "cors",
//             })
//             const json = await response.json()
//             setCategories([...json])
//         }
//         getCategories()
//     }, [])

//     function handleSortChoices(index) {
//             if (index=== 1) setCategories();
//             else if (index=== 2) setCategories([...sortByLowPrice()])
//             else if (index===3) setCategories(categories.sort((a, b)=> b.price - a.price));
//             else  {
//                 setCategories([...categories.sort((a, b) => {
//                     if (a.title < b.title) {
//                         return 1;
//                     } else if (a.title > b.title) {
//                         return -1;
//                     } else {
//                         return 0;
//                     }
//                 })]);
//             }
//     }
//     function sortByLowPrice () {
//         const sorted = categories.sort((a,b)=> a.price - b.price)
//         return sorted
//     }

//   return (
//     <div>
//       <ul className={navStyle.listTypes}>
//         <li>Home</li>
//         <li>Shop</li>
//         <button onClick={() => handleSortChoices(12)}>By lowest price</button>
//         <li><img className={navStyle.imgStyle} src="../../src/assets/images/cart.png" alt="cart" /></li>
//         <div style={{display: "flex", flexWrap: "wrap"}}>
//             {categories.map(category=> {
//                 return <li style={{border: "2px solid green", width: "300px", margin: "10px", padding: "30px"}} key={category.id}>
//                     <img style ={{width: "300px", height: "130px"}} src={category.image} alt="ss" />
//                     <h2>{category.title}</h2>
//                     <p>{category.description}</p>
//                     <h2>${category.price}</h2>
//                     <button>Add to Cart</button>
//                 </li>
//             })}
//         </div>
//       </ul>
//     </div>
//   )
// }

