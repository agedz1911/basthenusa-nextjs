import { DestinationList } from "@/config/DestinationList";
import { Info, MapPin } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import ButtonDetail from "./ButtonDetail";

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
          <div className="flex flex-col items-start group gap-4 lg:w-3/5 px-3">
            <h1 className="text-lg font-semibold flex gap-2 group-hover:text-secondary">
              <MapPin className="" /> {item.title}
            </h1>
            <p className="line-clamp-3 text-sm text-justify">{item.desc}</p>
            <p className="text-sm text-muted-foreground">{item.periode}</p>
            <ButtonDetail
              title={item.title}
              desc={item.desc}
              imgSrc={item.imgSrc}
              periode={item.periode}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardDestination;
