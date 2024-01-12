'use client'

import { Links } from "@/config";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = () => {
  const pathName = usePathname();
  return (
    <div className="lg:flex lg:gap-1 items-center hidden">
      <ul className="lg:flex lg:gap-8 mr-5">
        {Links.map((link, i) => (
          <div key={i}>
            {pathName === link.href ? (
              <li>
                <Link
                  href={link.href}
                  className="font-bold underline text-sm text-secondary"
                >
                  {link.name}
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  href={link.href}
                  className="font-semibold text-sm hover:underline"
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

export default NavMenu;
