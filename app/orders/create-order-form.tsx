"use client";

import { useFormState } from "react-dom";
import { State, createOrder } from "./actions";
import clsx from "clsx";
import { Dispatch } from "react";

const inputStyle = "px-2 py-3 rounded-xl w-full";

export const Form = () => {
  const initialState = { message: null, errors: {} };
  const [state, dispatch]: [State, any] = useFormState(
    createOrder,
    initialState
  );
  return (
    <form
      action={dispatch}
      className="flex flex-col w-1/3 space-y-7 rounded-3xl bg-slate-900 px-5 pt-10 pb-5"
    >
      <p className="text-white text-center text-3xl">Create a new Order</p>
      <input
        id="userId"
        name="userId"
        step={1}
        placeholder="Enter userId"
        className={clsx(`${inputStyle}`, {
          "bg-red-500":
            state.errors?.userId?.length != null &&
            state.errors?.userId?.length > 0,
        })}
      ></input>
      <div className="text-red-600 text-sm ml-2">
        {<p>Please enter a valid userId, only numerical values supported</p>}
      </div>
      <input
        name="todo"
        id="todo"
        placeholder="Enter Messsage"
        className={`${inputStyle}`}
      ></input>
      <label className="flex justify-start p-2 w-full text-white space-x-4">
        <p>Completed</p>
        <input
          name="completed"
          type="checkbox"
          className="size-6"
          placeholder="Completed"
        />
      </label>
      <button
        type="submit"
        className=" rounded-xl delay-150 px-4 py-2 w-1/2 self-center bg-blue-300 border-blue-200 border-2  hover:bg-blue-600 hover:text-white transition-all duration-300 hover:w-full "
      >
        Create Order
      </button>
    </form>
  );
};
