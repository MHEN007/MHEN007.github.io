'use client'
import { SocialIcon } from "react-social-icons";
import { useState, useEffect } from "react";
import { randomBytes } from "crypto";

export default function ContactContent() {
  const [secureEmail, setSecureEmail] = useState("");
  
  useEffect(() => {
    const xorKey = 'dQw4w9WgXcQ'.charCodeAt(randomBytes.length % 10);
    const xorEncoded = [75, 65, 90, 90, 72, 67, 88, 114, 75, 65, 72, 67, 76, 68, 93, 65, 126, 71, 75, 65, 73, 78, 114, 69, 79, 75];
    
    const decodeXOR = () => {
      const decoded = xorEncoded.map(char => String.fromCharCode(char ^ xorKey)).join('');
      setSecureEmail(decoded);
    };
    
    // Decode after component mounts with additional delay
    const timer = setTimeout(decodeXOR, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleSecureEmailClick = () => {
    if (secureEmail) {
      window.location.href = `mailto:${secureEmail}`;
    }
  };

  return (
    <div className="flex flex-col p-10">
      <div className="text-lg md:text-2xl w-full border-b-2 border-gray-400 pb-2 mb-5 font-bold">
        Social Media
      </div>
      <p className="mb-6">
        Feel free to reach out to me on any of the platforms below!
      </p>
      
      <div className="flex flex-row justify-center gap-4 mb-8">
        <div className="flex items-center">
          <SocialIcon 
            url="https://www.linkedin.com/in/matthew-mahendra-117845214/" 
            className="!w-10 !h-10" 
            target="_blank" 
          />
        </div>
        <div className="flex items-center">
          <SocialIcon 
            url="https://github.com/MHEN007" 
            className="!w-10 !h-10" 
            target="_blank"
          />
        </div>
        <div className="flex items-center">
          <SocialIcon 
            url="https://www.instagram.com/matt_mahen/" 
            className="!w-10 !h-10" 
            target="_blank"
          />
        </div>
      </div>
      
      <div className="text-lg md:text-2xl w-full border-b-2 border-gray-400 pb-2 mb-5 font-bold">
        Contact Me
      </div>
      
      <div className="space-y-4">

          <button 
            onClick={handleSecureEmailClick}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded w-32 text-center disabled:bg-gray-400 transition-colors"
            disabled={!secureEmail}
          >
            {secureEmail ? "Mail Me" : "Decoding..."}
          </button>

      </div>
    </div>
  );
}