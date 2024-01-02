import { LogIn, UserPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const AuthButton = () => {
  const router = useRouter();
  return (
    <>
      <Button onClick={() => router.push("/signup")} className="text-sm">
        <UserPlus className="size-4 mr-2" /> Sign up
      </Button>
      <Button onClick={() => router.push("/signin")} className="text-sm">
        <LogIn className="size-4 mr-2" /> Sign in
      </Button>
    </>
  );
};

export default AuthButton;
