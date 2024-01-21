"use client";

import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "../lib/actions";

import clsx from "clsx";

export const LoginForm = () => {
  const [state, dispatch] = useFormState(authenticate, undefined);
  const inputStyle = "px-2 py-3 rounded-xl w-full";
  return (
    <div className="shadow-2xl bg-slate-900 p-5 self-center flex flex-col items-center justify-center rounded-2xl w-1/5">
      <h1 className="text-3xl text-white"> Login </h1>
      <form
        action={dispatch}
        className="space-y-5 flex flex-col items-center py-10 px-5 w-full"
      >
        <input
          id="email"
          className={clsx(inputStyle, {})}
          placeholder="Enter your email"
        ></input>
        <input
          className={clsx(inputStyle, {})}
          id="password"
          placeholder="Enter your password"
        ></input>
        <LoginButton />
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {state && (
            <>
              <p className="text-sm text-red-500">{state}</p>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

const LoginButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      aria-disabled={pending}
      disabled={pending}
      className=" rounded-xl delay-150 px-4 py-2 w-1/2 self-center bg-blue-300 border-blue-200 border-2  hover:bg-blue-600 hover:text-white transition-all duration-300 hover:w-full "
    >
      Login
    </button>
  );
};
