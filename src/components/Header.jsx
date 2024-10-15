import Nav from "./Nav";
import headerStyle from "../styles/Header.module.css"

export default function Header() {
  return (
      <header className={headerStyle.container}>
        <h1>Shop a Seek</h1>
        <Nav />
      </header>
  )
}
