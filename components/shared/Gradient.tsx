import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define gradient variants with correct pizza slice shapes for each corner
const gradientVariants = cva("w-full h-full pointer-events-none absolute z-0 block aspect-square", {
  variants: {
    position: {
      topLeft: "top-0 left-0",
      topRight: "top-0 right-0",
      bottomLeft: "bottom-0 left-0",
      bottomRight: "bottom-0 right-0",
      topCenter: "top-0 left-1/2 translate-x-[-50%]",
      bottomCenter: "bottom-0 left-1/2 translate-x-[-50%]",
      leftCenter: "top-1/2 left-0 translate-y-[-50%]",
      rightCenter: "top-1/2 right-0 translate-y-[-50%]",
      center: "left-1/2 bottom-1/2 translate-x-[-50%] translate-y-[50%]",
    },
    size: {
      small: "max-w-40 max-h-40",
      medium: "max-w-60 max-h-60",
      large: "max-w-96 max-h-96",
      full: "w-full h-full",
    },
    variant: {
      primary: "bg-primary",
      secondary: "bg-secondary",
      ghost: "bg-gradient-to-br from-gray-300 to-gray-500 opacity-30",
    },
    blur: {
      small: "blur-[50px]",
      medium: "blur-[100px]",
      large: "blur-[180px]",
    },
    shape: {
      circle: "rounded-full", // Default circular shape
      slice: "", // Dynamic slice shape based on position (defined per position)
    },
  },
  compoundVariants: [
    {
      position: "topLeft",
      shape: "slice",
      class: "clip-path-[polygon(0%_0%,_100%_0%,_0%_100%)]",
    },
    {
      position: "topRight",
      shape: "slice",
      class: "clip-path-[polygon(100%_0%,_100%_100%,_0%_0%)]",
    },
    {
      position: "bottomLeft",
      shape: "slice",
      class: "clip-path-[polygon(0%_100%,_100%_100%,_0%_0%)]",
    },
    {
      position: "bottomRight",
      shape: "slice",
      class: "clip-path-[polygon(100%_100%,_0%_100%,_100%_0%)]",
    },
  ],
  defaultVariants: {
    position: "center",
    variant: "primary",
    size: "medium",
    blur: "large",
    shape: "circle",
  },
});

interface IGradientProps extends VariantProps<typeof gradientVariants> {
  className?: string;
}

// Gradient component with pizza slice shape for corners
const Gradient = ({ position, variant, size, blur, shape, className }: IGradientProps) => {
  return <figure className={cn(gradientVariants({ position, variant, size, blur, shape, className }))}></figure>;
};

export default Gradient;
