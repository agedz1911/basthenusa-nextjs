import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

interface dashboardProps {
  titlePage: string;
  btnName?: string;
  btnUrl: string;
}

const DashboardHeader = ({ titlePage, btnUrl, btnName }: dashboardProps) => {
  return (
    <div className="mx-auto flex flex-col w-full">
      <div className="relative">
        <h1 className="text-center text-2xl font-bold mb-5">{titlePage}</h1>
        <Link href={btnUrl}>
          <Button
            size={"sm"}
            className="w-[100px] md:absolute md:top-0 md:left-1 ml-2"
          >
            {btnName}
          </Button>
        </Link>
      </div>
      <Separator className="mt-2" />
    </div>
  );
};

export default DashboardHeader;
