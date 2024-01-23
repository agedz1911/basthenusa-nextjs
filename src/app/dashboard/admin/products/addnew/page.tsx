import AddDestinationProduct from "@/components/admin/AddDestinationProduct";
import DashboardHeader from "@/components/admin/DashboardHeader";

const page = () => {
  return (
    <>
      <DashboardHeader
        isHidden={false}
        titlePage="Products Destination"
        btnName="Back"
        btnUrl="/dashboard/admin/products/"
      />

      <div className="py-4 px-8 border flex items-center flex-col">
        <AddDestinationProduct />
      </div>
    </>
  );
};

export default page;
