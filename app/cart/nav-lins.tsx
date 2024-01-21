import { unstable_noStore } from "next/cache";
import Loading from "./(overview)/loading";

const data = async () => {
  unstable_noStore();
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return "Data that take some time to load";
};
export const Current = async () => {
  return <div className="p-2 bg-blue-200 rounded-xl m-2">{await data()}</div>;
};
