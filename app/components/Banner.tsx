"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function Banner() {
    return (
        <Swiper loop navigation modules={[Pagination, Autoplay]} autoplay={{ delay: 5000 }}>
            <SwiperSlide>
                <div className="relative w-full h-screen">
                    <img src="/h.jpeg" className="object-cover w-full h-screen brightness-75 opacity-0" />
                    <div className="absolute inset-0 flex flex-row items-center justify-center text-center">
                        
                        <div className="w-1/2 flex flex-col items-start text-left border-red-900">
                            <h1 className="text-7xl font-extrabold text-gray-700 ">“Timeless Remedies for Today’s Lifestyle"</h1>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/a.jpeg" className="object-cover w-full h-screen  brightness-75 " />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/b.jpeg" className="object-cover w-full h-screen  brightness-75" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/e.jpeg" className="object-cover w-full h-screen  brightness-75" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/g.jpeg" className="object-cover w-full h-screen  brightness-75" />
            </SwiperSlide>
        </Swiper>
    );
}