import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

interface dashboardProps {
  titlePage: string;
  btnName?: string;
  btnUrl: string;
  isHidden: boolean;
  icon?: any;
}

const DashboardHeader = ({
  titlePage,
  btnUrl,
  btnName,
  isHidden,
  icon
}: dashboardProps) => {
  return (
    <div className="mx-auto flex flex-col w-full">
      <div className="relative">
        <h1 className="text-center text-2xl font-bold mb-5">{titlePage}</h1>
        {isHidden ? null : (
          <Link href={btnUrl}>
            <Button
              size={"sm"}
              className="w-[100px] md:absolute md:top-0 md:left-1 ml-2"
            >
              {icon}{btnName}
            </Button>
          </Link>
        )}
      </div>
      <Separator className="mt-2" />
    </div>
  );
};

export default DashboardHeader;
