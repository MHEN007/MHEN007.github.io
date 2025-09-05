export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="w-full bg-[#f1f1f1] text-gray-800 border-t-2 border-gray-400 p-5 flex justify-center items-center">
            <div className="text-sm">
                Copyright &copy; 2025{year === 2025 ? "" : `-${year}`} Matthew Mahendra
            </div>
        </div>
    )
}