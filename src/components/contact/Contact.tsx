import { Mail, MapPinned, Phone } from "lucide-react";
import Link from "next/link";
import CustomContainer from "../CustomContainer";
import SendMessage from "./SendMessage";

const Contact = () => {
  return (
    <section id="contact" className="w-full pt-5 pb-20 mb-5 bg-amber-50/50">
      <CustomContainer className="flex flex-col items-center">
        <h1 className="mb-5 mt-14 text-3xl lg:text-4xl font-semibold underline">
          Get In Touch
        </h1>
        <p className="text-muted-foreground mb-10 font-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, quia.
        </p>
        <div className="lg:w-full flex flex-col items-center lg:px-5 lg:items-start lg:flex-row lg:justify-between">
          <div className="w-3/4 lg:w-1/3 py-4 px-4 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <MapPinned className="text-sky-900" />
                <p className="font-semibold text-sky-900">Office</p>
              </div>
              <p className="text-center lg:text-start text-sm text-muted-foreground">
                Komplek Perkantoran Duta Merlin blok C35-38 Jl. Gajah Mada 3-5
                Jakarta, Indonesia
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Phone className="text-sky-900" />
                <p className="font-semibold text-sky-900">Phone </p>
              </div>
              <p className="text-center lg:text-start text-sm text-muted-foreground">
                +62 8xxx xxxx
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Mail className="text-sky-900" />
                <p className="font-semibold text-sky-900">Email Address</p>
              </div>
              <Link href="maito:info@basthenusa.com" className="text-sm mt-3">
                <p className="text-sky-500 text-center lg:text-start hover:text-sky-800">
                  info@basthenusa.com
                </p>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-3/4 py-3 px-5">
            <SendMessage />
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Contact;
