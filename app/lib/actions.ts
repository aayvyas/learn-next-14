import { AuthError } from "next-auth";
import { signIn } from "next-auth/react";

export const authenticate = async (
  prevState: string | undefined,
  formData: FormData
) => {
  try {
    console.log("Reached", formData);
    // @ts-ignore
    await signIn("credentials", formData);
  } catch (error) {
    console.log(error, "error happened here");
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials. ";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
};
