import { SVGCommonProps } from "@/_interfaces/Svg.interface";
import { FC, ReactNode } from "react";

export interface CustomBasicCarouselI {
  id: string
  autoPlay?: boolean;
  autoPlayDelay?: number;
  slidesPerView?: number;
  spaceBetween?: number;
  autoPlaySpeed?: number;
  effect?: "fade" | "slide" | "none";
  allowTouchMove?: boolean;
  cssMode?: boolean;
  draggable?: boolean;
  clickable?: boolean;
  wrapperClassName?: string;
  className?: string;
  navigation?: boolean;
  pagination?: boolean;
  infinityLoop?: boolean;
  slides: string[] | ReactNode[];
  ArrowLeft?: FC<SVGCommonProps>;
  ArrowRight?: FC<SVGCommonProps>;
  activeSlide?: number;
}
