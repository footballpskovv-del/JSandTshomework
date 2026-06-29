import { motion } from "framer-motion";
import "./Header.css";

function Header() {
  return (
    <motion.header
      className="header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-container">
        <a href="#" className="logo">
          ReactTS
        </a>

        <nav>
          <a href="#slider">Слайдер</a>
        </nav>
      </div>
    </motion.header>
  );
}

export default Header;
