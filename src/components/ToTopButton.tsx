"use client";

import { ChevronUp } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ToTopButton = () => {
  const [visible, SetVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      SetVisible(true);
    } else {
      SetVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5">
      <Button
        size={"icon"}
        onClick={scrollToTop}
        className={cn(visible ? "opacity-100 rounded-full" : "opacity-0")}
      >
        <ChevronUp className="text-muted" />
      </Button>
    </div>
  );
};

export default ToTopButton;
