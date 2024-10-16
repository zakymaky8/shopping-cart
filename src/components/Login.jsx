import { Link } from "react-router-dom"
import styles from "../styles/logsAndStaff.module.css"
import { useState } from "react";

export default function Login() {

    const [user, setUser] = useState({
        name: "",
        email: ""
    })


  return (
    <div className={styles.container}>
        <div>
            <label htmlFor="name">Full Name: </label>
            <input type="text" placeholder="Your full name" id="name"
            value={user.name} onChange={(e)=> setUser({...user, name: e.target.value})}/>
        </div>
        <div>
            <label htmlFor="email">Your Email: </label>
            <input type="email" id="email" placeholder="your email"
            value={user.email} onChange={(e)=> setUser({...user, email: e.target.value})}/>
        </div>
        { user.name && user.email ? <Link to="/"><button>Log in</button></Link> :null}
    </div>
  )
}
