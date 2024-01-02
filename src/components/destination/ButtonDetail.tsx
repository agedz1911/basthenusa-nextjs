"use client";

import { Info } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import DestinationDetail from "./DestinationDetail";

interface destinationProps {
  title: string;
  desc: string;
  imgSrc: string;
  periode: string;
}

const ButtonDetail = ({ title, desc, imgSrc, periode }: destinationProps) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        size={"sm"}
        className="group-hover:bg-secondary"
      >
        <Info className="size-4 mr-3" /> Details
      </Button>
      <DestinationDetail
        changeState={setOpen}
        desc={desc}
        imgSrc={imgSrc}
        periode={periode}
        state={open}
        title={title}
      />
    </>
  );
};

export default ButtonDetail;
