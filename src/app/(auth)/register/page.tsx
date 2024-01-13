import CustomContainer from "@/components/CustomContainer";
import RegisterForm from "@/components/auth/RegisterForm";

const page = () => {
  return (
    <div className="bg-gradient-to-b from-primary to-sky-900">
      <CustomContainer className="flex flex-col justify-center items-center h-screen">
        <RegisterForm />
      </CustomContainer>
    </div>
  );
};

export default page;
