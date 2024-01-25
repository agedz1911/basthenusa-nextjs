import { auth } from "@/auth";
import AllUsers from "@/components/admin/users/AllUsers";
import DashboardHeader from "@/components/admin/DashboardHeader";
import { Plus } from "lucide-react";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  if (session?.user.role !== "ADMIN") return redirect("/");
  return (
    <>
      <DashboardHeader
        isHidden={false}
        btnName="Add New"
        btnUrl="/dashboard/admin/users/addnew"
        titlePage="Users"
        icon={<Plus className="mr-1"/>}
      />

      <div className="py-2 px-4">
        <AllUsers />
      </div>
    </>
  );
};

export default page;
