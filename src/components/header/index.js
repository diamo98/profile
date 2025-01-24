import { h } from "preact"
import { Link } from "preact-router/match"
import { useState } from "preact/hooks"
import style from "./style.css"

const Header = ({ basePath }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header class={style.header}>
      <div class={style.logoContainer}>
        <h1>Diana Pamela Moya Osorio</h1>
      </div>
      <button class={style.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <nav class={`${style.nav} ${menuOpen ? style.open : ""}`}>
        <Link activeClassName={style.active} href={`${basePath}/`} onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link activeClassName={style.active} href={`${basePath}/research`} onClick={() => setMenuOpen(false)}>
          Research
        </Link>
        <Link activeClassName={style.active} href={`${basePath}/publications`} onClick={() => setMenuOpen(false)}>
          Publications
        </Link>
        <Link activeClassName={style.active} href={`${basePath}/teaching`} onClick={() => setMenuOpen(false)}>
          Teaching
        </Link>
        <Link activeClassName={style.active} href={`${basePath}/contact`} onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </nav>
    </header>
  )
}

export default Header











