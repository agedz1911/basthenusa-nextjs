import { auth } from "@/auth";
import DashboardHeader from "@/components/admin/DashboardHeader";
import EditUser from "@/components/admin/users/EditUser";
import { db } from "@/lib/db";
import { getUserById } from "@/lib/user";
import { ChevronLeft } from "lucide-react";
import { redirect } from "next/navigation";
import { FC } from "react";

interface EditUserProps {
  params: {
    slug: string;
  };
}

const page = async ({ params }: EditUserProps) => {
  // const data = await db.user.findFirstOrThrow({
  //   where: {
  //     id: params.slug,
  //   },
  //   include: {
  //     biodata: true,
  //   },
  // });
  const data = await getUserById(params.slug)
  //console.log(data);
  const biodata = data?.biodata[0];

  const session = await auth();
  if (session?.user.role !== "ADMIN") return redirect("/");
  return (
    <>
      <DashboardHeader
        isHidden={false}
        titlePage="Edit User"
        btnName="Back"
        btnUrl="/dashboard/admin/users"
        icon={<ChevronLeft className="size-4 mr-1" />}
      />
      <div className="py-4 px-8 border flex items-center flex-col">
        <EditUser
          id={data?.id}
          biodataId={biodata?.id}
          name={data?.name}
          email={data?.email}
          image={data?.image}
          //password={data?.password}
          role={data?.role}
          birthDay={biodata?.birthDay}
          country={biodata?.country}
          phoneNumber={biodata?.phoneNumber}
          nik={biodata?.nik}
          emergencyContactName={biodata?.emergencyContactName}
          emergencyContactNumber={biodata?.emergencyContactNumber}
        />
      </div>
    </>
  );
};

export default page;
