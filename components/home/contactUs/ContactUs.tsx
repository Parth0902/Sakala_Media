"use client";
import { useState } from "react";
import Link from "next/link";
import Socials from "@/components/footer/Socials";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/Logo.png";
import socials3d from "@/assets/socials3d.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Gradient from "@/components/shared/Gradient";
import youtube from "@/assets/YouTube.png"
import pintrest from "@/assets/pinterest.svg"
import twitch from "@/assets/twitch.svg"
import netflix from "@/assets/netflix.svg"
import facebook from "@/assets/facebook.png"
import instagram from "@/assets/Instagram.png"


const ContactUs = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };
  return (
    <main className="flex-grow container mx-auto px-4 py-12 relative z-10 ">
       <div className="w-[641px] h-[287px] flex-shrink-0 bg-[#051D72] blur-[150px] absolute z-[-1] left-[-250px]"></div>
      <div className="border rounded-2xl flex  justify-center container contact_us_card flex-col items-center">
        <div className="px-6 py-12 w-full max-w-6xl border-none text-white rounded-3xl flex items-center justify-center flex-col">
            <h2 className="text-[#FFF] text-center contact-us-heading">Build your Business with Us.</h2>
            <p className="text-center text-gray-300 pt-2 pb-8 ">We will email you only about business opportunities.</p>
            <form onSubmit={handleSubmit} className="flex gap-2 w-[70%]">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white  rounded-full py-8 px-10 text-[#989898]"
                required
              />
              <Button type="submit" className="bg-[#3461FF] hover:bg-blue-700 px-10 py-5 text-[20px]">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
           
        </div>
        <div className=" w-full flex justify-between pt-10 px-20 pb-10">
                        <div className="relative conctact_icon_box flex justify-center items-center icon_box_1">
                            <Image src={youtube} alt="icon" className="w-8 h-8"/>
                            <div className="icon_box_1_gradient"></div>
                        </div>
                        <div className="conctact_icon_box flex justify-center items-center icon_box_1">
                            <Image src={pintrest} alt="icon" className="w-8 h-8"/>
                            <div className="icon_box_1_gradient"></div>
                        </div>
                        <div className="conctact_icon_box flex justify-center items-center icon_box_2">
                            <Image src={twitch} alt="icon" className="w-8 h-8"/>
                            <div className="icon_box_2_gradient"></div>
                        </div>
                        <div className="conctact_icon_box flex justify-center items-center icon_box_3">
                            <Image src={netflix} alt="icon" className="w-8 h-8"/>
                            <div className="icon_box_1_gradient"></div>
                        </div>
                        <div className="conctact_icon_box flex justify-center items-center icon_box_4">
                            <Image src={facebook} alt="icon" className="w-8 h-8"/>
                            <div className="icon_box_3_gradient"></div>
                        </div>
                        <div className="conctact_icon_box flex justify-center items-center icon_box_5">
                            <Image src={instagram} alt="icon" className="w-8 h-8"/>
                            <div className="icon_box_4_gradient"></div>
                        </div>
            </div>
      </div>
      
    </main>
  );
};

export default ContactUs;
