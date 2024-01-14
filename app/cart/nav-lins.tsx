"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Current = () => {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const block = () => {
    setTimeout(async () => {
      setShow(true);
      await console.log("waiting...");
    }, 2000);
  };

  block();

  return show ? (
    <div className="p-2 bg-blue-200 rounded-xl m-2">{pathname}</div>
  ) : (
    ""
  );
};
