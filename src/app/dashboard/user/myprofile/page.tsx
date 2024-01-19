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
      <MyProfile /> 
      <div className="flex flex-col lg:flex-row px-5">
        <div className="w-full space-y-3 py-4">
          <div className="grid w-full max-w-md items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" placeholder="name" />
          </div>
          <div className="grid w-full max-w-md items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="flex justify-around items-center">
            <div className="w-20 h-20 border">
              <div className="bg-gray-400 w-full h-full"></div>
            </div>
            <p>Change Image</p>
          </div>
        </div>
        <UpdateProfile />
      </div>
    </div>
  );
};

export default page;
