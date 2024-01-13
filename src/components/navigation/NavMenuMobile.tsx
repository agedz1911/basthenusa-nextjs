'use client'

import React from "react";
import { Links } from "@/config";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavMenuMobile = () => {
  const pathName = usePathname();
  return (
    <div className="py-2 px-1">
      <ul className="flex flex-col gap-2">
        {Links.map((link, i) => (
          <div key={i}>
            {pathName === link.href ? (
              <li>
                <Link
                  href={link.href}
                  className="font-semibold underline text-sm text-secondary"
                >
                  {link.name}
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  href={link.href}
                  className="font-normal text-gray-500 text-sm hover:underline"
                >
                  {link.name}
                </Link>
              </li>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default NavMenuMobile;
