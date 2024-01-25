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
    include: {
      biodata: true,
    },
  });
  return data;
};

const MyProfile = async () => {
  const session = await auth();
  const data = await getData(session?.user.email as string);
  console.log(data);
  
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
    </>
  );
};

export default MyProfile;
