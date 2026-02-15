"use client";
function Card({ title, description, image }: { title: string, description: string, image: string }) {
    return (
        <div className='bg-white text-green-500 shadow-md w-90'>
            <img src={image} className='object-cover w-full h-80 shadow-md' />
            <h2 className='text-lg font-semibold px-5 py-2 mt-5'>{title}</h2>
            <p className='text-sm font-md px-5 py-2'>{description}</p>
            <button className="px-5 py-2 m-5 bg-green-500 text-white">Read More</button>
        </div>
    );
}
export default function Service() {
    const ayurvedicServices = [
        {
            image: "/s_a.jpg",
            title: "Ayurvedic Consultation",
            description: "Personalized health guidance rooted in Ayurveda, balancing body, mind, and spirit through holistic lifestyle recommendations."
        },
        {
            image: "/a.jpg",
            title: "Herbal Remedies",
            description: "Natural formulations using traditional herbs to support immunity, digestion, and overall wellness without harmful side effects."
        },
        {
            image: "/s_c.webp",
            title: "Detox Therapies",
            description: "Cleansing treatments like Panchakarma designed to eliminate toxins, restore energy, and rejuvenate physical and mental health."
        }
    ];
    return (
        <div className=''>
            <h1 className="text-5xl font-extrabold text-black text-center mt-11 mb-11 w-full">Our Ayurvedic Services</h1>
            <div className='flex flex-wrap justify-center mb-11 gap-8'>
                {ayurvedicServices.map((p, i) => (
                    <div key={i} className="w-100 hover:scale-111 transition duration-300 gap-8">
                        <Card {...p} />
                    </div>
                ))}
            </div>
        </div>
    );
}
