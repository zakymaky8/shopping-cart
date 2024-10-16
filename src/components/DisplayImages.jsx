import { useEffect, useState } from "react"
import { carauselImgInfo as imIn } from "./dataStaff"
import style from "../styles/Display.module.css"

export default function DisplayImages() {
    const [ind, setInd]= useState(0);

    useEffect(()=> {
        let interval = setInterval( ()=> {
            setInd(ind===(imIn.length-1) ? 0 : ind+1)
        }, 3000)
        return () => clearInterval(interval)
    }, [ind])

  return (
    <div data-testid="image-test" className={style.container} style={{backgroundImage: `url(${imIn[ind].url})` }}>
        <h1 className={style.title}>{imIn[ind].title}</h1>
        <div className={style.pointer} id="ss">
            <span style={{background: ind===0 ? "black" : "transparent"}} onClick={()=> setInd(0)}></span>
            <span style={{background: ind===1 ? "black" : "transparent"}} onClick={()=> setInd(1)}></span>
            <span style={{background: ind===2 ? "black" : "transparent"}} onClick={()=> setInd(2)}></span>
            <span style={{background: ind===3 ? "black" : "transparent"}} onClick={()=> setInd(3)}></span>
        </div>
        <button className={style.back} onClick={()=>setInd((ind === 0) ? imIn.length-1 : ind-1)}>👈</button>
        <button className={style.forth} onClick={()=>setInd((ind === imIn.length-1) ? 0 : ind+1)}>👉</button>
    </div>
  )
}





// async function getImgUrls() {
//   try {
//       const response = (await fetch("https://fakestoreapi.com/products", {mode:"cors"}))
//       const json = await response.json()
//       const urls = json.map(product => product.image)
//       setImageUrls(urls)
      

//   } catch (err) {
//       setError(err.message)
//   } finally {
//       setLoading(false)
//   }
// }
// getImgUrls()