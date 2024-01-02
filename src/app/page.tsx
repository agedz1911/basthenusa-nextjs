import Divider from "@/components/Divider";
import ToTopButton from "@/components/ToTopButton";
import Contact from "@/components/contact/Contact";
import Destination from "@/components/destination/Destination";
import Experience from "@/components/experience/Experience";
import Features from "@/components/features/Features";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navigation/Navbar";
import ParallaxVideo from "@/components/parallaxVideo/ParallaxVideo";
import Reservation from "@/components/reservation/Reservation";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Courgette } from "next/font/google";
import Image from "next/image";

const courgette = Courgette({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div className="p-0">
      <Navbar />
      <Hero />
      <Divider />
      <Features />
      <ParallaxVideo />
      <Destination />
      <Reservation />
      <Experience />
      <div className="bg-gradient-to-t from-amber-50/50 to-transparent">
        <div className="relative bg-primary p-7 lg:w-2/3  w-full mx-auto">
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center -mt-14"
          >
            <Separator className="pt-1 bg-secondary" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 top-0 grid place-items-center -mt-14">
            <Image
              src="/logo-bas-03.png"
              width={80}
              height={80}
              alt="Logo"
              className=""
            />
          </div>
        </div>
        <div className="bg-primary flex justify-center pt-0 pb-14 lg:w-2/3 w-full mx-auto rounded-b-lg">
          <div className="text-white text-center space-y-1">
            <h1 className="text-lg">Leisure, Diving, & Exprloring</h1>
            <h2 className="font-normal">liveboard</h2>
            <p className="text-xs">with</p>
            <h1 className={cn("text-3xl", courgette.className)}>
              Nusa Kembara
            </h1>
          </div>
        </div>
      </div>
      <Contact />

      <ToTopButton />
    </div>
  );
}
