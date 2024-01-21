"use server";

import Link from "next/link";
import { Current } from "../nav-lins";
import { Suspense } from "react";
import Loading from "./loading";
import { Items } from "../items";
import { getItems } from "../actions";

const Page = async () => {
  const items = await getItems();

  return (
    <div>
      <div> View items in cart </div>
      <Suspense fallback={<Loading />}>
        <Current />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <div className="grid-flow-row grid grid-cols-3">
          <Items cartItems={items} />
        </div>
      </Suspense>
      <Link href={"/cart/promotion"}>
        <button className="bg-blue-200 px-4 p-2 rounded-xl transition-all hover:transition-all hover:text-white hover:bg-blue-600">
          Apply Promotion
        </button>
      </Link>
    </div>
  );
};
export default Page;
