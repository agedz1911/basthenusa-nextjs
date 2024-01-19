import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      size={"sm"}
      className="w-[100px] md:absolute md:top-0 md:left-1 ml-2"
    >
      <ChevronLeft className="size-4 mr-1" /> Back
    </Button>
  );
};

export default BackButton;
