import React from "react";
import { Button } from "@/components/ui/button";
import Gradient from "@/components/shared/Gradient";
import PersonInfoCard from "@/components/home/hero/PersonInfoCard";
import { TrendingUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import instagram from '@/assets/Instagram.png'
import behance from '@/assets/Behance.svg'
import dribble from '@/assets/Dribbble.png'
import facebook from '@/assets/facebook.png'
import linkdin from '@/assets/LinkedIn.png'
import vector from '@/assets/Vector.png'
import youtube from '@/assets/YouTube.png'
import twitter from '@/assets/Twitter.png'
import Image from "next/image";
import left from "@/assets/left.png"
import right from "@/assets/right.png"
import mid from "@/assets/mid.png"

export default function Hero() {
  return (
      <div className=" hero_background">
        <div className="absolute w-full top-0 flex justify-center">
          <Image src={mid} alt="gradient"></Image>
        </div>
        <div className="absolute left-0 bottom-0">
          <Image src={left} alt="gradient"></Image>
        </div>
        <div className="absolute right-0 bottom-0">
          <Image src={right} alt="gradient"></Image>
        </div>

        <main className={"w-full flex justify-between mx-auto container z-10 pb-52 "}>
          <div className="w-full flex justify-center gap-3 pt-24">
            <div className="flex flex-col gap-7">
              <Icon img={instagram} />

              <div className="relative right-20 flex flex-col gap-10">
                <Icon img={facebook} />
                <Icon img={vector} />
              </div>
              <Icon img={youtube} />
            </div>


            <div className={"z-49 flex flex-col gap-4 text-center pt-24"}>
              <h1 className={"z-50 text-7xl font-bold flex flex-col"}>
                <p>
                  We <span className={"text-primary-light italic"}>Consult</span> and
                </p>
                <p>
                  <span className={"text-primary-light italic"}>Scale </span>Companies
                </p>
              </h1>
              <p className={"z-50 text-white w-[680px]"}>
                Unlock your {"brand's"} true potential with our seamless blend of cutting-edge marketing strategies and
                innovative tech solutions. Elevate your business to new heights through our integrated approach, driving
                growth and excellence.
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

            <div className="flex flex-col gap-7">
              <Icon img={behance} />
              <div className="relative left-20 flex flex-col gap-10">
                <Icon img={linkdin} />
                <Icon img={dribble} />
              </div>
              <Icon img={twitter} />
            </div>
          </div>  
        </main>
          <div className=" bg-[rgba(52,97,255,0.2)] h-[140px] rotate-2">
            

          </div>

   
      </div>
  );
}
