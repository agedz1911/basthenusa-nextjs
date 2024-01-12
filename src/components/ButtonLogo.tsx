'use client'

import Image from "next/image";
import { Button } from "./ui/button";

const ButtonLogo = () => {
  return (
    <Button variant={"link"} onClick={() => window.scrollTo({ top: 0 })}>
      <Image
        src="/logo.png"
        width={50}
        height={50}
        className="w-12 h-auto"
        alt="Logo"
      />
    </Button>
  );
};

export default ButtonLogo;
