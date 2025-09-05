import Image from "next/image";
export default function AboutCard() {
  return(
    <div id="about-2" className="flex flex-col gap-3 items-center w-full md:w-[30%]">
      <div>
        <Image src="/assets/Mahen.PNG" alt="Profile Picture" width={256} height={256} className="rounded-full w-32 h-32 md:w-64 md:h-64 border-4 border-gray-400"/>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-md md:text-xl text-center md:text-left"> 
          Matthew <b><u>Mahen</u></b>dra
        </div>
        <div className="text-sm md:text-md">
          📍 Jakarta, Indonesia
        </div>
        <div className="text-sm md:text-md">
          💼 Consultant | Software Engineer
        </div>
        <div className="text-sm md:text-md">
          🏫 Bandung Institute of Technology
        </div>
        <div className="text-sm md:text-md">
          Sports: 🏊‍♂️, 🏃
        </div>
      </div>
    </div>
  )
}
