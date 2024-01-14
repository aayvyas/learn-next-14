import Link from "next/link";
import { Current } from "./nav-lins";

const Page = () => {
  return (
    <div>
      <div> View items in cart </div>
      <Current />
      <Link href={"/cart/promotion"}>
        <button className="bg-blue-200 px-4 p-2 rounded-xl transition-all hover:transition-all hover:text-white hover:bg-blue-600">
          Apply Promotion
        </button>
      </Link>
    </div>
  );
};
export default Page;
