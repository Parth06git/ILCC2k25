import React from "react";
import Carousel from "./Carousel";
import Patrons from "./components/Patrons";
import NOC from "./components/NOC";
import LOC from "./components/LOC";

const Organizers = () => {
  return (
    <>
      <Carousel img="bg3.jpeg" />
      <hr />
      <div className="container py-5">
        <h1 className="text-center mb-4 org">Our Organizers</h1>

        <ul
          className="nav nav-tabs justify-content-center mb-4"
          id="organizersTabs"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="patrons-tab"
              data-bs-toggle="tab"
              data-bs-target="#patrons"
              type="button"
              role="tab"
            >
              Patrons
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="noc-tab"
              data-bs-toggle="tab"
              data-bs-target="#noc"
              type="button"
              role="tab"
            >
              National Organising Committee
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="loc-tab"
              data-bs-toggle="tab"
              data-bs-target="#loc"
              type="button"
              role="tab"
            >
              Local Organising Committee
            </button>
          </li>
        </ul>

        <div className="tab-content" id="organizersTabsContent">
          {/* Patrons Tab */}
          <div
            className="tab-pane fade show active"
            id="patrons"
            role="tabpanel"
          >
            <Patrons />
          </div>

          {/* Paper Submission Tab */}
          <div className="tab-pane fade" id="noc" role="tabpanel">
            <NOC />
          </div>

          {/* Poster Submission Tab */}
          <div className="tab-pane fade" id="loc" role="tabpanel">
            <LOC />
          </div>
        </div>
      </div>
    </>
  );
};

export default Organizers;
