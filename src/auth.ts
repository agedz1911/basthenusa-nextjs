import NextAuth, { DefaultSession } from "next-auth";
import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token }) {
      console.log("ini token", token);
      
      return token;
    },
    async session({session, token}) {
      console.log("ini sesion", session);
      
      return session
    }
  },
  ...authConfig,
});
