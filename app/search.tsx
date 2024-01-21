"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Noto } from "./fonts";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="w-1/3 flex flex-row ">
      <input
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
        placeholder={placeholder}
        className={`outline-0 py-3 w-11/12  rounded-l-xl ${Noto.className} antialiased justify-center text-center  focus:bg-white focus:text-black transition-all`}
      ></input>
      <button className="bg-blue-200 px-4 py-2 rounded-r-xl transition-all hover:transition-all  hover:text-white hover:bg-blue-600">
        Search
      </button>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
    </div>
  );
}
