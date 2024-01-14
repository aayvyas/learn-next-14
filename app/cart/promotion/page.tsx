import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col bg-slate-50 h-screen p-2 w-full text-center">
      <Link href={"/"}>Home</Link>
      <h1 className="font-bold">Apply Promotions</h1>
      <div>
        <form className="flex flex-col justify-center text-center items-center">
          <input
            placeholder="Enter Promocode"
            className="w-1/2 text-center p-2 rounded-xl m-2"
          ></input>
          <button className="bg-blue-200 p-2 rounded-xl m-2 px-4 hover:px-6  hover:py-2 delay-120  hover:bg-blue-600 transition-all hover:shadow-2xl hover:text-white hover:transition-all ">
            Apply Promocode
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
