import React from "react";

const ContactInfo = () => {
  return (
      <section className="flex flex-col lg:flex-row px-4 lg:px-28 bg-[#1a1a1a7e] text-white py-20 rounded-3xl mb-16 relative overflow-hidden ">
        <div className="w-[400px] h-[287px] flex-shrink-0 bg-[#093EFCCC] blur-[120px] absolute  left-[-150px] "></div>
        <div className="w-[400px] h-[287px] flex-shrink-0 bg-[#093EFCCC] blur-[150px] absolute  right-[-150px] top-60 "></div>
        <div className="z-20 lg:w-2/5">
            <h3 className=" mb-4 text-[#FFF] lg:text-start font-thin text-center">CONTACT INFO</h3>
            <h4 className="text-2xl lg:text-4xl font-bold mb-10 text-[#FFF] text-center lg:text-start">We Are Always<br />Happy To Assist You.</h4>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-evenly items-center lg:w-3/5 gap-10">
          <div className="flex flex-col items-center lg:items-start z-30">
            <h5 className="font-semibold pb-3 text-center lg:text-start">Contact Number</h5>
            <div className="bg-white w-[27px] h-[3px]"></div>
            <p className="text-base pt-5 mb-4 text-white text-center">(+91) 8860013162</p>
            <p className="text-[16px] leading-normal opacity-80 text-white font-thin text-center lg:text-start">
              Assistance Hours:<br />
              Monday - Friday<br />
              6 AM to 8 AM IST
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-start z-30">
            <h5 className="font-semibold pb-3">Email Address</h5>
            <div className="bg-white w-[27px] h-[3px]"></div>
            <p className="text-base pt-5 mb-4 text-white">support@samfmedia.com</p>
            <p className="text-[16px] leading-normal opacity-80 text-white font-thin">
              Assistance Hours:<br />
              Monday - Friday<br />
              6 AM to 8 AM IST
            </p>
          </div>
        </div>
      </section>
  );
};

export default ContactInfo;
