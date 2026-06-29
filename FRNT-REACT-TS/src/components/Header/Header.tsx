import { motion } from "framer-motion";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <motion.header
      className="header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-container">
        <Link to="/" className="logo">
          ReactTS
        </Link>

        <nav>
          <a href="#slider">Слайдер</a>

          <Link to="/redux" className="nav-link">
            Redux
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}

export default Header;
