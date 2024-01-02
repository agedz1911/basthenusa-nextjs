import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { MapPin } from "lucide-react";

interface destinationProps {
  title: string;
  desc: string;
  imgSrc: string;
  periode: string;
  changeState: any;
  state: boolean;
}

const DestinationDetail = ({
  title,
  desc,
  imgSrc,
  periode,
  changeState,
  state,
}: destinationProps) => {
  return (
    <Dialog open={state} onOpenChange={() => changeState(!state)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div className="flex items-center gap-2 mb-4">
              <MapPin /> {title}
            </div>
          </DialogTitle>
          <div className="h-full w-full aspect-video relative rounded-md">
            <Image
              src={imgSrc}
              fill
              alt={title}
              className="object-cover rounded-md"
            />
          </div>
          <DialogDescription className="text-justify py-3">
            {desc}
          </DialogDescription>
        </DialogHeader>
        <div className="text-muted-foreground text-sm">
          <p className="font-light">Periode</p>
          {periode}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DestinationDetail;
