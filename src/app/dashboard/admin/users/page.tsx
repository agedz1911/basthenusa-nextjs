import { auth } from "@/auth";
import AllUsers from "@/components/admin/AllUsers";
import DashboardHeader from "@/components/admin/DashboardHeader";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  if (session?.user.role !== "ADMIN") return redirect("/");
  return (
    <>
      <DashboardHeader
        btnName="Add New"
        btnUrl="/dashboard/admin/users/addnew"
        titlePage="Users"
      />

      <div className="py-2 px-4">
        <AllUsers />
      </div>
    </>
  );
};

export default page;
