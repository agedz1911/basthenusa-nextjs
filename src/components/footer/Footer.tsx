import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import CustomContainer from "../CustomContainer";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Link from "next/link";
import ButtonNs from "../ButtonNs";

interface linkProps {
  name: string;
  href: string;
}

const Links: linkProps[] = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Destination", href: "#destination" },
  { name: "Reservation", href: "#reservation" },
  { name: "Terms & Condition", href: "#termscondition" },
];

const Footer = () => {
  return (
    <footer className="py-20 px-5 bg-gradient-to-t from-primary to-sky-900">
      <CustomContainer className="flex flex-col lg:flex-row lg:justify-between lg:items-start lg:px-0 md:flex-row md:justify-around md:items-start space-y-1 items-center gap-5 pb-10">
        <div className="space-y-6 items-center flex flex-col md:items-start md:w-1/3">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="logo"
              width={50}
              height={50}
              className="w-12 h-auto"
            />
            <h1 className="text-muted font-semibold text-sm">
              PT. Bahari Anja Sejahtera
            </h1>
          </div>
          <p className="text-sm text-muted text-center md:text-start">
            Komplek Perkantoran Duta Merlin blok C35-38 Jl. Gajah Mada 3-5,
            Jakarta 10130{" "}
          </p>
          <div className="flex gap-3">
            <Button variant={"link"} size={"icon"}>
              <Facebook className="w-5 text-muted" />
            </Button>
            <Button variant={"link"} size={"icon"}>
              <Instagram className="w-5 text-muted" />
            </Button>
            <Button variant={"link"} size={"icon"}>
              <Youtube className="text-muted" />
            </Button>
          </div>
        </div>
        <div className="text-center space-y-3">
          <h1 className="text-muted text-lg font-semibold">Useful Links</h1>
          <ul className="space-y-2 text-muted">
            {Links.map((link, i) => (
              <div key={i}>
                <li className="hover:underline">
                  <Link href={link.href}>{link.name}</Link>
                </li>
              </div>
            ))}
          </ul>
        </div>
        <div className="text-center space-y-3">
          <h1 className="text-muted text-lg font-semibold">Help</h1>
          <div className="text-muted space-y-2">
            <p className="hover:cursor-pointer hover:underline">FAQ</p>
            <p className="hover:cursor-pointer hover:underline">Contact</p>
            <p className="hover:cursor-pointer hover:underline">Feedback</p>
          </div>
        </div>
        <div className="flex-col flex items-center justify-center space-y-3">
          <h1 className="text-muted text-lg font-semibold">Contact Us</h1>
          <ButtonNs
            label="Chat for"
            desc="Book a Tour"
            icon={
              <Image
                src="/images/whatsapp.svg"
                alt="wa"
                width={20}
                height={20}
              />
            }
          />
          <ButtonNs
            label="Chat for"
            desc="Ask a Question"
            icon={
              <Image
                src="/images/whatsapp.svg"
                alt="wa"
                width={20}
                height={20}
              />
            }
          />
        </div>
      </CustomContainer>
      <div className="flex flex-col items-center justify-center py-2 px-2 gap-5">
        <Separator />
        <p className="text-muted text-sm">
          {" "}
          {`Copyright © ${new Date().getFullYear()} BAS. All Rights Reserved.`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
