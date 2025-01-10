import React from "react";
import Image, { StaticImageData } from "next/image";

interface IconProps {
  img: string | StaticImageData; // Accept both string (URL) and imported image
}

const Icon: React.FC<IconProps> = ({ img }) => {
  return (
    <div className="relative border-2 lg:border-4 border-[#1769FF] w-[42.095px] h-[42.095px] lg:w-[100px] lg:h-[100px] rounded-lg lg:rounded-3xl bg-white flex justify-center items-center">
        <div className="absolute right-[1px] bottom-[1px] lg:w-[100px] w-[42.095px] h-[42.095px]  lg:h-[100px] lg:bottom-[4px] lg:right-[4px] border-2 rounded-lg lg:border-4 border-[#1769FF] lg:rounded-3xl bg-white flex justify-center items-center">
                 <Image src={img} alt="image" className="w-[22px] h-[22px] lg:h-[60px] lg:w-[60px]"></Image>
        </div>
   
    </div>
  );
};

export default Icon;
