import CustomContainer from "@/components/CustomContainer";
import SigninForm from "@/components/auth/SigninForm";

const page = () => {
  return (
    <div className="bg-gradient-to-b from-primary to-sky-900">
      <CustomContainer className="flex flex-col justify-center items-center h-screen">
        <SigninForm />
      </CustomContainer>
    </div>
  );
};

export default page;
