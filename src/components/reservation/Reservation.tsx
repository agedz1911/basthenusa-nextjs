import React from "react";
import CustomContainer from "../CustomContainer";
import CardReservation from "./CardReservation";

const Reservation = () => {
  return (
    <section className="w-full py-10">
      <CustomContainer>
        <div id="reservation" className="pt-20 mb-10">
          <h1 className="text-3xl lg:text-4xl text-center font-semibold underline">
            Reservation
          </h1>
        </div>
        <CardReservation />
      </CustomContainer>
    </section>
  );
};

export default Reservation;
