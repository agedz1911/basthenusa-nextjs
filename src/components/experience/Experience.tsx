import CustomContainer from "../CustomContainer";
import CardExperience from "./CardExperience";

const Experience = () => {
  return (
    <section className="w-full py-10">
      <CustomContainer className="pb-20">
        <div id="experience" className="pt-20 px-2">
          <div className="flex flex-col items-center space-y-4 mb-10 md:mb-15 lg:mb-20">
            <h1 className="text-3xl lg:text-4xl font-semibold underline">
              Experience
            </h1>
          </div>
          <CardExperience />
        </div>
      </CustomContainer>
    </section>
  );
};

export default Experience;
