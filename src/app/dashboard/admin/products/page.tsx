import { auth } from "@/auth";
import AllDestination from "@/components/admin/AllDestination";
import DashboardHeader from "@/components/admin/DashboardHeader";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  if (session?.user.role !== "ADMIN") return redirect("/");
  return (
    <>
      <DashboardHeader
        titlePage="Products Destination"
        btnName="Add New"
        btnUrl="/dashboard/admin/products/addnew"
      />

      <div className="py-4 px-4">
        <AllDestination />
      </div>
    </>
  );
};

export default page;
