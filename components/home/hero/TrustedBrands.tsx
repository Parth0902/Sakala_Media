"use client";

import React, { useRef, useEffect} from "react";
import { motion, useAnimationControls } from "framer-motion";
import Gradient from "@/components/shared/Gradient";

const testimonials = [
  {
    name: "Mr. John Doe",
    title: "X-Y-Z Store Owner",
    content:
      "Duis tempor mauris at ex dapibus, nec scelerisque dolor faucibus. Praesent vel turpis in erat gravida scelerisque. Aenean id lectus nec nisi aliquam finibus eget id metus.",
  },
  {
    name: "Mrs. Martha Steen",
    title: "X-Y-Z Store Owner",
    content:
      "Duis tempor mauris at ex dapibus, nec scelerisque dolor faucibus. Praesent vel turpis in erat gravida scelerisque. Aenean id lectus nec nisi aliquam finibus eget id metus.",
  },
  {
    name: "Dr. David Fernand",
    title: "X-Y-Z Store Owner",
    content:
      "Duis tempor mauris at ex dapibus, nec scelerisque dolor faucibus. Praesent vel turpis in erat gravida scelerisque. Aenean id lectus nec nisi aliquam finibus eget id metus.",
  },
  {
    name: "Dr. David Fernand",
    title: "X-Y-Z Store Owner",
    content:
      "Duis tempor mauris at ex dapibus, nec scelerisque dolor faucibus. Praesent vel turpis in erat gravida scelerisque. Aenean id lectus nec nisi aliquam finibus eget id metus.",
  },
  {
    name: "Dr. David Fernand",
    title: "X-Y-Z Store Owner",
    content:
      "Duis tempor mauris at ex dapibus, nec scelerisque dolor faucibus. Praesent vel turpis in erat gravida scelerisque. Aenean id lectus nec nisi aliquam finibus eget id metus.",
  },
];

const TrustedBrands = () => {
  const carousel = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const cardWidth = 420; // Fixed width for cards
  const gap = 40; // Gap between cards
  const totalWidth = (cardWidth + gap) * testimonials.length;

  useEffect(() => {
    controls.start({
      x: [-totalWidth, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
      },
    });
  }, [totalWidth, controls]);

  return (
    <div className="relative overflow-hidden lg:overflow-visible z-0 lg:pb-20">
          <Gradient position="bottomLeft" size={"large"} /> 
          <Gradient position="bottomRight" size={"large"} /> 
          <div className="lg:hidden w-[641px] h-[350px] flex-shrink-0 bg-[#051D72] blur-[100px] absolute z-[-1] left-[130px] top-[20%] rounded-full lg:top-[450px]"></div>

      {/* <div className="w-full z-50 py-24 flex flex-col items-center justify-center">
      <h4 className="text-center text-[#CCD6E0]  text-lg pb-4">TESTIMONIALS</h4>
        <h2 className="hidden lg:block text-[28px] lg:text-6xl font-bold text-white">
          Here’s what Our Clients Have To Say
        </h2>
        <h2 className="lg:hidden text-[28px] lg:text-6xl font-bold text-white">
             Here’s what 
        </h2>
        <h2 className="lg:hidden text-[28px] lg:text-6xl font-bold text-white">
             Our Clients Have To Say
        </h2>
        <p className="text-base text-white text-center py-8 lg:w-9/12 leading-7 px-3">
          At Skala, our clients are at the heart of everything we do. We believe
          in building strong, lasting partnerships by delivering personalized
          solutions that truly meet their needs. Your success is our success,
          and we’re committed to going above and beyond to ensure your goals
          are not just met, but exceeded.
        </p>
        <div className="w-full overflow-hidden relative flex">
          <motion.div
            ref={carousel}
            className="flex gap-[40px]"
            animate={controls}
            style={{ width: "max-content" }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                className="rounded-[24px] border border-white bg-[rgba(21,21,21,0.4)] backdrop-blur-[15px] p-[25px] w-[420px] py-[40px]"
              >
                <div className="flex gap-3">
                  <div className="h-12 w-12 bg-white rounded-full"></div>
                  <div>
                    <h4 className="text-white text-base font-bold text-start">
                      {testimonial.name}
                    </h4>
                    <p className="text-white text-xs font-medium text-start">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
                <p className="pt-4 text-white">{testimonial.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div> */}
    </div>
  );
};

export default TrustedBrands;
