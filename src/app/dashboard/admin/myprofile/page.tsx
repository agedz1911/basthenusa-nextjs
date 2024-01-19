import DashboardHeader from "@/components/admin/DashboardHeader";
import MyProfile from "@/components/profile/MyProfile";
import React from "react";

const page = () => {
  return (
    <>
      <DashboardHeader titlePage="My Profile" btnUrl="#" />

      <div className="py-2 px-4">
        <MyProfile />
      </div>
    </>
  );
};

export default page;
