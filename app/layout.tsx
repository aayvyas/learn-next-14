import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { Noto } from "./fonts";
import clsx from "clsx";
import Link from "next/link";
import { NavLinks } from "./nav-links";

const inter = Inter({ subsets: ["latin"] });

type User = {
  username: string;
  loggedIn: boolean;
};

let user: User = {
  username: "Pranav Vyas",
  loggedIn: false,
};
const getAvatarName = (): string => {
  let arr: Array<string> = user.username.split(" ");
  let f = arr.at(0)?.at(0)?.toUpperCase() || "";
  let l = arr.at(1)?.at(0)?.toUpperCase() || "";
  return f + l;
};
const getUserStatus = (): boolean => {
  return user.loggedIn;
};

export const metadata: Metadata = {
  title: "My App",
  description: "Learning Next JS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <div className="m-5 w-auto antialiased">
            <div className="flex  flex-1 flex-row justify-between bg-slate-900 drop-shadow-md p-3 rounded-2xl items-center ">
              <Link
                href="/"
                className="flex flex-row items-center space-x-2 bg-pink-300 hover:bg-pink-600 drop-shadow-sm pr-3 rounded-xl"
              >
                <Image
                  src="/image.svg"
                  alt="i"
                  width={50}
                  height={50}
                  className="bg-transparent hover:opacity-80"
                />
                <p className="font-bold">{"gprime"}</p>
              </Link>
              <div className="w-1/3 flex flex-row ">
                <input
                  placeholder="enter something to search"
                  className={`py-2 w-10/12 bg-white rounded-l-xl ${Noto.className} antialiased justify-center text-center focus:w-full focus:bg-slate-900 focus:text-white transition-all`}
                ></input>
                <button className="bg-blue-200 px-4 py-2 rounded-r-xl transition-all hover:transition-all hover:text-white hover:bg-blue-600">
                  Search
                </button>
              </div>
              <div className="flex flex-row items-center justify-between space-x-2">
                <Link
                  href="/cart/"
                  className="bg-blue-200 px-4 p-2 rounded-xl transition-all hover:transition-all hover:text-white hover:bg-blue-600"
                >
                  View Cart
                </Link>
                <div
                  className={clsx(
                    "w-fit rounded-3xl transition-all px-3 py-2.5 antialiased",
                    {
                      "bg-black text-white shadow-xl translate-x-10":
                        getUserStatus() == true,
                      "bg-white text-black shadow-xl": getUserStatus() == false,
                    }
                  )}
                >
                  {getAvatarName()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row my-2 items-center justify-center">
          <NavLinks />
        </div>
        {children}
      </body>
    </html>
  );
}
