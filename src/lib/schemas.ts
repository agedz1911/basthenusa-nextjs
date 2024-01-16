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

export const UpdateProfileSchema = z.object({
  phoneNumber: z.string().refine(validator.isMobilePhone),
  birthDay: z.string().datetime().refine(validator.isDate),
  country: z.string().min(3, {
    message: "Country is required",
  }),
  nik: z.string().optional(),
  emergencyContactName: z.string().optional(),
  emergencyContactNumber: z.string().refine(validator.isMobilePhone),
});
