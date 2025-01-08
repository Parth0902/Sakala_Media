"use client";
import Link from "next/link";
import Socials from "@/components/footer/Socials";
import Image from "next/image";
import logo from "@/assets/Logo.png";
import Gradient from "./Gradient";


const Footer = () => {
  return (
    <div className="mt-auto overflow-hidden z-0">
      <footer className=" pt-[200px] bg-[#020103] py-12 relative">
        <Gradient
          size={"large"}
          position={"bottomCenter"}
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
              <h3 className="z-50 text-xl font-semibold mb-4 text-start">Company</h3>
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
              <h3 className="text-xl font-semibold mb-4 text-start">Legal</h3>
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
              <h3 className="text-xl font-semibold mb-4 text-start">Address</h3>
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
