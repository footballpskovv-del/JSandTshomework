import "./header.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import BurgerMenu from "../burgerMenu/burgerMenu";
import useWindowWidth from "../../hooks/useWindowWidth";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

function Header() {
  const width = useWindowWidth();
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          TimDev
        </Link>

        {width < 768 ? (
          <BurgerMenu />
        ) : (
          <nav className="nav">
            <HashLink smooth to="/#about">
              Обо мне
            </HashLink>

            <Link to="/works">Мои работы</Link>

            <Link to="/blog">Блог</Link>

            <HashLink smooth to="/#contacts">
              Контакты
            </HashLink>
          </nav>
        )}
        <button className="theme-button" onClick={toggleTheme}>
          {theme === "light" ? "Темная тема" : "Светлая тема"}
        </button>
      </div>
    </header>
  );
}

export default Header;
