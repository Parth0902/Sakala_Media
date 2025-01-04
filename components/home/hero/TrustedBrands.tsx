"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import samsungLogo from "@/assets/samsung-logo.png";
import googleLogo from "@/assets/google-logo.webp";
import boatLogo from "@/assets/boat-logo.svg";
import lgLogo from "@/assets/lg-logo.png";

const brandLogos = [
  { src: samsungLogo, alt: "Samsung Logo" },
  { src: googleLogo, alt: "Google Logo" },
  { src: boatLogo, alt: "Boat Logo" },
  { src: lgLogo, alt: "LG Logo" },
];

const TrustedBrands = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth / 2);
    }
  }, []);

  useEffect(() => {
    if (width > 0) {
      controls.start({
        x: [-width, 0],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      });
    }
  }, [width, controls]);

  return (
    <div className="bg-white text-black">
      <div className="px-4 lg:px-24 mx-auto container z-50 py-24 flex flex-col items-center justify-center gap-16">
        <h2 className="text-4xl font-bold">Trusted By Industry Leaders</h2>
        <div className="w-full overflow-hidden relative">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          <motion.div ref={carousel} className="flex" animate={controls} style={{ width: `${width * 2}px` }}>
            {[...brandLogos, ...brandLogos].map((logo, index) => (
              <motion.div key={index} className="flex-shrink-0 w-[200px] mx-16 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={80}
                  objectFit="contain"
                  className="pointer-events-none"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBrands;
