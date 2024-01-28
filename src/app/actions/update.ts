"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";
import { getBiodataById, getUserByEmail, getUserById } from "@/lib/user";
import { db } from "@/lib/db";
import toast from "react-hot-toast";
import { UpdateUserSchema } from "@/utils/user-schemas";

export const UpdateUser = async (values: z.infer<typeof UpdateUserSchema>) => {
  const validatedFields = UpdateUserSchema.safeParse(values);
  console.log(validatedFields);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields",
    };
  }

  const {
    bioId,
    name,
    email,
    role,
    birthDay,
    country,
    nik,
    phoneNumber,
    emergencyContactName,
    emergencyContactNumber,
  } = validatedFields.data;

  //   let userId: string;
  //   if (typeof bioId === "string") {
  //     userId = bioId;
  //   } else {
  //     throw new Error("Invalid userId");
  //   }

  //   const userWithBio = await getUserById(bioId);
  //   if (!userWithBio) {
  //     return { error: "User with bio is not available" };
  //   }
  //   let emailString: string;
  //   if (typeof email === "string") {
  //     emailString = email;
  //   } else {
  //     throw new Error("Invalid email");
  //   }
  //   const existingUser = await getUserByEmail(email);
  //   if (existingUser) {
  //     return { error: "Email already in use" };
  //   }
  const existingBioData = await db.biodata.findUnique({
    where: { id: bioId },
  });
  if (!existingBioData) {
    // await db.user.update({
    //   where: {
    //     email: email,
    //   },
    //   data: {
    //     biodata: {
    //       create: {
    //         birthDay,
    //         country,
    //         emergencyContactName,
    //         emergencyContactNumber,
    //         nik,
    //         phoneNumber,
    //       },
    //     },
    //   },
    // });
    throw new Error("BioData not found");
  }

  //   await db.biodata.update({
  //     where: { id: bioId },
  //     data: {
  //       emergencyContactName,
  //       birthDay,
  //       country,
  //       emergencyContactNumber,
  //       nik,
  //     },
  //   });

  await db.user.update({
    where: {
      email: email,
    },
    data: {
      name,
      role,
      biodata: {
        update: {
          where: {
            id: bioId, // add the id property here
          },
          data: {
            emergencyContactName,
            birthDay,
            country,
            emergencyContactNumber,
            nik,
            phoneNumber,
          },
        },
      },
    },
    //   create: {
    //     biodata: {
    //       create: {
    //         id: bioId, // and here
    //         emergencyContactName,
    //         birthDay,
    //         country,
    //         emergencyContactNumber,
    //         nik,
    //         phoneNumber,
    //       },
    //     },
    //   },
  });
  return { success: "Successfully created user" };
  //   await db.user.update({
  //     where: { id: userId },
  //     data: {
  //       name,
  //       email,
  //       biodata: {
  //         update: {
  //           where: {
  //             biodataId: userId,
  //           },
  //           data: {
  //             birthDay,
  //             phoneNumber,
  //             country,
  //             nik,
  //             emergencyContactName,
  //             emergencyContactNumber,
  //           },
  //         },
  //       },
  //     },
  //   });
};
