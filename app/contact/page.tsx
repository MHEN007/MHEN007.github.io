'use client'

import { SocialIcon } from "react-social-icons";

export default function ContactContent(){
    return (
        <div className="flex flex-col p-10">

            <div className="text-lg md:text-2xl w-full border-b-2 border-gray-400 pb-2 mb-5 font-bold">
                Contact Me
            </div>
            
            <p> 
            If you would like to contact me, feel free to reach out on these platforms
            </p>

            <div className="flex flex-col justify-center">
                <div className="flex items-center">
                    <SocialIcon url="https://www.linkedin.com/in/matthew-mahendra-117845214/" className="!w-10 !h-10 mr-2" target="_blank" />
                    LinkedIn &nbsp;
                </div>
                <div className="flex items-center">
                    <SocialIcon url="https://github.com/MHEN007" className="!w-10 !h-10 mr-2" target="_blank"/>
                    GitHub &nbsp;
                </div>
                <div className="flex items-center">
                    <SocialIcon url="https://www.instagram.com/matt_mahen/" className="!w-10 !h-10 mr-2" target="_blank"/>
                    Instagram &nbsp;
                </div>
            </div>

        </div>
    )
}