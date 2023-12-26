"use client";

import { Links } from "@/config";
import { LogIn, Menu, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";


const MobileMenu = () => {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant={"ghost"}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>
            <Image src="/logo.png" width={50} height={50} className="w-12 h-auto" alt="logo" />
          </SheetTitle>
        </SheetHeader>
        <Separator className="my-4" />
        <div className="py-2 px-1">
          <ul className="flex flex-col gap-2">
            {Links.map((link, i) => (
              <div key={i}>
                {pathName === link.href ? (
                  <li>
                    <Link
                      href={link.href}
                      className="font-semibold underline text-sm text-secondary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link
                      href={link.href}
                      className="font-normal text-gray-500 text-sm hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                )}
              </div>
            ))}
          </ul>
        </div>
        <Separator className="my-4" />
        <div className="w-full mt-3 gap-2 flex flex-col">
          <Button className="text-sm">
            <UserPlus className="size-4 mr-2" /> Sign up
          </Button>
          <Button className="text-sm">
            <LogIn className="size-4 mr-2" /> Sign in
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
