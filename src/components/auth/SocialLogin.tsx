"use client";

import { signIn } from "next-auth/react";
import { Github } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

const SocialLogin = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, { callbackUrl: "http://localhost:3000" });
  };

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        onClick={() => onClick("github")}
        size="lg"
        className="w-full"
        variant={"outline"}
      >
        <Github className="h-5 w-5" />
      </Button>
      <Button
        onClick={() => onClick("google")}
        size="lg"
        className="w-full"
        variant={"outline"}
      >
        <Image src="/images/google.svg" width={32} height={32} alt="google" />
      </Button>
    </div>
  );
};

export default SocialLogin;
