import style from "./NavBar.module.scss";
import { nav } from "@/content/nav";

export default function NavBar() {
  return (
    <nav className={style.nav}>
      <p className={style.logo}>
        <a href={nav.logo.href}>{nav.logo.text}</a>
      </p>

      <ul className={style.listContainer}>
        {nav.items.map((item) => (
          <li key={item.href} className={style.listItemNav}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
