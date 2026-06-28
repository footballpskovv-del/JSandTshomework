import { useEffect, useState } from "react";
import { SliderContext } from "./SliderContext";
import Dots from "./Dots";
import "./Slider.css";

type Slide = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "React",
    description: "Компонентный подход к разработке интерфейсов.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "TypeScript",
    description: "Типизация делает код надежнее и понятнее.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Frontend",
    description: "Современные сайты с адаптивной версткой.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },
];

function getDirection(current: number, next: number): "left" | "right" {
  if (next > current) {
    return "right";
  }

  return "left";
}

function Slider() {
  const [currentSlide, setCurrentSlideState] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [autoplay, setAutoplay] = useState(true);

  function setCurrentSlide(index: number) {
    setDirection(getDirection(currentSlide, index));
    setCurrentSlideState(index);
  }

  function nextSlide() {
    const nextIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;

    setDirection("right");
    setCurrentSlideState(nextIndex);
    setAutoplay(false);
  }

  function prevSlide() {
    const prevIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;

    setDirection("left");
    setCurrentSlideState(prevIndex);
    setAutoplay(false);
  }

  useEffect(() => {
    if (!autoplay) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentSlideState((prevSlide) => {
        const nextIndex = prevSlide === slides.length - 1 ? 0 : prevSlide + 1;

        setDirection("right");

        return nextIndex;
      });
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [autoplay]);

  return (
    <SliderContext.Provider
      value={{
        currentSlide,
        direction,
        autoplay,
        setCurrentSlide,
        setAutoplay,
      }}
    >
      <section className="slider-section" id="slider">
        <div className="slider-heading">
          <span>Слайдер</span>
          <h2>Технологии проекта</h2>
          <p>
            Слайдер реализован с помощью useState, useEffect, Context,
            автопрокрутки, точек навигации и CSS-анимации.
          </p>
        </div>

        <div className="slider">
          <button
            type="button"
            className="slider-arrow slider-arrow-left"
            onClick={prevSlide}
          >
            ←
          </button>

          <div
            className="slider-track"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {slides.map((slide) => (
              <article className="slide" key={slide.id}>
                <img src={slide.image} alt={slide.title} loading="lazy" />

                <div className="slide-content">
                  <span>Направление: {direction}</span>
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="slider-arrow slider-arrow-right"
            onClick={nextSlide}
          >
            →
          </button>

          <Dots slidesLength={slides.length} />
        </div>
      </section>
    </SliderContext.Provider>
  );
}

export default Slider;
