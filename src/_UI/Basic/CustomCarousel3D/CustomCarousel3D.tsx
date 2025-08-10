import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Importa directamente los módulos necesarios
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import CarouselItem from "./components/CarouselItem";
import { FC } from "react";
import { CustomCarousel3DProps } from "./interfaces/interface";

const CustomCarousel3D: FC<CustomCarousel3DProps> = ({
    items,
    matchesWidth,
}) => {
    return (
        <Swiper
            effect='coverflow'
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={matchesWidth[1024] ? 1 : 2} // Número de slides visibles
            spaceBetween={0}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 500,
                modifier: 2,
                slideShadows: false,
            }}
            navigation={true} // Habilitar la navegación (flechas)
            modules={[EffectCoverflow, Pagination, Navigation]} // Agrega los módulos directamente
            className='custom-carousel-3d-swiper-container'
        >
            {[...items, ...items].map(
                (item, index) => (
                    <SwiperSlide key={index}>
                        <CarouselItem item={{ ...item, matchesWidth }} />
                    </SwiperSlide>
                )
            )}
        </Swiper>
    );
};

export default CustomCarousel3D;
