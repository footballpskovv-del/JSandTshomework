import { createContext } from "react";

export type SliderContextType = {
  currentSlide: number;
  direction: "left" | "right";
  autoplay: boolean;
  setCurrentSlide: (index: number) => void;
  setAutoplay: (value: boolean) => void;
};

export const SliderContext = createContext<SliderContextType | null>(null);
