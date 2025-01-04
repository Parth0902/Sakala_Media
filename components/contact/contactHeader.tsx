import React from "react";
import Socials from "@/components/footer/Socials";

const ContactHeader = () => {
  return (
    <section className={"px-4 lg:px-24 container mx-auto py-12 text-black space-y-2"}>
      <h3 className="text-gray-500 uppercase tracking-wide mb-2">CONTACT SERVICES</h3>
      <div className={"flex items-center justify-between"}>
        <h1 className={"text-5xl font-bold"}>Get in touch with us. {"We're"} here to assist you.</h1>
        <Socials />
      </div>
      <p className="text-gray-400 line-through text-sm">
        We Are Are Working Towards Offering Support In Your Native Languages And To Get Even Closer To You!
      </p>
    </section>
  );
};

export default ContactHeader;
