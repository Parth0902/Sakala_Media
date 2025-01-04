"use client";
import { useState } from "react";
import Link from "next/link";
import Socials from "@/components/footer/Socials";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/Logo.png";
import socials3d from "@/assets/socials3d.png";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import Gradient from "./Gradient";

const ContactUsForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the email submission
    console.log("Email submitted:", email);
    // Reset the email input
    setEmail("");
  };
  return (
    <main className="z-50 flex-grow container mx-auto px-4 py-12 relative">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      <div className="border rounded-2xl flex items-center justify-center container mx-auto">
        <Card className="px-6 py-12 w-full max-w-6xl bg-[#081320] gap-8 border-none text-white rounded-3xl flex items-center justify-center">
          <CardContent className="p-8">
            <h2 className="text-6xl font-bold text-center mb-2">Stay Tuned &</h2>
            <h2 className="text-6xl font-bold text-center mb-4">Build your Business with Us.</h2>
            <p className="text-center text-gray-300 mb-6">We will email you only about business opportunities.</p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-black rounded-full py-6 px-4"
                required
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
          <Image src={socials3d} alt="Socials" className="hidden lg:flex" />
        </Card>
      </div>
    </main>
  );
};

const Footer = () => {
  return (
    <div className="mt-auto overflow-hidden">
      <ContactUsForm />
      <footer className="-mt-[200px] pt-[200px] bg-black py-12 relative">
        <Gradient
          size={"full"}
          position={"bottomLeft"}
          className="max-w-2xl max-h-2xl -bottom-80 -left-80 blur-[240px]"
        />
        <div className="z-50 container mx-auto px-4 lg:px-24">
          <div className="z-50 grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
            <div className={"space-y-4"}>
              <Image src={logo} alt="Skala Media" width={200} className="z-50" />
              <p className="z-50 text-gray-300">
                Connect with Skala Media to redefine your digital trajectory. Our consultants are ready to propel your
                growth and solidify your position in the market.
              </p>
              <Socials />
            </div>
            <div className="z-50">
              <h3 className="z-50 text-xl font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/#services">Our Services</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="z-50">
              <h3 className="text-xl font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="z-50">
              <h3 className="text-xl font-semibold mb-4">Address</h3>
              <p className="z-50 text-gray-300">
                Company Name: Swirith LLC (Swirith LLC is part of Skala Media),
                <br />
                Ste. 1200, 1309 Coffeen Avenue, Sheridan, WY, Sheridan, US, 82801
              </p>
              <p className="z-50 text-gray-300 mt-4">
                Mailing address: 447 Broadway, 2nd Floor Suite #2366, New York, New York 10013, United States
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 Skala Media. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
