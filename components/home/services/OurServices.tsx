import React from "react";
import "./OurServices.css";
import ServiceCard, { ServiceCardProps } from "./ServiceCard";
import left from "@/assets/sec2_b_l.svg"
import right from "@/assets/sec2_b_r.svg"
import topright from "@/assets/sec2_t_r.svg"
import Image from "next/image";
import Gradient from "@/components/shared/Gradient";
const HeaderSection: React.FC = () => {
  return (
    <section className="text-center pb-24">
      <h1 className="z-10 self-center mt-10 text-7xl font-bold text-white leading-[75px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
        Your Partners in Marketing &<br />
        Web Technology Solutions
      </h1>
      <p className="z-10 self-center mt-10 text-base leading-7 text-white max-md:max-w-full">
        At Skala Media, we synergize cutting-edge technology with dynamic marketing strategies to elevate your brand in
        the digital domain. Our dual expertise in web tech innovation and tailored marketing solutions is designed to
        offer you a competitive edge.
      </p>
    </section>
  );
};

const services: ServiceCardProps[] = [
  {
    number: "01",
    title: "Tailored Digital Platforms",
    description:
      "From bespoke websites that embody your brand ethos to innovative applications, our custom solutions are meticulously architected to ensure they meet your business needs while providing an exceptional user experience.",
    bgColor: "blue",
  },
  {
    number: "02",
    title: "Data-Driven Design & Development",
    description:
      "We infuse data intelligence and human-centered design principles to create intuitive interfaces that not only captivate but convert, driving your digital success.",
    bgColor: "black",
  },
  {
    number: "03",
    title: "Precision-Targeted Advertising",
    description:
      "Harness the power of data with our specialized approach to Facebook and Google Ads marketing, ensuring your message reaches and resonates with your desired audience.",
    bgColor: "black",
  },
  {
    number: "04",
    title: "Programmatic Buying & Social Engagement",
    description:
      "Advance your advertising efficiency with our expert programmatic media buying and engage customers through compelling social media strategies that amplify your brand's presence.",
    bgColor: "blue",
  },
];

const OurServices: React.FC = () => {
  return (
    <main className="flex flex-col items-center px-24 pt-48 main-container relative pb-40">
      <Gradient position="bottomLeft" size={"large"} /> 
      <Gradient position="bottomRight" size={"large"} /> 
      <Gradient position="topRight" size={"large"} /> 
      
       <h4 className="text-center text-[#B4B4B4]  text-lg">OUR SERVICES</h4>
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
