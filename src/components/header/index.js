import { h } from "preact"
import { Link } from "preact-router/match"
import style from "./style.css"

const Header = ({ basePath }) => (
  <header class={style.header}>
    <h1>Diana Pamela Moya Osorio</h1>
    <nav>
      <Link activeClassName={style.active} href={`${basePath}/`}>
        Home
      </Link>
      <Link activeClassName={style.active} href={`${basePath}/research`}>
        Research
      </Link>
      <Link activeClassName={style.active} href={`${basePath}/publications`}>
        Publications
      </Link>
      <Link activeClassName={style.active} href={`${basePath}/teaching`}>
        Teaching
      </Link>
      <Link activeClassName={style.active} href={`${basePath}/contact`}>
        Contact
      </Link>
    </nav>
  </header>
)

export default Header









