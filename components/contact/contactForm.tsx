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
    <section className={"container mx-auto px-4 lg:px-24 flex flex-col items-center justify-center"}>
      <h2 className="text-4xl font-bold mb-4 text-black">Fill The Form To Write To Us</h2>
      <p className="text-gray-600 mb-10 max-w-3xl text-center">
        Over The Last 4 Years, Skala Has Thrived, Delivering Exceptional Results For Over 3,000 Clients. Our Commitment
        To Innovation And Excellence Has Solidified Our Reputation As A Trusted Partner In Their Success.
      </p>
      <form onSubmit={handleSubmit} className="z-50 relative w-full bg-black p-12 rounded-3xl">
        {/* <Gradient position="center" size={"large"} /> */}
        <div className="z-50 grid grid-cols-1 md:grid-cols-2 gap-12">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            className="bg-white rounded-full p-6 text-black"
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="bg-white rounded-full p-6 text-black"
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="bg-white rounded-full p-6 text-black"
          />
          <Input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleInputChange}
            className="bg-white rounded-full p-6 text-black"
          />
        </div>
        <Textarea
          name="message"
          placeholder="Drop us a Message"
          value={formData.message}
          onChange={handleInputChange}
          className="mt-12 bg-white rounded-3xl p-6 text-black"
          rows={6}
        />
        <Button type="submit" className="mt-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-3 text-lg">
          Get in Touch
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
