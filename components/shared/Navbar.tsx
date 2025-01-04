"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import skalalogo from "@/assets/Logo.png";
import Link from "next/link";
import Image from "next/image";
import HamburgerMenu from "../mobile/HamburgerMenu";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Our Services", path: "#services" },
  { name: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="z-50 w-full container lg:px-12 px-4 mx-auto py-4">
      <div className="relative flex items-center justify-between">
        <Image src={skalalogo} alt="Skala Media" />
        <div
          className={
            "hidden lg:flex py-1.5 px-2.5 rounded-full border-2 border-[#121212] items-center justify-center gap-12"
          }
        >
          {/* Nav Links */}
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <Button
                className={`font-bold z-10 ${
                  isActive(item.path) ? "text-[#FFF] text-sm font" : "hover:bg-transparent hover:text-white"
                }`}
                variant={isActive(item.path) ? "default" : "ghost"}
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </div>
        <Link href={"https://calendly.com/"}>
          <Button className={"hidden lg:block font-bold"}>Meet Skala</Button>
        </Link>

        <div className="cursor-pointer p-4 rounded-xl lg:hidden">
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  );
}
