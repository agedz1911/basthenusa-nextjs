import { auth } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  if (session?.user.role !== "ADMIN") return redirect("/");

  return (
    <div>
      Admin
      {/* {JSON.stringify(session)} */}
    </div>
  );
};

export default page;
