"use client";

import { DestinationList } from "@/config/DestinationList";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Calendar } from "lucide-react";
import { Badge } from "../ui/badge";

const CardReservation = () => {
  return (
    <div className="py-5">
      <Carousel
        plugins={[Autoplay({ delay: 5000 })]}
        opts={{ loop: true, align: "start" }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {DestinationList.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/3"
            >
              <Card>
                <CardHeader>
                  <div className="relative  aspect-video">
                    <Image
                      src={item.imgSrc}
                      alt={item.title}
                      fill
                      className="object-cover rounded"
                    />
                    <Badge className="absolute top-3 left-3">
                      {item.title}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {item.periode}
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size={"sm"} variant={"default"}>
                    <Calendar className="size-4 mr-3" /> Book Now
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CardReservation;
