import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";

export type User = {
  email: string;
  username: string;
  password: string;
};

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      // @ts-ignore
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
        console.log(parsedCredentials, "Parsing done");
        // If zod parsing is successfull
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          // query database for the user
          const user: User = {
            email: "xyz@ymail.com",
            username: "zod",
            password: "1234567890",
          };
          if (!user) return null;

          // compare password by decrypting
          // const passwordMtch = await bcrypt.compare(password,user.password);

          const passwordMtch = user.password === password;

          if (passwordMtch) {
            return user;
          }
          return true;
        }
      },
    }),
  ],
});
