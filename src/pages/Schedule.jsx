import React from "react";
import Carousel from "./Carousel";
import { CalendarDays } from "lucide-react";

const Schedule = () => {
  return (
    <>
      <Carousel img="bg4.png" />
      <hr />
      <div className="container py-5">
        <h1 className="text-center mb-4">Schedule</h1>
        <div className="container text-center my-4 p-1">
          <h2 className="text-2xl font-bold text-center mt-2 mb-4">
            <CalendarDays className="text-primary" size={30} />
            {"   "}Important Dates <hr className="brW" />
          </h2>
          <div className="row">
            <div className="col-md-4">
              <div className="dates">
                <hr className="brMB" />
                <h4>Workshop Day</h4>
                <hr className="brW" />
                <p>
                  <b>30th November 2025</b>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="dates">
                <hr className="brMB" />
                <h4>Industry Day</h4>
                <hr className="brW" />
                <p>
                  <b>1st Decemebr 2025</b>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="dates">
                <hr className="brMB" />
                <h4>Conference Days</h4>
                <hr className="brW" />
                <p>
                  <b>2nd-3rd December 2025</b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <h5 className="text-center text-danger">
          Further details to be Updated ...
        </h5>
      </div>
    </>
  );
};

export default Schedule;
