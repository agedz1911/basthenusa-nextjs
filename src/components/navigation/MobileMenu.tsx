import { LogIn, Menu, UserPlus } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import NavMenuMobile from "./NavMenuMobile";
import UserNav from "./UserNav";

const MobileMenu = () => {
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
            <Image
              src="/logo.png"
              width={50}
              height={50}
              className="w-12 h-auto"
              alt="logo"
            />
          </SheetTitle>
        </SheetHeader>
        <Separator className="my-4" />
        <NavMenuMobile />
        <Separator className="my-4" />
        <UserNav className="flex space-y-3 items-start" />
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
