import { cn } from "@/lib/utils";
import { Compass, Info, CalendarClock } from "lucide-react";
import { Courgette } from "next/font/google";
import Image from "next/image";
import ButtonNs from "../ButtonNs";
import CustomContainer from "../CustomContainer";
import WaveAnimation from "../WaveAnimation";

const courgette = Courgette({ subsets: ["latin"], weight: "400" });

const Hero = () => {
  return (
    <section className="w-full pb-20">
      <div className="h-[860px] w-full absolute top-0 left-0 -z-10">
        <Image
          src="/images/backgrond.jpg"
          fill
          priority
          alt="hero"
          className="brightness-[90%] object-cover"
        />
      </div>
      <div className="h-[860px] w-full bg-gradient-to-t from-teal-900 via-sky-600/50 to-sky-900 -z-10 absolute top-0 left-0"></div>
      <CustomContainer className="lg:pt-10">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:py-6 lg:mt-14 mt-5 py-2 gap-5">
          <div className="lg:w-1/2 w-full space-y-5 lg:space-y-8 ">
            <h1
              className={cn(
                "lg:text-6xl md:text-5xl text-white fw-bold ",
                courgette.className
              )}
            >
              Nusa Kembara
            </h1>
            <h1
              className={cn(
                "text-white text-xl fw-bold flex",
                courgette.className
              )}
            >
              <Compass className="mr-2 text-sky-950" /> Discover The True
              Paradise
            </h1>
            <p className="text-justify text-sm text-muted px-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              optio magni eligendi, sequi fuga blanditiis ea ducimus quas
              incidunt, voluptatem neque ipsum. Libero fugit rerum voluptatum
              minima, maxime explicabo aperiam?
            </p>
            <div className="space-x-5 text-center lg:text-start">
              <ButtonNs label="Read More" desc="Nusa Kembara" icon={<Info />} />
              <ButtonNs
                label="Discover and"
                desc="Book a Tour"
                icon={<CalendarClock />}
              />
            </div>
          </div>
          <div className="lg:w-2/5 md:w-2/5 md:mt-5 w-full">
            <div className="border-4 rounded-md border-zinc-100 p-4">
              <Image
                src="/images/single-welcome2.png"
                alt="img-welcome"
                width={900}
                height={1200}
                className="object-cover w-full rounded-md"
              />
            </div>
          </div>
        </div>
      </CustomContainer>
      <WaveAnimation />
    </section>
  );
};

export default Hero;
