import { auth } from "@/auth";
import DashboardHeader from "@/components/admin/DashboardHeader";
import AddUser from "@/components/admin/users/AddUser";
import { ChevronLeft } from "lucide-react";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  if (session?.user.role !== "ADMIN") return redirect("/");
  
  return (
    <>
      <DashboardHeader
        isHidden={false}
        titlePage="Add New User"
        btnName="Back"
        btnUrl="/dashboard/admin/users"
        icon={<ChevronLeft className="size-4 mr-1" />}
      />

      <div className="py-4 px-8 border flex items-center flex-col">
        <AddUser />
      </div>
    </>
  );
};

export default page;
