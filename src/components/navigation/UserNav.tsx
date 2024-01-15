import { auth, signIn, signOut } from "@/auth";
import { LogIn, UserPlus } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const UserNav = async ({ className }: { className: React.ReactNode }) => {
  const session = await auth();

  if (!session?.user)
    return (
      <div className={`flex-col ${className}`}>
        <Link href="/register" className="w-full">
          <Button className="text-sm w-full">
            <UserPlus className="size-4 mr-2" /> Register
          </Button>
        </Link>

        <form
          className="w-full"
          action={async () => {
            "use server";
            await signIn();
          }}
        >
          <Button className="text-sm w-full">
            <LogIn className="size-4 mr-2" /> Login
          </Button>
        </form>
      </div>
    );

  return (
    <div className={`flex-col  ${className}`}>
      <Link
        href={`/dashboard/${session.user.role === "ADMIN" ? "admin" : "user"}`}
      >
        <div className="flex items-center space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Avatar className="w-10 h-10 ">
                  {session.user.image !== null ? (
                    <AvatarImage
                      src={session.user.image}
                      alt={session.user.name ?? ""}
                    />
                  ) : (
                    <AvatarImage
                      src={`https://ui-avatars.com/api/?name=${session.user.name}`}
                      alt={session.user.name ?? ""}
                    />
                  )}
                  <AvatarFallback>{session.user.email}</AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm text-muted-foreground">Go to Dashboard</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div className="flex flex-col space-y-1 lg:hidden">
            <p className="text-sm font-medium leading-none">
              {session.user.name}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {session.user.email}
            </p>
          </div>
        </div>
      </Link>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button className="text-sm w-full" variant={"default"}>
          <LogIn className="size-4 mr-2" />
          Sign out
        </Button>
      </form>
    </div>
  );
};

export default UserNav;

{
  /* <DropdownMenu>
      <DropdownMenuTrigger asChild className={`flex-col ${className}`}>
        <Button variant="default" className="relative w-9 h-9 rounded-full">
          <Avatar className="w-10 h-10 ">
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
    </DropdownMenu> */
}
