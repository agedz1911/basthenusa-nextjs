import MyProfile from "@/components/profile/MyProfile";
import UpdateProfile from "@/components/profile/UpdateProfile";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const page = () => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-center mb-5">Profile</h1>
      <Separator />
      {/* @ts-expect-error Server Component */}
      <MyProfile /> 
      
        
      
    </div>
  );
};

export default page;
