import DashboardHeader from "@/components/admin/DashboardHeader";
import MyProfile from "@/components/profile/MyProfile";

import React from "react";

const page = () => {
  return (
    <>
      <DashboardHeader isHidden={true} titlePage="My Profile" btnUrl="#" />

      <div className="py-2 px-4">
        {/* @ts-expect-error Server Component */}
        <MyProfile />
      </div>
    </>
  );
};

export default page;
