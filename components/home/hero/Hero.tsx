import React, { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Gradient from "@/components/shared/Gradient";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import instagram from '@/assets/Instagram.png'
import snapChat from '@/assets/snapchat.svg'
import facebook from '@/assets/facebook.png'
import linkdin from '@/assets/LinkedIn.png'
import googleAdds from '@/assets/googleAds.svg'
import tikTok from '@/assets/tikTok.svg'
import bing from '@/assets/bing.svg'
import twitter from '@/assets/x.svg'
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import companyLogo1 from "@/assets/cl1.png"
import companyLogo2 from "@/assets/cl2.png"
import companyLogo3 from "@/assets/cl3.png"
import companyLogo4 from "@/assets/cl4.png"
import gradient from "@/assets/Ellipse.png";
import mobileBg from "@/assets/mobileBg.png"

const brandLogos = [
  { src: companyLogo1, alt: "abcd" },
  { src: companyLogo2, alt: "Google Logo" },
  { src: companyLogo3, alt: "Boat Logo" },
  { src: companyLogo4, alt: "LG Logo" },
];

export default function Hero() {
  const [width, setWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);
    const controls = useAnimationControls();
  
    useEffect(() => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth / 2);
      }
    }, []);
  
    useEffect(() => {
      if (width > 0) {
        controls.start({
          x: [-width, 0],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          },
        });
      }
    }, [width, controls]);

  return (
      <div className="hero_background">
         <div className="lg:absolute right-0 top-0 hidden lg:block">
                  <Image src={gradient} alt="gradient"></Image>
          </div>
         <div className="absolute right-0 top-0  lg:hidden">
                  <Image src={mobileBg} alt="gradient" ></Image>
          </div>
        <Gradient position="bottomLeft" size={"large"} /> 
        <Gradient position="bottomRight" size={"large"} /> 
        <Gradient position="center" size={"large"} /> 
  

        <main className={"w-full flex justify-between mx-auto container z-10 pb-14 lg:pb-40 "}>
          <div className="w-full flex flex-col lg:flex-row justify-center gap-3 pt-16 lg:pt-24 items-center">
            <div className="w-full flex gap-4 lg:gap-7 justify-center  lg:hidden">
                <Icon img={tikTok} />
                <Icon img={instagram} />
                <Icon img={facebook} />
                <Icon img={bing} />
                <Icon img={twitter} />
                <Icon img={linkdin} />
                <Icon img={snapChat} />
            </div>

            <div className="hidden lg:flex flex-col gap-7">
              <Icon img={instagram} />
              <div className="relative right-20 flex flex-col gap-10">
                <Icon img={facebook} />
                <Icon img={googleAdds} />
              </div>
              <Icon img={bing} />
            </div>


            <div className={"z-49 flex flex-col gap-4 text-center pt-12 lg:pt-24 justify-center items-center "}>
              <h1 className={"z-50 text-5xl lg:text-7xl font-bold flex flex-col"}>
                <p>
                  We <span className={"text-primary-light italic"}>Consult</span> and
                </p>
                <p>
                  <span className={"text-primary-light italic"}>Scale </span>Companies
                </p>
              </h1>
              <p className={"z-50 text-white text-base text-center w-[348px] lg:w-[680px] pb-5"}>
              We help brands achieve exponential growth through data-driven marketing, strategic consulting, and impactful digital solutions. Whether {"you're"} looking to scale your ad performance, build a powerful online presence, or optimise your customer journey—we make it happen.
              </p>
              <Link href={"https://calendly.com/"} className="z-50">
                <Button
                  className={"self-center bg-[#3461FF] text-white transition duration-300 ease-in-out transform hover:scale-105"}
                  size={"lg"}
                >
                  Book a Discovery Call - {"It's"} Free{" "}
                  <span className="ml-2">
                    <ArrowUpRight size={20} />
                  </span>
                </Button>
              </Link>
            </div>

            <div className="hidden lg:flex flex-col gap-7">
              <Icon img={tikTok} />
              <div className="relative left-20 flex flex-col gap-10">
                <Icon img={linkdin} />
                <Icon img={snapChat} />
              </div>
              <Icon img={twitter} />
            </div>
          </div>  
        </main>
        
        <div className="flex items-center overflow-hidden h-[200px] lg:h-[290px] relative">
            <div className=" bg-[rgba(52,97,255,0.2)] h-[136px] rotate-2 w-full absolute">
            
            </div>
                <div className=" bg-[#3461FF] h-[136px] reverse_rotate mt-5 flex items-center overflow-hidden ">
                  <motion.div ref={carousel} className="flex" animate={controls} style={{ width: `${width * 2}px` }}>
                      {[...brandLogos, ...brandLogos].map((logo, index) => (
                        <motion.div key={index} className="flex-shrink-0 w-[200px] mx-16 flex items-center justify-center">
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={100}
                            height={40}
                            objectFit="contain"
                            className="pointer-events-none"
                          />
                        </motion.div>
                      ))}
                  </motion.div>
               
              </div>
        </div>


          

   
      </div>
  );
}
