import { Metadata } from "next";
import { Input } from "./input";
import Numbers from "./numbers";
import BinarySearch from "./parent";

export const metadata: Metadata = {
  title: "Binary Search",
  description: "Learning how binary search works",
  category: "Data Structures",
  authors: { name: "Aayush Vyas", url: "www.aayushvyas.com" },
};

const Page = () => {
  let numbers: Array<number> = [];
  for (let i = 0; i < 100; i++) {
    numbers.push(Number.parseInt((Math.random() + i).toFixed(0)));
  }

  return <BinarySearch numbers={numbers} />;
};

export default Page;
