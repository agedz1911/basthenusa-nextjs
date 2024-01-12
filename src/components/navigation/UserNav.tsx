import React from "react";
import { Button } from "../ui/button";
import { LogIn, UserPlus } from "lucide-react";
import { auth, signIn, signOut } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const UserNav = async () => {
  const session = await auth();
  if (!session?.user)
    return (
      <div className="hidden lg:space-x-2 lg:flex">
        <Button className="text-sm">
          <UserPlus className="size-4 mr-2" /> Sign up
        </Button>
        <form
          action={async () => {
            "use server";
            await signIn();
          }}
        >
          <Button className="text-sm">
            <LogIn className="size-4 mr-2" /> Sign in
          </Button>
        </form>
      </div>
    );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="hidden lg:flex">
        <Button variant="ghost" className="relative w-9 h-9 rounded-full">
          <Avatar className="w-10 h-10">
            {session.user.image && (
              <AvatarImage
                src={session.user.image}
                alt={session.user.name ?? ""}
              />
            )}
            <AvatarFallback>{session.user.email}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {session.user.name}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {session.user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuItem>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button className="text-sm" variant={"ghost"}>
              <LogIn className="size-4 mr-2" /> Sign out
            </Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNav;
