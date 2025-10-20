import 'swiper/css';
import 'swiper/css/pagination';
import '@assets/style/customSwiper.css';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SwiperCarousel = ({ swiperContainerStyle = '', swiperStates, swiperSlideData }) => {
    return (
        <Swiper
            slidesPerView={swiperStates.slidesPerView}
            spaceBetween={swiperStates.spaceBetween}
            pagination={swiperStates.pagination}
            modules={[Pagination]}
            className={`${swiperContainerStyle}`}
        >
            {swiperSlideData.map((slide, index) => (
                <SwiperSlide key={index}>
                    {slide.content}
                </SwiperSlide>
            ))}
        </Swiper>
    )
}