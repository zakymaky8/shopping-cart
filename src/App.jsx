// import { Fragment } from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import style from "./styles/App.module.css"

function App() {

  return (
    <div className={style.container}>
        <Header />
        <Outlet />
    </div>
  )
}

export default App
