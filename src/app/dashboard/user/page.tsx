import { auth } from "@/auth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const page = async () => {
  const session = await auth();

  return (
    <div>
      <p>{session?.user.role}</p>
      <p>{session?.user.name}</p>
    </div>
  );
};

export default page;
