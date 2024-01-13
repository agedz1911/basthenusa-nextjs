import CustomContainer from "@/components/CustomContainer";
import LoginForm from "@/components/auth/LoginForm";

const page = () => {
  return (
    <div className="bg-gradient-to-b from-primary to-sky-900">
      <CustomContainer className="flex flex-col justify-center items-center h-screen">
        <LoginForm />
      </CustomContainer>
    </div>
  );
};

export default page;
