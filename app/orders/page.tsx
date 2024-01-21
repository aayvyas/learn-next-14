import { Form } from "./create-order-form";

export const Page = async () => {
  return (
    <div className="flex flex-col w-screen h-fit mt-10 justify-center items-center">
      <Form />
    </div>
  );
};

export default Page;
