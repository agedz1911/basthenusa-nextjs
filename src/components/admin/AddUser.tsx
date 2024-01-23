"use client";

import { CreateUserSchema, RegisterSchema } from "@/utils/user-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const AddUser = () => {
  const form = useForm<z.infer<typeof CreateUserSchema>>({
    resolver: zodResolver(CreateUserSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      birthDay: "",
      phoneNumber: "",
      country: "",
      nik: "",
      emergencyContactName: "",
      emergencyContactNumber: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof CreateUserSchema>) => {
    console.log(values);
  };

  return (
    <div className="w-full max-w-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="gap-3 space-y-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full max-w-md"
                      placeholder="john doe"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      className="w-full max-w-md"
                      placeholder="johndoe@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="w-full max-w-md"
                      placeholder="******"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="birthDay"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Birth </FormLabel>
                  <FormControl>
                    <Input type="date" className="w-full max-w-md" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number </FormLabel>
                  <FormControl>
                    <Input type="tel" className="w-full max-w-md" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country </FormLabel>
                  <FormControl>
                    <Input type="text" className="w-full max-w-md" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nik"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>NIK </FormLabel>
                  <FormControl>
                    <Input type="number" className="w-full max-w-md" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="emergencyContactName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Emergency Name </FormLabel>
                  <FormControl>
                    <Input type="text" className="w-full max-w-md" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="emergencyContactNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Emergency No </FormLabel>
                  <FormControl>
                    <Input type="tel" className="w-full max-w-md" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button className="mt-5 w-full max-w-md">Save</Button>
        </form>
      </Form>
    </div>
  );
};

export default AddUser;
