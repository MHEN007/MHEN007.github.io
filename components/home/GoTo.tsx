"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Header } from "./Intro"

export function HeadGoTo() {
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`flex md:hidden flex-row gap-3 items-center justify-center text-center mb-10 ${
        isFixed ? "fixed top-0 left-0 w-full bg-[#f1f1f1] shadow-md py-2" : ""
      }`}
    >
      <div className="border-2 rounded-xl border-gray-400 bg-gray-400 p-1">
        <Link href="#about-2">About</Link>
      </div>
      <div className="border-2 rounded-xl border-gray-400 bg-gray-400 p-1">
        <Link href="#skills">Skills</Link>
      </div>
      <div className="border-2 rounded-xl border-gray-400 bg-gray-400 p-1">
        <Link href="#experiences">Experiences</Link>
      </div>
    </div>
  )
}

export function DefaultGoTo() {
    return (
        <div className="hidden md:flex flex-col gap-3 pl-5 w-[20%]">
            <Header title="Table of Contents" />
            <ul className="list-disc list-inside space-y-2">
                <li>
                    <Link href="#about" className="hover:underline">About</Link>
                </li>
                <li>
                    <Link href="#skills" className="hover:underline">Skills</Link>
                </li>
                <li>
                    <Link href="#experiences" className="hover:underline">Experiences</Link>
                </li>
            </ul>
        </div>
    )
}