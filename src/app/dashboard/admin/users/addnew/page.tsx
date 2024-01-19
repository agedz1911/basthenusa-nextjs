import AddUser from "@/components/admin/AddUser";
import DashboardHeader from "@/components/admin/DashboardHeader";
import React from "react";

const page = () => {
  return (
    <>
      <DashboardHeader
        titlePage="Add New User"
        btnName="Back"
        btnUrl="/dashboard/admin/users"
      />

      <div className="py-4 px-8 border flex items-center flex-col">
        <AddUser />
      </div>
    </>
  );
};

export default page;
