"use client";

import { Dispatch, useState } from "react";
import { Input } from "./input";
import Numbers from "./numbers";
import { bs } from "./bs";

const BinarySearch = (params: { numbers: Array<number> }) => {
  const [trgt, setTrgt]: [number, Dispatch<any>] = useState(-1);
  const [result, setResult]: [number | undefined, Dispatch<any>] =
    useState(undefined);
  const handleSearch = () => {
    setResult(bs(params.numbers, 0, params.numbers.length - 1, trgt));
    document
      .getElementById("numbersList")
      ?.scrollTo({ left: 50 * trgt, behavior: "smooth" });
  };
  const { numbers } = params;
  return (
    <div className="flex flex-col items-center space-y-16 w-screen justify-center">
      <Input
        trgt={trgt}
        result={result}
        setTrgt={setTrgt}
        handleSearch={handleSearch}
        numbers={numbers}
      />
      {result === -1 ? (
        <div className="transition-all text-md animate-pulse text-red-500">
          Could not find {trgt}
        </div>
      ) : (
        ""
      )}
      {result !== undefined && result !== -1 ? (
        <div className="transition-all text-md text-green-600 delay-1000">
          Found {trgt} on index {result}
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col justify-center items-center">
        <Numbers numbers={numbers} result={result} />
      </div>
    </div>
  );
};

export default BinarySearch;
