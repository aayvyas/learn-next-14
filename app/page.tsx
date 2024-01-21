import clsx from "clsx";
import Image from "next/image";
import { Noto } from "./fonts";
import { Overlap } from "./ui/overalap";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <div className="self-end w-1/4 m-10">
        <Overlap
          d1={{ heading: "heading", desc: "description" }}
          d2={{ heading: "ehadin1", desc: "headiing" }}
        />
      </div>
    </main>
  );
}
