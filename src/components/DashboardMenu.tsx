import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { BedDouble, Home, ListTodo, LogOut, MapPin, User, UserPlus } from "lucide-react";
import { auth, signOut } from "@/auth";

const DashboardMenu = async () => {
  const session = await auth();
  if (session?.user.role === "ADMIN")
    return (
      <div className="border my-2 rounded-md shadow flex-col flex">
        <Link href={`/dashboard/admin`}>
          <Button variant={"link"}>
            <Home className="mr-2 h-4 w-4" /> Home
          </Button>
        </Link>
        <Link href={`/dashboard/admin/reservation`}>
          <Button variant={"link"}>
            <BedDouble className="mr-2 h-4 w-4" />
            Reservation
          </Button>
        </Link>
        <Link href={`/dashboard/admin/products`}>
          <Button variant={"link"}>
            <MapPin  className="mr-2 h-4 w-4" />
            Destination
          </Button>
        </Link>
        <Link href={`/dashboard/admin/users`}>
          <Button variant={"link"}>
            <UserPlus className="mr-2 h-4 w-4" />
            Users
          </Button>
        </Link>
        <Link href={`/dashboard/admin/myprofile`}>
          <Button variant={"link"}>
            <User className="mr-2 h-4 w-4" /> Profile
          </Button>
        </Link>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button className="text-sm w-full" variant={"link"}>
            <LogOut className="size-4 mr-2" />
            Log out
          </Button>
        </form>
      </div>
    );

  return (
    <div className="border my-2 rounded-md shadow flex-col flex">
      <Link href={`/dashboard/user`}>
        <Button variant={"link"}>
          <Home className="mr-2 h-4 w-4" /> Home
        </Button>
      </Link>
      <Link href={`/dashboard/user/mybooking`}>
        <Button variant={"link"}>
          <ListTodo className="mr-2 h-4 w-4" />
          My Booking
        </Button>
      </Link>
      <Link href={`/dashboard/user/myprofile`}>
        <Button variant={"link"}>
          <User className="mr-2 h-4 w-4" /> Profile
        </Button>
      </Link>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button className="text-sm w-full" variant={"link"}>
          <LogOut className="size-4 mr-2" />
          Log out
        </Button>
      </form>
    </div>
  );
};

export default DashboardMenu;
