"use server";

import { redirect } from "next/navigation";

export type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

export type Items = {
  todos: Array<Todo>;
  total: number;
  skip: number;
  limit: number;
};

export type ItemsResponse = Items | undefined;

export const getItems = async (): Promise<ItemsResponse> => {
  try {
    const response = await fetch("https://dummyjson.com/todos");
    if (response.ok) {
      const res: Items = await response.json();
      return res;
    }
  } catch (error) {
    throw new Error("Error occurred" + error);
  }
};
export const getItem = async (itemNumber: number): Promise<Todo | any> => {
  try {
    const response = await fetch(`https://dummyjson.com/todos/${itemNumber}`);
    if (response.ok) {
      const res: Todo = await response.json();
      return res;
    }
  } catch (error) {
    console.log(error);
  }
};
