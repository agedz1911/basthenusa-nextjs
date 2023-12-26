"use client";

import { LogIn, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import MobileMenu from "./MobileMenu";
import { Links } from "@/config";



const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const pathName = usePathname();

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`py-5 md:px-0 lg:px-0 px-2 sticky top-0 ${
        scroll ? "bg-background shadow-sm z-10" : "bg-transparent text-white"
      }`}
    >
      <div className="flex flex-row items-center justify-between md:px-10 lg:justify-around">
        <Button variant={"link"} onClick={() => window.scrollTo({ top: 0 })}>
          <Image
            src="/logo.png"
            width={50}
            height={50}
            className="w-12 h-auto"
            alt="Logo"
          />
        </Button>

        <div className="flex items-center">
          <div className="lg:flex lg:gap-1 items-center hidden">
            <ul className="lg:flex lg:gap-8 mr-5">
              {Links.map((link, i) => (
                <div key={i}>
                  {pathName === link.href ? (
                    <li>
                      <Link
                        href={link.href}
                        className="font-bold underline text-sm text-secondary"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ) : (
                    <li>
                      <Link
                        href={link.href}
                        className="font-semibold text-sm hover:underline"
                      >
                        {link.name}
                      </Link>
                    </li>
                  )}
                </div>
              ))}
            </ul>
            <Button className="text-sm">
              <UserPlus className="size-4 mr-2" /> Sign up
            </Button>
            <Button className="text-sm">
              <LogIn className="size-4 mr-2" /> Sign in
            </Button>
          </div>
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
