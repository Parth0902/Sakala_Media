"use client";
import { useState, useEffect } from "react";

const easeOutQuad = (t: number) => t * (2 - t);

const useNumberAnimation = (endValue: number, duration: number = 2000, shouldAnimate: boolean = false) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;
      const easedProgress = easeOutQuad(Math.min(progress, 1));

      const currentValue = Math.round(easedProgress * endValue);

      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [endValue, duration, shouldAnimate]);

  return displayValue;
};

export default useNumberAnimation;
