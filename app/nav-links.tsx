"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type link = {
  href: string;
  itemName: string;
};

export const NavLinks = (): React.ReactNode => {
  const links: Array<link> = [
    { href: "/", itemName: "Home" },
    {
      href: "/cart",
      itemName: "cart",
    },
    { href: "/cart/promotion", itemName: "promotion" },
    { href: "/orders", itemName: "orders" },
    { href: "/binary-search", itemName: "binary search" },
  ];
  const pathname = usePathname();
  return (
    <>
      {links.map((link, idx) => {
        return (
          <Link
            href={link.href}
            key={link.href}
            className={clsx("px-3 p-2 w-fit ", {
              "rounded-l-xl": idx === 0,
              "rounded-r-xl": idx === links.length - 1,
              "bg-gray-200 hover:bg-blue-200 hover:text-black transition-all hover:transition-all":
                pathname !== link.href,
              "bg-blue-600 shadow-2xl text-white transition-all hover:transition-all":
                pathname === link.href,
            })}
          >
            {link.itemName}
          </Link>
        );
      })}
    </>
  );
};
