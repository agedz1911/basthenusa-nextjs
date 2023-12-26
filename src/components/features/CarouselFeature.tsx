"use client";

import { FeatureImage } from "@/config";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const CarouselFeature = () => {
  return (
    <div className="py-5">
      <Carousel
        plugins={[Autoplay({ delay: 3000 })]}
        opts={{ loop: true, align: "start" }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {FeatureImage.map((feature, i) => (
            <CarouselItem
              key={i}
              className="basis-1/2 md:basis-1/5 lg:basis-1/6"
            >
              <div className="flex flex-col items-center space-y-3">
                <Image
                  src={feature.imageSrc}
                  alt="features"
                  width={200}
                  height={100}
                  className="w-24 h-auto"
                />
                <p className="text-sm font-semibold text-muted-foreground">
                  {feature.label}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselFeature;
