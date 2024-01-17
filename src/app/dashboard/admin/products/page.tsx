import { auth } from "@/auth";
import AllDestination from "@/components/admin/AllDestination";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  if (session?.user.role !== "ADMIN") return redirect("/");
  return (
    <div className="mx-auto flex flex-col w-full">
      <div className="relative">
        <h1 className="text-center text-2xl font-bold mb-5">
          Products Destination
        </h1>
        <Link href="/dashboard/admin/products/addnew">
          <Button
            size={"sm"}
            className="w-[100px] md:absolute md:top-0 md:left-1 ml-2"
          >
            <Plus className="size-4" /> Add New{" "}
          </Button>
        </Link>
      </div>
      <Separator className="mt-2" />
      <div className="py-4 px-4">
        <AllDestination />
      </div>
    </div>
  );
};

export default page;
