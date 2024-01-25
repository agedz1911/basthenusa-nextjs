"use server";

import { CreateUserSchema, RegisterSchema } from "@/utils/user-schemas";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/lib/user";
import { db } from "@/lib/db";

export const Register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid Field!",
    };
  }

  const { email, name, password } = validatedFields.data;
  const hashPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: "Email already in use" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashPassword,
    },
  });
  return { success: "Successfully created user" };
};

export const NewUser = async (values: z.infer<typeof CreateUserSchema>) => {
  const validatedFields = CreateUserSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid Field!",
    };
  }

  const {
    name,
    email,
    password,
    birthDay,
    country,
    phoneNumber,
    nik,
    emergencyContactName,
    emergencyContactNumber,
  } = validatedFields.data;
  const hashPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: "Email already in use" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashPassword,
      biodata: {
        create: {
          birthDay: birthDay || null,
          country,
          phoneNumber,
          emergencyContactName: emergencyContactName || null,
          emergencyContactNumber : emergencyContactNumber || null,
          nik : nik || null,
        },
      },
    },
  });
  return { success: "Successfully created user" };
};
