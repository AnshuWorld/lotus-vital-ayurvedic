"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
export default function Mmenu() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-gradient-to-r from-gray-100 to-gray-200 text-blue-900 sticky top-0 z-50 shadow-lg">
            <div className="flex items-center justify-between p-5">
                <h1 className="text-4xl font-bold">Lotus Vital Ayuvadic 🌿</h1>
                <button onClick={() => setIsOpen(!isOpen)} className="px-4 py-2 bg-gray-300 shadow-lg md:hidden rounded-2xl">
                    {isOpen ? <X /> : <Menu />}
                </button>
                <ul className="hidden md:flex flex-row space-x-5 font-semibold">
                    <li>
                        <Link href="/" className="relative block p-4 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[5px] after:transition-all after:duration-300 hover:after:w-full after:bg-green-500">Home</Link>
                    </li>
                    <li>
                        <Link href="/" className="relative block p-4 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[5px] after:transition-all after:duration-300 hover:after:w-full after:bg-green-500">AboutUs</Link>
                    </li>
                    <li>
                        <Link href="/" className="relative block p-4 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[5px] after:transition-all after:duration-300 hover:after:w-full after:bg-green-500">Products</Link>
                    </li>
                    <li>
                        <Link href="/" className="relative block p-4 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[5px] after:transition-all after:duration-300 hover:after:w-full after:bg-green-500">Services</Link>
                    </li>
                    <li>
                        <Link href="/" className="relative block p-4 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[5px] after:transition-all after:duration-300 hover:after:w-full after:bg-green-500">Contacts</Link>
                    </li>
                </ul>
            </div>
            {isOpen &&
                <ul className="flex flex-col md:hidden space-y-2 font-semibold">
                    <li>
                        <Link href="/" className="relative block p-4 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[5px] after:transition-all after:duration-300 hover:after:w-full after:bg-green-500">Home</Link>
                    </li>
                    <li>
                        <Link href="/" className="relative block p-4 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[5px] after:transition-all after:duration-300 hover:after:w-full after:bg-green-500">AboutUs</Link>
                    </li>
                    <li>
                        <Link href="/" className="relative block p-4 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[5px] after:transition-all after:duration-300 hover:after:w-full after:bg-green-500">Products</Link>
                    </li>
                    <li>
                        <Link href="/" className="relative block p-4 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[5px] after:transition-all after:duration-300 hover:after:w-full after:bg-green-500">Services</Link>
                    </li>
                    <li>
                        <Link href="/" className="relative block p-4 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[5px] after:transition-all after:duration-300 hover:after:w-full after:bg-green-500">Contacts</Link>
                    </li>
                </ul>
            }
        </nav>
    );
}