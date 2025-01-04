import React from "react";
import Image, { StaticImageData } from "next/image";

interface IconProps {
  img: string | StaticImageData; // Accept both string (URL) and imported image
}

const Icon: React.FC<IconProps> = ({ img }) => {
  return (
    <div className="relative border-4 border-[#1769FF] w-[100px] h-[100px] rounded-3xl bg-white flex justify-center items-center">
        <div className="absolute bottom-[4px] w-[100px] h-[100px] right-[4px] border-4 border-[#1769FF] rounded-3xl bg-white flex justify-center items-center">
                 <Image src={img} alt="image" ></Image>
        </div>
   
    </div>
  );
};

export default Icon;
