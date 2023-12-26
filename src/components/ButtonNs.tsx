import { Button } from "./ui/button";

interface buttonProps {
  label: string;
  desc: string;
  icon: any;
}


const ButtonNs: React.FC<buttonProps> = ({ label, desc, icon }) => {
  return (
    <Button
      variant={"ghost"}
      className="border text-white py-7 md:py-9 md:px-7 gap-3"
    >
      <div>
        <p>{icon}</p>
      </div>
      <div className="flex flex-col">
        <p className="text-xs md:text-sm">{label}</p>
        <h1 className="font-semibold text-sm md:text-lg">{desc}</h1>
      </div>
    </Button>
  );
};

export default ButtonNs;
