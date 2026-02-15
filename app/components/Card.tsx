"use client";
import { Star } from "lucide-react";    
import { useState } from "react";
function Cards({ title, cost, productImageLink, rate }: { title: string, cost: string, productImageLink: string, rate: number }) {
    const [isPop, setIsPop] = useState(false);
    const handler = () => {
        setIsPop(true);
        setTimeout(() => {
            setIsPop(false);
        }, 2000);
    }
    return (
        <div className="relative bg-white text-gray-900 shadow-lg w-70 hover:scale-111 transition duration-300 group">
            <img src={productImageLink} className="object-cover w-full h-70" />
            <h2 className="text-lg font-semibold  text-center px-5 py-2">{title}</h2>
            <p className="text-sm font-semibold  text-center px-5 py-2">{cost}</p>
            <div className="flex space-x-2 mt-5 justify-center">
                {[...Array(rate)].map((_, i) => (
                    <Star key={i} size={16} stroke="gold" fill="gold" />
                ))}
            </div>
            <button onClick={handler} className="w-full px-4 py-2 bg-green-400 text-white  mt-5 transition duration-300 hover:bg-amber-400 opacity-0 group-hover:opacity-100">Add to Cart</button>
            {isPop && <div className="fixed inset-0 flex items-center justify-center z-50"><div className="bg-green-200 text-green-950 rounded-lg shadow-lg absolute top-5 right-5 animate-bounce px-15 py-5">Added to Cart</div></div>}
        </div>
    );
}
export default function Card() {
    const flipkartProducts = [
        { id: 1, productImageLink: "/n_a.avif", cost: "₹299", title: "Lotus Vital Ayurvedic Face Wash", rate: 3},
        { id: 2, productImageLink: "/n_b.avif", cost: "₹1,499", title: "Lotus Vital Ayurvedic Face Cream", rate: 5},
        { id: 3, productImageLink: "/n_c.avif", cost: "₹42,990", title: "Lotus Vital Ayurvedic Face Serum", rate: 4},
        { id: 4, productImageLink: "/n_b.avif", cost: "₹1,990", title: "Lotus Vital Ayurvedic Face Mask Gold", rate:2},
    ];
    return (
        <div>
        <h1 className="font-extrabold text-5xl text-center mt-10">Our Ayurvedic Products</h1>
        <div className="flex flex-wrap gap-5 justify-center mt-11">
            {flipkartProducts.map((p) => (
                <Cards key={p.id} title={p.title} cost={p.cost} productImageLink={p.productImageLink} rate={p.rate} />
            ))}
        </div>
        </div>
    );
}