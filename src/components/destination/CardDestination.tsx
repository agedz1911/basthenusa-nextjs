import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Calendar, Info, Map, MapPin, Pin } from "lucide-react";
import { DestinationList } from "@/config/DestinationList";

const CardDestination = () => {
  return (
    <div className="grid lg:grid-cols-2 justify-items-center gap-10 py-10 mt-10 ">
      {DestinationList.map((item, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row w-full gap-5 lg:gap-3 items-start justify-between px-2 lg:px-0"
        >
          <div className="relative w-full aspect-video lg:w-2/5 lg:h-full py-0 px-0">
            <Image
              src={item.imgSrc}
              alt={item.title}
              fill
              className="object-cover rounded"
            />
          </div>
          <div className="flex flex-col items-start gap-4 lg:w-3/5 px-3">
            <h1 className="text-lg font-semibold flex gap-2">
              <MapPin className="" /> {item.title}
            </h1>
            <p className="line-clamp-3 text-sm text-justify">{item.desc}</p>
            <p className="text-sm text-muted-foreground">{item.periode}</p>
            <Button size={"sm"} variant={"default"}>
              <Info className="size-4 mr-3" /> Details
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardDestination;
