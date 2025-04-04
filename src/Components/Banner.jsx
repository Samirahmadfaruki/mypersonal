import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Banner() {
    const slides = [
        { id: 1, image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b' },
        { id: 2, image: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b' },
        { id: 3, image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1' }
    ];

    return (
        <div className="w-full">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true }}
                className="w-full h-[400px]"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <img src={slide.image} alt={`Slide ${slide.id}`} className="w-full h-full object-cover" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
