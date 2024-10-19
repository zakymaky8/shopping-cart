import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Error() {

  const navigate = useNavigate()
  useEffect(() => {
    const timeOut = setTimeout(()=>{
      navigate("/")
    }, 3500)
    return () => clearTimeout(timeOut)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div style={{
      display: "flex",
      flexDirection:"column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      color: "blueviolet",
      fontSize: "30px"
    }}>
        <h1>404</h1>
        <p>Nothing lives in this address.</p>
        <p>Do some correction.</p>
    </div>
  )
}

