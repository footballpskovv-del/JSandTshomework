import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span>React + TypeScript</span>
        <h1>Шаблон ФОрмы</h1>
        <p>страница с анимацией, формой регистрации, валидацией и слайдером</p>
        <a href="#registration">Перейти к регистрации</a>
      </motion.div>

      <motion.div
        className="hero-card"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2>Frontend</h2>
        <p>Vite • React • TypeScript • Framer Motion • React Hook Form</p>
      </motion.div>
    </section>
  );
}

export default Hero;
