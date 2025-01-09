import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
  <header class={style.header}>
    <div class={style.logoContainer}>
      <h1 class={style.logoText}>Diana Pamela Moya Osorio</h1>
    </div>
    <nav>
      <Link activeClassName={style.active} href="/">Home</Link>
      <Link activeClassName={style.active} href="/research">Research</Link>
      <Link activeClassName={style.active} href="/publications">Publications</Link>
      <Link activeClassName={style.active} href="/teaching">Teaching</Link>
      <Link activeClassName={style.active} href="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;







