"use client";

import { Dispatch, useState } from "react";
import { bs } from "./bs";
import { number, string } from "zod";

export const Input = (params: {
  numbers: Array<number>;
  handleSearch: Dispatch<any>;
  setTrgt: Dispatch<any>;
  trgt: number;
  result: number | undefined;
}) => {
  const { numbers, handleSearch, setTrgt, result, trgt } = params;
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <form
        action={handleSearch}
        className="flex flex-col space-y-2 justify-center items-center"
      >
        <div className="flex flex-col">
          <input
            autoFocus={true}
            id="trgt"
            onChange={(e) => {
              setTrgt(+e.currentTarget.value);
            }}
            className="bg-blue-300 placeholder:text-slate-700 p-4 w-96  focus:bg-slate-300 focus:text-slate-900 text-center rounded-t-2xl outline-none text-slate-900 shadow-2xl text-lg"
            placeholder="enter the number to search for"
          ></input>
          <label
            htmlFor="trgt"
            className="text-sm text-white text-center rounded-b-2xl bg-slate-900 p-2 shadow-2xl w-96"
          >
            {trgt.toString() === "NaN" ? (
              <p className="text-red-600">Please enter a valid number</p>
            ) : (
              ""
            )}
            {trgt.toString() !== "NaN" && !(trgt.toString().length > 1)
              ? "The number you'll enter here will be searched below "
              : "Press go to search"}
          </label>
        </div>
        <button
          className="w-16 h-16 bg-slate-900 hover:shadow-slate-600 hover:bg-slate-800 text-white rounded-2xl"
          onSubmit={handleSearch}
        >
          Go
        </button>
      </form>
    </div>
  );
};
