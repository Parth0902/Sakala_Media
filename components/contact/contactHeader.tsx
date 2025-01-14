import React from "react";
import Socials from "@/components/footer/Socials";

const ContactHeader = () => {
  return (
    <section className={"px-4 lg:py-12 pb-12 text-black space-y-2 relative"}>
        <div className="w-[600px] h-[217px] top-[8.5rem] flex-shrink-0 bg-[#093EFCCC] blur-[120px] absolute  left-[-350px] z-[-1] "></div>
        <div className="w-[307px] h-[217px] flex-shrink-0 bg-[#093EFCCC] blur-[120px] absolute  right-[-150px] z-[-1] bottom-[-26rem] "></div>
      <h3 className="text-center text-[12px] mb-2 lg:text-start text-[#FFF] lg:text-[20px] z-10">CONTACT SERVICES</h3>
       <div className="relative flex items-center gap-2 lg:items-start lg:gap-0 flex-col ">
            <h1 className={"text-2xl lg:text-6xl font-bold text-[#FFF] lg:text-start"}>Get in touch with us.</h1>
            <h1 className={"text-2xl lg:text-6xl font-bold text-[#FFF] lg:text-start pb-3"}>{"We're"} here to assist you.</h1>
            <Socials />
       </div>
    
      <p className="text-[#FFF] text-sm pt-5 text-center lg:text-start">
        We Are Working Towards Offering Support In Your Native Languages And To Get Even Closer To You!
      </p>
    </section>
  );
};

export default ContactHeader;
