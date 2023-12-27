import CustomContainer from "../CustomContainer";

const Destination = () => {
  return (
    <section className="w-full py-10">
      <CustomContainer className="pb-20">
        <div id="destination" className="pt-20 ">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-3xl lg:text-4xl font-semibold underline">
              Destination
            </h1>
            <h2 className="text-lg text-muted-foreground font-semibold">
              Discover The True Paradise
            </h2>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Destination;
