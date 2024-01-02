import CustomContainer from "@/components/CustomContainer";
import { Button } from "@/components/ui/button";
import { Home, ListTodo, LogOut, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:px-10 px-2">
      <div className="flex items-center py-3 justify-between sticky bg-background border-b top-0">
        <div className="relative h-10 w-10">
          <Link href="/">
            <Image src="/logo.png" alt="logo" fill />
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/">
            <Home className="size-5 hover:text-secondary" />
          </Link>
          <p>/</p>
          <h1 className="underline font-semibold text-sm">Dashboard</h1>
        </div>
      </div>
      <main className="flex flex-col md:flex-row py-5 px-1">
        <div className="md:w-1/3 w-full lg:w-1/4 flex-col flex px-1">
          <div className="w-full rounded-md border shadow my-2 ">
            <div className="aspect-video rounded">
              <Image
                src="/images/destination/alor.jpg"
                alt="profile"
                width={200}
                height={100}
                className="object-cover rounded-md h-full w-full"
              />
            </div>
            <div className="px-2 py-4 ">
              <h1 className="text-sm font-semibold">Name</h1>
              <p className="text-xs">Email</p>
            </div>
          </div>
          <div className="border my-2 rounded-md shadow flex-col flex">
            <Link href="/dashboard/1">
              <Button variant={"link"}>
                <Home className="mr-2 h-4 w-4" /> Home
              </Button>
            </Link>
            <Link href={`1/mybooking`}>
              <Button variant={"link"}>
                <ListTodo className="mr-2 h-4 w-4" />
                My Booking
              </Button>
            </Link>
            <Link href="#">
              <Button variant={"link"}>
                <User className="mr-2 h-4 w-4" /> Profile
              </Button>
            </Link>
            <Link href="#">
              <Button variant={"link"}>
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full  mx-2 my-3">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
