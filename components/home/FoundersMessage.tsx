import Image from "next/image";
import founderImage from "@/assets/founder.png";
import Gradient from "../shared/Gradient";

export default function FoundersMessage() {
  return (
    <div className="w-full relative">
         <Gradient position="topRight" size={"large"} /> 
      {/* Founder Message Section */}
      <section className="justify-center lg:px-24 flex flex-col items-center lg:flex-row lg:justify-center lg:gap-32 ">
        <div className=" max-w-md mx-auto lg:mx-0 w-[381px] h-[508px] lg:w-[400px] lg:h-[600px] bg-[#000] border-2 border-[#6B8BFF] rounded-2xl relative">
           <div className="absolute bg-[#6B8BFF] blur-[30px] w-[381px] h-[260px] rounded-2xl"></div>
          <Image src={founderImage} alt="Founder"  className="rounded-2xl object-cover w-[381px] h-[508px] lg:w-[400px] lg:h-[600px] relative right-2 top-2" />
        </div>
        <div className="w-full lg:max-w-3xl lg:w-2/3 space-y-6 text-center px-2 relative overflow-hidden py-10 lg:pb-24">
        <div className="w-[240px] h-[270px] top-[3.5rem] flex-shrink-0 bg-[#093EFCCC] blur-[130px] absolute  left-[250px] z-[-1] lg:hidden "></div>
          <div className="space-y-2">
            <h2 className="text-[26px] text-[#FFF] lg:text-5xl font-bold">A Message From Our Founder</h2>
            <h3 className="text-[26px] lg:text-4xl font-semibold text-[#6B8BFF] underline lg:pt-2 italic">Swarith Alapati</h3>
          </div>
        
            <p className="text-[12px] text-white lg:text-2xl leading-7">
              {
                "Welcome To Skala – Where Your Digital Journey Reaches New Heights. As Founder, I Bring A Wealth Of Experience To Lead Our Dynamic Team In Boosting Your Business's Online Impact. We Specialize In Savvy Online Advertising, From Google Ads To Social Media Engagement, Ensuring Your Brand Stands Out. "
              }
            </p>
            <p className="text-[12px] text-white lg:text-2xl leading-7">
              {
                "But We Don't Stop At Marketing. Our Tech Expertise Delivers Custom Web Solutions And Engaging Apps, All Powered By Smart Data Insights For Strategic Growth."
              }
            </p>
            <p className="text-[12px] text-white lg:text-2xl leading-7">Join Us At <span className="font-bold italic">Skala</span> , Your Ally In Crafting A Standout Digital Legacy.</p>
       
        </div>
      </section>
    </div>
  );
}
