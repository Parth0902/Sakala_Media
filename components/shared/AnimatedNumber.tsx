"use client";
import React, { useState, useEffect, useRef } from "react";
import useNumberAnimation from "@/hooks/useNumberAnimation";

const AnimatedNumber: React.FC<{ number: number }> = ({ number }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const displayValue = useNumberAnimation(number, 2000, shouldAnimate);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        const isCenter = entry.intersectionRatio >= 0.75; // Trigger when 75% or more is visible
        setShouldAnimate(isVisible && isCenter);
      },
      {
        root: null, // Observe in the viewport
        threshold: [0.75], // Trigger when 75% is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className="animated-number">
      <p className="plus">{displayValue}</p>
    </div>
  );
};

export default AnimatedNumber;
