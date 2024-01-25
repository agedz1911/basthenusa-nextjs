"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const DeleteButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.refresh()}
      className="w-full"
      variant={"destructive"}
    >
      Yes
    </Button>
  );
};

export default DeleteButton;
