"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function DoctorsSay() {
    const testimonials = [
        {
            name: "Dr. Anjali Sharma",
            title: "Ayurvedic Practitioner",
            quote:
                "Ayurveda offers holistic healing. Vedi’s products are safe, effective, and rooted in tradition.",
            image: "https://images.pexels.com/photos/7828522/pexels-photo-7828522.jpeg", 
        },
        {
            name: "Dr. Rajesh Kumar",
            title: "Holistic Health Expert",
            quote:
                "I recommend Ayurvedic remedies for long-term wellness. Vedi ensures purity and authenticity.",
            image: "https://images.pexels.com/photos/7828522/pexels-photo-7828522.jpeg",
        },
        {
            name: "Dr. Meera Patel",
            title: "Wellness Consultant",
            quote:
                "Natural formulations without side effects make Ayurveda a trusted choice for my patients.",
            image: "https://images.pexels.com/photos/7828522/pexels-photo-7828522.jpeg",
        },
        {
            name: "Dr. Anjali Sharma",
            title: "Ayurvedic Practitioner",
            quote:
                "Ayurveda offers holistic healing. Vedi’s products are safe, effective, and rooted in tradition.",
            image: "https://images.pexels.com/photos/7828522/pexels-photo-7828522.jpeg", 
        },
        {
            name: "Dr. Rajesh Kumar",
            title: "Holistic Health Expert",
            quote:
                "I recommend Ayurvedic remedies for long-term wellness. Vedi ensures purity and authenticity.",
            image: "https://images.pexels.com/photos/7828522/pexels-photo-7828522.jpeg",
        },
        {
            name: "Dr. Meera Patel",
            title: "Wellness Consultant",
            quote:
                "Natural formulations without side effects make Ayurveda a trusted choice for my patients.",
            image: "https://images.pexels.com/photos/7828522/pexels-photo-7828522.jpeg",
        },
    ];

    return (
        <div className="py-12">
            <h1 className="text-5xl font-extrabold text-center mb-8 text-black">
                Doctor's Say
            </h1>

            <Swiper
                loop={true}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {testimonials.map((doc, i) => (
                    <SwiperSlide key={i}>
                        <div className="bg-white shadow-lg rounded-lg p-11 flex flex-col items-center text-center h-full hover:scale-111 transition duration-300 hover:bg-amber-200">
                            <img
                                src={doc.image}
                                alt={doc.name}
                                className="w-20 h-20 rounded-full mb-4 border-4 border-green-400"
                            />
                            <p className="italic text-gray-700 mb-4">"{doc.quote}"</p>
                            <h3 className="font-semibold text-lg text-green-400">{doc.name}</h3>
                            <p className="text-sm text-gray-500">{doc.title}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <style jsx global>
                {` .swiper-pagination { 
                margin-top: 21px; 
                position: relative !important; 
                } `}
            </style>
        </div>
    );
}
