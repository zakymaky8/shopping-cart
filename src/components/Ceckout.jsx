import  style from "../styles/Cart.module.css"


export default function Ceckout() {
  return (
    <div className={style.checkout}>
      <div>
        <div>
          <label htmlFor="fname">First Name: </label>
          <input type="text" id="fname"/>
        </div>
        <div>
          <label htmlFor="lname">Last Name: </label>
          <input type="text" id="lname"/>
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email"/>
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="card-no">Card Number: </label>
          <input type="text" id="card-no"/>
        </div>
        <div>
          <label htmlFor="cvv">CVV/CVC Code: </label>
          <input type="number" id="cvv"/>
        </div>
        <div>
          <label htmlFor="">Card Expiry Date: </label>
          <input type="date" />
        </div>
        <button>Place Order</button>
      </div>
    </div>
  )
}
