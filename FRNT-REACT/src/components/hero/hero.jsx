import "./hero.css";
import { useState } from "react";
import Modal from "../Modal/Modal";
import profileImage from "../../assets/timur.jpg";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="hero" id="about">
      <div className="hero-text">
        <h1>
          МЕНЯ ЗОВУТ ТИМУР,
          <br />Я ВЕБ РАЗРАБОТЧИК
        </h1>

        <p>Создаю сайты и веб-приложения, изучаю React и TypeScript.</p>

        <button onClick={() => setIsOpen(true)}>Связаться со мной</button>

        {isOpen && <Modal onClose={() => setIsOpen(false)} />}
      </div>

      <div className="hero-image">
        <img src={profileImage} alt="Тимур" />
      </div>
    </section>
  );
}

export default Hero;
