import Image from "next/image";
import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ExperienceList } from "@/config";

const CardExperience = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 content-center w-full px-0 md:px-10">
      {ExperienceList.map((item, i) => (
        <div
          key={i}
          className="group hover:cursor-pointer block bg-background rounded-lg overflow-hidden"
        >
          <div className="relative aspect-video py-0 px-0  ">
            <Image
              src={item.imageSrc}
              fill
              alt="acttivitis"
              className="object-cover rounded-lg brightness-75 group-hover:brightness-100 group-hover:scale-105"
            />
            <Badge className="absolute top-5 left-4 group-hover:bg-sky-800">
              {item.badge}
            </Badge>
          </div>
          <div className="text-sm text-muted-foreground space-y-3 py-6 px-3">
            <p>{item.desc}</p>
            <Button
              variant={"ghost"}
              className="group-hover:bg-sky-800 group-hover:text-white"
            >
              {item.readMore}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardExperience;
