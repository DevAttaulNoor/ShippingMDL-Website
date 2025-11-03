import 'swiper/css';
import 'swiper/css/pagination';
import '../../assets/style/customSwiper.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

export const SwiperCarousel = ({ swiperContainerStyle = '', swiperStates, children }) => {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            loop={swiperStates.loop}
            autoplay={swiperStates.autoplay}
            pagination={swiperStates.pagination}
            spaceBetween={swiperStates.spaceBetween}
            slidesPerView={swiperStates.slidesPerView}
            className={`${swiperContainerStyle} w-full h-full`}
        >
            {React.Children.map(children, (child, index) => (
                <SwiperSlide key={index} className='flex items-center justify-center text-center'>
                    {child}
                </SwiperSlide>
            ))}
        </Swiper>
    )
}