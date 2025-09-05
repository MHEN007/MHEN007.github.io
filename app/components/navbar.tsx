import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex flex-row justify-between items-center p-5 bg-[#f1f1f1] text-gray-800 border-b-2 border-gray-400">
            <div>
                <h1 className="text-lg sm:text-2xl">MHEN007</h1>
            </div>

            <div className="flex flex-row justify-end gap-2 sm:gap-3 text-sm sm:text-lg">
                <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </div>
    )
}