"use client";

import { useState, useEffect } from "react";

const NavScroll = ({ children }: { children: React.ReactNode }) => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`py-5 md:px-0 lg:px-0 px-2 sticky top-0 ${
        scroll ? "bg-slate-50 shadow-sm z-10" : "bg-transparent text-white"
      }`}
    >
      {children}
    </div>
  );
};

export default NavScroll;
