import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const socials = [
  {
    name: "facebook",
    icon: <Facebook className={"w-4 h-4"} />,
    link: "https://www.facebook.com",
  },
  {
    name: "instagram",
    icon: <Instagram className={"w-4 h-4"} />,
    link: "https://www.instagram.com",
  },
  {
    name: "linkedIn",
    icon: <Linkedin className={"w-4 h-4"} />,
    link: "https://www.linkedin.com",
  },
  {
    name: "twitter",
    icon: <Twitter className={"w-4 h-4"} />,
    link: "https://www.x.com",
  },
];

export default function Socials() {
  return (
    <div className="flex space-x-4 lg:absolute lg:top-14 lg:right-10">
      {socials.map((socialMedia) => {
        return (
          <Link href={socialMedia.link} key={socialMedia.name}>
            <Button size="icon" className="bg-primary text-white rounded-full">
              {socialMedia.icon}
            </Button>
          </Link>
        );
      })}
    </div>
  );
}
