import CustomContainer from "@/components/CustomContainer";
import SignupForm from "@/components/auth/SignupForm";

const page = () => {
  return (
    <div className="bg-gradient-to-b from-primary to-sky-900">
      <CustomContainer className="flex flex-col justify-center items-center h-screen">
        <SignupForm />
      </CustomContainer>
    </div>
  );
};

export default page;
