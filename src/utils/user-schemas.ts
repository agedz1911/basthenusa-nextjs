import * as z from "zod";
import validator from "validator";

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

export const CreateUserSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string(),
  phoneNumber: z.string().refine(validator.isMobilePhone),
  birthDay: z.date({
    required_error: "Date is required",
    invalid_type_error: "format invalid",
  }),
  //birthDay: z.string().transform((str) => new Date(str)),
  // birthDay: z
  //   .string()
  //   .refine((date) => new Date(date).toString() !== "Invalid Date", {
  //     message: "A valid date of birth is required",
  //   }),
  country: z.string().min(3, {
    message: "Country is required",
  }),
  nik: z.string().min(1),
  emergencyContactName: z.string().min(1),
  emergencyContactNumber: z.string().min(1),
});

export const UpdateUserSchema = z
  .object({
    name: z.string(),
    bioId: z.string(),
    email: z.string().email(),
    country: z.string(),
    role: z.string(),
    phoneNumber: z.string(),
    nik: z.string(),
    emergencyContactName: z.string(),
    emergencyContactNumber: z.string(),
    birthDay: z.date().nullable(),
  })
  .partial();
