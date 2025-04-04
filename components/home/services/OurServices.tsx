import React from "react";
import "./OurServices.css";
import ServiceCard, { ServiceCardProps } from "./ServiceCard";
import Gradient from "@/components/shared/Gradient";
const HeaderSection: React.FC = () => {
  return (
    <section className="text-center pb-8 " id="services">
      <h1 className="z-10 self-center mt-10 text-7xl lg:font-bold font-medium text-white leading-[75px] max-md:max-w-full max-md:text-3xl max-md:leading-[49px]">
          Turning Clicks Into Customers,<br /> 
          Brands Into Market Leaders
      </h1>
      <p className="z-10 self-center mt-10 text-base leading-7 text-white max-md:max-w-full">
        Your brand deserves more than generic marketing. Our custom strategies are built to maximize ROI, optimize every touchpoint, and deliver sustainable growth.
      </p>
    </section>
  );
};

const services: ServiceCardProps[] = [
  {
    number: "01",
    title: "Performance Marketing",
    description:
      "We are a performance-focused media buying agency helping brands scale profitably across Meta, TikTok, Google, Snapchat, Bing, and more. We specialize in high-growth sectors like e-commerce, dropshipping, and affiliate marketing, delivering strategic ad buying that maximizes ROI.",
    bgColor: "blue",
  },
  {
    number: "02",
    title: "Email Marketing",
    description:
      "We infuse AI data intelligence and human-centered design principles to create intuitive email campaigns. Our high-converting automation strategies drive 30-40% more revenue, boost retention, and maximize customer lifetime value.",
    bgColor: "black",
  },
  {
    number: "03",
    title: "Search Engine Optimization",
    description:
      "We optimize your website, increase search rankings, and drive high-intent organic traffic that converts. Get found where it matters.",
    bgColor: "black",
  },
  {
    number: "04",
    title: "User-Generated Content",
    description:
      "Today’s consumers trust real people, not just ads. We create authentic, high-performing UGC content that builds trust and skyrockets your conversions.",
    bgColor: "blue",
  },
];

const OurServices: React.FC = () => {
  return (
    <main className="flex flex-col items-center px-5 lg:px-24 pt-24 lg:pt-48 main-container relative  lg:pb-40 z-10">
      <Gradient position="bottomLeft" size={"large"} /> 
      <Gradient position="bottomRight" size={"large"} /> 
      <Gradient position="topRight" size={"large"} /> 
      <div className="w-[600px] h-[217px] top-[8.5rem] flex-shrink-0 bg-[#093EFCCC] blur-[120px] absolute  left-[-350px] z-[-1] lg:hidden "></div>

      
       <h4 className="text-center text-[#CCD6E0]  text-lg">OUR SERVICES</h4>
      <HeaderSection />
      <section className="mt-3 w-full max-md:max-w-full ">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <ServiceCard {...services[0]} />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <ServiceCard {...services[1]} />
          </div>
        </div>
      </section>

      <section className="mt-6 w-full max-md:max-w-full ">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
            <ServiceCard {...services[2]} />
          </div>
          <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
            <ServiceCard {...services[3]} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurServices;
