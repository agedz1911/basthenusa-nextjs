import { auth, signOut } from "@/auth";
import CustomContainer from "@/components/CustomContainer";
import { Button } from "@/components/ui/button";
import { Home, ListTodo, LogOut, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashboardLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { userId: string };
}) => {
  const session = await auth();
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
              {session?.user.image !== null ? (
                <Image
                  width={200}
                  height={100}
                  className="object-cover rounded-md h-full w-full"
                  src={session?.user.image!}
                  alt={session?.user.name ?? ""}
                />
              ) : (
                <Image
                  src={`https://ui-avatars.com/api/?name=${session.user.name}`}
                  alt={session.user.name ?? ""}
                  width={200}
                  height={100}
                  className="object-cover rounded-md h-full w-full"
                />
              )}
            </div>
            <div className="px-2 py-4 ">
              <h1 className="text-sm font-semibold">{session?.user.name}</h1>
              <p className="text-xs">{session?.user.email}</p>
            </div>
          </div>
          <div className="border my-2 rounded-md shadow flex-col flex">
            <Link
              href={`/dashboard/${
                session?.user.role === "ADMIN" ? "admin" : "user"
              }`}
            >
              <Button variant={"link"}>
                <Home className="mr-2 h-4 w-4" /> Home
              </Button>
            </Link>
            <Link
              href={`/dashboard/user/mybooking`}
            >
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
        </div>
        <div className="w-full  mx-2 my-3">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
