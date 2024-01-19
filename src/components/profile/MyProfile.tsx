import { auth } from "@/auth";
import { db } from "@/lib/db";
import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const getData = async (email: string) => {
  const data = await db.user.findUnique({
    where: { email },
    select: {
      id: true,
      email: true,
      image: true,
      password: true,
      name: true,
    },
  });
  return data;
};

const MyProfile = async () => {
  const session = await auth();
  const data = await getData(session?.user.email as string);
  return (
    <>
      <div className="w-full max-w-lg rounded-md shadow border mx-auto py-5">
        <div className="flex flex-row items-center justify-center gap-3">
          {data?.image !== null ? (
            <Avatar className="w-20 h-20">
              {" "}
              <AvatarImage src={data?.image} />
            </Avatar>
          ) : (
            <Avatar>
              {" "}
              <AvatarImage
                src={`https://ui-avatars.com/api/?name=${data.name}`}
              />
            </Avatar>
          )}
          <div className="flex flex-col">
            <h1 className="text-xl">{data?.name}</h1>
            <p className="text-xs text-muted-foreground">{data?.email}</p>
          </div>
        </div>
      </div>
      <div className="py-8 gap-4 flex flex-col items-center">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input disabled type="email" id="email" placeholder="Email" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" placeholder="Name" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="*****" />
        </div>
        <Button className="w-full max-w-sm">Update</Button>
      </div>
    </>
  );
};

export default MyProfile;
