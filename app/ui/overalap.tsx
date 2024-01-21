"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

export type OverlapContent = {
  heading: string;
  desc: string;
};

export type OverlapCrate = {
  d1: OverlapContent;
  d2: OverlapContent;
};

export const Overlap = ({ d1, d2 }: OverlapCrate) => {
  const [z, setz] = useState(0);
  setInterval(() => {
    setz(z == 0 ? 1 : 0);
  }, 5000);

  useEffect(() => {}, [z]);

  return (
    <div className="flex justify-center antialiased">
      <div
        className={clsx(
          "absolute  bg-purple-700 rounded-2xl transition-all duration-1000 flex flex-col items-center mt-3",
          {
            "z-10 w-64 h-64 shadow-xl ": z == 0,
            "z-7 w-60 h-60 opacity-50 blur-sm translate-x-24 translate-y-12":
              z == 1,
          }
        )}
      >
        <h1 className="text-2xl mt-4 text-purple-300 font-extrabold">
          {d1.heading}
        </h1>
        <p className="p-4 text-sm w-fit text-purple-300">{d1.desc}</p>
      </div>
      <div
        className={clsx(
          "absolute translate-x-24 translate-y-12 transition-all duration-1000 bg-pink-600 rounded-2xl flex flex-col items-center mt-3",
          {
            "z-10 w-64 h-64 -translate-x-0 -translate-y-0 shadow-2xl": z == 1,
            "z-7 w-60 h-60 opacity-50 blur-sm": z == 0,
          }
        )}
      >
        <h1 className="text-2xl mt-4 text-pink-300 font-extrabold">
          {d2.heading}
        </h1>
        <p className="p-4 text-sm w-fit text-pink-300 overflow-hidden">
          {d2.desc}
        </p>
      </div>
    </div>
  );
};
