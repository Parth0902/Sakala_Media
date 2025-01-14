import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to your backend
  };
  return (
    <section className={"container mx-auto px-4 lg:px-24 flex flex-col items-center justify-center lg:pt-16 relative"}>
      <div className="w-[600px] h-[217px] top-[8.5rem] flex-shrink-0 bg-[#093EFCCC] blur-[120px] absolute  left-[-350px] z-[-1] "></div>
      <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-white">Fill The Form To Write To Us</h2>
      <p className="text-white  text-center text-[14px] lg:text-base pt-4 leading-7">
        Over The <span className="italic text-[#3461FF]"> Lasy 4 years</span>, Skala Has Thrived, Delivering Exceptional Results For Over <span className="italic text-[#3461FF]">3,000 Clients</span>. 
      </p>
      <p className="text-white mb-10  text-center text-[14px] lg:text-base pt-4 leading-7">
        Our Commitment To Innovation And Excellence Has Solidified Our Reputation As A Trusted Partner In Their Success.
      </p>
      <form onSubmit={handleSubmit} className="z-50 relative w-full bg-[#1a1a1a7e] p-12 rounded-3xl lg:py-20 lg:px-14 overflow-hidden ">
        {/* <Gradient position="center" size={"large"} /> */}
        <div className="w-[648.788px] h-[442.831px] flex-shrink-0 bg-[#3461FF] blur-[200px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]"></div>
        <div className="z-50 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <label htmlFor="" className="text-[24px] text-white font-medium">Your Name</label>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-white rounded-full p-6 text-black"
              />
          </div>

          <div className="flex flex-col gap-4">
            <label htmlFor="" className="text-[24px] text-white font-medium">Email</label>
              <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-white rounded-full p-6 text-black"
            />
          </div>

          <div className="flex flex-col gap-4">
            <label htmlFor="" className="text-[24px] text-white font-medium">Phone</label>
                <Input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="bg-white rounded-full p-6 text-black"
            />
          </div>
      
          <div className="flex flex-col gap-4">
            <label htmlFor="" className="text-[24px] text-white font-medium">Company</label>
              <Input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleInputChange}
              className="bg-white rounded-full p-6 text-black"
            />
          </div>

       
      
        </div>
        <div className="flex flex-col gap-4 mt-12">
            <label htmlFor="" className="text-[24px] text-white font-medium">Drop us a Message</label>
            <Textarea
              name="message"
              placeholder="Drop us a Message"
              value={formData.message}
              onChange={handleInputChange}
              className=" bg-white rounded-3xl p-6 text-black"
              rows={6}
            />
          </div>

          <div className="w-full flex justify-center
          ">
            <Button type="submit" className=" mt-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-3 text-lg">
              Get in Touch
            </Button>
          </div>
        
      </form>
    </section>
  );
};

export default ContactForm;
