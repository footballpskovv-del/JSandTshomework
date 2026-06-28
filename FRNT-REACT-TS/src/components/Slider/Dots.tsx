import { useContext } from "react";
import { SliderContext } from "./SliderContext";

type DotsProps = {
  slidesLength: number;
};

function Dots({ slidesLength }: DotsProps) {
  const slider = useContext(SliderContext);

  if (!slider) {
    return null;
  }

  const { currentSlide, setCurrentSlide, setAutoplay } = slider;

  return (
    <div className="dots">
      {Array.from({ length: slidesLength }).map((_, index) => (
        <button
          key={index}
          className={currentSlide === index ? "dot active" : "dot"}
          onClick={() => {
            setCurrentSlide(index);
            setAutoplay(false);
          }}
          aria-label={`Перейти к слайду ${index + 1}`}
        />
      ))}
    </div>
  );
}

export default Dots;
