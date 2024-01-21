import type { NextAuthConfig } from "next-auth";
import { signIn } from "next-auth/react";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    // authorized({ auth, request: { nextUrl } }: any) {
    //   const isLoggedIn = !!auth?.user;
    //   const isOnDashboard = nextUrl.pathname.startsWith("/cart");
    //   if (isOnDashboard) {
    //     if (isLoggedIn) {
    //       return true;
    //     } else {
    //       return Response.redirect(new URL("/cart", nextUrl));
    //     }
    //     return true;
    //   }
    // },
  },
  providers: [],
} satisfies NextAuthConfig;
