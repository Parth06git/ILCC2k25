import React from "react";
import Carousel from "./Carousel";

const Registration = () => {
  return (
    <>
      <Carousel img="bg6.jpg" />
      <hr />
      <div className="container py-5">
        <h1 className="text-center mb-4">Registration</h1>

        <ul
          className="nav nav-tabs justify-content-center mb-4"
          id="registrationTabs"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="details-tab"
              data-bs-toggle="tab"
              data-bs-target="#details"
              type="button"
              role="tab"
            >
              Details
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="fees-tab"
              data-bs-toggle="tab"
              data-bs-target="#fees"
              type="button"
              role="tab"
            >
              Fees
            </button>
          </li>
        </ul>

        <div className="tab-content" id="registrationTabsContent">
          {/* Details Tab */}
          <div
            className="tab-pane fade show active"
            id="details"
            role="tabpanel"
          >
            Parth Trivedi
          </div>

          {/* Fees Tab */}
          <div className="tab-pane fade" id="fees" role="tabpanel">
            Priyanshi Bajaj
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
