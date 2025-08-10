"use client";
// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
if (NODE_ENV === "development") {
  // Importar archivo solo en desarrollo
  import("./styles.css");
}

// import required modules
import { FC, useEffect, useRef, useState } from "react";
import { CustomBasicCarouselI } from "./interfaces/interface";
import CustomArrowLeftIcon from "@/_assets/common/arrows/ArrowLeftIcon";
import CustomArrowRightIcon from "@/_assets/common/arrows/ArrowRight";
import { NODE_ENV } from "@/_config";

export const CustomBasicCarousel: FC<CustomBasicCarouselI> = ({
  id,
  activeSlide,
  cssMode = false,
  effect = "fade",
  autoPlay = true,
  autoPlayDelay = 3000,
  spaceBetween = 30,
  slidesPerView = 1,
  autoPlaySpeed = 2500,
  slides,
  wrapperClassName,
  className,
  allowTouchMove = false,
  draggable = false,
  clickable = false,
  pagination = false,
  navigation = false,
  infinityLoop = true,
  ArrowLeft,
  ArrowRight,
}) => {
  const [arrowsId, setArrowsId] = useState<{
    nextId: string | null;
    prevId: string | null;
  }>({
    nextId: null,
    prevId: null,
  });

  const swiperRef = useRef<SwiperRef | null>(null);

  useEffect(() => {
    const nextId = crypto.randomUUID();
    const prevId = crypto.randomUUID();
    setArrowsId({
      nextId,
      prevId,
    });
  }, []);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper && activeSlide !== undefined) {
      swiperRef.current.swiper.slideTo(activeSlide ?? 0);
    }
  }, [activeSlide]);

  const ArrowLeftIcon = ArrowLeft ? ArrowLeft : CustomArrowLeftIcon;
  const ArrowRightIcon = ArrowRight ? ArrowRight : CustomArrowRightIcon;

  return (
    <article
      className={`custom-basic-carousel-wrapper ${wrapperClassName ?? ""}`}
    >
      {navigation ? (
        <div
          className={`custom-basic-carousel-arrow-left custom-basic-carousel-prev-${arrowsId.prevId}`}
        >
          <ArrowLeftIcon
            width='45px'
            height='45px'
            fill='var(--secondaryMinus2)'
          />
        </div>
      ) : null}
      {/* Flecha izquierda */}
      <Swiper
        key={`${id}-${navigation ? "true" : "false"}-pagination-${
          pagination ? "true" : "false"
        }`}
        ref={swiperRef}
        cssMode={cssMode}
        autoplay={
          autoPlay
            ? {
                delay: autoPlayDelay,
                stopOnLastSlide: false,
              }
            : undefined
        }
        allowTouchMove={allowTouchMove}
        draggable={draggable}
        speed={autoPlaySpeed}
        effect={effect}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop={infinityLoop}
        pagination={
          pagination
            ? {
                clickable,
              }
            : undefined
        }
        navigation={
          navigation
            ? {
                nextEl: `.custom-basic-carousel-next-${arrowsId.nextId}`,
                prevEl: `.custom-basic-carousel-prev-${arrowsId.prevId}`,
              }
            : undefined
        }
        modules={[EffectFade, Pagination, Navigation, Autoplay]}
        className={`custom-basic-carousel ${className || ""}`}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
      {navigation ? (
        <div
          className={`custom-basic-carousel-arrow-right custom-basic-carousel-next-${arrowsId.nextId}`}
        >
          <ArrowRightIcon
            width='45px'
            height='45px'
            fill='var(--secondaryMinus2)'
          />
        </div>
      ) : null}
    </article>
  );
};

export default CustomBasicCarousel;
