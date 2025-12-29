'use client'
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

    const [sidebarOpen, setSidebarOpen] = useState(false)
    
    return (
        <div className="flex flex-row justify-between items-center p-5 bg-[#f1f1f1] text-gray-800 border-b-2 border-gray-400">
            <div>
                <h1 className="text-lg sm:text-2xl">MHEN007</h1>
            </div>

            <div className="hidden md:flex flex-row justify-end gap-2 sm:gap-3 text-sm sm:text-lg">
                <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
            </div>

            {/* Burger */}
            <div className="flex md:hidden">
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="flex flex-col justify-center items-center w-8 h-8"
                    aria-label="Open menu"
                >
                    <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
                    <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
                    <span className="block w-6 h-0.5 bg-gray-800"></span>
                </button>
                {sidebarOpen && (
                    <div className="fixed inset-0 z-40">
                        <div
                            className="absolute inset-0 bg-black opacity-40"
                            onClick={() => setSidebarOpen(false)}
                        ></div>
                        <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 flex flex-col p-6">
                            <button
                                className="self-end mb-6"
                                onClick={() => setSidebarOpen(false)}
                                aria-label="Close menu"
                            >
                                <span className="text-2xl">&times;</span>
                            </button>
                            <Link href="/" className="mb-4" onClick={() => setSidebarOpen(false)}>Home</Link>
                            <Link href="/projects" className="mb-4" onClick={() => setSidebarOpen(false)}>Projects</Link>
                            <Link href="/contact" className="mb-4" onClick={() => setSidebarOpen(false)}>Contact</Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}