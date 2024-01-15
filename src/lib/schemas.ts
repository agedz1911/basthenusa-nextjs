import * as z from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Must be at least 6 characters required",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "password is required",
  }),
});

export const UpdatePasswordSchema = z.object({
  currentPassword: z.string().min(1, {
    message: "password is required",
  }),
  newPassword: z.string().min(1, {
    message: "password is required",
  }),
  confirmPassword: z.string().min(1, {
    message: "password is required",
  }),
});
