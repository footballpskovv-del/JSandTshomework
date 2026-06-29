import { motion } from "framer-motion";
import Button from "../Button/Button";
import "./Hero.css";

type HeroProps = {
  onOpenForm: () => void;
};

function Hero({ onOpenForm }: HeroProps) {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span>React + TypeScript</span>
        <h1>Учебный проект на React TS</h1>
        <p>
          Главная страница с анимацией, формой регистрации, валидацией и досками
          задач.
        </p>

        <Button onClick={onOpenForm}>Зарегистрироваться</Button>
      </motion.div>

      <motion.div
        className="hero-card"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2>Frontend</h2>
        <p>Vite • React • TypeScript • React Hook Form</p>
      </motion.div>
    </section>
  );
}

export default Hero;
