"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { useState, useTransition } from "react";
import { format } from "date-fns";
import { getCountries } from "country-state-picker";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateUserSchema, UpdateUserSchema } from "@/utils/user-schemas";
import * as z from "zod";
import { Calendar } from "@/components/ui/calendar";
import { UpdateUser } from "@/app/actions/update";
import toast from "react-hot-toast";

type Props = {
  id?: string | null;
  biodataId?: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: string | null;
  country?: string | null;
  nik?: string | null;
  birthDay?: Date | null;
  phoneNumber?: string | null;
  emergencyContactName?: string | null;
  emergencyContactNumber?: string | null;
};

const EditUser = ({
  id,
  biodataId,
  name,
  email,
  country,
  nik,
  image,
  role,
  birthDay,
  emergencyContactName,
  emergencyContactNumber,
  phoneNumber,
}: Props) => {
  const [emailU, setEmailU] = useState(email ?? "");
  const countries = getCountries();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof UpdateUserSchema>>({
    resolver: zodResolver(UpdateUserSchema),
    defaultValues: {
      name: `${name}`,
      email: `${email}`,
      role: `${role}`,
      bioId: `${biodataId}`,
      birthDay: birthDay ?? new Date("1940/01/01"),
      phoneNumber: `${phoneNumber ?? ""}`,
      country: `${country ?? ""}`,
      nik: `${nik ?? ""}`,
      emergencyContactName: `${emergencyContactName ?? ""}`,
      emergencyContactNumber: `${emergencyContactNumber ?? ""}`,
    },
  });

  const onSubmit = async (values: z.infer<typeof UpdateUserSchema>) => {
    //console.log(values);
    startTransition(() => {
      UpdateUser(values).then((data) => {
        if (!data.success) {
          toast.error(data.error!);
        } else {
          toast.success(data.success);
          router.back();
          router.refresh();
        }
      });
    });
  };

  return (
    <div className="w-full">
      <h1>Ini Id: {id}</h1>
      <h1>Ini Biodata: {biodataId}</h1>

      <h1>{name}</h1>
      <h1>{email}</h1>

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
              {/* <FormField
                control={form.control}
                name="bioId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
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
              /> */}
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
                name="birthDay"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full max-w-md pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {!field.value ? (
                              <span>Pick a date</span>
                            ) : (
                              format(field.value, "MM/dd/yyyy")
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
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
                      <Input
                        type="tel"
                        className="w-full max-w-md"
                        {...field}
                      />
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
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full max-w-md">
                          <SelectValue
                            className="text-muted-foreground "
                            placeholder="choose your country"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {countries.map((country: any) => (
                          <SelectItem key={country.code} value={country.name}>
                            {country.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a verified email to display" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="USER">USER</SelectItem>
                        <SelectItem value="ADMIN">ADMIN</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="nik"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Identity Number (NIK)
                      <span className="text-xs text-muted-foreground italic">
                        Optional
                      </span>{" "}
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        className="w-full max-w-md"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Separator />
              <h1 className="font-semibold">For Emergency Contact</h1>
              <Separator />
              <FormField
                control={form.control}
                name="emergencyContactName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="w-full max-w-md"
                        {...field}
                      />
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
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        className="w-full max-w-md"
                        {...field}
                      />
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
    </div>
  );
};

export default EditUser;
