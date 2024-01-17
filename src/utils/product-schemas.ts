import * as z from "zod";

export const DestinationSchema = z.object({
  destination: z.string().min(1, {
    message: "Destination is required",
  }),
  destinationDesc: z.string().min(10, {
    message: "Description is required",
  }),
  periode: z.string().min(1, {
    message: "Periode is required",
  }),
  imageSrc: z.string().toLowerCase().min(1, {
    message: "Image is required",
  }),
  price: z.string().min(1, {
    message: "Price is required",
  })
});
