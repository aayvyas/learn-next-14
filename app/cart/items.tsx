"use client";

import clsx from "clsx";
import { ItemsResponse, Todo, getItem, getItems } from "./actions";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { Router, useRouter } from "next/router";
export const Items = async (params: { cartItems: ItemsResponse }) => {
  return (
    <>
      {params.cartItems?.todos.map((item, idx) => {
        return (
          <div
            key={idx}
            id={idx.toString()}
            onClick={(e) => {
              console.log(e.currentTarget.id);
            }}
            className={clsx(
              "bg-slate-200 rounded-xl px-4 py-2 mb-2 mx-2 flex flex-col overflow-hidden text-wrap hover:cursor-pointer",
              {
                "bg-green-50 hover:bg-green-300": item.completed === true,
                "bg-red-50 hover:bg-red-300 ": item.completed === false,
              }
            )}
          >
            <div
              className={clsx("px-1 py-1 rounded-lg  text-center w-1/4", {
                "bg-green-600 text-white text-sm": item.completed === true,
                "bg-red-600 text-white text-sm": item.completed == false,
              })}
            >
              {item.completed ? "Completed" : "In progress"}
            </div>
            <div className={clsx("px-1 text-sm mt-1 h-10", {})}>
              <p>Description: {item.todo}</p>
            </div>
            <div className="bg-blue-600 text-white rounded-lg px-2 w-fit">
              {item.userId}
            </div>
          </div>
        );
      })}
    </>
  );
};

export const Item = async (params: { todo: Todo }) => {
  const todo = params.todo;
  return (
    <div
      key={todo.userId}
      className={clsx(
        "bg-slate-200 rounded-xl px-4 py-2 mb-2 mx-2 flex flex-col overflow-hidden text-wrap",
        {
          "bg-green-50 hover:bg-green-300": todo.completed === true,
          "bg-red-50 hover:bg-red-300 ": todo.completed === false,
        }
      )}
    >
      <div
        className={clsx("px-1 py-1 rounded-lg  text-center w-1/4", {
          "bg-green-600 text-white text-sm": todo.completed === true,
          "bg-red-600 text-white text-sm": todo.completed == false,
        })}
      >
        {todo.completed ? "Completed" : "In progress"}
      </div>
      <div className={clsx("px-1 text-sm mt-1 h-10", {})}>
        <p>Description: {todo.todo}</p>
      </div>
    </div>
  );
};
