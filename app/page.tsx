"use client";
import { useEffect } from "react";

import Hero from "@/components/home/hero/Hero";
import Lenis from "lenis";
import TrustedBrands from "@/components/home/hero/TrustedBrands";
import OurServices from "@/components/home/services/OurServices";
// import FoundersMessage from "@/components/home/FoundersMessage";
import About from "@/components/home/why-us/About";
import ContactUs from "@/components/home/contactUs/ContactUs";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <Hero />
      <OurServices />
      <About />
      {/* <FoundersMessage /> */}
      <TrustedBrands />
      <ContactUs/>
    </div>
  );
}
