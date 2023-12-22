import CustomContainer from "@/components/CustomContainer";
import { cn } from "@/lib/utils";
import { Courgette } from "next/font/google";

const courgette = Courgette({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <CustomContainer>
      <h1>Tes</h1>
      <p className={cn("text-center fw-bold ", courgette.className)}>Nusa Kembara</p>
    </CustomContainer>
  );
}
