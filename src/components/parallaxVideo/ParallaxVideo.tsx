"use client";

import { PlayCircle } from "lucide-react";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

import { Courgette } from "next/font/google";
import { cn } from "@/lib/utils";
const courgette = Courgette({ subsets: ["latin"], weight: "400" });

const ParallaxVideo = () => {
  return (
    <ParallaxProvider>
      <section className="w-full h-52 md:h-80">
        <ParallaxBanner
          layers={[
            {
              image: "/images/video.jpg",
              speed: -5,
              className: "brightness-50",
            },
            {
              speed: -15,
              children: (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col gap-3 items-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size={"icon"}
                          variant={"ghost"}
                          className="w-16 h-16"
                        >
                          <PlayCircle className="size-14 text-white hover:text-primary" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="w-[560px] h-[315px] bg-transparent border-0">
                        <div className="w-full h-full rounded">
                          <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/Yp9CHfqWkps?si=cHm6WsHaV45nj-9M"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          ></iframe>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <h1
                      className={cn(
                        "text-2xl md:text-3xl text-white",
                        courgette.className
                      )}
                    >
                      The born of Nusa Kembara
                    </h1>
                  </div>
                </div>
              ),
            },
          ]}
          className="w-full h-full"
        ></ParallaxBanner>
      </section>
    </ParallaxProvider>
  );
};

export default ParallaxVideo;

{
  /* <div className="w-full h-full relative">
  <Image
    src="/images/video.jpg"
    alt="parallax"
    fill
    className="object-cover brightness-50"
  />
  <div className="absolute w-10 h-10 top-1/2 left-1/2">
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>
          <PlayCircle />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div>
          <h1>Ini dialog</h1>
        </div>
      </DialogContent>
    </Dialog>
  </div>
</div>; */
}
