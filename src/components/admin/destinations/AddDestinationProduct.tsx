"use client";

import { DestinationSchema } from "@/utils/product-schemas";
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
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { Button } from "../../ui/button";

const AddDestinationProduct = () => {
  const form = useForm<z.infer<typeof DestinationSchema>>({
    resolver: zodResolver(DestinationSchema),
    defaultValues: {
      destination: "",
      destinationDesc: "",
      imageSrc: "",
      periode: "",
      price: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof DestinationSchema>) => {
    console.log(values);
  };

  return (
    <div className="w-full max-w-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="gap-3 space-y-3">
            <FormField
              control={form.control}
              name="destination"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Destination</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full max-w-md"
                      placeholder="type destination"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="destinationDesc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="w-full max-w-md"
                      placeholder="Destination Description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="periode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Periode</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full max-w-md"
                      placeholder="Periode Sailing"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Package Price</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full max-w-md"
                      type="number"
                      placeholder="IDR."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageSrc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Picture</FormLabel>
                  <FormControl>
                    <Input className="w-full max-w-md" type="file" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button className="w-full mt-5 max-w-md">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default AddDestinationProduct;
