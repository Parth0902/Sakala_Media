"use client";
import { useState, useEffect } from "react";

const useNumberAnimation = (endValue: number, duration: number = 2000) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const updateNumber = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < duration) {
        const randomValue = Math.floor(Math.random() * endValue);
        setDisplayValue(randomValue);
        animationFrame = requestAnimationFrame(updateNumber);
      } else {
        setDisplayValue(endValue);
      }
    };

    animationFrame = requestAnimationFrame(updateNumber);

    return () => cancelAnimationFrame(animationFrame);
  }, [endValue, duration]);

  return displayValue;
};

export default useNumberAnimation;
