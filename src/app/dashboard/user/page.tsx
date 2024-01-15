import { auth } from "@/auth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const page = async () => {
  const session = await auth();

  return (
    <div>
      <p>{session?.user.role}</p>
      <p>{session?.user.name}</p>
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Update Profile</TabsTrigger>
          <TabsTrigger value="password">Update Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Component update account</TabsContent>
        <TabsContent value="password">Component update password</TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
