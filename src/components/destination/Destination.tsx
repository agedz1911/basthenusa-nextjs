import CustomContainer from "../CustomContainer";
import CardDestination from "./CardDestination";

const Destination = () => {
  return (
    <section className="w-full py-10">
      <CustomContainer>
        <div id="destination" className="pt-20 ">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-3xl lg:text-4xl font-semibold underline">
              Destination
            </h1>
            <h2 className="text-lg text-muted-foreground font-semibold">
              Discover The True Paradise
            </h2>
          </div>
          <CardDestination />
        </div>
      </CustomContainer>
    </section>
  );
};

export default Destination;
