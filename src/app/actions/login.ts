"use server";

import { signIn } from "@/auth";
import { LoginSchema } from "@/utils/user-schemas";
import { AuthError } from "next-auth";
import * as z from "zod";

export const Login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
      //redirectTo: "/",
    });
    return { success: "Successfully logged in" };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "wrong email or password" };

        default:
          return { error: "Something went wrong" };
      }
    }

    throw error;
  }
};
