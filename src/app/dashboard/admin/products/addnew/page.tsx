import BackButton from "@/components/BackButton";
import AddDestinationProduct from "@/components/admin/AddDestinationProduct";
import { Separator } from "@/components/ui/separator";

const page = () => {
  return (
    <div className="mx-auto flex flex-col w-full">
      <div className="relative">
        <h1 className="text-center text-2xl font-bold mb-5">
          Products Destination
        </h1>

        <BackButton />
      </div>
      <Separator className="mt-2" />
      <div className="py-4 px-8 border flex items-center flex-col">
        <AddDestinationProduct />
      </div>
    </div>
  );
};

export default page;
