import { auth } from "@/auth";
import DashboardMenu from "@/components/DashboardMenu";
import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  return (
    <div className="md:px-10 px-2">
      <div className="flex items-center py-3 justify-between sticky bg-background z-50 border-b top-0">
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
      <main className="flex flex-col md:flex-row py-0 px-1">
        <div className="md:w-1/3 w-full lg:w-[300px] flex-col flex px-1">
          <div className="w-full rounded-md border shadow my-2 mt-16">
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
          <DashboardMenu />
        </div>
        <div className="border w-full my-2 mx-3 rounded-md shadow-sm">
          <div className="mt-8">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
