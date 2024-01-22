import clsx from "clsx";

// given a list of number display it
const Numbers = (params: {
  numbers: Array<number>;
  result: number | undefined;
}) => {
  const { numbers, result } = params;
  return (
    <ol
      id="numbersList"
      className="flex flex-start w-screen overflow-y-scroll items-center space-x-3 ml-10 h-32 antialiased"
    >
      {numbers.map((val, idx) => {
        return (
          <li
            key={idx}
            className={clsx(
              "text-sm m-1 items-center flex px-5 justify-center transition-all delay-1000 duration-500",
              {
                "h-16 shadow-xl rounded-2xl bg-green-500 text-slate-800 animate-bounce":
                  result === idx,
                "h-14  rounded-xl bg-slate-100 transition-all delay-1000 duration-1000 text-slate-500":
                  result !== idx,
                "h-14  rounded-xl bg-red-200 transition-all delay-1000 duration-1000 text-slate-500 animate-pulse":
                  result === -1,
              }
            )}
          >
            {val}
          </li>
        );
      })}
    </ol>
  );
};

export default Numbers;
