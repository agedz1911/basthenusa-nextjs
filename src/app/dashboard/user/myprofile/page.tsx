import CustomContainer from "@/components/CustomContainer";
import UpdatePassword from "@/components/profile/UpdatePassword";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const page = () => {
  return (
    <CustomContainer className="flex items-center justify-center">
      <Tabs defaultValue="account" className="w-full max-w-md">
        <TabsList className="w-full flex justify-evenly">
          <TabsTrigger className="w-full" value="account">
            Update Profile
          </TabsTrigger>
          <TabsTrigger className="w-full" value="password">
            Update Password
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">Component update account</TabsContent>
        <TabsContent value="password"><UpdatePassword /></TabsContent>
      </Tabs>
    </CustomContainer>
  );
};

export default page;
