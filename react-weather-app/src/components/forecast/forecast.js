import React from "react";
import { Accordion } from "react-accessible-accordion";

const Forecast = ({selectedForecast}) => {
  return (
    <>
      <label className="title"></label>
      <Accordion allowZeroExpanded></Accordion>
    </>
  );
};

export default Forecast;
