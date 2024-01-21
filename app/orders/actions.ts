"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { number, z } from "zod";

export type Order = {
  todo: string;
  completed: boolean;
  userId: number;
};

const FormSchema = z.object({
  todo: z.string({
    invalid_type_error: "Please select a customer",
  }),
  completed: z.boolean({
    invalid_type_error: "Please check the box",
  }),
  userId: z.number({
    invalid_type_error: "Please enter a valid userId",
  }),
});

const CreateOrder = FormSchema.omit({});

export type State = {
  errors?: {
    userId?: number[];
    todo?: string[];
    completed?: boolean[];
  };
  message?: string | null;
};

export const createOrder = async (
  prevState: State,
  formData: FormData
): Promise<any> => {
  "use server";
  console.log("This is validating form data on server side not client side");
  console.log(formData);

  const input: Order = {
    // @ts-ignore
    todo: formData.get("todo"),
    completed: formData.get("completed") === "on" ? true : false,
    // @ts-ignore
    userId: Number.parseInt(formData.get("userId")),
  };
  console.log(input);

  //Validate the formData
  const valid = CreateOrder.safeParse(input);

  if (!valid.success) {
    return {
      errors: valid.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to create order",
    };
  }

  //Make API call
  await fetch("https://dummyjson.com/todos/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  }).then(() => {
    console.log("Form got validated and entry got created on server side only");
  });

  revalidatePath("/cart");
  redirect("/");
};
