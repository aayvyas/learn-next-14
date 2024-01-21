import { Item } from "@/app/cart/items";
import { Suspense } from "react";
import { number } from "zod";
import Loading from "../../loading";
import { getItem } from "@/app/cart/actions";

const Page = async ({ params }: { params: { id: string } }) => {
  const todo = await getItem(Number.parseInt(params.id));

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Item todo={todo} />
      </Suspense>
    </div>
  );
};

export default Page;
