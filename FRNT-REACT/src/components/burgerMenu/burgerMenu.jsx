import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./burgerMenu.css";

function BurgerMenu() {
  return (
    <nav className="burger-menu">
      <HashLink smooth to="/#about">
        Обо мне
      </HashLink>

      <Link to="/works">Мои работы</Link>

      <Link to="/blog">Блог</Link>

      <HashLink smooth to="/#contacts">
        Контакты
      </HashLink>
    </nav>
  );
}

export default BurgerMenu;